import {React, useEffect, useState,useMemo} from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Personal from '../components/Personal.jsx'
import CareerDetails from '../components/CarrerDetails.jsx'
import Skills from '../components/Skills.jsx'
import { PDFViewer } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import ResumeDocument from '../components/ResumeDocument.jsx'

const AppPage = () => {

  const [showResume, setShowResume] = useState(false);

  const handlePreview = () => {
    setShowResume(true);
  }

  const [form,updateForm] = useState({
    name: '',
    phone: '',
    email: '',
    personalPortfolio: '',
    twitter: '',
    linkedin: '',
    github: '',
    leetcode: '',
    codeforces: '',
    careerObjective: '',
    workExperience: [],
    academicQualification: [],
    certificates: [],
    projects: [],
  })


  const handleDownload = async () => {
    const blob = await pdf(<ResumeDocument form={form} />).toBlob()
    saveAs(blob, 'Resume.pdf')
  }
    

  
  return (
    <>
      <header><NavBar /></header>
      <main className='w-screen flex justify-center items-center flex-col gap-10'>
        <section className='w-screen md:w-1/2 mt-25 flex justify-center flex-col items-center gap-4'>
          <h1 className='text-xl md:text-3xl text-gray-100'>Resume Generator</h1>
          <p className='w-4/5 text-sm md:text-md text-gray-600 text-center'>Fill in your details below to create a professionally formatted resume. All fields are optional.</p>
        </section>
        <section className='w-9/10 md:w-3/5 flex justify-center flex-col gap-10 items-center mb-20'>
          <Personal updateForm={updateForm} form={form} />
          <CareerDetails updateForm={updateForm} form={form} />
          <Skills updateForm={updateForm} form={form} />
          <button onClick={handlePreview} className='text-gray-100 bg-black border border-gray-800 px-10 py-4 rounded-lg hover:bg-gray-700 cursor-pointer flex justify-center items-center gap-2 mt-10'>
          <>Preview Resume<i className="bi bi-arrow-right text-gray-100 text-md"></i></></button>
          {showResume && <PDFViewer style={{ width: '80%', height: '80vh' }}><ResumeDocument form={form} /></PDFViewer>}
          <button onClick={handleDownload} className='text-gray-100 bg-blue-500 px-10 py-4 rounded-lg hover:bg-blue-600 cursor-pointer flex justify-center items-center gap-2'>
          <>Generate Resume<i className="bi bi-arrow-right text-gray-100 text-md"></i></></button>
        </section>
      </main>
      <footer className='w-full h-auto flex justify-center items-center px-4 sm:px-6 md:px-10 border-t-2 border-gray-900'><Footer /></footer>
    </>
  )
}

export default AppPage