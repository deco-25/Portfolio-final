import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  return (
    <div className='w-screen h-screen bg-white px-8 py-16 md:px-5 lg:px-40 md:py-40'>
      <h1 className='text-2xl font-bold md:font-normal md:text-5xl lg:text-7xl font-aboreto text-center md:mb-4'>Your name absolutely belongs in our testimonials (we're not kidding!)</h1>

        <TestimonialCard />
    </div>
  )
}

export default TestimonialSection