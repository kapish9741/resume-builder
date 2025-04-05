import React from 'react'

const Certification = ({index, certification, updateFormArray, removeFormArrayItem}) => {
  return (
    <>
        <div className='w-full flex justify-center items-start flex-col text-gray-100 gap-4 p-4 border-gray-800 border rounded-2xl'>
            <div className='w-full flex justify-between items-center flex-row'>
                <h4 className='text-xs text-gray-400 flex px-3 py-1 rounded-2xl bg-gray-800'>Certification {index+1}</h4>
                <button onClick={(e) => {
                    e.preventDefault()
                    removeFormArrayItem('certificates',index)
                }} className='flex focus:outline-none border-none cursor-pointer'><i class="text-xl bi bi-x"></i></button>
            </div>
            <div className='w-full flex justify-start items-center flex-row gap-4'>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Name</label>
                    <input value={certification.certificateName} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('certificates', index, "certificateName", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex placeholder:text-gray-600 px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='AWS Certification' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Issuer</label>
                    <input value={certification.issuer} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('certificates', index, "issuer", e.target.value)
                    }} className='w-full text-sm text-gray-100 flex placeholder:text-gray-600 px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='Amazon web services' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-1'>
                    <label className='text-sm text-gray-100 flex py-1 rounded-md bg-black'>Date</label>
                    <input value={certification.certificateDate} onChange={(e) => {
                        e.preventDefault()
                        updateFormArray('certificates', index, "certificateDate", e.target.value)
                    }} className='w-full text-sm text-gray-100 placeholder:text-gray-600 flex px-3 py-2 rounded-md bg-black border border-gray-800 focus:outline-gray-100' type="text" placeholder='June 2024' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Certification