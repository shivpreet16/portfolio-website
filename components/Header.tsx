import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Sidebar from './Sidebar'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className="flex flex-row items-center">
                    {/* social icons */}

                    <SocialIcon
                        url="https://instagram.com/shivpreet_16"
                        fgColor='grey'
                        bgColor='transparent'
                    />
                    <SocialIcon
                        url="https://github.com/shivpreet16"
                        fgColor='grey'
                        bgColor='transparent'
                    />
                    <SocialIcon
                        url="https://linkedin.comin/shivpreet-padhi"
                        fgColor='grey'
                        bgColor='transparent'
                    />
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                >
                    <SocialIcon
                        url='#contact'
                        network='email'
                        className="cursor-none"
                        fgColor='grey'
                        bgColor='transparent'
                    />
                    <p
                        className="uppercase hidden md:inline-flex text-sm text-gray-400"
                    >Get in touch</p>
                </motion.div>
            </header >
            
      <Sidebar/>
        </>
    )
}

export default Header