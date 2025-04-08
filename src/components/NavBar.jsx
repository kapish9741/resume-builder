import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NavBar = () => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const navigate = useNavigate();
    const location = useLocation();

    const [darkMode,setdarkMode] = useState(isDark)

  return (
    <nav className="fixed w-full px-0 sm:px-2 py-2 text-gray-100 flex items-center justify-between bg-clip-padding backdrop-filter backdrop-blur bg-opacity-80 backdrop-saturate-100 backdrop-contrast-100 z-50">

        <div className="cursor-pointer flex items-center ml-2 md:ml-8">
            <i className="bi bi-file-text text-blue-500 md:text-3xl text-xl mr-2"></i>
            <h1 className="lg:text-xl md:text-lg text-sm font-medium " onClick={() => navigate("/")}>Hirelyst</h1>
        </div>
        <div className="hidden sm:flex justify-center items-center space-x-4">
            <h2 className='hidden cursor-pointer text-sm md:text-md sm:inline relative before:bg-blue-500 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' onClick={() => navigate("/")}>Home</h2>
            <h2 className='hidden cursor-pointer text-sm md:text-md sm:inline relative before:bg-blue-500 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' onClick={() => navigate("/app")}>App</h2>
        </div>

        <div className='flex items-center justify-end w-full sm:w-auto sm:mt-0 md:gap-8 gap-2'>
            <button className="px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-800" onClick={() => setdarkMode(!darkMode)}>
                {darkMode ?<i className="bi bi-moon-fill md:text-xl text-md"></i> : <i className="bi bi-sun-fill md:text-xl text-md"></i>}
            </button>
            {location.pathname === "/" ? (
                <button className='cursor-pointer flex items-center mr-2 md:mr-8 bg-blue-500 hover:bg-blue-600 text-white md:py-1.5 md:px-4 py-1.5 px-2 rounded-lg gap-2 md:text-sm text-xs' onClick={() => navigate("/app")}>Create Resume<i class="bi bi-arrow-right md:text-xl text-md"></i></button>
            ) : (
                <button className='cursor-pointer flex items-center mr-2 md:mr-8 bg-black hover:bg-gray-600 text-white md:py-1.5 md:px-4 py-1.5 px-2 rounded-lg gap-2 md:text-sm text-xs border border-gray-700' onClick={() => navigate("/")}><i class="bi bi-arrow-left md:text-xl text-md"></i>Back to Home</button>
            )}
        </div>

    </nav>
  )
}

export default NavBar