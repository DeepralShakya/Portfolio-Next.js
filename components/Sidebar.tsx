import React from 'react'
import { FaGithub, FaCloudDownloadAlt,  FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s" 
      className='mx-auto rounded-full h-30 w-30' alt="Profile Image"/>
      <h2 className='my-5 text-2xl font-bold'>Deepral Shakya</h2>
      <p>Frontend Developer</p>
      <a className='flex items-center justify-center px-2 py-1 my-3' href='#'><FaCloudDownloadAlt className='w-6 h-6 mx-1'/>Download Resume</a>
      
      {/* icons */}
      <div className='flex justify-around mx-auto my-3'>
      <a href='https://github.com/DeepralShakya'> <FaGithub className='w-7 h-7'/></a>
      <a href='#'> <FaInstagram className='w-7 h-7'/></a>
      <a href='#'> <FaLinkedin className='w-7 h-7'/></a>
      </div>

      {/* address */}
      <div className='py-6 my-1'>
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
