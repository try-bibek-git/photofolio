import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1887&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-[3rem] md:text-[4rem] leading-tight font-[400] font-[--font-base] text-white mb-8 tracking-wide italic">
            FINE-ART <br />
            <span className="not-italic font-[700]">CLASS</span>
          </h1>

          {/* Description */}
          <div className="mb-10 text-[0.9rem] leading-relaxed text-white/90 space-y-4 font-[200] font-[--font-sans]">
            <p >
              Ibrida is our finest offering with fine art editorial style photography led by Siddharth Sharma,
              founder of House On The Clouds. The essence of Ibrida is to create photographs that stand the test of
              time. The classic, non-intrusive approach of documenting the in-between moments of your life with
              timeless and airy images that take you back in time. This is an exclusive package we offer to selected
              weddings only, and we believe this deserves a website of its own.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="https://ibrida.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[--color-accent] text-white text-sm tracking-wide uppercase font-[--font-base] hover:bg-white hover:text-black transition-colors duration-300"
          >
            Visit Ibrida.Co
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
