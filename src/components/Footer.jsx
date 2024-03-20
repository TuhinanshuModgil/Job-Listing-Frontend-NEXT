import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='w-full h-[350px] border-t-2 flex flex-col justify-center items-center'>
      <div className='sm:w-1/2 w-full h-full flex  justify-between p-5'>
        <div className='flex flex-col gap-4'>
        <Link href={'/home'} className='font-bold'>
        Footer Content
        </Link>
        <Link href={'/home'}>
        Booking Support
        </Link>

        </div>

        <div className='flex flex-col gap-4'>
        <Link href={'/home' } className='font-bold'>
        Booking Support
        </Link>
        <Link href={'/home'}>
        Booking Support
        </Link>

        </div>


        <div className='flex flex-col gap-4'>
        <Link href={'/home'} className='font-bold'>
        Booking Support
        </Link>
        <Link href={'/home'} >
        Booking Support
        </Link>

        </div>


        

        </div>
    </div>
  )
}

export default Footer
