
import React from "react";
const Footer = () => {
  return <footer className="w-full py-0 mb-0" id="footer">
      {/* Made By AI & Human Section - Full Width */}
      <div className="w-full rounded-none overflow-hidden relative">
        <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between mb-0 pb-0" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>
          <div className="max-w-7xl mx-auto w-full text-white space-y-6">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src="/flowmeet-logo.png" alt="FlowMeet Logo" className="h-6 w-6 sm:h-7 sm:w-7 mr-3 invert" />
              <span className="text-white text-xl font-medium">FLOWMEET</span>
            </div>
            
            {/* Contact us Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">✈</span>
                <span className="text-gray-300 text-lg">Contact us</span>
              </div>
              
              <div className="text-2xl font-medium">
                Support@flowmeet.in
              </div>
              
              {/* Buttons */}
              <div className="flex space-x-4">
                <a href="/terms" className="px-6 py-2 border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="/privacy" className="px-6 py-2 border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-white transition-colors">
                  Privacy Policy
                </a>
              </div>
              
              {/* Copyright */}
              <div className="text-gray-400 text-sm space-y-1">
                <div>FlowMeet d.o.o. (FlowMeet), All Rights Reserved.</div>
                <div>Checkout our other project: RoboGree</div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      
    </footer>;
};
export default Footer;
