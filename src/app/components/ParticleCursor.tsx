// src/app/components/ParticleCursor.tsx
'use client';

import React, { useEffect } from 'react';

const ParticleCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      document.body.appendChild(particle);

      // パーティクルをカーソルの位置に配置
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;

      // アニメーション終了後にパーティクルを削除
      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default ParticleCursor;
