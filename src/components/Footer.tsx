import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[--color-background] text-[--color-text] py-12 px-6 sm:px-10 lg:px-20 font-[--font-body]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-y-10 md:gap-y-0">

        {/* Left: Logo + Social */}
        <div className="space-y-5 text-left">
          <h1
            className="text-2xl sm:text-3xl leading-snug tracking-wide uppercase font-semibold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-[--color-accent]">T</span>he <br />
            <span className="text-[--color-accent]">T</span>imeless <br />
            <span className="text-[--color-accent]">T</span>ales
          </h1>

          <div className="flex items-center space-x-4 pt-1">
            <a
              href="https://www.instagram.com/t3_thetimelesstales"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Instagram className="h-5 w-5 text-[--color-text]" />
            </a>
            <a
              href="https://www.facebook.com/t3thetimelesstales"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Facebook className="h-5 w-5 text-[--color-text]" />
            </a>
            <a
              href="https://youtube.com/@thetimelesstales6535"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Youtube className="h-5 w-5 text-[--color-text]" />
            </a>
          </div>
        </div>

        {/* Center: Location + Policy */}
        <div
          className="text-center md:text-left text-sm leading-relaxed space-y-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <p className="text-[--color-muted]">Mumbai · Bangalore</p>
          <Link
            to="/privacy-policy"
            className="hover:underline text-[--color-text]"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div
          className="text-right text-sm leading-relaxed space-y-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <p className="font-medium text-[--color-text]">+91 87218 82202</p>
          <a
            href="mailto:hello@houseontheclouds.com"
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
