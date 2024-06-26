// import Image from 'next/image';
// import Header from './components/Header';
// import { FadeInStagger } from './components/FadeIn';
// import FadeInText from './components/FadeInText';
// import StarryBackground from './components/StarryBackground';
// import AudioPlayer from './components/AudioPlayer';
// import ThreeScene from './components/ThreeScene';

// export default function Home() {
//   return (
//     <div className='min-h-screen flex flex-col starry-background'>
//       <StarryBackground/>
//       <Header />
//       <div className='flex-grow flex items-center justify-center pb-10'>
//         <div className='w-[80%] mx-auto flex flex-col items-center    md:flex-row md:gap-40 gap-20'>
//             <Image
//               src='/images/Astro.png'
//               width={400}
//               height={400}
//               alt='Astro'
//               className='rounded-b-[35%] w-[40%] mt-10 md:mt-0'
//               placeholder="blur"
//               blurDataURL="/images/placeholder.png" // プレースホルダー画像のURL
//             />
//           <div>
//             <FadeInStagger>
//               <h1 className='text-4xl xl:text-5xl font-bold leading-relaxed text-shadow w-[70%] mx-auto text-center md:text-left md:w-[100%]'>
//                 <FadeInText delay={0.2} text="Crafting Digital" /> <br />
//                 <FadeInText delay={0.3} text="Experiences, Designing Tomorrow" />
//               </h1>
//               <h2 className='text-xl xl:text-2xl lg:leading-[50px] w-[70%] text-center mx-auto md:w-[100%] md:text-left text-shadow hidden md:block'>
//                 <FadeInText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur debitis eligendi eaque eius earum qui beatae ullam quis, consequuntur ex quod molestiae laudantium esse assumenda natus adipisci neque vitae?" />
//               </h2>
//             </FadeInStagger>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // src/app/page.tsx
// import Image from 'next/image';
// import Header from './components/Header';
// import { FadeInStagger } from './components/FadeIn';
// import FadeInText from './components/FadeInText';
// import StarryBackground from './components/StarryBackground';
// import ThreeScene from './components/ThreeScene';

// export default function Home() {
//   return (
//     <div className='min-h-screen relative flex flex-col'>
//       <div className="absolute inset-0 z-0">
//         <ThreeScene />
//       </div>
//       <StarryBackground />
//       <Header />
//       <div className='relative flex-grow flex flex-col items-center justify-center pb-10 z-10'>
//         <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-5">
//           <div className='w-full md:w-1/2'></div>
//           <div className="w-full md:w-1/2">
//             <FadeInStagger>
//               <h1 className='text-4xl xl:text-5xl font-bold leading-relaxed text-shadow text-center md:text-left'>
//                 <FadeInText delay={0.2} text="Crafting Digital" /> <br />
//                 <FadeInText delay={0.3} text="Experiences, Designing Tomorrow" />
//               </h1>
//               <h2 className='text-xl xl:text-2xl lg:leading-[50px] w-full text-center md:text-left text-shadow mt-4'>
//                 <FadeInText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur debitis eligendi eaque eius earum qui beatae ullam quis, consequuntur ex quod molestiae laudantium esse assumenda natus adipisci neque vitae?" />
//               </h2>
//             </FadeInStagger>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/page.tsx
import Image from 'next/image';
import Header from './components/Header';
import { FadeInStagger } from './components/FadeIn';
import FadeInText from './components/FadeInText';
import StarryBackground from './components/StarryBackground';
import ThreeScene from './components/ThreeScene';

export default function Home() {
  return (
    <div className='min-h-screen relative flex flex-col'>
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      <StarryBackground />
      <Header />
      <div className='relative flex-grow flex flex-col items-center justify-center pb-10 z-10'>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-5">
          <div className='w-full md:w-1/2'></div>
          <div className="w-full md:w-1/2">
            <FadeInStagger>
              <h1 className='text-4xl xl:text-5xl font-bold leading-relaxed text-shadow text-center md:text-left'>
                <FadeInText delay={0.2} text="Crafting Digital" /> <br />
                <FadeInText delay={0.3} text="Experiences, Designing Tomorrow" />
              </h1>
              <h2 className='text-xl xl:text-2xl lg:leading-[50px] w-full text-center md:text-left text-shadow mt-4 hidden md:block'>
                <FadeInText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur debitis eligendi eaque eius earum qui beatae ullam quis, consequuntur ex quod molestiae laudantium esse assumenda natus adipisci neque vitae?" />
              </h2>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </div>
  );
}
