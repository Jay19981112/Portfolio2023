// src/app/components/Logos.tsx
import React from 'react';
import Image from 'next/image';

const logos = [
  'html-5.svg',
  'css-3.svg',
  'bootstrap.svg',
  'sass.svg',
  'tailwindcss-icon.svg',
  'javascript.svg',
  'react.svg',
  'nextjs-icon.svg',
  'vue.svg',
  'vitejs.svg',
  'nodejs-icon.svg',
  'express.svg',
  'nestjs.svg',
  'typescript-icon.svg',
  'php.svg',
  'ruby.svg',
  'python.svg',
  'dart.svg',
  'flutter.svg',
  'git-icon.svg'
];

const Logos: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 gap-x-0.5 justify-items-center">
      {logos.map((logo, index) => (
        <div key={index} className="sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center m-1">
          <Image
            src={`/logos/${logo}`}
            alt={logo.replace('.svg', '')}
            width={80}
            height={80}
          />
        </div>
      ))}
    </div>
  );
};

export default Logos;