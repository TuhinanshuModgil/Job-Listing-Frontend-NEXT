// ----------------Read Me-------------------
// Description: This is the job card that is used in the admin dashboard 
// it has additional functionalities like edit and delete the job


// 'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { ImCross } from 'react-icons/im';


// Function to make a DELETE request to our server
const deleteData = async (jobID) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs/${jobID}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`DELETE request successful for job with ID ${jobID}`);
    } else {
      console.error(`DELETE request failed for job with ID ${jobID}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

function JobCard({ jobData , setRefresh}) {

  const [cardId, setCardID] = useState(null)
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleApplyNow = ()=>{
    
  }

  // Function to trigger a page rerender
  // const triggerRerender = () => {
  //   // Reload the current route
  //   router.refresh();
  // };

  const handleDelete = (cardId) => {
    deleteData(cardId).then(()=>{
      // triggerRerender()
      setRefresh(prev=> prev+1)
    }
    )
    .catch((e)=>{
      console.log(e.message)
    })
    

  }


  useEffect(() => {
    setCardID(jobData._id)
  }, [])
  // console.log(cardId)
  return (
    <div className='w-[350px] h-[250px] shadow-md border-black/20 border-[1px] rounded-lg p-6 flex flex-col'>

      <div className='flex justify-start gap-6 items-start'>
        <Image src="/CompanyLogo.jpg" width={60} height={60} className='rounded-full' alt='Comapny logo' />
        <div className='flex flex-1 justify-end gap-3'>

          {/* This will lead us to the edit page that is setted up dynamically using the card ID */}
          <Link href={`/admin/${cardId}`}>
            <AiOutlineEdit className='text-2xl  text-green-700' />
          </Link>
          <button onClick={() => toggleModal()}>
            <MdOutlineDelete className='text-2xl text-red-700' />
          </button>
        </div>
      </div>

      <h1 className='font-bold text-xl text-black/80 pt-4'>{jobData.role}</h1>
      <h1 className=' text-base text-black/60 '>{jobData.location} , {jobData.company} </h1>
      <div className=' text-black/50 font-bold bg-white  mt-6  flex' >{jobData.stipend}</div>

      {isModalOpen &&  (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 text-black" >
          <div className="bg-white  w-1/2 h-1/4 rounded-lg p-8 max-w-md flex flex-col">
            <div className='flex justify-end'>
          <ImCross onClick={toggleModal} className='text-red-700'/>

            </div>
    
              <h1 className='text-lg p-3'>Are you sure you want to delete this job listing</h1>
            
            <div className='flex flex-1 flex-col justify-end'>
            <button
              onClick={()=>handleDelete(cardId)}
              className="bg-black/70 text-white py-2 px-4 m-1 rounded-full hover:bg-black/80 focus:outline-none"
            >
              Delete
            </button>
            </div>
          </div>
        </div>
        )}

    </div>
  )
}

export default JobCard
