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
                <FadeInText delay={0.2} text="Thank you for " /> <br />
                <FadeInText delay={0.3} text="visiting my portfolio site" />
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
