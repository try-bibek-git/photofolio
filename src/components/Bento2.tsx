'use client';

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const BentoGrid = React.forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto grid w-full gap-2 sm:gap-3",
          // Mobile: 2 columns, auto rows
          "grid-cols-2 auto-rows-[200px] sm:auto-rows-[250px]",
          // Tablet: 3 columns
          "md:grid-cols-3 md:auto-rows-[280px]",
          // Desktop: 4 columns, 4 rows with fixed height
            "lg:grid-cols-4 lg:grid-rows-4 lg:auto-rows-[180px] xl:auto-rows-[200px]",
          "max-w-[2000px]",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
BentoGrid.displayName = "BentoGrid";

const BentoGridItem = ({
  className,
  header,
  index,
  mobileClass,
  tabletClass,
  desktopClass,
}: {
  className?: string;
  header?: React.ReactNode;
  index?: number;
  mobileClass?: string;
  tabletClass?: string;
  desktopClass?: string;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = itemRef.current;
    if (node) {
      gsap.set(node, {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      gsap.to(node, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: (index || 0) * 0.1,
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={cn(
        "overflow-hidden flex flex-col justify-between ",
        " bg-[--color-white] shadow-lg",
        "transition-all duration-300",
        "relative transform-gpu will-change-transform",
        // Responsive classes
        mobileClass,
        tabletClass,
        desktopClass,
        className
      )}
    >
      <div className="h-full w-full overflow-hidden ">
        {header}
      </div>
    </div>
  );
};

const images = [
  "/images/31-min.jpg",
  "/images/27-min.jpg",
  "/images/5-min.jpg",
  "/images/7-min.jpg",
  "/images/18-min.jpg",
  "/images/22-min.jpg",
  "/images/12-min.jpg",
];


const BentoGridGallery = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="section-padding bg-[--color-background]">
      <div className="w-full max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2
          ref={titleRef}
          className="text-center mb-12 sm:mb-16 lg:mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-[--color-text]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          some of the most <br />
          <span className="italic font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-gradient">
            "ICONIC"
          </span>{" "}
          wedding images
        </h2>

        <BentoGrid ref={gridRef}>
          {/* Image 1 - Large featured image */}
          <BentoGridItem
            index={0}
            mobileClass="col-span-2 row-span-2"
            tabletClass="md:col-span-2 md:row-span-2"
            desktopClass="lg:col-span-2 lg:row-span-2"
            header={<img src={images[0]} alt="Wedding couple" className="w-full h-full object-cover" />}
          />
          
          {/* Image 2 - Wide horizontal */}
          <BentoGridItem
            index={1}
            mobileClass="col-span-2 row-span-1"
            tabletClass="md:col-span-1 md:row-span-1"
            desktopClass="lg:col-span-2 lg:row-span-1"
            header={<img src={images[1]} alt="Wedding couple" className="w-full h-full object-cover" />}
          />
          
          {/* Image 3 - Square */}
          <BentoGridItem
            index={2}
            mobileClass="col-span-1 row-span-1"
            tabletClass="md:col-span-1 md:row-span-1"
            desktopClass="lg:col-span-1 lg:row-span-1"
            header={<img src={images[2]} alt="Wedding couple" className="w-full h-full object-cover" />}
          />
          
          {/* Image 4 - Square */}
          <BentoGridItem
            index={3}
            mobileClass="col-span-1 row-span-1"
            tabletClass="md:col-span-1 md:row-span-1"
            desktopClass="lg:col-span-1 lg:row-span-1"
            header={<img src={images[3]} alt="Wedding bouquet" className="w-full h-full object-cover" />}
          />
          
          {/* Image 5 - Tall vertical */}
          <BentoGridItem
            index={4}
            mobileClass="col-span-1 row-span-2"
            tabletClass="md:col-span-1 md:row-span-2"
            desktopClass="lg:col-span-1 lg:row-span-2"
            header={<img src={images[4]} alt="Wedding ceremony" className="w-full h-full object-cover" />}
          />
          
          {/* Image 6 - Tall vertical */}
          <BentoGridItem
            index={5}
            mobileClass="col-span-1 row-span-2"
            tabletClass="md:col-span-1 md:row-span-2"
            desktopClass="lg:col-span-1 lg:row-span-2"
            header={<img src={images[5]} alt="Bride portrait" className="w-full h-full object-cover" />}
          />
          
          {/* Image 7 - Large bottom */}
          <BentoGridItem
            index={6}
            mobileClass="col-span-2 row-span-1"
            tabletClass="md:col-span-2 md:row-span-1"
            desktopClass="lg:col-span-2 lg:row-span-2"
            header={<img src={images[6]} alt="Wedding celebration" className="w-full h-full object-cover" />}
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default BentoGridGallery;