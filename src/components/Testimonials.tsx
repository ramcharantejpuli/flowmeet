
import React, { useRef } from "react";

// Add CSS animation for scrolling
const scrollingStyles = `
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll-left {
    animation: scroll-left 60s linear infinite;
  }
  
  .animate-scroll-left:hover {
    animation-play-state: paused;
  }
`;

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "FlowMeet transformed our team collaboration! The integrated chat and project management features have increased our productivity by 40%.",
  author: "",
  role: "Project Manager, TechCorp",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Our remote team coordination has never been better. FlowMeet's meeting management and deadline tracking keep everyone aligned.",
  author: "",
  role: "Team Lead, InnovateHub",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The HR appointment scheduling feature is a game-changer. Our employees can easily book time with leadership and HR teams.",
  author: "",
  role: "HR Director, GlobalTech",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "FlowMeet's secure communication channels have streamlined our organization's internal discussions and file sharing.",
  author: "",
  role: "IT Manager, SecureFlow",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}, {
  content: "The enterprise-grade security gives us peace of mind while collaborating on sensitive projects. Highly recommended!",
  author: "",
  role: "CTO, DataVault",
  gradient: "from-red-600 via-pink-500 to-purple-600",
  backgroundImage: "/background-section2.png"
}, {
  content: "FlowMeet's real-time collaboration tools have eliminated communication gaps across our distributed teams.",
  author: "",
  role: "Operations Manager, CloudWorks",
  gradient: "from-gray-700 via-gray-600 to-gray-800",
  backgroundImage: "/background-section3.png"
}, {
  content: "The multi-platform integration is incredible. Works seamlessly with all our existing tools and meeting platforms.",
  author: "",
  role: "Digital Manager, ConnectPlus",
  gradient: "from-green-600 via-teal-500 to-blue-600",
  backgroundImage: "/background-section1.png"
}, {
  content: "Our organization went from scattered communications to unified collaboration. FlowMeet brought everyone together.",
  author: "",
  role: "CEO, StartupFlow",
  gradient: "from-red-500 via-orange-500 to-yellow-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The project tracking and deadline management features help us deliver projects on time, every time.",
  author: "",
  role: "Delivery Manager, AgileWorks",
  gradient: "from-black via-gray-800 to-gray-900",
  backgroundImage: "/background-section3.png"
}, {
  content: "FlowMeet's team chat and file sharing capabilities have made our daily operations so much smoother.",
  author: "",
  role: "Team Coordinator, EfficientOrg",
  gradient: "from-purple-600 via-blue-500 to-indigo-600",
  backgroundImage: "/background-section1.png"
}, {
  content: "The calendar integration and meeting scheduling features have eliminated double bookings and improved our workflow.",
  author: "",
  role: "Administrative Manager, OrganizedCorp",
  gradient: "from-pink-500 via-red-500 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "FlowMeet's comprehensive platform has unified our entire organization's workflow. From meetings to projects, everything is seamless.",
  author: "",
  role: "VP Operations, TechFlow",
  gradient: "from-blue-600 via-indigo-500 to-purple-600",
  backgroundImage: "/background-section3.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-2xl p-8 h-full flex flex-col justify-between text-white transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 relative overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-orange-500/20" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      {/* Enhanced corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 z-10 rounded-bl-2xl opacity-90 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
      
      {/* Quote icon */}
      <div className="absolute top-6 left-6 w-8 h-8 text-white/30 group-hover:text-white/50 transition-colors duration-300">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
        </svg>
      </div>
      
      <div className="relative z-0 mt-8">
        <p className="text-lg sm:text-xl mb-8 font-medium leading-relaxed pr-16 group-hover:text-white transition-colors duration-300">{`"${content}"`}</p>
        <div className="border-t border-white/20 pt-4">
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm font-semibold">{role}</p>
        </div>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Inject CSS styles
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = scrollingStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return <section className="py-0 relative overflow-hidden" id="testimonials" ref={sectionRef}>
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 text-black">
              What others say
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Real success stories from developers who transformed their careers with Greecode
          </p>
        </div>
        
        {/* Scrolling testimonials container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-6" style={{ width: 'calc(400px * 24)' }}>
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-96 h-64">
                <TestimonialCard 
                  content={testimonial.content} 
                  author={testimonial.author} 
                  role={testimonial.role} 
                  gradient={testimonial.gradient} 
                  backgroundImage={testimonial.backgroundImage} 
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-96 h-64">
                <TestimonialCard 
                  content={testimonial.content} 
                  author={testimonial.author} 
                  role={testimonial.role} 
                  gradient={testimonial.gradient} 
                  backgroundImage={testimonial.backgroundImage} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonials;
