import React from 'react'

const Academic = ({index, qualification, updateFormArray, removeFormArrayItem}) => {
  return (
    <>
        <div className='w-full flex justify-center items-start flex-col text-gray-100 gap-4 p-4 border-gray-800 border rounded-2xl'>
            <div className='w-full flex justify-between items-center flex-row'>
                <h4 className='text-xs text-gray-400 flex px-3 py-1 rounded-2xl bg-gray-800'>Education {index+1}</h4>
                <button onClick={(e) => {
                    e.preventDefault()
                    removeFormArrayItem('academicQualification',index)
                }} className='flex focus:outline-none border-none cursor-pointer'><i class="text-xl bi bi-x"></i></button>
            </div>
            <div className='w-full flex justify-start items-center flex-row gap-8'>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Degree</label>
                    <input value={qualification.degree} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('academicQualification', index, "degree", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md placeholder:text-gray-600 bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='Bachelor of Science in Computer Science' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Institution</label>
                    <input value={qualification.institution} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('academicQualification', index, "institution", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md placeholder:text-gray-600 bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='University Name' />
                </div>
            </div>
            <div className='w-full flex justify-center items-start flex-col gap-1'>
                <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Year</label>
                <input value={qualification.year} onChange={(e) => {
                    e.preventDefault()
                    updateFormArray('academicQualification', index, "year", e.target.value)
                }} className='w-full text-sm text-gray-100 flex px-3 py-2 rounded-md placeholder:text-gray-600 bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='2024 - 2028' />
            </div>
        </div>
    </>
  )
}

export default Academic