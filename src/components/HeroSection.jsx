import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>

      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center  tracking-wide '>Where Dev Tools Meet <span className='bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>
        {""}
          Engineering Excellence.
      </span>    
      </h1>

      <p className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>
        Whether you're scaling your startup or streamlining your stack — QuantumForge gives you the speed, insight, and reliability to build at your best.
      </p>

      <div className="flex justify-center gap-10 my-10">
        <a href="" className='bg-gradient-to-r from-blue-600 to-blue-900 py-3 px-4 mx3 rounded-md'>
          start for free
        </a>

        <a href="" className='py-3 px-4 mx3 rounded-md border'>
          Documentation
        </a>
      </div>

      <div className='flex mt-10  justify-center gap-6'>

        <video autoPlay loop muted  className='rounded-lg w-1/2 border border-blue-800 shadow-blue-800 mx-2 my-4'>

        <source src={video1} type='video/mp4'/>

        Your Browser does not support the video
        
        
        </video>


        <video autoPlay loop muted  className='rounded-lg w-1/2 border border-blue-800 shadow-blue-800 mx-2 my-4'>

        <source src={video2} type='video/mp4'/>

        Your Browser does not support the video
        
        
        </video>
      </div>

    </div>
  )
}

export default HeroSection