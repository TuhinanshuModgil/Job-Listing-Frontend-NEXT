'use client'
import React, { useEffect, useState } from 'react'

const postData = async (data,cardID) => {
    try {
  
      const response = await fetch(`http://localhost:5000/jobs/${cardID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('PUT request successful');
      } else {
        console.error('PUT request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

async function getJobData(jobID) {

    try {
      
      const res = await fetch(`http://localhost:5000/jobs/${jobID}`)
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



function page({ params }) {

    const cardID = params.editID
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

        postData(newData, cardID)
    }


    useEffect(()=>{
    const getJobsDetails =  ()=>{
        getJobData(cardID)
        .then(
            (res)=>{
                const data  = res 
                console.log("This is card data", data)
                if(data){
                    setRole(prev => data.role)
                setDescription(prev => data.description)
                setCompany(prev => data.company)
                setStipend(prev => data.stipend)
                setLocation(prev => data.location)
                }
                
            }
        )
        .catch((e)=>{
            console.log(e.message)
        })

        


    }

    getJobsDetails()
    },[])
    

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
        My Post: {params.editID}
    </div>
    )
}

export default page


