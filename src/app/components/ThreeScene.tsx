// // src/app/components/ThreeScene.tsx
// 'use client';

// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, useTexture } from '@react-three/drei';
// import * as THREE from 'three';
// import useMediaQuery from '../hooks/useMediaQuery';

// const Earth = () => {
//   const ref = useRef<THREE.Mesh>(null!);
//   const texture = useTexture('/textures/earth2.jpg'); // 地球のテクスチャ

//   useFrame(() => {
//     ref.current.rotation.y += 0.001; // 回転スピードを遅くする
//   });

//   return (
//     <mesh ref={ref} position={[-5, -0.5, 0]}>
//       <sphereGeometry args={[3.5, 64, 64]} /> {/* 球体のジオメトリのサイズをさらに大きく */}
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
//       <mesh position={isMobile ? [0, 0, 0] : [2, 0, 0]}/> {/* デバイスの幅に応じて位置を変更 */}
//       <Earth />
//       <OrbitControls enableZoom={false} /> {/* ズームを無効にする */}
//       <Stars />
//     </Canvas>
//   );
// };

// export default ThreeScene;

// src/app/components/ThreeScene.tsx
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
      <OrbitControls enableZoom={false} /> {/* ズームを無効にする */}
      <Stars />
    </Canvas>
  );
};

export default ThreeScene;



