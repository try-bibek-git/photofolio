"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const events = [
  {
    id: 1,
    title: "Sarah & Michael",
    type: "Wedding",
    location: "Tuscany, Italy",
    image: "/images/1-min.jpg",
  },
  {
    id: 2,
    title: "Emma & James",
    type: "Pre-Wedding",
    location: "Paris, France",
    image: "/images/6-min.jpg",
  },
  {
    id: 3,
    title: "Olivia & David",
    type: "Engagement",
    location: "New York, USA",
    image: "/images/17-min.jpg",
  },
  {
    id: 4,
    title: "Sophie & Alexander",
    type: "Wedding",
    location: "London, UK",
    image: "/images/20-min.jpg",
  },
  {
    id: 5,
    title: "Isabella & Lucas",
    type: "Pre-Wedding",
    location: "Santorini, Greece",
    image: "/images/22-min.jpg",
  },
  {
    id: 6,
    title: "Charlotte & William",
    type: "Engagement",
    location: "Vienna, Austria",
    image: "h/images/28-min.jpg",
  },
  {
    id: 7,
    title: "Amelia & Benjamin",
    type: "Wedding",
    location: "Bali, Indonesia",
    image: "/images/23-min.jpg",
  },
  {
    id: 8,
    title: "Grace & Henry",
    type: "Pre-Wedding",
    location: "Tokyo, Japan",
    image: "/images/8-min.jpg",
  },
]

export default function RecentWorks() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full py-20 flex items-center justify-center bg-gradient-to-b from-[#F0E9E0] via-[#ffebd2] to-[#F0E9E0] overflow-x-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide relative inline-block">
            Recent Works  
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#875a17]/30"></div>
          </h2>
          <p className="text-[#875a17] text-lg max-w-2xl mx-auto font-light leading-relaxed mt-8">
            Each photograph tells a story, each moment captures an emotion. Explore our latest masterpieces.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#875a17]/30 overflow-hidden"></div>
          <div className="absolute bottom-17 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#875a17]/30 overflow-hidden"></div>
          
          {/* Main Carousel */}
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            {/* Cards Container */}
            <div
              className="flex h-full transition-transform duration-1000 ease-out"
              style={{
                width: `${events.length * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / events.length}%)`,
              }}
            >

 
{/* {events.map((event, index) => () //warn "'index' is declared but its value is never read" */}

              {events.map((event) => (
                <div
                  key={event.id}
                  className="relative h-full flex-shrink-0"
                  style={{
                    width: `${100 / events.length}%`,
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div className="text-white">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-light tracking-wide">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light mb-2 tracking-wide">{event.title}</h3>
                      <p className="text-lg font-light opacity-90">{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Card Counter */}
          <div className="text-center mt-6">
            <span className="text-sm font-light text-gray-500 tracking-wide">
              {String(currentIndex + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        {/* All events Button */}
            <div className="flex justify-center relative mt-12">
          <button 
            onClick={() => navigate('/allEvents')}
             className="group relative inline-flex items-center px-8 py-4 text-sm tracking-wider overflow-hidden border border-[#875a17] text-[#875a17] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#875a17] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            <span className="relative group-hover:text-white transition-colors duration-300 flex items-center">
              VIEW ALL EVENTS
              <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
        
      </div>
    </section>
  )
}
