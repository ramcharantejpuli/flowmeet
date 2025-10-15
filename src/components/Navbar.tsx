
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-3"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="FlowMeet"
        >
          <img 
            src="/flowmeet-logo.png" 
            alt="FlowMeet Logo" 
            className="h-8 w-8 sm:h-10 sm:w-10" 
          />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">FLOWMEET</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#use-cases" className="nav-link">Features</a>
          <a href="#features" className="nav-link">About</a>
          <a href="#testimonials" className="nav-link">Reviews</a>
          <a href="#footer" className="nav-link">Contact</a>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <a 
              href="/signup" 
              className="flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]" 
              style={{
                backgroundColor: '#000000',
                borderRadius: '1440px',
                color: '#FFFFFF',
                border: '1px solid white',
              }}
            >
              SignUp
            </a>
            
            <a 
              href="/login" 
              className="flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:bg-gray-800" 
              style={{
                backgroundColor: '#000000',
                borderRadius: '1440px',
                color: '#FFFFFF',
                border: '2px solid #000000',
              }}
            >
              Login
            </a>
          </div>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#use-cases" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Features
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Reviews
          </a>
          <a 
            href="#footer" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
          
          {/* Mobile Action Buttons */}
          <div className="flex flex-col space-y-4 w-full mt-6">
            <a 
              href="/signup" 
              className="flex items-center justify-center py-3 px-6 text-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]" 
              style={{
                backgroundColor: '#000000',
                borderRadius: '1440px',
                color: '#FFFFFF',
                border: '1px solid white',
              }}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              SignUp
            </a>
            
            <a 
              href="/login" 
              className="flex items-center justify-center py-3 px-6 text-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:bg-gray-800" 
              style={{
                backgroundColor: '#000000',
                borderRadius: '1440px',
                color: '#FFFFFF',
                border: '2px solid #000000',
              }}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
