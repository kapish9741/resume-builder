import React, { useState } from 'react'
import WorkExp from '../cards/WorkExp.jsx'

const CareerDetails = () => {

    const [form, setForm] = useState({
        workExperience: [],
    })
    
    const addWorkExperience = () => {
        const newExperience = {
          jobTitle: '',
          company: '',
          duration: '',
          description: '',
        };
        setForm((prevForm) => ({...prevForm,workExperience: [...prevForm.workExperience, newExperience],}));
    };

    const updateExperience = (index, field, value) => {
        const updatedExperiences = form.workExperience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp);
        setForm(prevForm => ({ ...prevForm, workExperience: updatedExperiences }));
    };

    const removeWorkExperience = (index) => {
        const updatedExperiences = form.workExperience.filter((_, i) => i !== index);
        setForm(prevForm => ({...prevForm,workExperience: updatedExperiences,}));
      };

  return (
    <>
        <div className='w-full p-5 flex justify-center items-start flex-col gap-1 border border-gray-900 rounded-2xl'>
            <div className='w-full flex justify-start items-center gap-4'>
                <h2 className='text-md text-gray-100 flex'>Career Details</h2>
                <p className='text-xs font-extralight text-blue-400 flex bg-blue-950 px-2 py-1 rounded-2xl'>Your professional journey</p>
            </div>
            <p className='text-sm text-gray-400'>Your professional journey</p>
            <form action="" className='w-full flex justify-center items-start gap-6 flex-col mt-10'>
                <div className='w-full flex justify-center items-start flex-col gap-2'>
                    <label htmlFor='career-bio' className='text-gray-300 text-sm'>Career Objective</label>
                    <textarea name='career-bio' placeholder='Brief Summary of Your Career goals and aspirations...' className='w-full h-30 px-3 py-2 bg-black border border-gray-800 rounded-md text-gray-100 text-sm focus:outline-gray-10 text-left overflow-hidden resize-none'></textarea>
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="work-experience" className='text-gray-300 text-sm'>Work Experience</label>
                        <button onClick={addWorkExperience} className='border border-gray-800 text-gray-100 text-xs font-extralight px-3 py-2 rounded-xl'>Add Experience</button>
                    </div>
                    {form.workExperience.length>0 ? (
                        form.workExperience.map((exp, index) => (
                            <WorkExp
                                key={index}
                                index={index}
                                experience={exp}
                                updateExperience={updateExperience}
                                removeWorkExperience={removeWorkExperience}
                            />
                        ))
                    ) : (
                        <div className='w-full flex justify-center items-center h-40 border-dashed border border-gray-700 rounded-md'>

                        </div>
                    )}
                </div>
            </form>
        </div>
    </>
  )
}

export default CareerDetails