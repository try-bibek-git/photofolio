'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 container py-6 flex justify-between items-center">
      
      {/* Logo */}
       <div>
        <img
          src={logo}
          alt="T.T.T Logo"
          className="h-10 w-auto md:h-16"
        />
      </div>

      {/* Center Nav */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm font-[300] tracking-wide">
        {['Photography', 'Films', 'Contact Us', 'Editorial', 'More'].map((link, index) => (
          <a
            key={index}
            href="#"
            className="hover:underline transition text-[--color-text]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Social Icons & CTA */}
      <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/t3_thetimelesstales" aria-label="Instagram">
         <Instagram size={21} className="text-[#2c1e00] hover:opacity-75 transition" />
        </a>
        <a href="https://www.facebook.com/t3thetimelesstales" aria-label="Facebook">
          <Facebook size={21} className="text-[#2c1e00] hover:opacity-75 transition" />
        </a>
        <a href="https://youtube.com/@thetimelesstales6535" aria-label="YouTube">
          <Youtube size={23} className="text-[#2c1e00] hover:opacity-75 transition" />
        </a>

        <button
          className="ml-4 px-5 py-2 rounded-md text-sm font-medium hover:bg-[--color-text] hover:text-white transition-all duration-200"
          style={{
            backgroundColor: '#452f00',
            color: 'white',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.03em',
          }}
        >
          Get In Touch
        </button>
      </div>
    </header>
  );
};

export default Navbar;
