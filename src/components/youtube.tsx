"use client"

import { useEffect, useState } from "react"

// YouTube Channel Data Object
const youtubeChannelData = {
  channelName: "The Timeless Tales",
  subscribers: 340,
  videos: 80,
  views: 66287,
  channelLink: "https://www.youtube.com/@thetimelesstales6535",
  description: "Experience love stories through our lens. Watch our collection of cinematic wedding films and pre-wedding stories that capture the essence of your special moments."
}

export default function YouTube() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Format views for display
  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${Math.floor(views / 1000)}K+`
    }
    return views.toString()
  }

  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center p-8 md:p-16">
      <div className="container mx-auto max-w-4xl text-center">
        {/* YouTube Icon & Title */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-red-500 rounded-full p-3 mr-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">{youtubeChannelData.channelName}</h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8">
          {youtubeChannelData.description}
        </p>

        {/* Stats */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gray-900 mb-1">{youtubeChannelData.videos}</div>
            <div className="text-gray-500 font-light text-sm">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gray-900 mb-1">{youtubeChannelData.subscribers}</div>
            <div className="text-gray-500 font-light text-sm">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gray-900 mb-1">{formatViews(youtubeChannelData.views)}</div>
            <div className="text-gray-500 font-light text-sm">Views</div>
          </div>
        </div>

        {/* Main CTA Button */}
        <a
          href={youtubeChannelData.channelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <svg
            className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Visit Our YouTube Channel
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
