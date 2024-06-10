// import Image from 'next/image';
// import Header from './components/Header';
// import { FadeInStagger } from './components/FadeIn';
// import FadeIn from './components/FadeIn';

// export default function Home() {
//   return (
//     <div className='min-h-screen flex flex-col starry-background'>
//       <Header />
//       <div className='flex-grow flex items-center justify-center'>
//         <div className='w-[80%] mx-auto flex flex-col items-center md:flex-row md:gap-40 gap-20'>
//           <Image
//             src='/images/Astro.png'
//             width={400}
//             height={400}
//             alt='Astro'
//             className='rounded-b-[35%]'
//           />
//           <div>
//             <FadeInStagger>
//               <FadeIn>
//                 <h1 className='text-3xl xl:text-5xl font-bold leading-relaxed'>
//                   Crafting Digital <br /> Experiences, Designing Tomorrow
//                 </h1>
//               </FadeIn>
//               <FadeIn>
//                 <p className='mt-4'>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur debitis eligendi eaque eius earum qui beatae ullam quis, consequuntur ex quod molestiae laudantium esse assumenda natus adipisci neque vitae?
//                 </p>
//               </FadeIn>
//             </FadeInStagger>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import Header from './components/Header';
import { FadeInStagger } from './components/FadeIn';
import FadeInText from './components/FadeInText';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col starry-background'>
      <Header />
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-[80%] mx-auto flex flex-col items-center md:flex-row md:gap-40 gap-20'>
          <Image
            src='/images/Astro.png'
            width={400}
            height={400}
            alt='Astro'
            className='rounded-b-[35%]'
          />
          <div>
            <FadeInStagger>
              <h1 className='text-3xl xl:text-5xl font-bold leading-relaxed'>
                <FadeInText text="Crafting Digital" /> <br />
                <FadeInText text="Experiences, Designing Tomorrow" />
              </h1>
              <FadeInText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur debitis eligendi eaque eius earum qui beatae ullam quis, consequuntur ex quod molestiae laudantium esse assumenda natus adipisci neque vitae?" />
            </FadeInStagger>
          </div>
        </div>
      </div>
    </div>
  );
}
