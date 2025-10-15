import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import firebaseService from "../services/firebaseService";

type SignupStep = 'organization_check' | 'organization_details' | 'password_setup' | 'auth_setup' | 'verification' | 'welcome';
type AuthMethod = 'google' | 'microsoft' | 'none';

const Signup = () => {
  const navigate = useNavigate();
  const { signup, signupWithGoogle, signupWithMicrosoft } = useAuth();
  const [step, setStep] = useState<SignupStep>('organization_check');
  const [isOrganization, setIsOrganization] = useState<boolean | null>(null);
  const [selectedAuthMethod, setSelectedAuthMethod] = useState<AuthMethod>('none');
  const [formData, setFormData] = useState({
    organizationName: '',
    yourName: '',
    yourRole: '',
    companyEmail: '',
    phoneNumber: '',
    personalEmail: '',
    password: '',
    confirmPassword: '',
    authCode: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [organizationId, setOrganizationId] = useState<string>('');

  // Password strength calculation
  useEffect(() => {
    const calculateStrength = (password: string) => {
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (/[A-Z]/.test(password)) strength += 25;
      if (/[0-9]/.test(password)) strength += 25;
      if (/[^A-Za-z0-9]/.test(password)) strength += 25;
      return strength;
    };
    setPasswordStrength(calculateStrength(formData.password));
  }, [formData.password]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOrganizationCheck = (isOrg: boolean) => {
    setIsOrganization(isOrg);
    if (!isOrg) {
      toast.error("Sorry, FlowMeet is currently only available for organizations and their employees. Please contact us if you represent an organization.");
      return;
    }
    setStep('organization_details');
  };

  const handleOrganizationDetails = async () => {
    if (!formData.organizationName || !formData.yourName || !formData.yourRole || !formData.companyEmail || !formData.phoneNumber || !formData.personalEmail) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.companyEmail) || !emailRegex.test(formData.personalEmail)) {
      toast.error("Please enter valid email addresses");
      return;
    }

    // Company email validation
    if (!firebaseService.isCompanyEmail(formData.companyEmail)) {
      toast.error("Please use a company email address. Personal email providers (Gmail, Yahoo, etc.) are not allowed for company email.");
      return;
    }

    // Save organization data to Firebase
    setIsLoading(true);
    try {
      const orgId = await firebaseService.saveOrganizationSignup({
        organizationName: formData.organizationName,
        yourName: formData.yourName,
        yourRole: formData.yourRole,
        companyEmail: formData.companyEmail,
        phoneNumber: formData.phoneNumber,
        personalEmail: formData.personalEmail,
        authMethod: selectedAuthMethod
      });
      
      setOrganizationId(orgId);
      toast.success("Organization details saved successfully!");
      setStep('password_setup');
    } catch (error: any) {
      toast.error(error.message || "Failed to save organization details");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSetup = () => {
    if (!formData.password || !formData.confirmPassword) {
      toast.error("Please enter and confirm your password");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (passwordStrength < 75) {
      toast.error("Please choose a stronger password");
      return;
    }
    
    setStep('auth_setup');
  };

  const handleAuthSetup = () => {
    if (selectedAuthMethod === 'none') {
      // Skip to verification
      setStep('verification');
    } else {
      setStep('verification');
    }
  };

  const handleVerification = async () => {
    if (selectedAuthMethod !== 'none' && !formData.authCode) {
      toast.error("Please enter the verification code");
      return;
    }

    if (!organizationId) {
      toast.error("Organization data not found. Please start over.");
      return;
    }
    
    setIsLoading(true);
    try {
      // Create admin user in Firebase
      await firebaseService.createAdminUser(formData.companyEmail, formData.password, organizationId);
      
      setStep('welcome');
      setShowWelcome(true);
      
      // Redirect after welcome animation
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error: any) {
      if (error.message.includes('Organization not approved')) {
        toast.success("Organization registered successfully! Please wait for admin approval before you can access the platform.");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(error.message || "Signup failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'Weak';
    if (passwordStrength < 50) return 'Fair';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  // Welcome animation component
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-8 animate-bounce">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to FlowMeet!</h1>
          <p className="text-xl opacity-90">Your organization profile has been created successfully.</p>
          <div className="mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover flex flex-col" style={{backgroundImage: 'url("/Header-background.webp")', backgroundPosition: 'center 30%'}}>
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <img 
            src="/flowmeet-logo.png" 
            alt="FlowMeet Logo" 
            className="h-8 w-8" 
          />
          <span className="text-xl font-bold text-gray-900">FLOWMEET</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          
          {/* Step 1: Organization Check */}
          {step === 'organization_check' && (
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Join FlowMeet</h1>
              <p className="text-gray-600 mb-8">Are you part of an organization or representing one?</p>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleOrganizationCheck(true)}
                  className="w-full py-3 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
                >
                  Yes, I'm part of an organization
                </button>
                <button
                  onClick={() => handleOrganizationCheck(false)}
                  className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  No, I'm an individual
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Organization Details */}
          {step === 'organization_details' && (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Organization Details</h1>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                  <input
                    type="text"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="Enter your organization name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={formData.yourName}
                    onChange={(e) => handleInputChange('yourName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Role *</label>
                  <input
                    type="text"
                    value={formData.yourRole}
                    onChange={(e) => handleInputChange('yourRole', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="e.g., HR Manager, CEO, Team Lead"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Email *</label>
                  <input
                    type="email"
                    value={formData.companyEmail}
                    onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Personal Email *</label>
                  <input
                    type="email"
                    value={formData.personalEmail}
                    onChange={(e) => handleInputChange('personalEmail', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="your.personal@email.com"
                  />
                </div>
              </div>
              
              <button
                onClick={handleOrganizationDetails}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 3: Password Setup */}
          {step === 'password_setup' && (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Create Password</h1>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="Create a strong password"
                  />
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex justify-between text-sm">
                        <span>Password strength:</span>
                        <span className={`font-medium ${passwordStrength >= 75 ? 'text-green-600' : passwordStrength >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${passwordStrength}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              
              <button
                onClick={handlePasswordSetup}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 4: Authentication Setup */}
          {step === 'auth_setup' && (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Setup Authentication</h1>
              <p className="text-gray-600 mb-6">Choose an additional authentication method for enhanced security (optional)</p>
              
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedAuthMethod('google')}
                  className={`w-full p-4 border-2 rounded-lg transition-colors ${
                    selectedAuthMethod === 'google' ? 'border-black bg-gray-100' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Google Authenticator</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setSelectedAuthMethod('microsoft')}
                  className={`w-full p-4 border-2 rounded-lg transition-colors ${
                    selectedAuthMethod === 'microsoft' ? 'border-black bg-gray-100' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#f25022" d="M1 1h10v10H1z"/>
                      <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                      <path fill="#7fba00" d="M1 13h10v10H1z"/>
                      <path fill="#ffb900" d="M13 13h10v10H13z"/>
                    </svg>
                    <span>Microsoft Authenticator</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setSelectedAuthMethod('none')}
                  className={`w-full p-4 border-2 rounded-lg transition-colors ${
                    selectedAuthMethod === 'none' ? 'border-black bg-gray-100' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Skip for now</span>
                  </div>
                </button>
              </div>
              
              <button
                onClick={handleAuthSetup}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 5: Verification */}
          {step === 'verification' && (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Verification</h1>
              
              {selectedAuthMethod !== 'none' ? (
                <div>
                  <p className="text-gray-600 mb-4">
                    Please enter the verification code from your {selectedAuthMethod === 'google' ? 'Google' : 'Microsoft'} Authenticator app:
                  </p>
                  <input
                    type="text"
                    value={formData.authCode}
                    onChange={(e) => handleInputChange('authCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-center text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                  />
                </div>
              ) : (
                <p className="text-gray-600 mb-4">
                  Ready to create your FlowMeet organization profile?
                </p>
              )}
              
              <button
                onClick={handleVerification}
                disabled={isLoading}
                className="w-full mt-6 py-3 px-4 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          )}
          
          {/* Back to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
