import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import firebaseService from "../services/firebaseService";

const SSOLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await firebaseService.adminLogin(formData.email, formData.password);
      toast.success("Admin login successful!");
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || "Admin login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              Admin Login
            </h1>
            <p className="text-sm text-gray-600">
              Sign in with your administrator credentials
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Admin email address"
                className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm transition-all duration-200 bg-white hover:border-gray-400"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm transition-all duration-200 bg-white hover:border-gray-400"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-4 px-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign in as Admin'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>
          </div>

          {/* Back to regular login */}
          <div className="mt-6">
            <button
              onClick={() => navigate('/login')}
              className="w-full py-3 px-4 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Back to Employee Login
            </button>
          </div>

          {/* Sign up link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New organization?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSOLogin;
