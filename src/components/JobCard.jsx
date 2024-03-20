// 'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from './Modal';
import { ImCross } from "react-icons/im";




function JobCard({jobData}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  function handleApplyNow(){
    console.log("Applied For Job")
  }
  
  console.log("Page Rerendered")

  useEffect(()=>{

  },[isModalOpen])
    // console.log(jobData)
  return (
    <div className='w-[350px] h-[250px] shadow-md border-black/20 border-[1px] rounded-lg p-4 flex flex-col' onClick={toggleModal}>
      
        <Image src="/CompanyLogo.jpg" width={60} height={60} className='rounded-full' alt='Comapny logo'/ >

        <h1 className='font-bold text-xl text-black/80 pt-4'>{jobData.role}</h1>
        <h1 className=' text-base text-black/60 '>{jobData.company}, {jobData.location}  </h1>
        <div className=' h-8 p-1 pl-4 text-black/50 font-bold bg-white border-black/20 border-[1px] mt-6  flex rounded-full shadow-md' >{jobData.stipend}</div>
        {isModalOpen &&  (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 text-black" >
          <div className="bg-white  w-1/2 h-1/2 rounded-lg p-8 max-w-md flex flex-col">
            <div className='flex justify-end'>
          <ImCross onClick={toggleModal} className='text-red-700'/>

            </div>
    
            <h2 className="text-2xl font-bold mb-4">{jobData.role}</h2>
            <div>

            <p className="text-gray-800 mb-4 text-lg">{jobData.description}</p>
            <h1 className='text-sm font-bold'>{jobData.company}, {jobData.location}</h1>
            <h1 className='text-sm font-bold'>{jobData.stipend}</h1>
            </div>
            <div className='flex flex-1 flex-col justify-end'>
            <button
              onClick={handleApplyNow}
              className="bg-black/70 text-white py-2 px-4 m-1 rounded-full hover:bg-black/80 focus:outline-none"
            >
              Apply Now
            </button>
            </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default JobCard
