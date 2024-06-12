// "use client"
// import React, { useState, useEffect } from 'react';
// import { headerListItem } from '../constants';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';


// const Header = () => {
//   const [active, setActive] = useState<string>('');
//   const pathname = usePathname();

//   useEffect(() => {
//     if (pathname !== null) {
//       setActive(pathname);
//     }
//   }, [pathname]);

//   return (
//     <div className='w-full h-20  border-gray-500'>
//       <div className='h-full max-w-screen-2xl mx-auto flex items-center justify-between p-5'>
//         {/* Logo */}
//         <Link href='/' className='flex gap-3 relative group overflow-hidden'>
//           <Image 
//             src='/images/Astro.png'
//             width={40}
//             height={40}
//             alt='Astro'
//             className='rounded-full'
//           />
//           <p className='text-3xl font-bold pt-2'>ASTRO.Doc</p>
//         </Link>

//         {/* Header List Items */}
//         <div className='hidden md:inline-flex items-center gap-8 text-sm font-bold tracking-wide'>
//           <ul className='flex gap-8 pr-10'>
//             {headerListItem.map((item, index) => (
//               <Link key={index} href={item.link}>
//                 <li
//                   className='md:text-xl p-1 gap-3 hover:bg-black hover:text-white rounded duration-300'
//                 >
//                   {item.title}
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </div>

//         {/* SmallHeader */}
//       </div>
//     </div>
//   );
// }

// export default Header;


"use client";
import React, { useState, useEffect } from "react";
import { headerListItem } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== null) {
      setActive(pathname);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-20 border-gray-500">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex gap-3 relative group overflow-hidden">
          <Image
            src="/images/Astro.png"
            width={40}
            height={40}
            alt="Astro"
            className="rounded-full"
          />
          <p className="text-3xl font-bold pt-2">ASTRO.Doc</p>
        </Link>

        {/* Header List Items */}
        <div className="hidden md:inline-flex items-center gap-8 text-sm font-bold tracking-wide">
          <ul className="flex gap-8 pr-10">
            {headerListItem.map((item, index) => (
              <Link key={index} href={item.link}>
                <li className="md:text-xl p-1 gap-3 hover:bg-black hover:text-white rounded duration-300">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden z-10">
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 justify-center items-center w-8 h-8 relative z-20"
          >
            <div
              className={`h-0.5 w-8 bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`h-0.5 w-8 bg-black transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-8 bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Slide-out Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 p-10">
            {headerListItem.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="text-xl p-1 hover:bg-black hover:text-white rounded duration-300"
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
