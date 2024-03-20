// ----------------Read Me-------------------
// Decription: A Navbar that can lead to various pages and the admin dashboard

// "use client"
import React from 'react'
import Link from 'next/link';

// import NextLogo from '../../public/CompanyLogo.jpg'

function Navbar() {
  return (
    <div className='w-full h-20 bg-white flex justify-center items-center border-y-2 border-black/20'>

      <nav className='flex items-center justify-between gap-44  text-black/70 font-bold  '>
        <div className='flex gap-8'>

          <Link href="/">
        <img src="/CompanyLogo.jpg" alt="next-logo" className='w-[50px] h-[50px] rounded-full' />
          </Link>
        <div className='flex items-center'>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">
              Feed
            </Link>
          </li>
          <li>
            <Link href="/home">
              Contacts
            </Link>
          </li>
          <li>
            <Link href="/home">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/home">
              Messages
            </Link>
          </li>
          <li>
            <Link href="/home">
              Updates
            </Link>
          </li>
        </ul>
        </div>
        </div>
        <div className='flex items-center gap-5'>
        <ul>
            <li>
            <Link href="/admin">
              Admin
            </Link> 
            </li>
        </ul>
        <img src="/userImage.jpg" alt="next-logo" className='w-[50px] h-[50px] rounded-full' />
  
        </div>
      </nav>
    </div>
  )
}

export default Navbar
