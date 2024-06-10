import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  dx: number;
  dy: number;
}

export function useStarEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = Array(100).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      alpha: Math.random(),
      dx: Math.random() * 0.5,
      dy: Math.random() * 0.5,
    }));

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 0, ${star.alpha})`;
        ctx.fill();
      });
    }

    function updateStars() {
      stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height) star.y = 0;
      });
    }

    function animate() {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return canvasRef;
}
