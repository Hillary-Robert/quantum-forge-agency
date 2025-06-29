import React, { useState } from 'react'
import {Menu, X} from 'lucide-react'

import logo from "../assets/logo.png"
import { navItems } from "../arrayObjects/arrayObjects"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
        
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>QuantumForge</span>
          </div>

       
          <ul className='hidden lg:flex space-x-12 ml-10'>
            {
              navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))
            }
          </ul>

       
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className='py-2 px-4 border rounded-md'>Sign in</a>
            <a href="#" className='bg-gradient-to-r from-blue-600 to-blue-900 text-white py-2 px-4 rounded-md'>
              Create account
            </a>
          </div>

          

          <div className="lg:hidden md:flex flex-col justify-start">
            <button onClick={toggleNavBar}>{isOpen? <X/> : <Menu/>}</button>
          </div>
        </div>

        {/* Mobile NavBar */}

        {isOpen && (
          <div className={`fixed right-0 z-20 bg-neutral-900 w-full h-screen p-6 flex flex-col justify-start items-start transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden gap-12`}>
            <ul>
              {
                navItems.map((item, index) =>(
                  <li key={index} className='py-4 hover:underline'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))
              }
            </ul>

            <div className="flex space-x-6">
              <a href="#" className='py-2 px-4 border rounded-md'>Sign in</a>

              <a href="#" className='bg-gradient-to-r from-blue-600 to-blue-900 text-white py-2 px-4 rounded-md'>
              Create account
              </a>

          </div>


          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar