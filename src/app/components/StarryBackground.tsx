'use client'
import React from 'react';
import { useStarEffect } from '../hooks/useStarEffect';

export default function StarryBackground() {
  const canvasRef = useStarEffect();

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>;
}
