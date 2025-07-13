'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoulCinemaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-[--color-background]">
      {/* Clip Path Container */}
      <div
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          clipPath: 'polygon(77% 19%, 99% 3%, 100% 4%, 100% 96%, 89% 86%, 20% 100%, 0 90%, 0 0)',
          WebkitClipPath: 'polygon(77% 19%, 99% 3%, 100% 4%, 100% 96%, 89% 86%, 20% 100%, 0 90%, 0 0)',
        }}
      >
        {/* Responsive clip-path fallback for smaller screens */}
        <style>{`
          @media (max-width: 768px) {
            .responsive-clip {
              clip-path: polygon(80% 24%, 100% 8%, 100% 100%, 85% 95%, 25% 100%, 0 92%, 0 0);
              -webkit-clip-path: polygon(80% 24%, 100% 8%, 100% 100%, 85% 95%, 25% 100%, 0 92%, 0 0);
            }
          }
        `}</style>

        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover grayscale"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text content */}
        <div className="responsive-clip relative z-20 flex items-center justify-center h-full px-6 md:px-12 pt-32 pb-16 text-center">
          <div ref={textRef} className="max-w-3xl">
            <h2
              className="text-white heading-xl mb-6 tracking-wide"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              SOUL<span className="mx-2">+</span>CINEMA
            </h2>
            <p
              className="body-md text-white/90 font-light"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Every wedding is unique and so are our films. For past 8 years HOTC has set new benchmarks of
              storytelling within wedding realm and beyond. We are fortunate to have experienced so unique cultures
              and traditions across 25 countries and to document stories that continuously overwhelm us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoulCinemaSection;
