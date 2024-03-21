'use client'
import React, { useEffect, useState } from 'react'




function Page() {

    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [stipend, setStipend] = useState('');
    const [location, setLocation] = useState('');
    const [displayMoodle, setDisplayMoodle] = useState(0)


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

          setDisplayMoodle(1)
            setTimeout(() => {
              setDisplayMoodle(0)
            }, 3000)
        } else {
          console.error('POST request failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

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

        {displayMoodle ===1? <div className='w-full h-9 rounded-lg bg-green-300 flex items-center text-gray-800 text-lg font-bold my-4'><h1 className='mx-auto'>Job Listing Added Succesfully</h1></div> : <div></div>}
          <h1 className='text-3xl mb-10 font-bold'>Add Job Listing</h1>
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
