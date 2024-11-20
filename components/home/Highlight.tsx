"use client";

import Image from "next/image";
import hl1 from "@/public/highlight/hl-1.jpg";
import hl2 from "@/public/highlight/hl-2.jpg";
import hl3 from "@/public/highlight/hl-3.jpg";
import hl4 from "@/public/highlight/hl-4.jpg";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

function Highlight() {
  return (
    <section className="pt-14">
      <div className="px-8 mb-8">
        <h2 className="mb-4">Keunggulan demi keunggulan.</h2>
        <p className="text-blue-500">Tonton acara &gt;</p>
      </div>

      {/* Slideshow */}
      <div className="relative w-svw h-[60vh] overflow-hidden">
        <div className="absolute flex w-max">
          <div className="relative h-[60vh] w-svw overflow-hidden">
            <Image
              src={hl1}
              fill
              alt="Highlight Image"
              className="object-cover scale-110"
            />
            <p className="absolute top-8 inset-x-8 text-white text-xl font-semibold">
              Chip paling canggih yang pernah ada untuk komputer pribadi.
            </p>
          </div>
          <div className="relative h-[60vh] w-svw overflow-hidden">
            <Image
              src={hl2}
              fill
              alt="Highlight Image"
              className="object-cover scale-110"
            />
            <p className="absolute top-8 inset-x-8 text-white text-xl font-semibold">
              Kekuatan baterai hingga 22 jam untuk portabilitas pro yang
              sempurna.
            </p>
          </div>
          <div className="relative h-[60vh] w-svw overflow-hidden">
            <Image
              src={hl3}
              fill
              alt="Highlight Image"
              className="object-cover scale-110"
            />
            <p className="absolute top-8 inset-x-8 text-white text-xl font-semibold">
              Layar laptop terbaik di dunia. Luar biasa luar dalam.
            </p>
          </div>
          <div className="relative h-[60vh] w-svw overflow-hidden">
            <Image
              src={hl4}
              fill
              alt="Highlight Image"
              className="object-cover scale-110"
            />
            <p className="absolute top-8 inset-x-8 text-white text-xl font-semibold">
              Laptop pro tiasa tandingan. kini dalam warna baru: Hitam kosmik.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Control */}
      <div className="flex justify-center gap-5 my-5">
        <div className="bg-gray-200 rounded-full flex items-center">
          <button className="py-6 pl-6 pr-2">
            <div className="bg-gray-500 w-8 h-2 rounded-full"></div>
          </button>
          <button className="py-6 px-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 px-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 pl-2 pr-6">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
        </div>
        <button className="bg-gray-200 rounded-full p-3">
          <IconPlayerPlayFilled size={30} />
        </button>
      </div>
    </section>
  );
}

export default Highlight;
