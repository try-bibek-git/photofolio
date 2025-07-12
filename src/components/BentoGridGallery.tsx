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
          "mx-auto grid max-w-7xl grid-cols-4 grid-rows-4 gap-2", 
          "h-[1200px] w-full", 
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
}: {
  className?: string;
  header?: React.ReactNode;
  index?: number;
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
        "overflow-hidden flex flex-col justify-between rounded-lg",
        "border border-neutral-200/50 bg-[--color-white] shadow-lg",
        "transition-all duration-300",
        "relative transform-gpu will-change-transform",
        className
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-lg">
        {header}
      </div>
    </div>
  );
};

const images = [
  "https://picsum.photos/id/1011/800/600",
  "https://picsum.photos/id/1015/600/600",
  "https://picsum.photos/id/1016/600/600",
  "https://picsum.photos/id/1025/800/600",
  "https://picsum.photos/id/1035/600/600",
  "https://picsum.photos/id/1033/600/600",
  "https://picsum.photos/id/1037/800/600",
  "https://picsum.photos/id/1041/600/600",
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
      <div className="w-full max-w-[1700px] mx-auto px-4 md:px-10">
        <h2
          ref={titleRef}
          className="text-center mb-16 lg:mb-20 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[--color-text]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          some of the most <br />
          <span className="italic font-semibold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-gradient">
            "ICONIC"
          </span>{" "}
          wedding images
        </h2>

        <BentoGrid ref={gridRef}>
          <BentoGridItem
            index={0}
            className="col-span-2 row-span-2"
            header={<img src={images[0]} alt="" className="w-full h-full object-cover" />}
          />
          <BentoGridItem
            index={1}
            className="col-span-2 row-span-1"
            header={<img src={images[1]} alt="" className="w-full h-full object-cover" />}
          />
          <BentoGridItem
            index={2}
            className="col-span-1 row-span-1"
            header={<img src={images[2]} alt="" className="w-full h-full object-cover" />}
          />
          <BentoGridItem
            index={3}
            className="col-span-1 row-span-1"
            header={<img src={images[3]} alt="" className="w-full h-full object-cover" />}
          />
          <BentoGridItem
            index={4}
            className="col-span-1 row-span-2"
            header={<img src={images[4]} alt="" className="w-full h-full object-cover" />}
          />
          <BentoGridItem
            index={5}
            className="col-span-1 row-span-2"
            header={<img src={images[5]} alt="" className="w-full h-full object-cover" />}
          />
          <BentoGridItem
            index={6}
            className="col-span-2 row-span-2"
            header={<img src={images[6]} alt="" className="w-full h-full object-cover" />}
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default BentoGridGallery;
