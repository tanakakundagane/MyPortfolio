import React from 'react';
import Header from '../components/Header';
import StarryBackground from '../components/StarryBackground';
import SwingingImage from '../components/SwingingImage';

const page = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <StarryBackground />
      <Header />
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-[80%] mx-auto flex flex-col items-center md:flex-row-reverse md:gap-40 gap-20'>
          <SwingingImage
            src='/images/plants.png'
            width={400}
            height={400}
            alt='plants'
        />
          <div>
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Three.js</li>
                <li>framer-motion</li>
                <li>Node-mailer</li>
                <li>Resend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
