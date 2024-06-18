'use client';

import React, { createContext, useContext, ReactNode, HTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion';

type HTMLDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'style'>;

interface FadeInProps extends HTMLDivProps, MotionProps {
  children: ReactNode;
}

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: '0px 0px -200px' };

const FadeIn: React.FC<FadeInProps> = (props) => {
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      // viewport={viewport}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

interface FadeInStaggerProps {
  faster?: boolean;
  children: ReactNode;
}

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({ faster = false, children }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: faster ? 0.3 : 0.2 } },
        }}
        // viewport={viewport}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
