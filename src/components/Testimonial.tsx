"use client"

import { useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    event: "Wedding Photography",
    text: "Absolutely stunning work! Every moment was captured with such elegance and grace. The photos exceeded our expectations and we couldn't be happier.",
    image: "/placeholder.svg?height=80&width=80&text=Sarah",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    event: "Pre-Wedding Shoot",
    text: "Professional, creative, and so easy to work with. The pre-wedding photos turned out magical and perfectly captured our love story.",
    image: "/placeholder.svg?height=80&width=80&text=Michael",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    event: "Engagement Session",
    text: "The attention to detail is incredible. Every shot tells a story and the quality is simply outstanding. Highly recommend!",
    image: "/placeholder.svg?height=80&width=80&text=Emma",
    rating: 5,
  },
  {
    id: 4,
    name: "David Rodriguez",
    event: "Wedding Photography",
    text: "From start to finish, the experience was seamless. The photographer captured not just images, but emotions and memories that will last forever.",
    image: "/placeholder.svg?height=80&width=80&text=David",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophie Anderson",
    event: "Pre-Wedding Shoot",
    text: "Creative vision combined with technical excellence. The photos are works of art that beautifully document our special moments.",
    image: "/placeholder.svg?height=80&width=80&text=Sophie",
    rating: 5,
  },
  {
    id: 6,
    name: "James Thompson",
    event: "Engagement Session",
    text: "Exceptional service and breathtaking results. The photographer made us feel comfortable and the photos reflect pure joy and love.",
    image: "/placeholder.svg?height=80&width=80&text=James",
    rating: 5,
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [cardsPerView, setCardsPerView] = useState(3)

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(3) // Desktop: 3 cards
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [mounted, maxIndex])

  // Reset currentIndex if it exceeds maxIndex when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0)
    }
  }, [currentIndex, maxIndex])

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-2 md:mb-4 tracking-wide">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed px-4">
            Hear from couples who trusted us to capture their most precious moments
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  {/* Testimonial Card */}
                  <div className="group bg-[#FFFAF4] rounded-lg   p-4 md:p-6 lg:p-8 h-full shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                    {/* Quote Icon */}
                    <div className="mb-4 md:mb-6">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-[#9D700F] transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-6 md:mb-8 group-hover:text-gray-900 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      {/* Client Photo */}
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                        <div
                          className="w-full h-full bg-gray-200"
                          style={{
                            backgroundImage: `url(${testimonial.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>

                      {/* Client Details */}
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-medium text-base md:text-lg group-hover:text-black transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-xs md:text-sm font-light">{testimonial.event}</p>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-4 md:mt-6">
            <span className="text-xs md:text-sm font-light text-gray-500 tracking-wide">
              {String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
