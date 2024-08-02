import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import ThreeScene from '../components/ThreeScene';
import StarryBackground from '../components/StarryBackground';

const Page = () => {
  // 画像データをオブジェクトの配列として定義します。
  const projects = [
    {
      title: 'Project 1',
      imageUrl: '/images/ORIGIN.png',
      link: 'https://framer-motion-tutorial-mu.vercel.app/'
    },
    {
      title: 'Project 2',
      imageUrl: '/images/ホトうさぎ.png',
      link: 'https://hotousagi.nicework.co.jp/'
    },
    {
      title: 'Project 3',
      imageUrl: '/images/mosyacode.png',
      link: 'https://biyou-mosya-code.vercel.app/'
    },
    // 他のプロジェクトもここに追加
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <StarryBackground />
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} legacyBehavior>
              <a target="_blank" className="block relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="rounded shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
