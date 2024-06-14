"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 1000); // 500msの遅延を追加
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
