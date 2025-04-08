import React from 'react'
import resumeImage from '../assets/resume builder image.png';
import { useNavigate } from 'react-router-dom';

const Lander = () => {
  const navigate = useNavigate();
  return (
    <div className='w-4/5 text-gray-100 flex items-center justify-center md:flex-row flex-col lg:gap-0 md:gap-10 gap-2  mt-20 md:mt-10'>
        <div className='text-gray-100 flex items-start  flex-col'>
        <span className=' text-blue-400 bg-blue-900 px-2 py-1 rounded-2xl text-xs lg:text-sm'><i className="bi bi-star"></i> Professional Resume Builder</span>
        <h1 className='text-3xl md:text-4xl lg:text-6xl mt-8 md:mt-12 flex justify-start font-medium text-start'>Create Professional</h1>
        <h2 className='text-3xl md:text-4xl lg:text-6xl mt-1 flex justify-start font-medium text-start text-blue-400'>Resumes in Minutes</h2>
        <p className='text-md md:text-md md:text-start text-start lg:text-lg mt-4 w-9/10 text-gray-400'>A minimal, elegant resume builder designed to help you create standout resumes that get you noticed by recruiters.</p>
        <div className='flex w-full justify-center md:justify-start items-center md:items-center mt-8 gap-8 flex-col sm:flex-row'>
            <button className='cursor-pointer md:w-50 w-full text-gray-100 bg-blue-500 hover:bg-blue-600 py-2 px-5 md:py-4 md:px-10 rounded-md text-md flex items-center justify-center gap-2' onClick={() => navigate("/app")}>Get Started<i className="bi bi-arrow-right text-gray-100 text-md"></i></button>
            <button className='cursor-pointer md:w-50 w-full text-gray-100 border-gray-700 border hover:bg-gray-800 py-2 px-5 md:py-4 md:px-10 rounded-md text-md'>Learn More</button>
        </div>
        </div>
        <img className='w-96 h-64 object-cover rounded-lg' src={resumeImage} alt='resume'></img>
    </div>
  )
}

export default Lander