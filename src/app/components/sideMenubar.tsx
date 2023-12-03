"use client"

import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ComputerIcon from '@mui/icons-material/Computer';
import { Link } from 'react-scroll';

function SideMenubar() {

    return (
        <div className=''>
            <div className='
                z-50 flex flex-col justify-center items-center fixed h-screen
            '>
                <nav className='               
                    flex flex-col justify-center items-center mt-3 mx-1 py-3 
                '>
                    <div className='
                        flex flex-col justify-center items-center bg-slate-300 rounded-full my-30 
                        sm:ml-10
                    '>
                        <Link to="main" smooth duration={1000}>
                            <HomeIcon href="#main" className='
                            sm:mb-5
                            m-3 cursor-pointer hover:opacity-50 transition
                        ' />
                        </Link>
                        <Link to="about" smooth duration={1000}>
                            <AccountCircleIcon href="#about" className='
                            sm:mb-5
                            m-3 cursor-pointer hover:opacity-50 transition
                        '/>
                        </Link> 
                        <Link to="skill" smooth duration={1000}>
                            <ComputerIcon href="#profile" className='
                            sm:mb-5
                            m-3 cursor-pointer hover:opacity-50 transition
                        '/>
                        </Link>
                        <Link to="contact" smooth duration={1000}>
                            <EmailIcon href="#contact" className='
                            m-3 cursor-pointer hover:opacity-50 transition
                        '/>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SideMenubar 
// sm:flex sm:inset-y-0 sm:top-0
// fixed inset-x-0 bg-black z-50