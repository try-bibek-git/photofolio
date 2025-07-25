import './App.css'
import { Routes, Route } from 'react-router-dom'
import Abstract from './components/Abstract'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Bento2 from './components/Bento2'
import Recentworks from './components/Recentworks'
import SoulCinemaSection from './components/SoulCinemaSection'
import FeaturedWeddings from './components/FeaturedWeddings'
import Testimonial from './components/Testimonial'
import YouTube from './components/youtube'
import AllEvents from './pages/allEvents'
import Contact from './pages/contactus'
import EventPage from './pages/event/[id]'
import AboutUs from './pages/aboutus'
import GoToTop from './components/GoToTop'

function App() {
  const HomePage = () => (
    <>
      <Navbar/>
      <Hero/>
      <Abstract/>
      <Bento2/>
      {/* <BentoGridGallery/> */}
      <Recentworks/>
      <SoulCinemaSection/>
      <FeaturedWeddings/>
      <YouTube/>
      <Services/>
      <CTA/>
      <Testimonial/>
      <Footer/>
    </>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allEvents" element={<AllEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <GoToTop />
    </>
  )
}

export default App