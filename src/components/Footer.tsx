import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[--color-background] text-[--color-text] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-y-12 md:gap-y-0">
        
        {/* Left: Logo + Social */}
        <div className="space-y-4 text-left">
          <h1 className="text-2xl leading-snug tracking-wide uppercase font-[--font-base] font-semibold">
            <span className='text-amber-600'>T</span>he <br /> <span className='text-amber-600'>T</span>imeless <br /> <span className='text-amber-600' >T</span>ales
          </h1>
          <div className="flex space-x-4 pt-1">
            <a href="https://www.instagram.com/t3_thetimelesstales" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-[--color-text]" />
            </a>
            
            <a href="https://www.facebook.com/t3thetimelesstales" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-[--color-text]" />
            </a>
            <a href="https://youtube.com/@thetimelesstales6535" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 text-[--color-text]" />
            </a>
          </div>
        </div>

        {/* Center: Location + Policy */}
        <div className="text-center md:text-left space-y-2 text-sm font-[--font-base] leading-relaxed">
          <p>Mumbai . Bangalore</p>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="text-right space-y-2 text-sm font-[--font-base] leading-relaxed">
          <p className="font-medium">+91 87218 82202</p>
          <a href="mailto:hello@houseontheclouds.com" className="hover:underline">
            hello@thetimelesstales.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
