import Solutions from "./components/Solutions"
import ServicesSection from "./components/ServicesSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Insights from "./components/Insights"


function App() {
  

  return (
    <>
      <NavBar/>

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <ServicesSection/>
        <Solutions/>
        <Insights/>
        <Price/>
        <Testimonials/>

        <Footer/>
      </div>


      

      

      
        
    </>
  )
}

export default App
