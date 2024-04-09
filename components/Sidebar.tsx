import React from 'react'
import { FaGithub, FaCloudDownloadAlt,  FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
      <Link href="/DeepralProfile.png">
        <img src="/DeepralProfile.png" className='object-cover object-top mx-auto rounded-full w-36 h-36' alt="Profile Image"/>
      </Link>
      <h2 className='my-5 text-2xl font-bold'>Deepral Shakya</h2>
      <p className='p-2 bg-orange-100 rounded-full'>Frontend Developer</p>
      <a className='flex items-center justify-center p-2 my-3 bg-orange-100 rounded-full' href='/assets/DeepralResume.pdf' download="DeepralResume.pdf"><FaCloudDownloadAlt className='w-6 h-6 mx-1'/>Download Resume</a>
      
      {/* icons */}
      <div className='flex justify-around mx-auto my-6'>
      <a href='https://github.com/DeepralShakya'> <FaGithub className='w-7 h-7'/></a>
      <a href='https://www.instagram.com/deepral_shakya/'> <FaInstagram className='w-7 h-7'/></a>
      <a href='https://www.linkedin.com/in/deepral-shakya-a61753247/'> <FaLinkedin className='w-7 h-7'/></a>
      </div>

      {/* address */}
      <div className='py-6 my-1 mt-8'>
        <div className='flex items-center justify-center'>
            <CiLocationOn />
            <span>Imadol, Lalitpur</span>
        </div>
        <p className='flex items-center justify-center my-1'><MdEmail />shakyadeepral44@gmal.com</p>
        <p>9810112522</p>
      </div>
    </div>
  )
}

export default Sidebar
