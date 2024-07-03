// 'use client';

// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, useTexture } from '@react-three/drei';
// import * as THREE from 'three';
// import useMediaQuery from '../hooks/useMediaQuery';

// const Earth = ({ isMobile }: { isMobile: boolean }) => {
//   const ref = useRef<THREE.Mesh>(null!);
//   const texture = useTexture('/textures/earth2.jpg'); // 地球のテクスチャ

//   useFrame(() => {
//     ref.current.rotation.y += 0.001; // 回転スピードを遅くする
//   });

//   const position: [number, number, number] = isMobile ? [0, 0, 0] : [-5, -0.5, 0];
//   const size = isMobile ? 2.5 : 3.5;

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[size, 64, 64]} /> {/* 球体のジオメトリのサイズを変更 */}
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };

// const ThreeScene = () => {
//   const isMobile = useMediaQuery('(max-width: 768px)'); // 768px以下のデバイスをモバイルと判断

//   return (
//     <Canvas
//       camera={{ position: [0, 0, 12], fov: 50 }} // カメラの位置を再調整
//       style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // キャンバスを背景に設定
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <Earth isMobile={isMobile} />
//       <OrbitControls enableZoom={false} /> {/* ズームを無効にする */}
//       <Stars />
//     </Canvas>
//   );
// };

// export default ThreeScene;

'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import useMediaQuery from '../hooks/useMediaQuery';

const Earth = ({ isMobile }: { isMobile: boolean }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const texture = useTexture('/textures/earth2.jpg'); // 地球のテクスチャ

  useFrame(() => {
    ref.current.rotation.y += 0.001; // 回転スピードを遅くする
  });

  const position: [number, number, number] = isMobile ? [0, 0, 0] : [-5, -0.5, 0];
  const size = isMobile ? 2.5 : 3.5;

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 64, 64]} /> {/* 球体のジオメトリのサイズを変更 */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Moon = ({ isMobile }: { isMobile: boolean }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const moonTexture = useTexture('/textures/moon.jpg'); // 月のテクスチャ
  const earthPosition: [number, number, number] = isMobile ? [0, 0, 0] : [-5, -0.5, 0];
  const moonDistance = isMobile ? 3.5 : 4.5; // 地球と月の距離を近く

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2; // 月の回転スピード
    ref.current.position.x = earthPosition[0] + moonDistance * Math.cos(t);
    ref.current.position.y = earthPosition[1] + moonDistance * Math.sin(t) * Math.sin(Math.PI / 6); // 軌道の角度を調整
    ref.current.position.z = earthPosition[2] + moonDistance * Math.sin(t) * Math.cos(Math.PI / 6);
  });

  const moonSize = isMobile ? 0.3 : 0.5; // 月のサイズをさらに小さく変更

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[moonSize, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
};

const ThreeScene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // 768px以下のデバイスをモバイルと判断

  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 50 }} // カメラの位置を再調整
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // キャンバスを背景に設定
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Earth isMobile={isMobile} />
      <Moon isMobile={isMobile} />
      <OrbitControls enableZoom={false} /> {/* ズームを無効にする */}
      <Stars />
    </Canvas>
  );
};

export default ThreeScene;
