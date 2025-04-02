import React from 'react'
import resumeImage from '../assets/resume builder image.png';
import { useNavigate } from 'react-router-dom';

const Lander = () => {
  const navigate = useNavigate();
  return (
    <div className='w-4/5 text-gray-100 flex items-center justify-center flex-row'>
        <div className='text-gray-100 flex items-start flex-col'>
        <span className=' text-blue-400 bg-blue-900 px-2 py-1 rounded-2xl'><i className="bi bi-star"></i> Professional Resume Builder</span>
        <h1 className='text-6xl mt-12 flex justify-start font-medium'>Create Professional</h1>
        <h2 className='text-6xl mt-1 flex justify-start font-medium text-blue-400'>Resumes in Minutes</h2>
        <p className='mt-4 text-lg w-2/3 text-gray-400'>A minimal, elegant resume builder designed to help you create standout resumes that get you noticed by recruiters.</p>
        <div className='flex justify-center items-center mt-8 gap-8'>
            <button className='cursor-pointer text-gray-100 bg-blue-500 hover:bg-blue-600 py-4 px-10 rounded-md text-md flex items-center justify-center gap-2' onClick={() => navigate("/app")}>Get Started<i className="bi bi-arrow-right text-gray-100 text-md"></i></button>
            <button className='cursor-pointer text-gray-100 border-gray-700 border hover:bg-gray-800 py-4 px-10 rounded-md text-md'>Learn More</button>
        </div>
        </div>
        <img className='w-96 h-64 object-cover rounded-lg' src={resumeImage} alt='resume'></img>
    </div>
  )
}

export default Lander