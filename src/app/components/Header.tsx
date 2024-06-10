// "use client"
// import React, { useState } from 'react'
// import { headerListItem } from '../constants';
// import Link from 'next/link';
// import Image from 'next/image';


// const Header = () => {
//   const [active, setActive] = useState<string>('');
//   return (
//     <div>
//         <div className='flex justify-between'>
//           {/* {logo} */}
//           <Link href='/' className='flex gap-3 relative group overflow-hidden p-5'>
//             <Image 
//               src='/images/Astro.png'
//               width={40}
//               height={40}
//               alt='Astro'
//               className='rounded-full'/>
//             <p className='text-2xl font-bold pt-2'>ASTRO.Doc</p>
//           </Link>

//           {/* headerListItem */}
//           <div className='hidden md:inline-flex items-center gap-8 text-sm font-bold tracking-wide'>
//             <ul className='flex gap-8 pr-10'>
//               {headerListItem.map((item) => (
//                 <Link key={item._id} href={item.link}>
//                   <li
//                     className={`${
//                       active === item.link ? 'text-primeColor' : 'text-gray-600'
//                     } hover:text-primeColor cursor-pointer duration-300 group relative`}
//                   >
//                     {item.title}
//                     <span
//                       className={`absolute w-full ${
//                         active === item.link ? 'scale-100' : 'scale-0'
//                       } group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
//                     ></span>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>

//         </div>
//     </div>
//   )
// }

// export default Header

"use client"
import React, { useState, useEffect } from 'react';
import { headerListItem } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [active, setActive] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== null) {
      setActive(pathname);
    }
  }, [pathname]);

  return (
    <div className='w-full h-20  border-gray-500'>
      <div className='h-full max-w-screen-2xl mx-auto flex items-center justify-between p-5'>
        {/* Logo */}
        <Link href='/' className='flex gap-3 relative group overflow-hidden'>
          <Image 
            src='/images/Astro.png'
            width={40}
            height={40}
            alt='Astro'
            className='rounded-full'
          />
          <p className='text-2xl font-bold pt-2'>ASTRO.Doc</p>
        </Link>

        {/* Header List Items */}
        <div className='hidden md:inline-flex items-center gap-8 text-sm font-bold tracking-wide'>
          <ul className='flex gap-8 pr-10'>
            {headerListItem.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  className={`${
                    active === item.link ? 'text-primeColor' : 'text-gray-600'
                  } hover:text-primeColor cursor-pointer duration-300 group relative`}
                >
                  {item.title}
                  <span
                    className={`absolute w-full ${
                      active === item.link ? 'scale-100' : 'scale-0'
                    } group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;


