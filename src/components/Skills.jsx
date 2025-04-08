import React, { useState } from 'react'
import Certification from '../cards/Certification.jsx'
import Project from '../cards/Project.jsx'

const Skills = ({form, updateForm}) => {

    const addCertificates = () => {
        const newCertificates = {
          certificateName: '',
          issuer: '',
          certificateDate: '',
        }
        updateForm((prevForm) => ({
            ...prevForm,
            certificates: [...(prevForm.certificates || []), newCertificates],
        }));
    }

    
    const addProjects = () => {
        const newProjects = {
          projectName: '',
          projectDate: '',
          description: '',
        };
        updateForm((prevForm) => ({
            ...prevForm,
            projects: [...(prevForm.projects || []), newProjects],
        }));
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
        let newObj = form;
        updateForm({...newObj, [type]: newObj[type].filter((_, i) => i !== index)});
    };

  return (
    <>
        <div className='bg-black w-full p-5 flex justify-center items-start flex-col gap-1 border border-gray-900 rounded-2xl'>
            <div className='w-full flex justify-start items-center gap-4'>
                <h2 className='text-md text-gray-100 flex'>Skills & Achievements</h2>
                <p className='text-xs font-extralight text-blue-400 flex bg-blue-950 px-2 py-1 rounded-2xl'>Showcase your expertise</p>
            </div>
            <p className='text-sm text-gray-400'>Showcase your expertise</p>
            <form action="" className='w-full flex justify-center items-start gap-6 flex-col mt-10'>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="certificates" className='text-gray-300 text-sm'>Certifications</label>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            addCertificates();
                        }} className='border border-gray-800 text-gray-100 text-xs font-extralight px-3 py-2 rounded-xl cursor-pointer'><i className="bi bi-plus text-gray-100 text-xs"></i> Add Certification</button>
                    </div>
                    {(form.certificates.length > 0) ? (
                        form.certificates.map((certi, index) => (
                            <Certification
                                key={index}
                                index={index}
                                certification={certi}
                                updateFormArray={updateFormArray}
                                removeFormArrayItem={removeFormArrayItem}
                            />
                        ))
                    ) : (
                        <div className='w-full flex justify-center items-center h-40 border-dashed border border-gray-700 rounded-md flex-col gap-4'>
                            <p className='text-xs text-gray-400'>No certifications added yet</p>
                        </div>
                    )}
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="projects" className='text-gray-300 text-sm'>Projects</label>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            addProjects();
                        }} className='border border-gray-800 text-gray-100 text-xs font-extralight px-3 py-2 rounded-xl cursor-pointer'><i className="bi bi-plus text-gray-100 text-xs"></i> Add Project</button>
                    </div>
                    {(form.projects && form.projects.length > 0) ? (
                        form.projects.map((project, index) => (
                            <Project
                                key={index}
                                index={index}
                                project={project}
                                updateFormArray={updateFormArray}
                                removeFormArrayItem={removeFormArrayItem}
                            />
                        ))
                    ) : (
                        <div className='w-full flex justify-center items-center h-40 border-dashed border border-gray-700 rounded-md flex-col gap-4'>
                            <p className='text-xs text-gray-400'>No projects added yet</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    </>
  )
}

export default Skills