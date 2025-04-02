import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NavBar = () => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const navigate = useNavigate();
    const location = useLocation();

    const [darkMode,setdarkMode] = useState(isDark)

  return (
    <nav className="fixed w-full h-15 text-gray-100 flex items-center justify-between bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100">

        <div className="cursor-pointer flex items-center ml-8">
            <i className="bi bi-file-text text-blue-500 text-3xl mr-2"></i>
            <h1 className="text-xl font-medium" onClick={() => navigate("/")}>ResumeBuilder</h1>
        </div>
        <div className="flex items-center space-x-6">
            <h2 className='cursor-pointer inline relative before:bg-blue-500 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' onClick={() => navigate("/")}>Home</h2>
            <h2 className='cursor-pointer inline relative before:bg-blue-500 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' onClick={() => navigate("/app")}>App</h2>
        </div>

        <div className='flex items-center justify-between'>
            <button className="mr-8 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-800" onClick={() => setdarkMode(!darkMode)}>
                {darkMode ?<i className="bi bi-moon-fill text-xl"></i> : <i className="bi bi-sun-fill text-xl"></i>}
            </button>
            {location.pathname === "/" ? (
                <button className='cursor-pointer flex items-center mr-8 bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded-lg gap-2 text-sm' onClick={() => navigate("/app")}>Create Resume<i class="bi bi-arrow-right text-xl"></i></button>
            ) : (
                <button className='cursor-pointer flex items-center mr-8 bg-black hover:bg-gray-600 text-white py-1.5 px-4 rounded-lg gap-2 text-sm border border-gray-700' onClick={() => navigate("/")}><i class="bi bi-arrow-left text-xl"></i>Back to Home</button>
            )}
        </div>

    </nav>
  )
}

export default NavBar