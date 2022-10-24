import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })
  console.log(mousePosition)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e:any) =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return ()=>{
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default:{
      x: mousePosition.x-16,
      y: mousePosition.y-16,
    },
    text:{
      x: mousePosition.x-75,
      y: mousePosition.y-75,
      height:150,
      width:150,
      backgroundColor: "white",
      mixBlendMode: 'difference'
    },
    image:{
      x: mousePosition.x-16,
      y: mousePosition.y-16,
      backgroundColor: "white",
      mixBlendMode: 'difference'
    }
  }


  return (
    <div className='cursor-none bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <motion.div
                animate={cursorVariant}
                variants={variants}
                className="z-30 bg-black h-[32px] w-[32px] rounded-full fixed t-0 l-0 pointer-events-none"
                />
      <Head>
        <title>Shivpreet's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      {/* hero */}
      <section id="hero" className='snap-center'>
        <Hero setCursorVariant={setCursorVariant}/>
      </section>

      {/* about */}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* experience */}
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      {/* skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>


      {/* projects */}


      {/* contact me */}
    </div>


  )
      
  
}

export default Home