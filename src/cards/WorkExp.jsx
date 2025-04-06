import React from 'react'

const WorkExp = ({index, experience, updateFormArray, removeFormArrayItem}) => {
  return (
    <>
        <div className='w-full flex justify-center items-start flex-col text-gray-100 gap-4 p-4 border-gray-800 border rounded-2xl'>
            <div className='w-full flex justify-between items-center flex-row'>
                <h4 className='text-xs text-gray-400 flex px-3 py-1 rounded-2xl bg-gray-800'>Experience {index+1}</h4>
                <button onClick={(e) => {
                    e.preventDefault()
                    removeFormArrayItem('workExperience',index)
                }} className='flex focus:outline-none border-none cursor-pointer'><i class="text-xl bi bi-x"></i></button>
            </div>
            <div className='w-full flex justify-start items-center flex-row gap-8'>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Job Title</label>
                    <input value={experience.jobTitle} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('workExperience', index, "jobTitle", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100 placeholder:text-gray-600' type="text" placeholder='Software Engineer' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Company</label>
                    <input value={experience.company} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('workExperience', index, "company", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100 placeholder:text-gray-600' type="text" placeholder='Company Name' />
                </div>
            </div>
            <div className='w-full flex justify-center items-start flex-col gap-1'>
                <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Duration</label>
                <input value={experience.duration} onChange={(e) => {
                    e.preventDefault()
                    updateFormArray('workExperience', index, "duration", e.target.value)
                }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100 placeholder:text-gray-600' type="text" placeholder='Jan 2020 - Present' />
            </div>
            <div className='w-full flex justify-center items-start flex-col gap-2'>
                <label htmlFor='description' className='text-gray-300 text-sm py-1'>Description</label>
                <textarea onChange={(e)=>{
                    e.preventDefault()
                    updateFormArray('workExperience', index, "description", e.target.value)
                }} name='workDescription' placeholder='Describe your responsibilites and achievement...' className='w-full h-32 px-3 py-2 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-10 text-left overflow-y-auto resize-none focus:outline-gray-100 placeholder:text-gray-600'></textarea>
            </div>
        </div>
    </>
  )
}

export default WorkExp