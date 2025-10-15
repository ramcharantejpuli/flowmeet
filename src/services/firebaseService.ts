import { db, auth } from '../lib/firebase';
import { 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  getDoc, 
  query, 
  where, 
  getDocs,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';

export interface OrganizationData {
  organizationName: string;
  yourName: string;
  yourRole: string;
  companyEmail: string;
  phoneNumber: string;
  personalEmail: string;
  authMethod?: string;
  createdAt?: any;
  status: 'pending' | 'approved' | 'rejected';
  adminApproved: boolean;
}

export interface AdminUser {
  email: string;
  role: 'admin' | 'super_admin';
  organizationId?: string;
  createdAt?: any;
}

class FirebaseService {
  // Check if email is a company email (not personal email providers)
  isCompanyEmail(email: string): boolean {
    const personalEmailProviders = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'aol.com',
      'icloud.com',
      'mail.com',
      'protonmail.com',
      'zoho.com'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    return !personalEmailProviders.includes(domain);
  }

  // Save organization signup data
  async saveOrganizationSignup(data: Omit<OrganizationData, 'createdAt' | 'status' | 'adminApproved'>): Promise<string> {
    try {
      // Validate company email
      if (!this.isCompanyEmail(data.companyEmail)) {
        throw new Error('Please use a company email address. Personal email providers are not allowed.');
      }

      // Check if organization already exists
      const orgQuery = query(
        collection(db, 'organizations'),
        where('companyEmail', '==', data.companyEmail)
      );
      const existingOrgs = await getDocs(orgQuery);
      
      if (!existingOrgs.empty) {
        throw new Error('An organization with this email already exists.');
      }

      // Save organization data
      const organizationData: OrganizationData = {
        ...data,
        createdAt: serverTimestamp(),
        status: 'pending',
        adminApproved: false
      };

      const docRef = await addDoc(collection(db, 'organizations'), organizationData);
      
      return docRef.id;
    } catch (error: any) {
      console.error('Error saving organization:', error);
      throw error;
    }
  }

  // Create admin user (only for approved organizations)
  async createAdminUser(email: string, password: string, organizationId: string): Promise<void> {
    try {
      // Check if organization is approved
      const orgDoc = await getDoc(doc(db, 'organizations', organizationId));
      if (!orgDoc.exists() || !orgDoc.data().adminApproved) {
        throw new Error('Organization not approved yet. Please wait for admin approval.');
      }

      // Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save admin user data
      const adminData: AdminUser = {
        email: email,
        role: 'admin',
        organizationId: organizationId,
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, 'admins', user.uid), adminData);
    } catch (error: any) {
      console.error('Error creating admin user:', error);
      throw error;
    }
  }

  // Admin login
  async adminLogin(email: string, password: string): Promise<any> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if user is an admin
      const adminDoc = await getDoc(doc(db, 'admins', user.uid));
      if (!adminDoc.exists()) {
        await signOut(auth);
        throw new Error('Access denied. Admin credentials required.');
      }

      return {
        user: user,
        adminData: adminDoc.data()
      };
    } catch (error: any) {
      console.error('Error during admin login:', error);
      throw error;
    }
  }

  // Get organization by ID
  async getOrganization(organizationId: string): Promise<OrganizationData | null> {
    try {
      const orgDoc = await getDoc(doc(db, 'organizations', organizationId));
      if (orgDoc.exists()) {
        return { ...orgDoc.data() as OrganizationData };
      }
      return null;
    } catch (error: any) {
      console.error('Error getting organization:', error);
      throw error;
    }
  }

  // Get all pending organizations (for admin approval)
  async getPendingOrganizations(): Promise<(OrganizationData & { id: string })[]> {
    try {
      const q = query(
        collection(db, 'organizations'),
        where('status', '==', 'pending')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as OrganizationData
      }));
    } catch (error: any) {
      console.error('Error getting pending organizations:', error);
      throw error;
    }
  }

  // Approve organization
  async approveOrganization(organizationId: string): Promise<void> {
    try {
      await setDoc(doc(db, 'organizations', organizationId), {
        status: 'approved',
        adminApproved: true,
        approvedAt: serverTimestamp()
      }, { merge: true });
    } catch (error: any) {
      console.error('Error approving organization:', error);
      throw error;
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();
export default firebaseService;
