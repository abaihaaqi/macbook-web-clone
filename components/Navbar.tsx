import { IconMenu, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
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
    </nav>
  );
}

export default Navbar;
