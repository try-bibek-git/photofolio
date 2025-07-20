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
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[#875a17]/5 backdrop-blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, #875a17 2%, transparent 0%), radial-gradient(circle at 75px 75px, #875a17 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        ></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div
            id="hero"
            data-animate
            className={`text-center transition-all duration-1000 ${
              visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-[#875a17] text-sm tracking-wider mb-4 font-light">WELCOME TO</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-gray-900 mb-6 tracking-wide">
              {companyData.name}
            </h1>
            <p className="text-xl md:text-2xl text-[#875a17] font-garamond mb-16 max-w-3xl mx-auto leading-relaxed italic">
              {companyData.tagline}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
              {[
                { value: companyData.experience, label: "Experience" },
                { value: companyData.weddingsCaptured, label: "Weddings Captured" },
                { value: companyData.happyCouples, label: "Happy Couples" }
              ].map((stat, index) => (
                <div key={index} className="text-center group relative">
                  <div className="absolute inset-0 bg-[#875a17]/5 rounded-xl -rotate-3 transform transition-transform duration-300 group-hover:rotate-0"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#875a17]/10">
                    <div className="text-4xl md:text-5xl font-playfair text-[#875a17] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-garamond tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            id="story"
            data-animate
            className={`transition-all duration-1000 delay-200 ${
              visibleSections.has("story") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Story Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-[#875a17] text-sm tracking-wider mb-4 font-garamond">OUR JOURNEY</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-gray-900 mb-8 tracking-wide relative inline-block">
                Our Story
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#875a17]/30"></div>
              </h2>
            </div>

            {/* Story Content */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Story */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#875a17]/30"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg border border-[#875a17]/10">
                  <h3 className="text-2xl font-playfair text-[#875a17] mb-6">The Beginning</h3>
                  <p className="text-gray-700 font-garamond leading-relaxed mb-6 italic">
                    {companyData.story}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-[#875a17]/20 to-transparent"></div>
                    <span className="text-[#875a17] font-garamond">Est. 2018</span>
                    <div className="h-0.5 flex-1 bg-gradient-to-l from-[#875a17]/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Mission */}
              <div className="relative mt-12 md:mt-24">
                <div className="absolute -top-6 -right-6 w-24 h-24 border-r-2 border-t-2 border-[#875a17]/30"></div>
                <div className="relative z-10 bg-[#875a17]/5 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-[#875a17]/10">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-[#875a17]/10">
                    <svg className="w-8 h-8 text-[#875a17]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair text-[#875a17] mb-6 text-center mt-4">Our Mission</h3>
                  <p className="text-gray-700 font-garamond leading-relaxed text-center">
                    {companyData.mission}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {['Moments', 'Emotions', 'Stories'].map((text, index) => (
                      <div key={index} className="text-center">
                        <span className="inline-block text-sm font-garamond text-[#875a17]/70 italic">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                className={`group relative p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-[#875a17]/10 
                          shadow-sm hover-lift ${
                  visibleSections.has(`value-${value.id}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#875a17] to-[#b89766] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-xl" />
                
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <div className="p-3 rounded-full bg-[#875a17]/10">
                    {renderIcon(value.icon)}
                  </div>
                </div>
                
                <h3 className="text-2xl font-playfair text-[#875a17] mb-4 text-center group-hover:text-[#b89766] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-garamond leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                id={`team-${member.id}`}
                data-animate
                className={`group relative ${
                  visibleSections.has(`team-${member.id}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Avatar with Border Animation */}
                <div className="relative mb-6 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#875a17] via-[#b89766] to-[#875a17] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-[3px] bg-white rounded-full" />
                  <div
                    className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  >
                    <div
                      className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${member.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-playfair text-[#875a17] mb-2 group-hover:text-[#b89766] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-garamond italic mb-4">{member.profession}</p>
                  <p className="text-gray-700 font-garamond leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-3">
                    <p className="text-xs font-garamond text-[#875a17] uppercase tracking-wider">Expertise</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-[#875a17]/5 text-[#875a17] text-sm rounded-full 
                                   border border-[#875a17]/10 group-hover:bg-[#875a17]/10 transition-colors duration-300
                                   font-garamond"
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
