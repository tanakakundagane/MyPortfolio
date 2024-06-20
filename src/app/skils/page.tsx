import React from 'react';
import Header from '../components/Header';
import StarryBackground from '../components/StarryBackground';
import SwingingImage from '../components/SwingingImage';
import FadeIn, { FadeInStagger } from '../components/FadeIn';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <StarryBackground />
      <Header />
      <div className='w-[30%] mx-auto bg-black text-white text-center py-4 rounded-lg text-xl md:text-2xl mt-10'>
        <h1>My Skills</h1>
      </div>
      <div className="flex-grow flex items-center justify-center pb-10">
        <div className="w-[80%] mx-auto flex-col-reverse items-center md:flex-row md:gap-20 gap-20 mt-7">
          <FadeInStagger>
            <div className="flex-1 p-10 md:flex md:gap-20 border-2 md:justify-center rounded-lg w-[100%]">
              <ul className="text-center text-xl md:text-2xl text-shadow">
                <FadeIn>
                  <li className='pb-8 flex items-center gap-2'> 
                    <Image src='/images/HTML5_Logo.png'width={50}height={50} alt='html'/>
                    <p>HTML</p>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className='pb-8 flex items-center gap-2'>
                    <Image src='/images/css.png' width={50}height={50} alt='css'/>
                    <p>CSS</p>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className='flex items-center gap-2'>
                    <Image src='/images/js.png' width={50}height={50} alt='javascript'/>
                    <p>Javascript</p>
                  </li>
                </FadeIn>
              </ul>

              <ul className="text-center text-xl md:text-2xl text-shadow">
                <FadeIn>
                  <li className='pb-8 flex items-center gap-2'>
                    <Image src='/images/react.png' width={50}height={50} alt='react'/>
                    <p>React</p>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className='pb-8 flex items-center gap-2'>
                    <Image src='/images/resend.png' width={50}height={50} alt='resend'/>
                    <p>Resend</p>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className='flex items-center gap-2'>
                    <Image src='/images/nextjs.png' width={50}height={50} alt='next.js'/>
                    <p>Next.js</p>
                  </li>
                </FadeIn>
              </ul>
              <ul className="text-center text-xl md:text-2xl text-shadow">
                <FadeIn>
                  <li className='pb-8 flex items-center gap-2'>
                    <Image src='/images/Three.js.png' width={50}height={50} alt='three.js'/>
                    <p>Three.js</p>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className='pb-8 flex items-center gap-2'>
                    <Image src='/images/framer-motion.jpg' width={50}height={50} alt='framer-motion'/>
                    <p>framer-motion</p>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className='flex items-center gap-2'>
                    <Image src='/images/nodemailer.png' width={50}height={50} alt='nodemailer'/>
                    <p>Node-mailer</p>
                  </li>
                </FadeIn>
              </ul>
            </div>
          </FadeInStagger>
          {/* <div className="flex-1 md:flex md:justify-center">
            <SwingingImage
              src='/images/plants.png'
              width={400}
              height={400}
              alt='plants'
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
