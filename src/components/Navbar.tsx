'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 container py-6 flex justify-between items-center">
      {/* Logo */}
      <div
        className="text-4xl md:text-5xl font-[600] tracking-tight leading-none"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
      >
        T.T.T
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
          <Instagram size={18} className="text-[--color-text] hover:opacity-75 transition" />
        </a>
        <a href="https://www.facebook.com/t3thetimelesstales" aria-label="Facebook">
          <Facebook size={18} className="text-[--color-text] hover:opacity-75 transition" />
        </a>
        <a href="https://youtube.com/@thetimelesstales6535" aria-label="YouTube">
          <Youtube size={18} className="text-[--color-text] hover:opacity-75 transition" />
        </a>

        <button
          className="ml-4 px-5 py-2 rounded-md text-sm font-medium hover:bg-[--color-text] hover:text-white transition-all duration-200"
          style={{
            backgroundColor: 'var(--color-accent)',
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
