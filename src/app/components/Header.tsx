"use client";
import React, { useState, useEffect } from "react";
import { headerListItem } from "../constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink"; // カスタムリンクコンポーネントをインポート
import { motion } from "framer-motion";

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const menuVariants = {
    hidden: {
      x: "100%",
      display: "none",
    },
    visible: {
      x: 0,
      display: "block",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full h-20 border-gray-500 relative overflow-hidden">
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

        {/* Header List Items */}
        <div className="hidden md:inline-flex items-center gap-8 text-sm font-bold tracking-wide">
          <ul className="flex gap-8 pr-10">
            {headerListItem.map((item, index) => (
              <li key={index} className="list-none">
                <CustomLink 
                  href={item.link} 
                  className={`md:text-xl p-1 gap-3 rounded duration-300 ${
                    active === item.link ? "bg-white text-black" : "hover:bg-white hover:text-black"
                  }`}
                >
                  {item.title}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden z-30">
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 justify-center items-center w-8 h-8 relative z-50"
          >
            <div
              className={`h-0.5 w-8 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`h-0.5 w-8 bg-white transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-8 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={closeMenu}
        ></div>
      )}

      {/* Slide-out Menu */}
      <motion.div
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="fixed top-0 right-0 h-full w-64 bg-sky-950 shadow-lg z-20 text-white flex flex-col gap-8 p-10 pt-20 space-y-4"
      >
        {headerListItem.map((item, index) => (
          <li key={index} className="list-none">
            <CustomLink 
              href={item.link} 
              className={`font-bold text-xl p-1 rounded duration-300 ${
                active === item.link ? "bg-black text-white" : "hover:bg-white hover:text-black"
              }`}
              onClick={closeMenu}
            >
              {item.title}
            </CustomLink>
          </li>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
