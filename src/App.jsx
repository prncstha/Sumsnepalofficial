import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
// import Pricing from './components/Pricing'
import Testimonial from './components/Testimonials'
import Footer from './components/Footer'
import Stats from './components/Stats'
import CogknitDes from './components/CogknitDes'
import LogoCloud from './components/LogoCloud'
import Team from './components/team'


const App = () => {
  return (
    <>
   <Navbar/>
   < div className="max-w-7xl mx-auto pt-20 px-6 ">
   <HeroSection/>
   <FeatureSection/>
   <Workflow/>
  <CogknitDes/>
   <Testimonial/>
   <br/>

   {/* <Stats/> */}
   <LogoCloud/>
   <Team/>
   

   {/* <Pricing/> */}
   
  
  
   
    </div>
    <Footer/>
   </>
  )
}

export default App
