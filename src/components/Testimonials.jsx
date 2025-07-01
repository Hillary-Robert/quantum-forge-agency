import React from 'react'
import { testimonials } from "../arrayObjects/arrayObjects"

function Testimonials() {
  return (
    <section id="testimonial" className='mt-10 tracking-wide'>

      <h2 
        className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 animate-fade-in-up opacity-0' 
        style={{ animationDelay: '100ms' }}
      >
        Testimonials
      </h2>

      <div className='flex flex-wrap justify-center'>

        {
          testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2 animate-fade-in-up opacity-0'
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >

              <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>

                <p>"{testimonial.text}"</p>

                <div className='flex mt-8 items-center'>

                  <img 
                    src={testimonial.image} 
                    alt={testimonial.user} 
                    className='w-12 h-12 mr-6 rounded-full border border-neutral-300'
                  />

                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className='text-sm font-normal italic text-neutral-500'>{testimonial.company}</span>
                  </div>

                </div>

              </div>

            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Testimonials