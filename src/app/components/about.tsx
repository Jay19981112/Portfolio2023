import React from 'react';

function About() {

  return (
    <div id='about' className='mx-auto container'>
      <div>
        <h2 className='flex flex-col justify-center items-center text-3xl sm:text-5xl py-32 font-bold'>
          About me
        </h2>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center'>
        <img src="/profileImg.JPG" alt="My Image" className='w-52 h-52  sm:w-80 sm:h-80 object-cover rounded-full sm:rounded-2xl sm:mr-4' />
        <div className='flex flex-col items-center w-2/3 sm:w-3/4 lg:w-2/3 xl:w-1/2'>
          <div className='flex flex-col sm:flex-row w-full sm:space-x-4 mt-4'>
            <div className='bg-slate-300 rounded-2xl flex-1 p-4 mt-4 sm:mt-0'>
              <h3 className='text-center text-xl font-semibold'>Experience</h3>
              <p className='pt-1 text-center'>Frontend Developer / Graphic Designer / Videographer</p>
            </div>
            <div className='bg-slate-300 rounded-2xl flex-1 p-4 mt-4 sm:mt-0'>
              <h3 className='text-center text-xl font-semibold'>Education</h3>
              <p className='pt-1 text-center'>Kokushikan University Asia Degree</p>
            </div>
          </div>
          <div className='bg-slate-300 rounded-2xl w-full mt-4 p-3'>
            <div className=''>
              <p className='text-left p-1 leading-relaxed'>
              Jei Fujinami,  from Japan. <br/>
              <span className='text-xl'>2022</span> - I graduated from university with a bachelor's degree in Asian Studies from the Faculty of 21st Century Asia Studies. <br/>
              <span className='text-xl'>2022</span> - I spent one year at Cuebus engaged in graphic design, CG design, video production, and software development. <br/>
              <span className='text-xl'>2023</span> - I worked as an assistant in video production for a friend in Poland while visiting various European countries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
