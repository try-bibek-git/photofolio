// import React, { useRef, useEffect } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// interface Testimonial {
//   id: number;
//   name: string;
//   location: string;
//   quote: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Priya & Arjun",
//     location: "Mumbai, India",
//     quote: "The Timeless Tales captured our wedding with such artistry and emotion. Every photograph tells a story that takes us back to that magical day.",
//     image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 2,
//     name: "Sarah & Michael",
//     location: "Goa, India",
//     quote: "Their fine-art approach created photographs that are not just memories, but timeless pieces of art. We couldn't be happier with the results.",
//     image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 3,
//     name: "Kavya & Rohit",
//     location: "Bangalore, India",
//     quote: "The team's non-intrusive style allowed us to be ourselves while they captured the most beautiful in-between moments of our celebration.",
//     image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 4,
//     name: "Emma & David",
//     location: "Delhi, India",
//     quote: "Professional, creative, and incredibly talented. They transformed our wedding into a visual masterpiece that we'll treasure forever.",
//     image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 5,
//     name: "Ananya & Vikram",
//     location: "Jaipur, India",
//     quote: "Every single photograph exceeded our expectations. Their artistic vision and attention to detail is simply extraordinary.",
//     image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400"
//   }
// ];

// const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (card) {
//       gsap.set(card, {
//         opacity: 0,
//         y: 60,
//         scale: 0.95,
//       });

//       gsap.to(card, {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: index * 0.2,
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }
//   }, [index]);

//   return (
//     <div
//       ref={cardRef}
//       className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 md:px-4"
//     >
//       <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center transform hover:scale-105">
//         {/* Client Photo */}
//         <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-6 ring-4 ring-[#a28a56]/20">
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Quote */}
//         <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 flex-grow italic font-serif">
//           "{testimonial.quote}"
//         </blockquote>

//         {/* Name and Location */}
//         <div className="mt-auto">
//           <h4 className="font-semibold text-gray-900 text-lg mb-1 font-sans">
//             {testimonial.name}
//           </h4>
//           <p className="text-gray-500 text-sm font-sans">
//             {testimonial.location}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TestimonialCarousel: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
  
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { 
//       loop: true,
//       align: 'start',
//       skipSnaps: false,
//       dragFree: false,
//     },
//     [Autoplay({ delay: 4000, stopOnInteraction: false })]
//   );

//   useEffect(() => {
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }
//   }, []);

//   const scrollPrev = () => emblaApi?.scrollPrev();
//   const scrollNext = () => emblaApi?.scrollNext();

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
//       style={{ backgroundColor: '#F0E9E0' }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2
//             ref={titleRef}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-4"
//             style={{ fontFamily: 'var(--font-heading)' }}
//           >
//             What Our Couples Say
//           </h2>
//           <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-sans">
//             Hear from the couples who trusted us to capture their most precious moments
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex">
//               {testimonials.map((testimonial, index) => (
//                 <TestimonialCard
//                   key={testimonial.id}
//                   testimonial={testimonial}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={scrollPrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#a28a56] z-10"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={scrollNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#a28a56] z-10"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className="w-2 h-2 rounded-full bg-gray-400 hover:bg-[#a28a56] transition-colors duration-300"
//               onClick={() => emblaApi?.scrollTo(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialCarousel;


'use client';

import React from 'react';

const TestimonialGrid = () => {
  const testimonials = [
    {
      couple: 'TAMANA & DAN',
      quote: '“Like a dream captured in time...”',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1', // Replace with your photo
      link: '#',
    },
    {
      couple: 'ALESIA & RAHUL',
      quote: '“They didn’t just film, they felt every moment.”',
      image: 'https://images.unsplash.com/photo-1520975918108-6c03f3c98c31',
      link: '#',
    },
    {
      couple: 'ZINA & ZAIN',
      quote: '“A timeless treasure of our love.”',
      image: 'https://images.unsplash.com/photo-1520683662086-13716690f44d',
      link: '#',
    },
  ];

  return (
    <section className="bg-[#FAF5EF] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-800">
          What Our Couples Say
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-lg shadow-md bg-white transition-transform duration-300 hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <img
                src={t.image}
                alt={`${t.couple}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <p className="italic font-serif text-gray-700 text-base leading-relaxed mb-4">
                {t.quote}
              </p>
              <p className="text-sm font-light text-gray-500 uppercase tracking-widest mb-3">
                {t.couple}
              </p>
              <a
                href={t.link}
                className="text-sm text-gray-800 font-medium border-b border-gray-400 hover:border-gray-800 transition-colors duration-200"
              >
                Read Their Story →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGrid;
