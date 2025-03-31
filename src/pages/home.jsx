import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Lander from '../components/lander.jsx'

const Home = () => {
  return (
    <>
      <header><NavBar /></header>
      <main className='w-screen h-screen'>
        <section className='w-screen h-screen bg-gradient-to-br from-blue-900 via-black to-black'><Lander /></section>
      </main>
    </>
  )
}

export default Home