"use client";
import React, { useState, useEffect } from "react";
import { headerListItem } from "../constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink"; // カスタムリンクコンポーネントをインポート
import AudioPlayer from "./AudioPlayer";

const Header = () => {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== null) {
      setActive(pathname);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-20 border-gray-500 relative">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <CustomLink href="/" className="flex gap-3 relative group overflow-hidden">
          <Image
            src="/images/Astro.png"
            width={40}
            height={40}
            alt="Astro"
            className="rounded-full"
          />
          <p className="text-3xl font-bold pt-2">ASTRO.Doc</p>
        </CustomLink>

        {/* <div className="fixed top-20 md:relative md:top-0">
          <AudioPlayer/>
        </div> */}

        {/* Header List Items */}
        <div className="hidden md:inline-flex items-center gap-8 text-sm font-bold tracking-wide">
          <ul className="flex gap-8 pr-10">
            {headerListItem.map((item, index) => (
              <CustomLink 
                key={index} 
                href={item.link} 
                className={`md:text-xl p-1 gap-3 rounded duration-300 ${
                  active === item.link ? "bg-black text-white" : "hover:bg-black hover:text-white"
                }`}
              >
                <li>
                  {item.title}
                </li>
              </CustomLink>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden z-20">
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 justify-center items-center w-8 h-8 relative z-50"
          >
            <div
              className={`h-0.5 w-8 bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`h-0.5 w-8 bg-black transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-8 bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0"
          onClick={closeMenu}
        ></div>
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 opacity-80 bg-offWhite-300 shadow-lg transition-transform duration-300 ease-in-out z-10 bg-sky-950 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 p-10 pt-20 text-white">
          {headerListItem.map((item, index) => (
            <CustomLink 
              key={index} 
              href={item.link} 
              className={`font-bold text-xl p-1 rounded duration-300 ${
                active === item.link ? "bg-black text-white" : "hover:bg-white hover:text-black"
              }`}
            >
              <li onClick={closeMenu}>
                {item.title}
              </li>
            </CustomLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
