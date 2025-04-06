import {React, useState} from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Personal from '../components/Personal.jsx'
import CareerDetails from '../components/CarrerDetails.jsx'
import Skills from '../components/Skills.jsx'
import { PDFDownloadLink } from '@react-pdf/renderer'
import ResumeDocument from '../components/ResumeDocument.jsx'

const AppPage = () => {

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

  const generateResume = () => {
    console.log(form);
  }

  return (
    <>
      <header><NavBar /></header>
      <main className='w-screen flex justify-center items-center flex-col gap-10'>
        <section className='w-1/2 mt-25 flex justify-center flex-col items-center gap-4'>
          <h1 className='text-3xl text-gray-100'>Resume Generator</h1>
          <p className='w-3/4 text-md text-gray-600 text-center'>Fill in your details below to create a professionally formatted resume. All fields are optional.</p>
        </section>
        <section className='w-3/5 flex justify-center flex-col gap-10 items-center'>
          <Personal updateForm={updateForm} form={form} />
          <CareerDetails updateForm={updateForm} form={form} />
          <Skills updateForm={updateForm} form={form} />
          <PDFDownloadLink
            document={<ResumeDocument form={form} />}
            fileName="resume.pdf"
            className='text-gray-100 bg-blue-500 px-10 py-4 rounded-lg hover:bg-blue-600 cursor-pointer flex justify-center items-center gap-2'>
            <>Generate Resume<i className="bi bi-arrow-right text-gray-100 text-md"></i></>
          </PDFDownloadLink>
        </section>
      </main>
      <footer className='w-screen h-20 flex justify-center items-center'><Footer /></footer>
    </>
  )
}

export default AppPage