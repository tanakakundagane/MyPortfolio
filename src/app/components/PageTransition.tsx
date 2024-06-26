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
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 0.7,
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
      delay: 0.5,
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
      }, 950);
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
            className="fixed inset-0 bg-black text-white flex items-center justify-center text-4xl sm:text-6xl z-50"
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
