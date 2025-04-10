import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Lander from '../components/lander.jsx'
import LearnMore from '../components/learnMore.jsx'
import GetStarted from '../components/GetStarted.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <header className='w-screen'><NavBar /></header>
      <main className='w-screen h-screen'>
        <section className='w-full h-screen md:h-[80vh] flex justify-center items-center bg-gradient-to-br from-blue-900 via-black to-black'><Lander /></section>
        <div class="-z-10 absolute h-full w-full bg-black"><div class="z-0 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f3e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f3e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
        <section className='w-full min-h-[90vh] flex flex-col justify-center items-center bg-transparent z-10 gap-10 '> 
          <LearnMore />
        </section>
        <section className='w-full h-3/4 flex flex-col justify-center items-center bg-black'>
          <GetStarted />
        </section>
        <footer className='w-full h-auto flex justify-center items-center px-4 sm:px-6 md:px-10 border-t-2 border-gray-900'><Footer /></footer>
      </main>
    </>
  )
}

export default Home