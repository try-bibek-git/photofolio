'use client';

import { Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 container py-6 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="T.T.T Logo"
            className="h-10 w-auto md:h-16 cursor-pointer"
          />
        </Link>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden z-50 p-2 text-[#2c1e00] hover:opacity-75 transition"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#F0E9E0] shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 mt-16">
          {[
            { name: 'Photography', path: '#' },
            { name: 'Films', path: '#' },
            { name: 'Editorial', path: '#' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'About Us', path: '/aboutus' }
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="py-3 text-[#2c1e00] hover:text-[#7a6734] transition-colors duration-200 text-lg font-light tracking-wide"
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm font-[300] tracking-wide">
        {[
          { name: 'Photography', path: '#' },
          { name: 'Films', path: '#' },
          { name: 'Editorial', path: '#' },
          { name: 'Contact Us', path: '/contact' },
          { name: 'About Us', path: '/aboutus' }
        ].map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:underline transition text-[--color-text]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Social Icons & CTA */}
      <div className="hidden lg:flex items-center space-x-4">
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
            backgroundColor: '#7a6734',
            color: 'white',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.03em',
          }}
        >
          Get In Touch
        </button>
      </div>

      {/* Mobile Social Links */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#F0E9E0] border-t border-[#7a6734]/20 flex flex-col items-center space-y-4 lg:hidden
        transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}">
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/t3_thetimelesstales" aria-label="Instagram">
            <Instagram size={21} className="text-[#2c1e00] hover:opacity-75 transition" />
          </a>
          <a href="https://www.facebook.com/t3thetimelesstales" aria-label="Facebook">
            <Facebook size={21} className="text-[#2c1e00] hover:opacity-75 transition" />
          </a>
          <a href="https://youtube.com/@thetimelesstales6535" aria-label="YouTube">
            <Youtube size={23} className="text-[#2c1e00] hover:opacity-75 transition" />
          </a>
        </div>
        <button
          className="w-full px-5 py-2 rounded-md text-sm font-medium bg-[#8e7a42] text-white hover:bg-[#614f23] transition-all duration-200"
          style={{
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
