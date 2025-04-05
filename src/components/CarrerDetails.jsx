import React, { useState } from 'react'
import WorkExp from '../cards/WorkExp.jsx'
import Academic from '../cards/Academic.jsx'

const CareerDetails = ({form, updateForm}) => {

    const addQualification = () => {
        const newQualification = {
          degree: '',
          institution: '',
          year: '',
        }
        updateForm((prevForm)=>({
            ...prevForm,academicQualification: [...prevForm.academicQualification,newQualification]
        }))
    }

    
    const addWorkExperience = () => {
        const newExperience = {
          jobTitle: '',
          company: '',
          duration: '',
          description: '',
        };
        updateForm((prevForm) => ({...prevForm,workExperience: [...prevForm.workExperience, newExperience],}));
    };

    const updateFormArray = (type, index, field, value) => {
        updateForm((prevForm) => ({
            ...prevForm,
            [type]: prevForm[type].map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            ),
        }));
    };
    
    const removeFormArrayItem = (type, index) => {
        updateForm((prevForm) => ({
            ...prevForm,
            [type]: prevForm[type].filter((_, i) => i !== index),
        }));
    };

  return (
    <>
        <div className='bg-black w-full p-5 flex justify-center items-start flex-col gap-1 border border-gray-900 rounded-2xl'>
            <div className='w-full flex justify-start items-center gap-4'>
                <h2 className='text-md text-gray-100 flex'>Career Details</h2>
                <p className='text-xs font-extralight text-blue-400 flex bg-blue-950 px-2 py-1 rounded-2xl'>Your professional journey</p>
            </div>
            <p className='text-sm text-gray-400'>Your professional journey</p>
            <form action="" className='w-full flex justify-center items-start gap-6 flex-col mt-10'>
                <div className='w-full flex justify-center items-start flex-col gap-2'>
                    <label htmlFor='career-bio' className='text-gray-300 text-sm py-1'>Career Objective</label>
                    <textarea name='career-bio' placeholder='Brief Summary of Your Career goals and aspirations...' className='w-full h-30 px-3 py-2 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-100 text-left placeholder:text-gray-600' onChange={(e) => updateForm({ ...form, careerObjective: e.target.value })}></textarea>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="work-experience" className='text-gray-300 text-sm'>Work Experience</label>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            addWorkExperience();
                        }} className='border border-gray-800 text-gray-100 text-xs font-extralight px-3 py-2 rounded-xl cursor-pointer'><i className="bi bi-plus text-gray-100 text-xs"></i> Add Experience</button>
                    </div>
                    {form.workExperience.length>0 ? (
                        form.workExperience.map((exp, index) => (
                            <WorkExp
                                key={index}
                                index={index}
                                experience={exp}
                                updateFormArray={updateFormArray}
                                removeFormArrayItem={removeFormArrayItem}
                            />
                        ))
                    ) : (
                        <div className='w-full flex justify-center items-center h-50 border-dashed border border-gray-700 rounded-md flex-col gap-4'>
                            <p className='text-xs text-gray-400'>No work experiences added yet</p>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                addWorkExperience();
                            }} className='text-blue-500 text-sm hover:text-blue-400 cursor-pointer'>Add your first experience</button>
                        </div>
                    )}
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="work-experience" className='text-gray-300 text-sm'>Academic Qualifications</label>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            addQualification();
                        }} className='border border-gray-800 text-gray-100 text-xs font-extralight px-3 py-2 rounded-xl cursor-pointer'><i className="bi bi-plus text-gray-100 text-xs"></i> Add Education</button>
                    </div>
                    {form.academicQualification.length>0 ? (
                        form.academicQualification.map((qual, index) => (
                            <Academic
                                key={index}
                                index={index}
                                qualification={qual}
                                updateFormArray={updateFormArray}
                                removeFormArrayItem={removeFormArrayItem}
                            />
                        ))
                    ) : (
                        <div className='w-full flex justify-center items-center h-50 border-dashed border border-gray-700 rounded-md flex-col gap-4'>
                            <p className='text-xs text-gray-400'>No education qualifications added yet</p>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                addQualification();
                            }} className='text-blue-500 text-sm hover:text-blue-400 cursor-pointer'>Add your first qualification</button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    </>
  )
}

export default CareerDetails