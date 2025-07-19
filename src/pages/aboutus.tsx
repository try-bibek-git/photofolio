"use client"
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from "react"

// Company Data
const companyData = {
  name: "The Timeless Tales",
  tagline: "Capturing Love Stories That Last Forever",
  story:
    "Founded in 2018, The Timeless Tales began as a passion project between two friends who believed that every love story deserves to be told beautifully. What started as weekend photography sessions has grown into a full-service wedding photography studio, dedicated to preserving the most precious moments of your special day.",
  mission:
    "To create timeless, elegant photographs that capture not just how you looked, but how you felt - preserving the emotions, laughter, and love that make your story uniquely yours.",
  experience: "6+ Years",
  weddingsCaptured: "200+",
  happyCouples: "180+",
}

// Values Data
const values = [
  {
    id: 1,
    title: "Authenticity",
    description: "We capture genuine moments and real emotions, creating photographs that truly reflect who you are.",
    icon: "heart",
  },
  {
    id: 2,
    title: "Excellence",
    description: "Every detail matters. From composition to post-processing, we maintain the highest standards.",
    icon: "star",
  },
  {
    id: 3,
    title: "Connection",
    description: "We build relationships with our clients, ensuring comfort and trust throughout your journey.",
    icon: "users",
  },
  {
    id: 4,
    title: "Creativity",
    description:
      "Each couple is unique, and so should be their photographs. We bring fresh perspectives to every shoot.",
    icon: "camera",
  },
]

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    profession: "Lead Photographer & Creative Director",
    bio: "With over 8 years of experience, Sarah brings artistic vision and technical expertise to every shoot. Her background in fine arts influences her unique approach to wedding photography.",
    avatar: "/placeholder.svg?height=300&width=300&text=Sarah+Mitchell",
    specialties: ["Wedding Photography", "Creative Direction", "Post-Processing"],
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Senior Photographer & Cinematographer",
    bio: "Michael's cinematic background adds a storytelling dimension to our work. He specializes in capturing candid moments and creating beautiful wedding films.",
    avatar: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
    specialties: ["Cinematography", "Candid Photography", "Drone Operations"],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    profession: "Portrait Specialist & Editor",
    bio: "Emma's attention to detail and expertise in portrait photography ensures every couple looks their absolute best. She leads our post-production team.",
    avatar: "/placeholder.svg?height=300&width=300&text=Emma+Rodriguez",
    specialties: ["Portrait Photography", "Photo Editing", "Color Grading"],
  },
  {
    id: 4,
    name: "David Thompson",
    profession: "Event Coordinator & Assistant Photographer",
    bio: "David ensures everything runs smoothly on your special day. His organizational skills and photography backup make him invaluable to our team.",
    avatar: "/placeholder.svg?height=300&width=300&text=David+Thompson",
    specialties: ["Event Planning", "Timeline Management", "Backup Photography"],
  },
]

export default function AboutUs() {
  const [mounted, setMounted] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [mounted])

  if (!mounted) {
    return null
  }

  const renderIcon = (iconName: string) => {
    const iconClass = "w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors duration-300"

    switch (iconName) {
      case "heart":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )
      case "star":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )
      case "users":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v1a6 6 0 01-6-6v-1m6 6V9a6 6 0 00-6 6v6z"
            />
          </svg>
        )
      case "camera":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <>
     <Header />
    <div className="w-full ">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-16">
        <div className="container mx-auto max-w-6xl">
          <div
            id="hero"
            data-animate
            className={`text-center transition-all duration-1000 ${
              visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-wide">
              About {companyData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              {companyData.tagline}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyData.experience}
                </div>
                <div className="text-gray-600 font-light">Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyData.weddingsCaptured}
                </div>
                <div className="text-gray-600 font-light">Weddings Captured</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyData.happyCouples}
                </div>
                <div className="text-gray-600 font-light">Happy Couples</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 p-4 md:p-8 lg:p-16 ">
        <div className="container mx-auto max-w-4xl">
          <div
            id="story"
            data-animate
            className={`transition-all duration-1000 delay-200 ${
              visibleSections.has("story") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-8 text-center">
              {companyData.story}
            </p>
            <div className=" p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 font-light leading-relaxed text-center">{companyData.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 p-4 md:p-8 lg:p-16">
        <div className="container mx-auto max-w-6xl">
          <div
            id="values"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              visibleSections.has("values") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-wide">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                id={`value-${value.id}`}
                data-animate
                className={`group text-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has(`value-${value.id}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(value.icon)}
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 group-hover:text-black transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 p-4 md:p-8 lg:p-16 ">
        <div className="container mx-auto max-w-7xl">
          <div
            id="team-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 delay-500 ${
              visibleSections.has("team-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-wide">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              The passionate professionals behind every beautiful moment we capture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                id={`team-${member.id}`}
                data-animate
                className={`group  rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-4 ${
                  visibleSections.has(`team-${member.id}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Avatar */}
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-80 bg-gray-200 group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${member.avatar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-2 group-hover:text-black transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-light mb-4 text-sm md:text-base">{member.profession}</p>
                  <p className="text-gray-700 font-light text-sm leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Specialties</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full group-hover:bg-gray-200 transition-colors duration-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 p-4 md:p-8 lg:p-16">
        <div className="container mx-auto max-w-4xl">
          <div
            id="cta"
            data-animate
            className={`text-center transition-all duration-1000 delay-700 ${
              visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-wide">
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's create something beautiful together. Every love story deserves to be captured with care, creativity,
              and passion.
            </p>
            <button className="group inline-flex items-center bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Your Journey
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
