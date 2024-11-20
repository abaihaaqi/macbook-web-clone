import Image from "next/image";
import viewerImg1 from "@/public/3d-viewer/3d-viewer-1.jpg";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function Viewer3D() {
  return (
    <section className="pt-44">
      <h2 className="px-8">Lihat lebih dekat.</h2>
      <div className="mt-36 mb-20 flex justify-center items-center w-full">
        <Image src={viewerImg1} alt="3d Viewer Image" className="w-10/12" />
      </div>
      <p className="text-xs text-center mb-3">
        MacBook Pro 16" dalam warna Hitam Kosmik
      </p>

      {/* Slide Control */}
      <div className="flex justify-center gap-5">
        <div className="bg-gray-200 rounded-full flex items-center">
          <button className="py-3 pl-3 pr-6 text-gray-400">
            <IconChevronLeft size={32} />
          </button>
          <button className="py-6 pr-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 px-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 px-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 px-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 px-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-6 pl-2">
            <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
          </button>
          <button className="py-3 pl-6 pr-3">
            <IconChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Viewer3D;
