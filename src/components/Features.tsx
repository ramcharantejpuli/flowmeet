
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-6 sm:p-8 group cursor-pointer",
        "bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg",
        "hover:shadow-2xl hover:shadow-black/10 hover:border-gray-300/50",
        "hover:bg-gradient-to-br hover:from-white hover:to-gray-50/30",
        "transform hover:scale-105 hover:-translate-y-2",
        "transition-all duration-500 ease-out"
      )}
      style={{ animationDelay: `${0.15 * index}s` }}
    >
      <div className="relative mb-6">
        <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-black w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-white mb-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
          {icon}
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-gray-600 to-black rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-black transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600 via-gray-800 to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-4 sm:py-6 md:py-8 pb-0 relative overflow-hidden" id="features" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative">
            <h2 className="section-title mb-4 sm:mb-6 opacity-0 fade-in-element bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent animate-gradient-x">
              Comprehensive Organization <br className="hidden sm:block" />Management Platform
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gray-600 to-black rounded-full opacity-0 fade-in-element" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element text-gray-600 max-w-3xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Streamline your organization's workflow with integrated team collaboration, project management, and communication tools designed for modern workplaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            title="Team Collaboration"
            description="Connect and collaborate with team members in real-time through integrated chat, file sharing, and project workspaces."
            index={0}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M13 8H7"></path><path d="M17 12H7"></path></svg>}
            title="Meeting Management"
            description="Schedule, organize, and manage meetings with integrated calendar, video conferencing, and agenda management tools."
            index={1}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M9 12l2 2 4-4"></path><path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path><path d="M11 12H3"></path></svg>}
            title="Project Management"
            description="Track project progress, assign tasks, set deadlines, and monitor team productivity with comprehensive project management tools."
            index={2}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>}
            title="HR Appointments"
            description="Schedule appointments with HR, CEO, and leadership team with automated calendar integration and reminder notifications."
            index={3}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M13 8H7"></path><path d="M17 12H7"></path></svg>}
            title="Team Chat & Communication"
            description="Integrated chat system for seamless team communication with channels, direct messaging, and file sharing capabilities."
            index={4}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M9 12l2 2 4-4"></path></svg>}
            title="Secure & Compliant"
            description="Enterprise-grade security with role-based access control, data encryption, and compliance with industry standards."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
