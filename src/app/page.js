// ----------------Read Me-------------------
// This is the main page of our application that has the hero section and the job card
// all cards are rendered dynamically with data from the backend

'use client'
// import 'dotenv/config'

import Image from "next/image";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

import { useState,useEffect } from "react";

// Function that GETs the data from the backend
async function getJobData() {

  try {
    console.log("This is the .env return", process.env.NEXT_PUBLIC_SERVER_ADDRESS)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs`)
    
 
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


  // This will load the job data when the component mounts
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
      
      
      <div className="p-6 grid sm:grid-cols-3 gap-3 ">

      {/* Generating Job cards dynamically */}
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
