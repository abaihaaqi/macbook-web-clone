"use client";

import Image from "next/image";
import hl1 from "@/public/highlight/hl-1.jpg";
import hl2 from "@/public/highlight/hl-2.jpg";
import hl3 from "@/public/highlight/hl-3.jpg";
import hl4 from "@/public/highlight/hl-4.jpg";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { Slide, SlideProps } from "react-slideshow-image";
import { useEffect, useState } from "react";

function Highlight() {
  const Indicators = () => {
    return (
      <button className="hover:cursor-pointer p-2">
        <div className="dot bg-gray-500 h-2 rounded-full transition-all" />
      </button>
    );
  };

  const defaultProp: SlideProps = {
    children: undefined,
    arrows: false,
    autoplay: true,
    infinite: false,
    indicators: Indicators,
    transitionDuration: 800,
    easing: "ease-out",
  };

  const [prop, setProp] = useState(defaultProp);

  useEffect(() => {
    // Cari elemen dengan class .indicators
    const containerElement = document.querySelector(
      ".highlight .indicatorContainer"
    );
    if (containerElement) {
      return;
    }

    // Cari elemen dengan class .indicators
    const indicatorsElement = document.querySelector(".highlight .indicators");

    if (indicatorsElement) {
      // Buat elemen container baru
      const container = document.createElement("div");
      container.className = "indicatorContainer";

      // Masukkan container sebagai parent dari .indicators
      indicatorsElement.parentNode?.insertBefore(container, indicatorsElement);
      container.appendChild(indicatorsElement);
    }
  }, []);

  return (
    <section className="pt-14">
      <div className="px-8 mb-8">
        <h2 className="mb-4">Keunggulan demi keunggulan.</h2>
        <p className="text-blue-500">Tonton acara &gt;</p>
      </div>

      {/* Slideshow */}
      <div className="highlight relative">
        <Slide {...prop}>
          <div className="relative h-[60vh] w-svw overflow-hidden">
            <Image
              src={hl1}
              fill
              alt="Highlight Image"
              className="object-cover scale"
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
        </Slide>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex ml-[80px]">
          <button
            onClick={() => setProp({ ...prop, autoplay: !prop.autoplay })}
            className="bg-gray-200 rounded-full p-3"
          >
            {prop.autoplay ? (
              <IconPlayerPauseFilled size={32} />
            ) : (
              <IconPlayerPlayFilled size={32} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Highlight;
