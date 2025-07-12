import './App.css'
import Abstract from './components/Abstract'
import BentoGridGallery from './components/BentoGridGallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Bento2 from './components/Bento2'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Abstract/>
      <CTA/>
      <BentoGridGallery/>
      {/* <Bento2/> */}
      <Footer/>
    </>
  )
}

export default App
