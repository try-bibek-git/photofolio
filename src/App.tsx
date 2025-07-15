import './App.css'
import Abstract from './components/Abstract'
import BentoGridGallery from './components/BentoGridGallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Bento2 from './components/Bento2'
import Recentworks from './components/Recentworks'
import SoulCinemaSection from './components/SoulCinemaSection'
import FeaturedWeddings from './components/FeaturedWeddings'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Abstract/>
      <BentoGridGallery/>
      <Bento2/>
      <Recentworks/>
      <SoulCinemaSection/>
      <FeaturedWeddings/>
      <Services/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
