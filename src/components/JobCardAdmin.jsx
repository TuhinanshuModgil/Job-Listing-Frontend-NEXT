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


// Function to make a DELETE request to our server
const deleteData = async (jobID) => {
  try {
    const response = await fetch(`http://localhost:5000/jobs/${jobID}`, {
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
          <button onClick={() => handleDelete(cardId)}>
            <MdOutlineDelete className='text-2xl text-red-700' />
          </button>
        </div>
      </div>

      <h1 className='font-bold text-xl text-black/80 pt-4'>{jobData.role}</h1>
      <h1 className=' text-base text-black/60 '>{jobData.location} , {jobData.company} </h1>
      <div className=' text-black/50 font-bold bg-white  mt-6  flex' >{jobData.stipend}</div>

    </div>
  )
}

export default JobCard
