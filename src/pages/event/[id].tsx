import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { events } from '../allEvents';

interface Event {
  id: number;
  title: string;
  type: string;
  location: string;
  image: string;
  date: string;
}

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const eventId = Number(id);
    const foundEvent = events.find((e: Event) => e.id === eventId);
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);

  // Event specific photos based on event type
  const getEventPhotos = (eventType: string) => {
    switch(eventType.toLowerCase()) {
      case 'wedding':
        return [
          '/images/1-min.webp',
          '/images/2-min.jpg',
          '/images/5-min.jpg',
          '/images/6-min.jpg',
          '/images/7-min.jpg',
          '/images/8-min.jpg',
        ];
      case 'corporate':
        return [
          '/images/10-min.jpg',
          '/images/11-min.jpg',
          '/images/12-min.jpg',
          '/images/13-min.jpg',
          '/images/14-min.jpg',
          '/images/15-min.jpg',
        ];
      case 'birthday':
        return [
          '/images/16-min.jpg',
          '/images/17-min.jpg',
          '/images/18-min.jpg',
          '/images/20-min.jpg',
          '/images/21-min.jpg',
          '/images/22-min.jpg',
        ];
      default:
        return [
          '/images/23-min.jpg',
          '/images/24-min.jpg',
          '/images/25-min.jpg',
          '/images/26-min.jpg',
          '/images/27-min.jpg',
          '/images/28-min.jpg',
        ];
    }
  };

  if (!event) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Event not found</p>
        </div>
        <Footer />
      </>
    );
  }

  const eventPhotos = getEventPhotos(event.type);

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-40 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="relative h-[60vh] w-full rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-5xl font-light mb-4">{event.title}</h1>
              <div className="flex items-center gap-6 text-lg">
                <p>{event.location}</p>
                <span>•</span>
                <p>{event.date}</p>
                <span>•</span>
                <p>{event.type}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-light mb-4">About this Event</h2>
            <p className="text-gray-600 leading-relaxed">
              {event.type === 'Wedding' ? 
                `Join us in celebrating the beautiful union of ${event.title}. This enchanting celebration took place at ${event.location}, where family and friends gathered to witness a day filled with love, laughter, and unforgettable moments.` :
                `Experience the highlights of ${event.title}, an extraordinary ${event.type.toLowerCase()} event that took place at ${event.location}. This memorable occasion brought together people for a celebration that will be remembered for years to come.`
              }
            </p>
          </div>
        </div>

        {/* Event Photos Grid */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPhotos.map((photo, index) => (
              <div 
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <img 
                  src={photo} 
                  alt={`${event.title} photo ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
