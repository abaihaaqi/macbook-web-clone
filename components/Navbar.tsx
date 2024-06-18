"use client";

import { IconChevronDown, IconMenu, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { animate, scroll } from "motion";

function Navbar() {
  scroll(({ y }) => {
    if (y.current > 460) {
      animate(".animateThis", { y: 48 }, { duration: 0.1 });
    } else {
      animate(".animateThis", { y: 0 }, { duration: 0.1 });
    }
  });

  return (
    <nav>
      <div className="flex justify-between">
        <Link href="/" className="px-4">
          <Image
            src="/icons/apple.svg"
            alt="Apple icon"
            width={17}
            height={48}
          />
        </Link>
        <div className="flex">
          <button className="px-3">
            <IconSearch size={21} stroke={1} />
          </button>
          <button className="px-3">
            <IconMenu size={21} stroke={1} />
          </button>
        </div>
      </div>
      <div className="animateThis fixed -top-12 inset-x-0 bg-white/80 backdrop-blur px-4 py-2 z-[9999] flex justify-between items-center border-b border-gray-300">
        <div className="text-lg font-semibold">MacBook Pro</div>
        <div className="flex items-center gap-3">
          <button className="flex justify-center items-center text-gray-500">
            <IconChevronDown size={32} />
          </button>
          <button className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full">
            Beli
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
