import React, { useState } from 'react';

// Add CSS animation styles
const styles = `
  @keyframes scroll-row1-row3 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  @keyframes scroll-row2-opposite {
    0% {
      transform: translateX(-12%);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-12%);
    }
  }
  
  .animate-scroll-right {
    animation: scroll-row1-row3 2s linear infinite;
  }
  
  .animate-scroll-row2 {
    animation: scroll-row2-opposite 2s linear infinite;
  }
  
  .animate-scroll-row3 {
    animation: scroll-row1-row3 2s linear infinite;
  }
`;
import { toast } from "sonner";
const DetailsSection = () => {
  // Inject CSS styles
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return <section id="details" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-64 sm:h-80 p-6 sm:p-8 flex items-center" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="flex-1 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-display text-white font-bold mb-4 leading-tight">
                  Works with Any
                  <br />
                  Meeting Platforms
                </h2>
                <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed">
                  You can use FlowMeet with any video or coding platform
                  <br />
                  including Zoom, Google Meet, Microsoft Teams,
                  <br />
                  HackerRank, and LeetCode.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 text-sm font-medium">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Video tutorial: How to connect
                </button>
              </div>
              
              {/* Platform logos - Three horizontal rows */}
              <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 flex items-center">
                <div className="space-y-4 mt-1">
                  {/* Row 1 - Top */}
                  <div className="bg-white rounded-l-full pl-0 pr-0 py-3 shadow-lg overflow-hidden relative w-112">
                    <div className="flex items-center animate-scroll-right space-x-3">
                      {/* First complete set */}
                      {/* Zoom */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/Zoomlogo.png" alt="Zoom" className="w-10 h-10 object-contain" />
                      </div>
                      {/* Google Meet */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" alt="Google Meet" className="w-10 h-10 object-contain" />
                      </div>
                      {/* Call Logo */}
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      {/* Microsoft Teams */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" alt="Microsoft Teams" className="w-10 h-10 object-contain" />
                      </div>
                      {/* Skype */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Skype_logo_%282019%E2%80%93present%29.svg" alt="Skype" className="w-10 h-10 object-contain" />
                      </div>
                      
                      {/* Second complete set - exact duplicate for seamless loop */}
                      {/* Zoom */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/Zoomlogo.png" alt="Zoom" className="w-10 h-10 object-contain" />
                      </div>
                      {/* Google Meet */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" alt="Google Meet" className="w-10 h-10 object-contain" />
                      </div>
                      {/* Call Logo */}
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      {/* Microsoft Teams */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" alt="Microsoft Teams" className="w-10 h-10 object-contain" />
                      </div>
                      {/* Skype */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Skype_logo_%282019%E2%80%93present%29.svg" alt="Skype" className="w-10 h-10 object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - Middle */}
                  <div className="bg-white rounded-l-full pl-0 pr-0 py-3 shadow-lg overflow-hidden relative w-112 h-16">
                    <div className="flex items-center animate-scroll-row2 space-x-2">
                      {/* First complete set */}
                      {/* LeetCode */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-12 h-12 object-contain" />
                      </div>
                      {/* HackerRank */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/hackerrank-icon.png" alt="HackerRank" className="w-12 h-12 object-contain" />
                      </div>
                      {/* CodeChef */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="CodeChef" className="w-14 h-14 object-contain" />
                      </div>
                      {/* Unstop */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/unstop-logo.jpg" alt="Unstop" className="w-13 h-13 object-contain" />
                      </div>
                      {/* GeeksforGeeks */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6.png" alt="GeeksforGeeks" className="w-12 h-12 object-contain" />
                      </div>
                      
                      {/* Second complete set - exact duplicate for seamless loop */}
                      {/* LeetCode */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-12 h-12 object-contain" />
                      </div>
                      {/* HackerRank */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/hackerrank-icon.png" alt="HackerRank" className="w-12 h-12 object-contain" />
                      </div>
                      {/* CodeChef */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="CodeChef" className="w-14 h-14 object-contain" />
                      </div>
                      {/* Unstop */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/unstop-logo.jpg" alt="Unstop" className="w-13 h-13 object-contain" />
                      </div>
                      {/* GeeksforGeeks */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6.png" alt="GeeksforGeeks" className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3 - Bottom */}
                  <div className="bg-white rounded-l-full pl-0 pr-0 py-3 shadow-lg overflow-hidden relative w-112 h-16">
                    <div className="flex items-center animate-scroll-row3 space-x-2">
                      {/* First complete set */}
                      {/* ProctorU */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/proctorulogo.png" alt="ProctorU" className="w-12 h-12 object-contain" />
                      </div>
                      {/* Aon */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/aon-logo.png" alt="Aon" className="w-12 h-12 object-contain" />
                      </div>
                      {/* Mercer Mettl */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/mercer-mettl.png" alt="Mercer Mettl" className="w-14 h-14 object-contain" />
                      </div>
                      {/* Kaggle */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/kaggle.png" alt="Kaggle" className="w-12 h-12 object-contain" />
                      </div>
                      {/* CodeTantra */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/codetantralogo.png" alt="CodeTantra" className="w-14 h-14 object-contain" />
                      </div>
                      
                      {/* Second complete set - exact duplicate for seamless loop */}
                      {/* ProctorU */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/proctorulogo.png" alt="ProctorU" className="w-12 h-12 object-contain" />
                      </div>
                      {/* Aon */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/aon-logo.png" alt="Aon" className="w-12 h-12 object-contain" />
                      </div>
                      {/* Mercer Mettl */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/mercer-mettl.png" alt="Mercer Mettl" className="w-14 h-14 object-contain" />
                      </div>
                      {/* Kaggle */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/kaggle.png" alt="Kaggle" className="w-12 h-12 object-contain" />
                      </div>
                      {/* CodeTantra */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-0 flex items-center justify-center flex-shrink-0">
                        <img src="/codetantralogo.png" alt="CodeTantra" className="w-14 h-14 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Precision engineering meets adaptive intelligence
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">Speed:</span> 0.5M/S
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">Accuracy:</span> 99.8%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">Success Rate:</span> 98.2%
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">Uptime:</span> 6hr
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">Response Time:</span> 0.2ms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">Transparency:</span> 100%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default DetailsSection;
