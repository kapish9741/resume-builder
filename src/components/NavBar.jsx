import React, {useState} from 'react'

const NavBar = () => {

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    console.log(isDark)

    const [darkMode,setdarkMode] = useState(isDark)

  return (
    <nav className="absolute w-full h-15 bg-black text-gray-100 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-lg shadow-lg">

        <div className="flex items-center ml-8">
            <i className="bi bi-file-text text-blue-500 text-3xl mr-4"></i>
            <h1 className="text-xl font-medium">Resume Builder</h1>
        </div>
        <div className="flex items-center space-x-6">
            <h2 className="cursor-pointer hover:text-blue-500">Home</h2>
            <h2 className="cursor-pointer hover:text-blue-500">App</h2>
        </div>

        <div className='flex items-center justify-between'>
            <button className="mr-8 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-800" onClick={() => setdarkMode(!darkMode)}>
                {darkMode ?<i className="bi bi-moon-fill text-xl"></i> : <i className="bi bi-sun-fill text-xl"></i>}
            </button>
            <button className='cursor-pointer flex items-center mr-8 bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded-lg gap-2'>Create Resume<i class="bi bi-arrow-right text-xl"></i></button>
        </div>

    </nav>
  )
}

export default NavBar