import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import image from "../assets/code.jpg"
import { solutions } from "../arrayObjects/arrayObjects"

function Solutions() {
  return (
    <section id="solutions" className='mt-10'>

      <p className='text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase text-center mb-12
                   animate-fade-in-up opacity-0'
         style={{ animationDelay: '100ms' }}>
        Solutions
      </p>

      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide 
                     animate-fade-in-up opacity-0'
          style={{ animationDelay: '200ms' }}>
        Make your <span className='bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>
          Product look better
        </span>
      </h2>

      <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2 animate-fade-in-up opacity-0' style={{ animationDelay: '300ms' }}>
          <img src={image} alt="Code Image" />
        </div>

        <div className='pt-12 w-full lg:w-1/2'>
          {
            solutions.map((solution, index) => (
              <div key={index}
                   className='flex mb-12 animate-fade-in-up opacity-0'
                   style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                <div className='text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                  <CheckCircle2 />
                </div>

                <div>
                  <h5 className='mt-1 mb-2 text-xl'>{solution.title}</h5>
                  <p className='text-md text-neutral-400'>{solution.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Solutions