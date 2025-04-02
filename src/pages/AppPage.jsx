import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Personal from '../components/Personal.jsx'
import CareerDetails from '../components/CarrerDetails.jsx'

const AppPage = () => {
  return (
    <>
      <header><NavBar /></header>
      <main className='w-screen flex justify-center items-center flex-col gap-10'>
        {/* <div class="relative h-full w-full bg-black"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div> */}
        <section className='w-1/2 mt-25 flex justify-center flex-col items-center gap-4'>
          <h1 className='text-3xl text-gray-100'>Resume Generator</h1>
          <p className='w-3/4 text-md text-gray-600 text-center'>Fill in your details below to create a professionally formatted resume. All fields are optional.</p>
        </section>
        <section className='w-3/5 flex justify-center flex-col gap-10 items-center'>
          <Personal />
          <CareerDetails />
        </section>
      </main>
      <footer className='w-screen h-20 flex justify-center items-center'><Footer /></footer>
    </>
  )
}

export default AppPage