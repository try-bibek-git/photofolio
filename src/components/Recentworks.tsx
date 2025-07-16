"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const events = [
  {
    id: 1,
    title: "Sarah & Michael",
    type: "Wedding",
    location: "Tuscany, Italy",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Emma & James",
    type: "Pre-Wedding",
    location: "Paris, France",
    image: "https://fetch.getnarrativeapp.com/static/b54b0964-daf7-4b32-af91-a25b9c62798d/VKR61348.jpg?w=1500",
  },
  {
    id: 3,
    title: "Olivia & David",
    type: "Engagement",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1559982483-d1dff2e4a1b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Sophie & Alexander",
    type: "Wedding",
    location: "London, UK",
    image: "https://fetch.getnarrativeapp.com/static/056a0f0c-d1a1-45ae-a9ed-c3ee9f1839b2/AYUS2387.jpg?w=1500",
  },
  {
    id: 5,
    title: "Isabella & Lucas",
    type: "Pre-Wedding",
    location: "Santorini, Greece",
    image: "https://fetch.getnarrativeapp.com/static/728c7768-a4f9-41a0-86f7-aa5da5ab1202/SHOW682.JPG.jpg?w=1500",
  },
  {
    id: 6,
    title: "Charlotte & William",
    type: "Engagement",
    location: "Vienna, Austria",
    image: "https://fetch.getnarrativeapp.com/static/d7a2548b-80a8-40c9-a1a6-a3d76eeb470b/ezgif.com-gif-maker-33.gif?w=1500",
  },
  {
    id: 7,
    title: "Amelia & Benjamin",
    type: "Wedding",
    location: "Bali, Indonesia",
    image: "https://fetch.getnarrativeapp.com/static/202b9735-7d2c-43d6-a64b-1d4934477cf5/Exports-ZAFA6948.jpg?w=1500",
  },
  {
    id: 8,
    title: "Grace & Henry",
    type: "Pre-Wedding",
    location: "Tokyo, Japan",
    image: "https://fetch.getnarrativeapp.com/static/1b665277-ff97-47db-b1c2-9237f4579dc5/AJP_2745-2.jpg?w=1500",
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
    <section className="w-full min-h-screen  flex items-center justify-center p-8 md:p-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">Recent Works</h2>
          <p className="text-[#875a17] text-lg max-w-xl mx-auto font-light leading-relaxed">
            A glimpse into our latest captured moments and celebrations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl">
            {/* Cards Container */}
            <div
              className="flex h-full transition-transform duration-1000 ease-in-out"
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
        <div className="flex justify-center relative">
          <button 
            onClick={() => navigate('/allEvents')}
            className="mt-8 px-6 py-3 bg-[#b89766] text-white rounded-md font-medium hover:bg-[#937b56] transition-colors duration-300"
          >
            View All Events
          </button>
        </div>
        
      </div>
    </section>
  )
}
