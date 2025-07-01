import React from 'react'
import {services} from "../arrayObjects/arrayObjects"

function ServicesSection() {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>

      <div className="text-center">
        <span className='text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          Services
        </span>

        <h2 className='text-3xl sm:text-5xl lg:text-6xl  mt-10 lg:mt-10 tracking-wide'>
          Let's help you  <span className='bg-gradient-to-r from-blue-600 to-blue-900 text-transparent  bg-clip-text'>build <br />your product</span>
          
        </h2>
      </div>

      <div className='flex flex-wrap mt-10 lg:mt-50'>

        {
          services.map((service, index)=>(
            <div key={index} className='w-full sm:1/2 lg:w-1/3 '>
              <div className='flex'>
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-900 justify-center  items-center rounded-full font-black">
                  {service.icon}

                </div>

                <div>
                  <h5 className='mt-1 mb-4 text-xl'>
                    {service.text}
                  </h5>
                  <p className='text-md p-2  mb-20 text-neutral-400'>{service.description}</p>
                </div>

              </div>
              
            </div>
          ))

        }

      </div>


    </div>
  )
}

export default ServicesSection