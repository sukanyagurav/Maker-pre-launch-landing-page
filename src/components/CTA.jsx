import React from 'react'

const CTA = () => {
  return (
    <section className='bg-style relative flex flex-col items-center justify-center p-4 h-[400px]' >
      <h2 className='text-center text-white text-3xl font-semibold my-8'>Get notified when we launch</h2> 
      <div className='flex gap-8  w-full max-w-[600px] mx-auto flex-col md:flex-row'>
        <input type="email" placeholder='Email address' className='bg-[#093E67] py-4 px-5 rounded-full  text-[#4598d7] font-semibold md:flex-1'
        />
        <button className='p-3 bg-[#3EEAE7] rounded-full md:flex-[0.4] '>Get notified</button>
      </div>
    </section>
  )
}

export default CTA
