import Image from 'next/image';
import Header from './components/Header';
import { FadeInStagger } from './components/FadeIn';
import FadeInText from './components/FadeInText';
import StarryBackground from './components/StarryBackground';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col starry-background'>
      <StarryBackground/>
      <Header />
      <div className='flex-grow flex items-center justify-center pb-10'>
        <div className='w-[80%] mx-auto flex flex-col items-center    md:flex-row md:gap-40 gap-20'>
            <Image
              src='/images/Astro.png'
              width={400}
              height={400}
              alt='Astro'
              className='rounded-b-[35%] w-[40%] mt-10 md:mt-0'
            />
          <div>
            <FadeInStagger>
              <h1 className='text-4xl xl:text-5xl font-bold leading-relaxed text-shadow w-[70%] mx-auto text-center md:text-left md:w-[100%]'>
                <FadeInText text="Crafting Digital" /> <br />
                <FadeInText text="Experiences, Designing Tomorrow" />
              </h1>
              <h2 className='text-xl xl:text-2xl lg:leading-[50px] w-[70%] text-center mx-auto md:w-[100%] md:text-left text-shadow'>
                <FadeInText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur debitis eligendi eaque eius earum qui beatae ullam quis, consequuntur ex quod molestiae laudantium esse assumenda natus adipisci neque vitae?" />
              </h2>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </div>
  );
}
