"use client"

import { Crown, Heart, Camera, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const services = [
  {
    id: 1,
    title: "Pre-Wedding",
    subtitle: "Romantic Beginnings",
    description:
      "Capture the anticipation and love before your special day with elegant pre-wedding photography sessions.",
    icon: Heart,
    images: [
        "https://fetch.getnarrativeapp.com/static/b4cdddfe-227a-4640-8d9a-64aefb4dc709/FduwU0NUUAE7qK8.jpeg?w=500",
        "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w",
        "https://fetch.getnarrativeapp.com/static/f9102ed9-887b-4a34-8aa6-5a8c60fecd99/SLIDE_009.JPG.jpg?w=750",
      ],
  },
  {
    id: 2,
    title: "Wedding",
    subtitle: "Your Special Day",
    description: "Document your wedding day with timeless photography that captures every precious moment and emotion.",
    icon: Crown,
    images: [
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1670478908751-2XMF94Y8YGB1BMS4VIIP/SHOW647.JPG?format=750w",
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/f33c52ff-05b4-4cb2-b087-0f48f5fcbe88/Post%2B1.jpg?format=700w",
    ],
  },
  {
    id: 3,
    title: "Engagement",
    subtitle: "Love Stories",
    description: "Celebrate your engagement with intimate photography sessions that tell your unique love story.",
    icon: Camera,
    images: [
      "https://fetch.getnarrativeapp.com/static/0e49fbee-19ed-4561-8b50-7187552fb4f8/AYUS2017%20copy.jpg?w=750",
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
        4000 + serviceIndex * 1000,
      )
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [mounted])

  const nextImage = (serviceIndex: number) => {
    setCurrentImages((prev) => {
      const newImages = [...prev]
      newImages[serviceIndex] = (newImages[serviceIndex] + 1) % services[serviceIndex].images.length
      return newImages
    })
  }

  const prevImage = (serviceIndex: number) => {
    setCurrentImages((prev) => {
      const newImages = [...prev]
      newImages[serviceIndex] =
        newImages[serviceIndex] === 0 ? services[serviceIndex].images.length - 1 : newImages[serviceIndex] - 1
      return newImages
    })
  }

  const goToImage = (serviceIndex: number, imageIndex: number) => {
    setCurrentImages((prev) => {
      const newImages = [...prev]
      newImages[serviceIndex] = imageIndex
      return newImages
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full h-min-screen  flex items-center justify-center p-10 md:p-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Capturing your most precious moments with elegance and grace
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, serviceIndex) => {
            const IconComponent = service.icon
            const currentImageIndex = currentImages[serviceIndex]

            return (
              <div
                key={service.id}
                className="group bg-[#fffbf4]  border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg rounded-lg"
              >
                {/* Service Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-[#ffdfb2]  rounded-full mr-4">
                      <IconComponent className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-500 font-light">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
                </div>

                {/* Carousel */}
                <div className="relative">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    {/* Images */}
                    <div
                      className="flex transition-transform duration-700 ease-out h-full"
                      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                      {service.images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${service.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={() => prevImage(serviceIndex)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-sm border border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => nextImage(serviceIndex)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-sm border border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <div className="flex space-x-2">
                        {service.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => goToImage(serviceIndex, i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === currentImageIndex ? "bg-white shadow-sm" : "bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-6">
                  <button className="w-full py-3 px-6 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm tracking-wide rounded-md">
                    BOOK {service.title.toUpperCase()}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
