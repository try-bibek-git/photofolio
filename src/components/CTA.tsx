'use client';
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center text-white px-6 sm:px-12 md:px-16 lg:px-20"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1623453283834-GT9UR8BV9W7WXYQ4EPR6/V_KL9752.jpg?format=2500w')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center h-full">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-tight text-white mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            FINE-ART <br />
            <span className="font-semibold">CLASS</span>
          </h1>

          <div
            className="mb-8 text-sm sm:text-[15px] leading-relaxed text-white/90 space-y-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <p>
              Ibrida is our finest offering with fine art editorial style photography led by Siddharth Sharma,
              founder of The Timeless Tales. The essence of Ibrida is to create photographs that stand the test of
              time. The classic, non-intrusive approach of documenting the in-between moments of your life with
              timeless and airy images that take you back in time. This is an exclusive package we offer to selected
              weddings only, and we believe this deserves a website of its own.
            </p>
          </div>

          <Link
            to="https://t3thetimelesstales.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-7 py-3 sm:py-4 rounded-md bg-[#a28a56] text-sm sm:text-[15px] text-white font-medium tracking-normal"
            style={{
              fontFamily: 'var(--font-body)',
              textTransform: 'none',
            }}
          >
            Visit The Timeless Tales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
