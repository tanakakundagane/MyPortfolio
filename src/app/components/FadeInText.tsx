'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const FadeInText: React.FC<{ text: string }> = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.03 } },
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default FadeInText;
