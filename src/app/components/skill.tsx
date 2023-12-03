// src/app/components/Profile.tsx
import React from 'react';
import Logos from './logo';

function Skill() {
  return (
    <div id='skill' className='mx-auto container'>
      <div className='h-screen'>
        <div>
          <h2 className='flex flex-col justify-center items-center text-3xl sm:text-5xl py-32 font-bold'>
            My Skill
          </h2>
        </div>
        <div className='mt-8 ms:mx-0 mx-11'>
          <Logos />
        </div>
      </div>
    </div>
  );
}

export default Skill;
