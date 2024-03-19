'use client'
import SearchBar from '../../components/SearchBar'
import React from 'react'

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


  return (
    <div className='flex flex-col items-center'>


      <SearchBar/>
    </div>
  )
}

export default page
