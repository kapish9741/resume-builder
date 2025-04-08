import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <div className="w-4/5 md:w-2/3 h-1/2 md:h-2/3 z-10 relative flex justify-center items-center border border-gray-800 rounded-2xl flex-col md:gap-4 gap-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f3e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f3e_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
        <div className='flex justify-center items-center bg-blue-950 px-4 py-0.5 rounded-2xl'>
            <span className="text-sm md:text-md text-blue-400 font-normal flex gap-2 justify-center items-center"><i className="bi bi-arrow-right text-blue-400 text-sm md:text-md"></i>Get Started</span>
        </div>
        <h1 className='text-center md:text-start text-xl md:text-3xl text-gray-100 mt-2'>Ready to Create Your Professional Resume?</h1>
        <p className='text-center md:text-start text-sm md:text-lg text-gray-400'>Start building your resume now and take the next step in your career journey.</p>
        <button className='text-gray-100 bg-blue-500 px-5 py-2 md:px-10 md:py-4 rounded-lg hover:bg-blue-600 cursor-pointer' onClick={() => navigate("/app")}>Build Your Resume<i className="bi bi-arrow-right text-gray-100 text-md"></i></button>
    </div>
  )
}

export default GetStarted