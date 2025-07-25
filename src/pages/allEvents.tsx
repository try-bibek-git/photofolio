"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

// Events data
export const events = [
  {
    id: 1,
    title: "Sarah & Michael's Wedding",
    type: "Wedding",
    location: "The Grand Plaza, New York",
    // image: "/images/2-min.jpg",
    image: "https://images.pexels.com/photos/758898/pexels-photo-758898.png",
    date: "June 15, 2025"
  },
  {
    id: 2,
    title: "Annual Corporate Gala",
    type: "Corporate",
    location: "Luxury Hotel, Boston",
    image: "https://images.pexels.com/photos/758898/pexels-photo-758898.png",
    date: "July 1, 2025"
  },
  {
    id: 3,
    title: "Emma's Sweet 16",
    type: "Birthday",
    location: "Garden Events, Miami",
    image: "https://images.pexels.com/photos/758898/pexels-photo-758898.png",
    date: "May 30, 2025"
  },
  {
    id: 4,
    title: "James & Emily's Wedding",
    type: "Conference",
    location: "Convention Center, SF",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    date: "June 22, 2025"
  },
  {
    id: 5,
    title: "James & Emily's Wedding",
    type: "Fashion",
    location: "Milano Hall, LA",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    date: "July 8, 2025"
  },
  {
    id: 6,
    title: "James & Emily's Wedding",
    type: "Wedding",
    location: "Beachfront Resort, Miami",
    image: "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg",
    date: "August 1, 2025"
  },
  {
    id: 7,
    title: "James & Emily's Wedding",
    type: "Wedding",
    location: "Beachfront Resort, Miami",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg",
    date: "August 1, 2025"
  },
  {
    id: 8,
    title: "James & Emily's Wedding",
    type: "Wedding",
    location: "Beachfront Resort, Miami",
    image: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg",
    date: "August 1, 2025"
  },
  {
    id: 9,
    title: "James & Emily's Wedding",
    type: "Wedding",
    location: "Beachfront Resort, Miami",
    image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
    date: "August 1, 2025"
  }
]

export default function AllEvents() {
  const navigate = useNavigate();

  const handleEventClick = (eventId: number) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-30 mb-60  py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
          Our Photography Events
        </h1>
        <p className="text-[#875a17] text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Explore our complete collection of beautifully captured moments and celebrations
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleEventClick(event.id)}
            >
              {/* Event Image */}
              <div className="relative h-[450px] w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${event.image})`,
                  }}
                />
                 <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 group-hover:to-black/70 transition-colors duration-300" />
              </div>

              {/* Event Details */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-light mb-2">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl font-light mb-1 tracking-wide">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between text-sm opacity-90">
                  <p>{event.location}</p>
                  <p>{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}
