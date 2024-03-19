'use client'
import Image from "next/image";
import SearchBar from "../components/SearchBar.jsx";
import JobCard from "../components/JobCard";

import { useState,useEffect } from "react";


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


export default function Home() {

  const [jobsData, setJobsData] = useState(null)
  
  // let data = await getJobData() 
  // const handleRefresh =async  ()=>{
  //   data = await getJobData() 
  // }

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

  // console.log(typeof(data))
  console.log(jobsData)
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      

    <div className=" bg-white flex flex-col items-center">
      <div className="bg-cover bg-center h-[500px] w-[1000px] my-10 rounded-3xl" style={{ backgroundImage: "url('./heroBGBlue.jpg')" }} >
      
      </div>
      <SearchBar/>
      
      
      <div className="p-6 flex flex-wrap gap-3 w-[1200px] justify-between">

      {jobsData?jobsData.data.map((jobData)=>(
        <div key={jobData._id}>

          <JobCard jobData={jobData}/>
        </div>
      )):<></>}
      
      
      </div>

    
    </div>
    </div>
    </>
  );
}
