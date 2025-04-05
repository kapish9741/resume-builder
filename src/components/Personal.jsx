import {React, useState} from 'react'

const Personal = ({form, updateForm}) => {
    const handleChange = (e) => {
        updateForm({...form,[e.target.name]: e.target.value})
    }

  return (
    <>
        <div className='bg-black w-full p-5 flex justify-center items-start flex-col gap-1 border border-gray-800 rounded-2xl'>
                <div className='w-full flex justify-start items-center gap-4'>
                    <h2 className='text-md text-gray-100 flex'>Personal Information</h2>
                    <p className='text-xs font-extralight text-blue-400 flex bg-blue-950 px-2 py-1 rounded-2xl'>Your contact details</p>
                </div>
                <p className='text-sm text-gray-400'>Your contact details</p>
            <form action="" className='w-full flex justify-center items-start gap-6 flex-col mt-10'>
                <div className='w-full flex justify-center items-start flex-col gap-2'>
                    <label htmlFor="name" className='text-gray-300 text-sm py-1'>Full Name</label>
                    <input onChange={handleChange} name='name' type="text" placeholder='John Doe' className='placeholder:text-gray-600 w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100' />
                </div>
                <div className='w-full flex justify-start items-center flex-row gap-8'>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="phone" className='text-gray-300 text-sm py-1'>Phone Number</label>
                        <input onChange={handleChange} name='phone' type="text" placeholder='0123456789' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="email" className='text-gray-300 text-sm py-1'>Email Address</label>
                        <input onChange={handleChange} name='email' type="text" placeholder='jhon.doe@gmail.com' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                </div>
                <div className='w-full flex justify-start items-center flex-row gap-8'>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="address" className='text-gray-300 text-sm py-1'>Address</label>
                        <input onChange={handleChange} name='address' type="text" placeholder='123 Main St, City Country' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="twitter" className='text-gray-300 text-sm py-1'>Twitter</label>
                        <input onChange={handleChange} name='twitter' type="text" placeholder='@username' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                </div>
                <div className='w-full flex justify-start items-center flex-row gap-8'>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="linkedin" className='text-gray-300 text-sm px-2 py-1'>LinkedIn</label>
                        <input onChange={handleChange} name='linkedin' type="text" placeholder='www.linkedin.com/in/username' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="github" className='text-gray-300 text-sm py-1'>GitHub</label>
                        <input onChange={handleChange} name='github' type="text" placeholder='github.com/username' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                </div>
                <div className='w-full flex justify-start items-center flex-row gap-8'>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="leetcode" className='text-gray-300 text-sm py-1'>LeetCode</label>
                        <input onChange={handleChange} name='leetcode' type="text" placeholder='leetcode.com/username' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                    <div className='w-full flex justify-center items-start flex-col gap-2'>
                        <label htmlFor="codeforces" className='text-gray-300 text-sm py-1'>CodeForces</label>
                        <input onChange={handleChange} name='codeforces' type="text" placeholder='codeforces.com/profile/username' className='w-full px-3 py-3 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 placeholder:text-gray-600' />
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Personal