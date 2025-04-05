import React from 'react'

const Project = ({index, project, updateFormArray, removeFormArrayItem}) => {
  return (
    <>
        <div className='w-full flex justify-center items-start flex-col text-gray-100 gap-4 p-4 border-gray-800 border rounded-2xl'>
            <div className='w-full flex justify-between items-center flex-row'>
                <h4 className='text-xs text-gray-400 flex px-3 py-1 rounded-2xl bg-gray-800'>Project {index+1}</h4>
                <button onClick={(e) => {
                    e.preventDefault()
                    removeFormArrayItem('projects',index)
                }} className='flex focus:outline-none border-none cursor-pointer'><i class="text-xl bi bi-x"></i></button>
            </div>
            <div className='w-full flex justify-start items-center flex-col gap-4'>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Project Name</label>
                    <input value={project.projectName} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('projects', index, "projectName", e.target.value)
                    }} className='w-full text-sm text-gray-100 placeholder:text-gray-600 flex px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='Resume Builder App' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Date</label>
                    <input value={project.projectDate} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('projects', index, "projectDate", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md placeholder:text-gray-600 bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='April 2025' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Description</label>
                    <textarea onChange={(e)=>{
                        e.preventDefault()
                        updateFormArray('projects', index, "description", e.target.value)
                    }} name='projectDescription' placeholder='A brief description of the project and your role...' className='w-full h-30 px-3 py-2 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-10 text-left overflow-hidden resize-none focus:outline-gray-100 placeholder:text-gray-600'></textarea>
                </div>
            </div>
        </div>
    </>
  )
}

export default Project