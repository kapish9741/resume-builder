import React from 'react'

const Footer = () => {
  return (
    <div className='w-6/7 h-full flex justify-evenly items-center text-gray-100 mt-50'>
        <div className="flex items-center ml-8">
            <i className="bi bi-file-text text-blue-500 text-xl mr-2"></i>
            <h3 className="text-md font-normal">ResumeBuilder</h3>
        </div>

        <p className='text-gray-400 font-nornal text-sm'>© 2025 ResumeBuilder. All rights reserved.</p>
        <p className='text-gray-400 font-nornal text-sm'>Built with precision and care</p>

    </div>
  )
}

export default Footer