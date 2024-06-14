'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

const overlayVariants = {
  initial: {
    translateY: '-100%',
  },
  enter: {
    translateY: '0%',
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    translateY: '-100%',
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

  const handleRouteChange = (url: string) => {
    if (!isAnimating) {
      setNextPath(url);
      setIsAnimating(true);
    }
  };

  const handleAnimationComplete = () => {
    if (nextPath) {
      router.push(nextPath);
      setIsAnimating(false);
      setNextPath(null);
    }
  };

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (target && target.tagName === 'A' && target.href) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/') && href !== window.location.pathname) {
          event.preventDefault();
          handleRouteChange(href);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [isAnimating]);

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
            style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'black', zIndex: 50 }}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;