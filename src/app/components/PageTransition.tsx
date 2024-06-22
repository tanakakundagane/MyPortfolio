// "use client";

// import { useRouter, usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState, ReactNode } from 'react';
// import { headerListItem } from '../constants';

// const overlayVariants = {
//   initial: {
//     y: '-100%',
//   },
//   enter: {
//     y: '0%',
//     transition: {
//       duration: 0.8,
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '100%',
//     transition: {
//       duration: 0.8,
//       ease: 'easeInOut',
//     },
//   },
// };

// const pageVariants = {
//   initial: {
//     y: '-100%',
//   },
//   enter: {
//     y: '0%',
//     transition: {
//       duration: 0.8,
//       ease: 'easeInOut',
//       delay: 0.1, // 次のページが表示される時間を短く
//     },
//   },
// };

// export default function PageTransition({ children }: { children: ReactNode }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [nextPath, setNextPath] = useState<string | null>(null);
//   const [nextTitle, setNextTitle] = useState<string>('');

//   useEffect(() => {
//     const handleRouteChange = (url: string) => {
//       if (!isAnimating) {
//         const nextPage = headerListItem.find((item) => item.link === url);
//         if (nextPage) {
//           setNextTitle(nextPage.title);
//         }
//         setNextPath(url);
//         setIsAnimating(true);
//       }
//     };

//     const handleClick = (event: MouseEvent) => {
//       const target = (event.target as HTMLElement).closest('a');
//       if (target && target.tagName === 'A' && target.href) {
//         const href = target.getAttribute('href');
//         if (href && href.startsWith('/') && href !== window.location.pathname) {
//           event.preventDefault();
//           handleRouteChange(href);
//         }
//       }
//     };

//     document.addEventListener('click', handleClick);

//     return () => {
//       document.removeEventListener('click', handleClick);
//     };
//   }, [isAnimating]);

//   const handleAnimationComplete = () => {
//     if (nextPath) {
//       setTimeout(() => {
//         router.push(nextPath);
//         setIsAnimating(false);
//         setNextPath(null);
//       }, 1000); // 文字が表示されている時間を1秒に設定
//     }
//   };

//   useEffect(() => {
//     if (nextPath) {
//       handleAnimationComplete();
//     }
//   }, [nextPath]);

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {isAnimating && (
//           <motion.div
//             key="overlay"
//             initial="initial"
//             animate="enter"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: 'fixed',
//               width: '100%',
//               height: '100%',
//               backgroundColor: 'black',
//               color: 'white', // テキストの色を白に設定
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '4rem',
//               zIndex: 50,
//             }}
//           >
//             {nextTitle}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={pathname}
//           initial="initial"
//           animate="enter"
//           variants={pageVariants}
//           style={{ position: 'relative', width: '100%', height: '100%' }}
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';
import { headerListItem } from '../constants';

const overlayVariants = {
  initial: {
    y: '-100%',
  },
  enter: {
    y: '0%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const pageVariants = {
  initial: {
    y: '-100%',
  },
  enter: {
    y: '0%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      delay: 0.4, // 次のページが表示される時間を短く
    },
  },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);
  const [nextTitle, setNextTitle] = useState<string>('');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!isAnimating) {
        const nextPage = headerListItem.find((item) => item.link === url);
        if (nextPage) {
          setNextTitle(nextPage.title);
        }
        setNextPath(url);
        setIsAnimating(true);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (target && target.tagName === 'A' && target.href) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/') && href !== window.location.pathname) {
          event.preventDefault();
          handleRouteChange(href);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isAnimating]);

  const handleAnimationComplete = () => {
    if (nextPath) {
      setTimeout(() => {
        router.push(nextPath);
        setIsAnimating(false);
        setNextPath(null);
      }, 1000); // 文字が表示されている時間を1秒に設定
    }
  };

  useEffect(() => {
    if (nextPath) {
      handleAnimationComplete();
    }
  }, [nextPath]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            key="overlay"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black text-white flex items-center justify-center text-2xl sm:text-4xl z-50"
          >
            <div className="text-center">{nextTitle}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="enter"
          variants={pageVariants}
          className="relative w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
