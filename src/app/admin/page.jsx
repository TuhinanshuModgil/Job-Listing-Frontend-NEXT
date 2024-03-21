// ----------------Read Me-------------------
// This is the main page for the admin dashboard
// It will provide access to all the added job listings with the option to edit and delete 
// It also has the option to add new job postings


'use client'
import JobCardAdmin from '../../components/JobCardAdmin'
import SearchBar from '../../components/SearchBar'
import React, { use, useEffect, useState } from 'react'
import Link from 'next/link'

import { MdOutlineAddBox } from 'react-icons/md'

// Function to GET the job data from the database
async function getJobData() {

  try {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
 
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
 
    return res.json()

  } catch (error) {
    console.log(error.message)
  }
  
}


function Page() {

  const [jobsData, setJobsData] = useState(null)
  const [refresh, setRefresh] = useState(1)

  const handleAddJob = ()=>{

  }


  useEffect(()=>{
    const setJobData =   async ()=>{
      try {
        const data = await getJobData();
        setJobsData(data)
        
      } catch (error) {
        console.log(error.message)
      }
  

    }
    setJobData()

  },[refresh])

  useEffect(()=>{
    console.log("reloaded Page")
  },[refresh])


  return (
    <div className='flex flex-col items-center' >

      <div className='p-5 flex justify-center gap-5'>
      
      <SearchBar />
      <Link href={`/admin/addjobs`}>
      <button
          onClick={handleAddJob}
          className="bg-black/70 text-white py-2 px-4 m-1 rounded-full hover:bg-black/80 focus:outline-none flex justify-center items-center gap-2"
          >
          Add Job <MdOutlineAddBox/>
        </button>
          </Link>
      </div>  

      <div className="p-6 grid sm:grid-cols-3 gap-3 w-[1200px] justify-between">

      {jobsData?jobsData.data.map((jobData)=>(
        <div key={jobData._id}>

          <JobCardAdmin jobData={jobData} setRefresh={setRefresh}/>
        </div>
      )):<></>}
      
      
      </div>

    </div>
  )
}

export default Page
