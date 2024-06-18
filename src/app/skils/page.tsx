// import React from 'react';
// import Header from '../components/Header';
// import StarryBackground from '../components/StarryBackground';
// import SwingingImage from '../components/SwingingImage';
// import FadeIn, { FadeInStagger } from '../components/FadeIn';

// const Page = () => {
//   return (
//     <div className="relative z-10 min-h-screen flex flex-col">
//       <StarryBackground />
//       <Header />
//       <div className='w-[30%] mx-auto bg-black text-white text-center py-4 rounded-lg text-xl md:text-2xl mt-10'>
//         <h1>MySkils</h1>
//       </div>
//       <div className="flex-grow flex items-center justify-center">
//         <div className="w-[80%] mx-auto flex flex-col-reverse items-center md:flex-row md:gap-20 gap-20 mt-7">
//           <FadeInStagger>
//             <div className="flex-1 p-10 md:flex md:gap-10 border-2 md:justify-center bg-indigo-400 rounded-lg w-[100%]">
//                 <ul className="text-center text-xl md:text-2xl">
//                   <FadeIn>
//                     <li className='pb-3'>HTML</li>
//                   </FadeIn>
//                   <FadeIn>
//                     <li className='pb-3'>CSS</li>
//                   </FadeIn>
//                   <FadeIn>
//                     <li className='pb-3'>Javascript</li>
//                   </FadeIn>
//                   <FadeIn>
//                     <li className='pb-3'>React</li>
//                   </FadeIn>
//                   <FadeIn>
//                     <li className='pb-3'>Resend</li>
//                   </FadeIn>
//                 </ul>
//                 <ul className="text-center text-xl md:text-2xl">
//                   <li className='pb-3'>Next.js</li>
//                   <li className='pb-3'>Three.js</li>
//                   <li className='pb-3'>framer-motion</li>
//                   <li className=''>Node-mailer</li>
//                 </ul>
//             </div>
//           </FadeInStagger>
//           <div className="flex-1 md:flex md:justify-center">
//             <SwingingImage
//               src='/images/plants.png'
//               width={400}
//               height={400}
//               alt='plants'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// import React from 'react';
// import Header from '../components/Header';
// import StarryBackground from '../components/StarryBackground';
// import SwingingImage from '../components/SwingingImage';
// import FadeIn, { FadeInStagger } from '../components/FadeIn';

// const Page = () => {
//   return (
//     <div className="relative z-10 min-h-screen flex flex-col">
//       <StarryBackground />
//       <Header />
//       <div className='w-[30%] mx-auto bg-black text-white text-center py-4 rounded-lg text-xl md:text-2xl mt-10'>
//         <h1>My Skills</h1>
//       </div>
//       <div className="flex-grow flex items-center justify-center">
//         <div className="w-[80%] mx-auto flex flex-col-reverse items-center md:flex-row md:gap-20 gap-20 mt-7">
//           <FadeInStagger>
//             <div className="flex-1 p-10 md:flex md:gap-10 border-2 md:justify-center bg-indigo-400 rounded-lg w-[100%]">
//               <ul className="text-center text-xl md:text-2xl">
//                 <FadeIn><li className='pb-3'>HTML</li></FadeIn>
//                 <FadeIn><li className='pb-3'>CSS</li></FadeIn>
//                 <FadeIn><li className='pb-3'>Javascript</li></FadeIn>
//                 <FadeIn><li className='pb-3'>React</li></FadeIn>
//                 <FadeIn><li className='pb-3'>Resend</li></FadeIn>
//               </ul>
//               <ul className="text-center text-xl md:text-2xl">
//                 <FadeIn><li className='pb-3'>Next.js</li></FadeIn>
//                 <FadeIn><li className='pb-3'>Three.js</li></FadeIn>
//                 <FadeIn><li className='pb-3'>framer-motion</li></FadeIn>
//                 <FadeIn><li className=''>Node-mailer</li></FadeIn>
//               </ul>
//             </div>
//           </FadeInStagger>
//           <div className="flex-1 md:flex md:justify-center">
//             <SwingingImage
//               src='/images/plants.png'
//               width={400}
//               height={400}
//               alt='plants'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

import React from 'react';
import Header from '../components/Header';
import StarryBackground from '../components/StarryBackground';
import SwingingImage from '../components/SwingingImage';
import FadeIn, { FadeInStagger } from '../components/FadeIn';

const Page = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <StarryBackground />
      <Header />
      <div className='w-[30%] mx-auto bg-black text-white text-center py-4 rounded-lg text-xl md:text-2xl mt-10'>
        <h1>My Skills</h1>
      </div>
      <div className="flex-grow flex items-center justify-center pb-10">
        <div className="w-[80%] mx-auto flex flex-col-reverse items-center md:flex-row md:gap-20 gap-20 mt-7">
          <FadeInStagger>
            <div className="flex-1 p-10 md:flex md:gap-10 border-2 md:justify-center bg-indigo-400 rounded-lg w-[100%]">
              <ul className="text-center text-xl md:text-2xl text-shadow">
                <FadeIn><li className='pb-3'>HTML</li></FadeIn>
                <FadeIn><li className='pb-3'>CSS</li></FadeIn>
                <FadeIn><li className='pb-3'>Javascript</li></FadeIn>
                <FadeIn><li className='pb-3'>React</li></FadeIn>
                <FadeIn><li className='pb-3'>Resend</li></FadeIn>
              </ul>
              <ul className="text-center text-xl md:text-2xl text-shadow">
                <FadeIn><li className='pb-3'>Next.js</li></FadeIn>
                <FadeIn><li className='pb-3'>Three.js</li></FadeIn>
                <FadeIn><li className='pb-3'>framer-motion</li></FadeIn>
                <FadeIn><li className=''>Node-mailer</li></FadeIn>
              </ul>
            </div>
          </FadeInStagger>
          <div className="flex-1 md:flex md:justify-center">
            <SwingingImage
              src='/images/plants.png'
              width={400}
              height={400}
              alt='plants'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
