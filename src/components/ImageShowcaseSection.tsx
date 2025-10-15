
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="use-cases">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
              Use Cases
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              FlowMeet adapts to various organizational needs and team structures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Remote Team Collaboration Card */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-teal-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll">
              <div className="relative p-6 bg-gradient-to-br from-teal-50 to-white">
                <div className="absolute top-4 right-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-medium shadow-md">
                    COLLABORATION
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  Remote Team Collaboration
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Connect distributed teams with integrated chat, file sharing, and real-time collaboration tools that work seamlessly across all devices and platforms.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-medium hover:bg-teal-200 transition-colors duration-200">
                    💬 Team Chat
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-medium hover:bg-teal-200 transition-colors duration-200">
                    📁 File Sharing
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            {/* Project Management Card */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-white">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium shadow-md">
                    PROJECT MANAGEMENT
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  Project & Task Management
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Organize projects, assign tasks, set deadlines, and track progress with comprehensive project management tools designed for team productivity.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                    📋 Task Tracking
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                    ⏰ Deadlines
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            {/* Meeting & HR Management Card */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="relative p-6 bg-gradient-to-br from-purple-50 to-white">
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6m-6 0l-.5 8.5A2 2 0 0013.5 21h-3A2 2 0 018.5 15.5L8 7z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium shadow-md">
                    HR MANAGEMENT
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  Meeting & HR Scheduling
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Schedule meetings, book appointments with HR and leadership, manage calendars, and integrate with all major meeting platforms seamlessly.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                    📅 Calendar
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                    👥 HR Booking
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
          
          {/* Additional Features Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Key Features
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Advanced capabilities that make FlowMeet your perfect organization management platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {/* Organization Dashboard Card */}
              <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll aspect-square">
                <div className="relative p-6 bg-gradient-to-br from-blue-50 to-white h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium shadow-md">
                      DASHBOARD 📊
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    Organization Dashboard
                  </h3>
                  
                  {/* Enhanced Dashboard Mockup Visual */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-5 w-36 h-44 border border-gray-100 relative overflow-hidden">
                      {/* Header with stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </div>
                        <div className="text-xs font-bold text-blue-600">Overview</div>
                      </div>
                      
                      {/* Stats cards */}
                      <div className="space-y-3">
                        <div className="flex space-x-2">
                          <div className="w-12 h-8 bg-gradient-to-r from-green-100 to-green-200 rounded border border-green-300 flex items-center justify-center">
                            <div className="text-xs font-bold text-green-700">24</div>
                          </div>
                          <div className="w-12 h-8 bg-gradient-to-r from-purple-100 to-purple-200 rounded border border-purple-300 flex items-center justify-center">
                            <div className="text-xs font-bold text-purple-700">12</div>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="w-full h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"></div>
                          <div className="w-4/5 h-1 bg-gray-300 rounded-full"></div>
                          <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
                          <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full"></div>
                          <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full opacity-50"></div>
                      <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-blue-200 rounded-full opacity-30"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Comprehensive dashboard to monitor team performance, track projects, and manage organizational metrics in real-time.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>

              {/* Team Communication Card */}
              <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll aspect-square" style={{animationDelay: '0.1s'}}>
                <div className="relative p-6 bg-gradient-to-br from-green-50 to-white h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium shadow-md">
                      COMMUNICATION 💬
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    Team Communication
                  </h3>
                  
                  {/* Enhanced Communication Visual */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="relative w-36 h-36 bg-gradient-to-br from-green-100 via-green-50 to-white rounded-xl flex items-center justify-center shadow-lg border border-green-200">
                      <div className="w-20 h-20 bg-gradient-to-br from-white to-green-50 rounded-lg flex items-center justify-center shadow-md border border-green-100">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      
                      {/* Chat bubbles */}
                      <div className="absolute top-2 left-8 w-8 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-sm transform rotate-12 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute top-8 right-2 w-10 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg shadow-sm transform -rotate-12 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute bottom-2 right-8 w-8 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-sm transform rotate-12 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute bottom-8 left-2 w-10 h-6 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg shadow-sm transform -rotate-12 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      
                      {/* User indicators */}
                      <div className="absolute top-4 left-4 w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Seamless team communication with integrated chat channels, direct messaging, and real-time collaboration tools for enhanced productivity.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Security & Compliance Card */}
              <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll aspect-square" style={{animationDelay: '0.2s'}}>
                <div className="relative p-6 bg-gradient-to-br from-purple-50 to-white h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium shadow-md">
                      SECURITY 🛡️
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Enterprise Security
                  </h3>
                  
                  {/* Enhanced Security Visual */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-5 w-40 h-36 border border-purple-100 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-xs font-bold text-purple-600">Security Status</div>
                      </div>
                      
                      <div className="space-y-3">
                        {/* Security indicators */}
                        <div className="flex items-center justify-between">
                          <div className="w-16 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                            <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                            <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                            <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                            <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                          </div>
                        </div>
                        
                        {/* Compliance section */}
                        <div>
                          <div className="text-xs text-purple-600 font-medium mb-2">COMPLIANCE</div>
                          <div className="space-y-1">
                            <div className="w-full h-1 bg-gradient-to-r from-green-300 to-green-400 rounded-full"></div>
                            <div className="w-4/5 h-1 bg-green-300 rounded-full"></div>
                            <div className="w-full h-1 bg-green-300 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Security features */}
                        <div>
                          <div className="text-xs text-gray-500 font-medium mb-2">PROTECTION LEVEL</div>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-md shadow-sm"></div>
                            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-md shadow-sm"></div>
                            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-md shadow-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-200 rounded-full opacity-40"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-100 rounded-full opacity-30"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Enterprise-grade security with end-to-end encryption, role-based access control, and compliance with industry standards and regulations.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>

              {/* Meeting Integration Card */}
              <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll aspect-square" style={{animationDelay: '0.3s'}}>
                <div className="relative p-6 bg-gradient-to-br from-orange-50 to-white h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium shadow-md">
                      INTEGRATION 🔗
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                    Meeting Integration
                  </h3>
                  
                  {/* Enhanced Integration Visual */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg flex items-center justify-center border-2 border-orange-300">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      
                      {/* Platform logos around the center */}
                      <div className="absolute top-2 left-8 w-8 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-sm flex items-center justify-center">
                        <div className="text-xs font-bold text-white">Z</div>
                      </div>
                      <div className="absolute top-8 right-2 w-8 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-md shadow-sm flex items-center justify-center">
                        <div className="text-xs font-bold text-white">M</div>
                      </div>
                      <div className="absolute bottom-2 right-8 w-8 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md shadow-sm flex items-center justify-center">
                        <div className="text-xs font-bold text-white">T</div>
                      </div>
                      <div className="absolute bottom-8 left-2 w-8 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-md shadow-sm flex items-center justify-center">
                        <div className="text-xs font-bold text-white">S</div>
                      </div>
                      
                      {/* Connection lines */}
                      <div className="absolute top-6 left-12 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform rotate-45"></div>
                      <div className="absolute top-12 right-6 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform -rotate-45"></div>
                      <div className="absolute bottom-6 right-12 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform rotate-45"></div>
                      <div className="absolute bottom-12 left-6 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform -rotate-45"></div>
                      
                      {/* Status indicators */}
                      <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Seamless integration with all major meeting platforms including Zoom, Microsoft Teams, Google Meet, and Slack for unified communication.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
