'use client'
import JobCardAdmin from '../../components/JobCardAdmin'
import SearchBar from '../../components/SearchBar'
import React, { useEffect, useState } from 'react'
import { MdOutlineAddBox } from 'react-icons/md'


async function getJobData() {

  try {
    
    const res = await fetch('http://localhost:5000/jobs')
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

function page() {

  const [jobsData, setJobsData] = useState(null)

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

  },[])


  return (
    <div className='flex flex-col items-center' >

      <div className='p-5 flex justify-center gap-5'>
      
      <SearchBar />
      
      <button
          onClick={handleAddJob}
          className="bg-black/70 text-white py-2 px-4 m-1 rounded-full hover:bg-black/80 focus:outline-none flex justify-center items-center gap-2"
        >
          Add Job <MdOutlineAddBox/>
        </button>
      </div>  

      <div className="p-6 flex flex-wrap gap-3 w-[1200px] justify-between">

      {jobsData?jobsData.data.map((jobData)=>(
        <div key={jobData._id}>

          <JobCardAdmin jobData={jobData}/>
        </div>
      )):<></>}
      
      
      </div>

    </div>
  )
}

export default page
