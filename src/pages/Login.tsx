import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, loginWithGithub, loginWithMicrosoft } = useAuth();
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setStep('password');
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    
    setIsLoading(true);
    try {
      const result = await login(email, password);
      if (result.isNewUser) {
        toast.info("Please complete your signup process");
        navigate('/signup');
      } else {
        toast.success("Login successful!");
        navigate('/');
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      let result;
      switch (provider) {
        case 'Google':
          result = await loginWithGoogle();
          break;
        case 'GitHub':
          result = await loginWithGithub();
          break;
        case 'Microsoft':
          result = await loginWithMicrosoft();
          break;
        default:
          throw new Error('Unknown provider');
      }
      
      if (result.isNewUser) {
        toast.info("New account detected! Please complete signup");
        navigate('/signup');
      } else {
        toast.success(`${provider} login successful!`);
        navigate('/');
      }
    } catch (error: any) {
      console.error(`${provider} login error:`, error);
      toast.error(error.message || `${provider} login failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const goBackToEmail = () => {
    setStep('email');
    setPassword('');
  };

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
        <div className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              {step === 'email' ? 'Employee Login' : 'Enter your password'}
            </h1>
            {step === 'password' && (
              <p className="text-sm text-gray-600">
                {email}
              </p>
            )}
          </div>

          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Company Mail address"
                  className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm transition-all duration-200 bg-white hover:border-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm"
              >
                Continue
              </button>
            </form>
          ) : (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm transition-all duration-200 bg-white hover:border-gray-400"
                  required
                  autoFocus
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-4 px-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm disabled:opacity-50"
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
              
              <button
                type="button"
                onClick={goBackToEmail}
                className="w-full text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Back to email
              </button>
            </form>
          )}

          {step === 'email' && (
            <>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-orange-600 hover:text-orange-800 font-medium">
                    Sign up
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => navigate('/sso-login')}
                    className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Login with SSO
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center">
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <a href="/terms" className="hover:text-gray-700">Terms and Conditions</a>
          <a href="/privacy" className="hover:text-gray-700">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
