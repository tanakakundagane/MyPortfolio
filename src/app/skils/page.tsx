// import React from 'react';
// import Header from '../components/Header';
// import StarryBackground from '../components/StarryBackground';
// import SwingingImage from '../components/SwingingImage';

// const page = () => {
//   return (
//     <div className="relative z-10 min-h-screen flex flex-col">
//       <StarryBackground />
//       <Header />
//       <div className='md:hidden text-center font-bold text-3xl p-3 bg-black text-white w-[50%] mx-auto rounded-md mt-5 mb-5'>
//         <h1>My Skils</h1>
//       </div>
//       <div className="flex-grow flex items-center justify-center">
//         <div className="w-[80%] mx-auto flex flex-col items-center md:flex-row-reverse md:gap-40 gap-20 ">
//           <SwingingImage
//             src='/images/plants.png'
//             width={400}
//             height={400}
//             alt='plants'
//             className='mx-auto'
//           />
//           <div className="p-10">
//             <ul className="text-center text-xl md:text-2xl">
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>Javascript</li>
//               <li>React</li>
//               <li>Next.js</li>
//               <li>Three.js</li>
//               <li>framer-motion</li>
//               <li>Node-mailer</li>
//               <li>Resend</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import React from 'react';
import Header from '../components/Header';
import StarryBackground from '../components/StarryBackground';
import SwingingImage from '../components/SwingingImage';

const Page = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <StarryBackground />
      <Header />
      <div className='w-[50%] mx-auto bg-black text-white text-center py-5 rounded-lg text-xl md:text-2xl mt-10'>
        <h1>MySkils</h1>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-[80%] mx-auto flex flex-col-reverse items-center md:flex-row md:gap-20 gap-20 mt-7">
          <div className="flex-1 p-10 md:flex md:justify-center">
            <ul className="text-center text-xl md:text-2xl border-4 border-indigo-600 p-10 px-20 rounded-md">
              <li className='pb-3'>HTML</li>
              <li className='pb-3'>CSS</li>
              <li className='pb-3'>Javascript</li>
              <li className='pb-3'>React</li>
              <li className='pb-3'>Next.js</li>
              <li className='pb-3'>Three.js</li>
              <li className='pb-3'>framer-motion</li>
              <li className='pb-3'>Node-mailer</li>
              <li>Resend</li>
            </ul>
          </div>
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
