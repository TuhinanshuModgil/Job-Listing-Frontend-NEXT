'use client'
import React, { useEffect, useState } from 'react'

const postData = async (data) => {
    try {
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('POST request successful');
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


function Page() {

    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [stipend, setStipend] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = ()=>{
        const newData = {
            role,
            description,
            company,
            stipend,
            location
        }
        console.log(newData)

        postData(newData)


    }


  return (
    <div>
        <div className='p-6 flex flex-col'>
      {/* Inputs for each variable */}
      <h1 className='font-bold'>Role:</h1>
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
        className='border-[1px] border-black/50 p-2 w-1/2  mb-5'
      />
      <h1 className='font-bold'>Descriptiion:</h1>
      <textarea
        rows={4} // Adjust the number of visible lines as needed
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className='border-[1px] border-black/50 p-2 w-1/2 mb-5 '
        />
      <h1 className='font-bold'>Company:</h1>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className='border-[1px] border-black/50 p-2 w-1/2 mb-5 '

      />
      <h1 className='font-bold'>Stipend/CTC:</h1>
      <input
        type="text"
        value={stipend}
        onChange={(e) => setStipend(e.target.value)}
        placeholder="Stipend"
        className='border-[1px] border-black/50 p-2 w-1/2 mb-5 '

      />
      <h1 className='font-bold'>Location:</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className='border-[1px] border-black/50 p-2 w-1/2 mb-5 '

      />

      <button className='text-white w-[90px] p-3 rounded-lg bg-black/60' onClick={handleSubmit}>Submit</button>
      
      {/* Displaying the values for demonstration */}
      <div className='pt-8'>

      {/* <p>Role: {role}</p>
      <p>Description: {description}</p>
      <p>Company: {company}</p>
      <p>Stipend: {stipend}</p>
      <p>Location: {location}</p> */}
      </div>
    </div>
        
    </div>
  )
}

export default Page
