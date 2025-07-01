import Solutions from "./components/Solutions"
import ServicesSection from "./components/ServicesSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Price from "./components/Price"


function App() {
  

  return (
    <>
      <NavBar/>

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <ServicesSection/>
        <Solutions/>
        <Price/>

      </div>

      
        
    </>
  )
}

export default App
