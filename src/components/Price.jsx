import React from 'react'
import {pricingOptions} from "../arrayObjects/arrayObjects"
import { CheckCircle2 } from 'lucide-react'

function Price() {
  return (
    <div className='mt-20'>

      <h2 className='text-3xl sm:text-5xl lg:6xl text-center my-8 tracking-wide'>Pricing</h2>

      <div className='flex flex-wrap'>
        {
          pricingOptions.map((option, index)=>(
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>

              <div className='p-10 border border-neutral-700 rounded-xl'>
                <p className='text-4xl mb-8'>{option.title} {option.title === "Growth" && (
                  <span className='bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text  text-xl mb-2'>(Most Popular)</span>
                )} </p>

                <p className='mb-8'>
                  <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                  <span className='text-neutral-500 tracking-tight'>/Month</span>
                </p>

                <ul>
                  {
                    option.features.map((feature, index)=>(
                      <li key={index} className='mt-8 flex items-center'>
                        <CheckCircle2/>
                        <span className='ml-2'>
                         {feature}

                        </span>
                      </li>
                    ))
                  }

                </ul>

                <a href="" className='flex justify-center item-center text-center w-full  p-2 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200'>Subscribe</a>

              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Price