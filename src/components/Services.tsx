"use client"

import { useEffect, useState } from "react"

const services = [
  {
    id: 1,
    title: "Pre-Wedding",
    images: [
        "https://fetch.getnarrativeapp.com/static/b4cdddfe-227a-4640-8d9a-64aefb4dc709/FduwU0NUUAE7qK8.jpeg?w=500",
        "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w",
        "https://fetch.getnarrativeapp.com/static/f9102ed9-887b-4a34-8aa6-5a8c60fecd99/SLIDE_009.JPG.jpg?w=750",
      ],
  },
  {
    id: 2,
    title: "Wedding",
    images: [
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1670478908751-2XMF94Y8YGB1BMS4VIIP/SHOW647.JPG?format=750w",
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/f33c52ff-05b4-4cb2-b087-0f48f5fcbe88/Post%2B1.jpg?format=700w",
    ],
  },
  {
    id: 3,
    title: "Engagement",
    images: [
      "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/07/10/12/18/couple-8885735_1280.jpg",
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713954657282-SHVYJA5FPU28U8NGMOHS/0U0A6612.jpg?format=700w",
    ],
  },
]

export default function Services() {
  const [currentImages, setCurrentImages] = useState([0, 0, 0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const intervals = services.map((service, serviceIndex) => {
      return setInterval(
        () => {
          setCurrentImages((prev) => {
            const newImages = [...prev]
            newImages[serviceIndex] = (newImages[serviceIndex] + 1) % service.images.length
            return newImages
          })
        },
        4000 + serviceIndex * 800,
      )
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full h-screen bg-[#F0E9E0] flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">Our Services</h2>
          <p className="text-[#613e07] text-lg max-w-xl mx-auto font-light leading-relaxed">
            Capturing your most precious moments with elegance and grace
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, serviceIndex) => {
            const currentImageIndex = currentImages[serviceIndex]

            return (
              <div key={service.id} className="flex flex-col items-center">
                {/* Circular Card */}
                <div className="group relative w-80 h-80 rounded-full overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500">
                  {/* Carousel Container */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    {/* Images Container - Vertical Stack */}
                    <div
                      className="relative w-full transition-transform duration-1000 ease-in-out"
                      style={{
                        height: `${service.images.length * 100}%`,
                        transform: `translateY(-${currentImageIndex * (100 / service.images.length)}%)`,
                      }}
                    >
                      {service.images.map((image, index) => (
                        <div
                          key={index}
                          className="absolute inset-x-0 w-full"
                          style={{
                            height: `${100 / service.images.length}%`,
                            top: `${index * (100 / service.images.length)}%`,
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 rounded-full" />

                  {/* Title Overlay - Only appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white text-2xl md:text-3xl font-light tracking-wider text-center px-4">
                      {service.title}
                    </h3>
                  </div>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-2">
                      {service.images.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            i === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress Ring (Optional Visual Enhancement) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray={`${(currentImageIndex + 1) * (100 / service.images.length)} ${100 - (currentImageIndex + 1) * (100 / service.images.length)}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                </div>

                {/* Service Title Below Circle */}
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-light text-gray-900 tracking-wide">{service.title}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}




