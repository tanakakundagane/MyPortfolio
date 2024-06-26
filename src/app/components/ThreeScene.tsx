// src/app/components/ThreeScene.tsx
'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const texture = useTexture('/textures/earth2.jpg'); // 地球のテクスチャ

  useFrame(() => {
    ref.current.rotation.y += 0.001; // 回転スピードを遅くする
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[4, 64, 64]} /> {/* 球体のジオメトリのサイズをさらに大きく */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 50 }} // カメラの位置を再調整
      style={{ width: '100%', height: '100%' }} // キャンバスを絶対位置に設定
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Earth />
      <OrbitControls enableZoom={false} /> {/* ズームを無効にする */}
      <Stars />
    </Canvas>
  );
};

export default ThreeScene;
