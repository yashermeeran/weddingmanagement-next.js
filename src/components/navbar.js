import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  const currentPath = router.asPath

  

  return (

    <div className='flex items-center gap-3 justify-center'>
      <Link
        href='/'
        className={`${currentPath === '/' ? `text-blue-800`: ''}`}
      >Home</Link>
      <Link
        href='/about'
        className={`${currentPath === '/about' ? `text-blue-800`: ''}`}
      >About</Link>
     
     <Link
        href='/service'
      >Service</Link>
      <Link
        href='/contact'
      >Contact</Link>
      <Link
        href='/decoration'
      >decoration</Link>
      <div className='contact-details'>
        <h3 id='h3'>WEDDING MANAGEMENT</h3>
        <h4>+91-8148300181</h4>
        <h4>yasher0304@gmail.com</h4>
      </div>
      
    </div>
    
  )
}
export default Navbar