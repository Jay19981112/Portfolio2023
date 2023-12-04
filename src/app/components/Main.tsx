"use client"

import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';


function Main() {
  return (
    <div id='main' className='relative'>
        <video src='/video.mov' autoPlay loop muted className='h-screen sm:w-full sm:h-full object-cover '></video>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
            <motion.div className='
                flex flex-col items-start justify-center min-h-screen ml-5
                sm:flex sm:flex-col sm:items-start sm:justify-center sm:min-h-screen
            '
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1}}
            >
                <h1 className='text-4xl sm:text-8xl border-b-2 border-white pb-2 inline-block'>
                   Welcome!
                </h1>
                <div>
                    <p className='text-left items-start inline-block pt-2 text-xs sm:text-2xl'>As a full-stack developer, I use modern technology to deliver results.</p>
                    <div className='flex mt-3 items-center'>
                        <a href='/Jei_Fujinami_CV.pdf' download className='group bg-black rounded-full py-2 px-5 hover:scale-105 transition mr-4 text-white sm:z-50 sm:text-3xl'>
                            Download CV<DownloadIcon className='group-hover:translate-y-1 transition sm:text-3xl'/>
                        </a>
                        <a href='https://github.com/Jay19981112' className='bg-black rounded-full p-2 hover:scale-105 transition mr-4 text-white sm:z-50 '>
                            <GitHubIcon className='sm:text-3xl'/>
                        </a>
                        <a  href='https://www.linkedin.com/in/jei-fujinami-4b5509280/' className='bg-black rounded-full p-2 hover:scale-105 transition text-white sm:z-50'>
                            <LinkedInIcon className='sm:text-3xl' />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Main