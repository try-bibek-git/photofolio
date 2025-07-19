import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate header first
    tl.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
      // Then animate info and form together
      .fromTo([infoRef.current, formRef.current],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.2 },
        '-=0.3'
      );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const eventDate = form.eventDate.value;
    const location = form.location.value;
    const message = form.message.value;

    const whatsappMessage = `Hello! I'd love to inquire about photography services. Here's my info:\n
     Name: ${fullName}
     Email: ${email}
     Phone: ${phone || "N/A"}
     Event Date: ${eventDate || "TBD"}
     Location: ${location || "TBD"}
     Message:${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace with your WhatsApp number (in international format without +)
    const phoneNumber = "918721882202";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  };


  return (
    <>
      <Header />

      <section className="min-h-screen mt-30 py-16 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#F0E9E0' }}>
        <div className="container mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-black mb-6">
              Let's Create Something
              <span className="block italic" style={{ color: '#B49E64' }}>Beautiful Together</span>
            </h1>
            <p className="text-gray-700 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Every love story deserves to be told beautifully. Share your vision with us,
              and let's bring your dreams to life through timeless photography.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div ref={infoRef} className="space-y-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-[Playfair Display] font-normal text-black mb-6 tracking-tight leading-snug">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B49E64' }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black mb-0">Email</p>
                      <p className="text-gray-600 mb-0">hello@studio.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B49E64' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black mb-0">Phone</p>
                      <p className="text-gray-600 mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B49E64' }}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black mb-0">Location</p>
                      <p className="text-gray-600 mb-0">New York, NY</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B49E64' }}>
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black mb-0">Response Time</p>
                      <p className="text-gray-600 mb-0">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-[Playfair Display] font-normal text-black mb-4 leading-tight">

                  What to Expect
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#B49E64' }}></div>
                    <span>Personal consultation to understand your vision</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#B49E64' }}></div>
                    <span>Custom photography package tailored to your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#B49E64' }}></div>
                    <span>Professional guidance throughout the process</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#B49E64' }}></div>
                    <span>Timely delivery of beautifully edited photos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif text-black mb-6">
                      Start Your Journey
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-[Garamond Pro] text-gray-700 mb-2 tracking-wide">

                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-[Garamond Pro] text-gray-700 mb-2 tracking-wide">

                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-[Garamond Pro] text-gray-700 mb-2 tracking-wide">

                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="input-field"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-[Garamond Pro] text-gray-700 mb-2 tracking-wide">

                        Event Date
                      </label>
                      <input
                        name="eventDate"
                        type="date"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-[Garamond Pro] text-gray-700 mb-2 tracking-wide">

                      Event Location
                    </label>
                    <input
                      name="location"
                      type="text"
                      className="input-field"
                      placeholder="New York, NY"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-[Garamond Pro] text-gray-700 mb-2 tracking-wide">

                      Tell us about your event *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="input-field resize-none"
                      placeholder="Share your vision, style preferences, and any special moments you'd like us to capture..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-3 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#B49E64' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-black mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your message has been received. We're excited to learn about your story
                    and will be in touch within 24 hours to discuss your photography needs.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;