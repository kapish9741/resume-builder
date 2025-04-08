import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-4 py-6 flex flex-col md:flex-row justify-center md:justify-evenly items-center text-gray-100 space-y-4 md:space-y-0 mt-10'>
        <div className="flex items-center md:ml-8">
            <i className="bi bi-file-text text-blue-500 text-xl mr-2 lg:mr-0 lg:text-lg"></i>
            <h3 className="text-md font-normal">ResumeBuilder</h3>
        </div>

        <p className='text-gray-400 font-normal text-sm text-center md:text-left md:text-xs'>© 2025 ResumeBuilder. All rights reserved.</p>
        <p className='text-gray-400 font-normal text-sm text-center md:text-left md:text-xs'>Built with precision and care</p>

    </div>
  )
}

export default Footer