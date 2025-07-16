'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className=" text-[--color-text] py-12 px-6 sm:px-10 lg:px-20 font-[--font-body]">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-start gap-y-10 md:gap-y-0">

        {/* Left: Logo + Social */}
        <div className="flex-1 flex flex-col gap-7 min-w-[200px]">
          <div className='relative'>
        <img
          src={logo}
          alt="T.T.T Logo"
          className="h-10 w-auto md:h-12"
        />
        <h1 className='text-sm pl-1.5'>The Timeless Tales</h1>
      </div>
          <div className="flex items-center space-x-5 pt-2 pl-5">
            <a
              href="https://www.instagram.com/t3_thetimelesstales"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-[--color-text]" />
            </a>
            <a
              href="https://www.facebook.com/t3thetimelesstales"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-[--color-text]" />
            </a>
            <a
              href="https://youtube.com/@thetimelesstales6535"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-[--color-text]" />
            </a>
          </div>
        </div>

        {/* Center: Location + Policy */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-center text-left md:text-center text-sm leading-relaxed gap-3 mt-8 md:mt-0">
          <p className="text-[--color-muted] font-[--font-body]">Mumbai &middot; Bangalore</p>
          <Link
            to="/privacy-policy"
            className="hover:underline text-[--color-text]"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-end text-left md:text-right text-sm leading-relaxed gap-3 mt-8 md:mt-0">
          <p className="font-medium text-[--color-text]">+91 87218 82202</p>
          <a
            href="mailto:hello@thetimelesstales.com"
            className="hover:underline text-[--color-text]"
          >
            hello@thetimelesstales.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
