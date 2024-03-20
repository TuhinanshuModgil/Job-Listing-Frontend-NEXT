// 'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from './Modal';



function JobCard({jobData}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("ran this : ", isModalOpen )
    setIsModalOpen(false)
  };
  console.log("Page Rerendered")

  useEffect(()=>{

  },[isModalOpen])
    // console.log(jobData)
  return (
    <div className='w-[350px] h-[250px] shadow-md border-black/20 border-[1px] rounded-lg p-4 flex flex-col' onClick={openModal}>
      
        <Image src="/CompanyLogo.jpg" width={60} height={60} className='rounded-full' alt='Comapny logo'/ >

        <h1 className='font-bold text-xl text-black/80 pt-4'>{jobData.role}</h1>
        <h1 className=' text-base text-black/60 '>{jobData.location} , {jobData.company} </h1>
        <div className=' h-8 p-1 pl-4 text-black/50 font-bold bg-white border-black/20 border-[1px] mt-6  flex rounded-full shadow-md' >{jobData.stipend}</div>
        {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default JobCard
