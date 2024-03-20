// ----------------Read Me-------------------
// Just added as a little easter egg to all the unfinished parts  :)


import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='flex h-screen '>
     

     <div className="bg-cover bg-center h-full w-full  " style={{ backgroundImage: "url('./codingInProgress.svg')" }} >
     <h1 className='text-5xl text-center my-16 text-white font-bold '>Coding In Progress</h1>
     </div>
      {/* <Image src="/codingInProgress.jpg" width={400} height={900}  /> */}
      {/* <div className='flex flex-1 justify-center items-center'>

      
        </div> */}
      </div>
  )
}

export default page
