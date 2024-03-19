import React from 'react'
import Image from 'next/image'

function JobCard({jobData}) {
  return (
    <div className='w-[350px] h-[250px] shadow-md border-black/20 border-[1px] rounded-lg p-4 flex flex-col'>
      
        <Image src="/CompanyLogo.jpg" width={60} height={60} className='rounded-full' alt='company logo'/>

        <h1 className='font-bold text-xl text-black/80 pt-4'>Job Role</h1>
        <h1 className=' text-base text-black/60 '>Place , Company Name </h1>
        <div className=' h-8 p-1 pl-4 text-black/50 font-bold bg-white border-black/20 border-[1px] mt-6  flex rounded-full shadow-md' >Expected Stipend</div>
      
    </div>
  )
}

export default JobCard