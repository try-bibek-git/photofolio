'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react'; // or use your preferred icon lib

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="relative text-5xl font-serif leading-none tracking-tight">
        <span className="block">T.T.T</span>
      </div>

      {/* Center Nav */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm font-light">
        <a href="#" className="hover:underline">Photography</a>
        <a href="#" className="hover:underline">Films</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Editorial</a>
        <a href="#" className="hover:underline">More</a>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/t3_thetimelesstales"><Instagram size={16} className="text-white" /></a>
        <a href="https://www.facebook.com/t3thetimelesstales"><Facebook size={16} className="text-white" /></a>
        <a href="https://youtube.com/@thetimelesstales6535"><Youtube size={16} className="text-white" /></a>
        <button className="ml-4 bg-amber-500 text-black px-4 py-2 text-sm font-medium tracking-wide rounded hover:bg-gold/80 transition">
          Get In Touch
        </button>
      </div>
    </header>
  );
};

export default Navbar;