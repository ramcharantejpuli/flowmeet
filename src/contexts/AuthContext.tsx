import React, { createContext, useContext, useState } from 'react';

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  phoneNumber?: string;
  isNewUser?: boolean;
  signupMethod?: 'email' | 'google' | 'github' | 'microsoft';
  createdAt: Date;
  lastLoginAt: Date;
}

interface AuthContextType {
  currentUser: UserProfile | null;
  userProfile: UserProfile | null;
  login: (email: string, password: string) => Promise<{ isNewUser: boolean }>;
  signup: (email: string, password: string) => Promise<void>;
  signupWithGoogle: () => Promise<{ isNewUser: boolean }>;
  signupWithGithub: () => Promise<{ isNewUser: boolean }>;
  signupWithMicrosoft: () => Promise<{ isNewUser: boolean }>;
  loginWithGoogle: () => Promise<{ isNewUser: boolean }>;
  loginWithGithub: () => Promise<{ isNewUser: boolean }>;
  loginWithMicrosoft: () => Promise<{ isNewUser: boolean }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  sendEmailOTP: (email: string) => Promise<{ success: boolean; otpId: string }>;
  sendPhoneOTP: (phoneNumber: string) => Promise<{ success: boolean; otpId: string }>;
  verifyOTP: (otpId: string, code: string, type: 'email' | 'phone') => Promise<{ success: boolean }>;
  resendOTP: (otpId: string, type: 'email' | 'phone') => Promise<{ success: boolean; newOtpId: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Mock authentication functions - replace with your new Firebase implementation later
  const login = async (email: string, password: string): Promise<{ isNewUser: boolean }> => {
    // Mock login - replace with actual Firebase auth
    console.log('Mock login:', email, password);
    const mockUser: UserProfile = {
      uid: 'mock-uid-' + Date.now(),
      email,
      displayName: email.split('@')[0],
      photoURL: '',
      signupMethod: 'email',
      createdAt: new Date(),
      lastLoginAt: new Date()
    };
    setCurrentUser(mockUser);
    setUserProfile(mockUser);
    return { isNewUser: false };
  };

  const signup = async (email: string, password: string): Promise<void> => {
    // Mock signup - replace with actual Firebase auth
    console.log('Mock signup:', email, password);
    const mockUser: UserProfile = {
      uid: 'mock-uid-' + Date.now(),
      email,
      displayName: email.split('@')[0],
      photoURL: '',
      signupMethod: 'email',
      isNewUser: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    };
    setCurrentUser(mockUser);
    setUserProfile(mockUser);
  };

  const signupWithGoogle = async (): Promise<{ isNewUser: boolean }> => {
    console.log('Mock Google signup');
    return { isNewUser: true };
  };

  const signupWithGithub = async (): Promise<{ isNewUser: boolean }> => {
    console.log('Mock GitHub signup');
    return { isNewUser: true };
  };

  const signupWithMicrosoft = async (): Promise<{ isNewUser: boolean }> => {
    console.log('Mock Microsoft signup');
    return { isNewUser: true };
  };

  const loginWithGoogle = async (): Promise<{ isNewUser: boolean }> => {
    console.log('Mock Google login');
    return { isNewUser: false };
  };

  const loginWithGithub = async (): Promise<{ isNewUser: boolean }> => {
    console.log('Mock GitHub login');
    return { isNewUser: false };
  };

  const loginWithMicrosoft = async (): Promise<{ isNewUser: boolean }> => {
    console.log('Mock Microsoft login');
    return { isNewUser: false };
  };

  const logout = async (): Promise<void> => {
    console.log('Mock logout');
    setCurrentUser(null);
    setUserProfile(null);
  };

  const resetPassword = async (email: string): Promise<void> => {
    console.log('Mock password reset for:', email);
  };

  const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
    console.log('Mock profile update:', data);
    if (currentUser) {
      const updatedUser = { ...currentUser, ...data };
      setCurrentUser(updatedUser);
      setUserProfile(updatedUser);
    }
  };

  const sendEmailOTP = async (email: string): Promise<{ success: boolean; otpId: string }> => {
    console.log('Mock email OTP sent to:', email);
    const otpCode = '123456'; // Mock OTP
    console.log('Mock OTP code:', otpCode);
    return { success: true, otpId: 'mock-email-otp-' + Date.now() };
  };

  const sendPhoneOTP = async (phoneNumber: string): Promise<{ success: boolean; otpId: string }> => {
    console.log('Mock phone OTP sent to:', phoneNumber);
    const otpCode = '123456'; // Mock OTP
    console.log('Mock OTP code:', otpCode);
    return { success: true, otpId: 'mock-phone-otp-' + Date.now() };
  };

  const verifyOTP = async (otpId: string, code: string, type: 'email' | 'phone'): Promise<{ success: boolean }> => {
    console.log('Mock OTP verification:', { otpId, code, type });
    // Mock verification - accept '123456' as valid OTP
    return { success: code === '123456' };
  };

  const resendOTP = async (otpId: string, type: 'email' | 'phone'): Promise<{ success: boolean; newOtpId: string }> => {
    console.log('Mock OTP resend:', { otpId, type });
    return { success: true, newOtpId: 'mock-resend-otp-' + Date.now() };
  };

  const value: AuthContextType = {
    currentUser,
    userProfile,
    login,
    signup,
    signupWithGoogle,
    signupWithGithub,
    signupWithMicrosoft,
    loginWithGoogle,
    loginWithGithub,
    loginWithMicrosoft,
    logout,
    resetPassword,
    updateUserProfile,
    sendEmailOTP,
    sendPhoneOTP,
    verifyOTP,
    resendOTP
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
