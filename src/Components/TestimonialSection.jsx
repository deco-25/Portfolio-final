import React from 'react'
import TestimonialMarquee from './TestimonialMarquee'

const TestimonialSection = () => {
  return (
    <div className='w-screen h-screen bg-white px-40 py-40'>
      <h1 className='text-7xl font-aboreto text-center'>Your name absolutely belongs in our testimonials (we're not kidding!)</h1>

      <TestimonialMarquee/>
    </div>
  )
}

export default TestimonialSection