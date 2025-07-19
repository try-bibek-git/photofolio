'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-heading', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.cta-description', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-description',
          start: 'top 80%',
        },
      });

      gsap.from('.cta-button', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-button',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center text-white px-6 sm:px-12 md:px-16 lg:px-20"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1623453283834-GT9UR8BV9W7WXYQ4EPR6/V_KL9752.jpg?format=2500w')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="cta-heading text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-tight text-white mb-6 tracking-wide font-light">
            The Timeless <span className="font-semibold">Tales</span>
          </h1>

          <div className="cta-description mb-8 text-sm sm:text-[15px] leading-relaxed text-white/90 space-y-4 font-light">
            <p>
              A modern approach to storytelling—crafted with artistry, emotion, and soul. The Timeless Tales is devoted to capturing love stories that feel as unforgettable as the moments themselves. With a blend of fine art and documentary style, every frame is designed to be as unique as the people in it. Celebrate your story through images that are genuine, timeless, and beautifully you.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://t3thetimelesstales.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block px-8 py-4 rounded-md bg-[#a28a56] text-base sm:text-lg text-white font-medium tracking-wide transition-all duration-300 hover:bg-[#8f7649] hover:scale-105 hover:shadow-lg"
            >
              Book Now
            </a>
            <Link
              to="/contact"
              className="cta-button inline-block px-8 py-4 rounded-md border border-[--color-accent] bg-transparent text-[--color-accent] text-base sm:text-lg font-medium tracking-wide transition-all duration-300 hover:bg-[--color-accent] hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>


          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
