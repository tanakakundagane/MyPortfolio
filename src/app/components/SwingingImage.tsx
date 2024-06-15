'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SwingingImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const SwingingImage: React.FC<SwingingImageProps> = ({ src, width, height, alt, className }) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      style={{ transformOrigin: 'top center' }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </motion.div>
  );
};

export default SwingingImage;

