import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";
import augmentIPad from "@/public/augment/with-ipad.jpg";
import augmentIPhone from "@/public/augment/with-iphone.jpg";
import augmentWatch from "@/public/augment/with-watch.jpg";
import mbp1416 from "@/public/product-tile/product-tile-mbp-14-16.png";
import mba1315 from "@/public/product-tile/product-tile-mba-13-15.png";
import m2m3 from "@/public/m3/m2-m3.png";
import m3ProMax from "@/public/m3/m3-pro-max.png";
import Image from "next/image";

function Augment() {
  return (
    <section className="py-16 px-8">
      <div>
        <h2 className="mb-10">Pasangan sempurna.</h2>
        <div className="bg-[rgb(250,250,252)] px-5 py-10 rounded-3xl">
          <button className="text-left">
            <div className="flex justify-between mb-5">
              <h3 className="text-2xl">Mac dan iPhone</h3>
              <IconChevronUp size={32} className="text-black/50" />
            </div>
            <p className="mb-10">
              Anda juga bisa menjawab panggilan datau pesan dari iPhone langsung
              pada Mac. Salin gambar, video, atau teks di iPhone, lalu tempelkan
              ke aplikasi lain di Mac yang berdekatan. Dengan iCloud, anda bisa
              mengakses file favorit Anda dari iPhone atau Mac. Dan masih banyak
              lagi.
            </p>
            <Image src={augmentIPhone} alt="Augment iPhone" className="mb-10" />
          </button>
          <hr className="border-black/20" />
          <button className="text-left w-full h-20">
            <div className="flex justify-between">
              <h3 className="text-2xl">Mac dan iPad</h3>
              <IconChevronDown size={32} className="text-black/50" />
            </div>
          </button>
          <hr className="border-black/20" />
          <button className="text-left w-full h-20">
            <div className="flex justify-between">
              <h3 className="text-2xl">Mac dan Apple Watch</h3>
              <IconChevronDown size={32} className="text-black/50" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <h3 className="mb-3">Bandingkan dengan MacBook Air.</h3>
        <p className="text-blue-500">Jelajahi semua model Mac &gt;</p>
        <div className="flex gap-5">
          <div className="w-1/2">
            <div className="h-40 flex items-end mb-5">
              <Image src={mbp1416} alt='MacBook Pro 14" dan MacBook Pro 16"' />
            </div>
            <div className="flex gap-1">
              <div className="bg-[#2e2c2e] w-3 h-3 rounded-full"></div>
              <div className="bg-[#e3e4e5] w-3 h-3 rounded-full"></div>
              <div className="bg-[#7d7e80] w-3 h-3 rounded-full"></div>
            </div>
            <div className="h-28 flex items-end mb-1">
              <h3 className="text-lg">
                <div>MacBook Pro</div> 14" dan 16"
              </h3>
            </div>
            <p className="h-14">Chip M3, M3 Pro, atau M3 Max</p>
            <p className="h-40">
              Laptop Mac paling canggih untuk pekerjaan berat dengan file besar.
            </p>
            <div className="mb-5">
              <button className="text-gray-500 py-2">Sedang dilihat</button>
            </div>
            <p className="text-blue-500">Beli &gt;</p>
          </div>
          <div className="w-1/2">
            <div className="h-40 flex items-end mb-5">
              <Image src={mba1315} alt='MacBook Air 13" dan MacBook Air 15"' />
            </div>
            <div className="flex gap-1">
              <div className="bg-[#2e3632] w-3 h-3 rounded-full"></div>
              <div className="bg-[#f0e4d3] w-3 h-3 rounded-full"></div>
              <div className="bg-[#7d7e80] w-3 h-3 rounded-full"></div>
              <div className="bg-[#e3e4e5] w-3 h-3 rounded-full"></div>
            </div>
            <div className="h-28 flex flex-col justify-end mb-1">
              <p className="text-sm text-red-600 mb-1">Model M3 baru</p>
              <h3 className="text-lg">
                <div>MacBook Pro</div> 14" dan 16"
              </h3>
            </div>
            <p className="h-14">Chip M2 atau M3</p>
            <p className="h-40">
              Luar biasa tipis dan cepat, sehingga Anda dapat bekerja, bermain,
              dan berkarya di mana saja.
            </p>
            <div className="mb-5">
              <button className="w-min bg-blue-500 text-white rounded-full px-3 py-2">
                Selengkapnya
              </button>
            </div>
            <p className="text-blue-500">Beli &gt;</p>
          </div>
        </div>
        <hr className="border-gray-300 my-10" />
        <div className="flex gap-5 mb-16">
          <div className="w-1/2">
            <Image
              src={m3ProMax}
              alt="Chip M3, M3 Pro, dan M3 Max"
              height={64}
            />
            <div className="text-sm text-gray-600">
              <p className="h-16">Chip Apple M3, M3 Pro, atau M3 Max</p>
              <div className="h-20">
                <p>Kekuatan baterai hingga</p>
                <p className="text-xl font-semibold text-black">22 jam</p>
              </div>
              <div className="h-14 flex flex-col justify-end mb-3">
                <p className="mb-1">Hingga</p>
                <p className="text-xl font-semibold text-black">7 port</p>
              </div>
              <p>
                2x Thunderbolt/USB 4 atau 3x Thunderbolt 4, HDMI, SDXC, jek
                headphone, MagSafe
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={m2m3} alt="Chip M2 dan M3" height={64} />
            <div className="text-sm text-gray-600">
              <p className="h-16">Chip Apple M2 atau M3</p>
              <div className="h-20">
                <p>Kekuatan baterai hingga</p>
                <p className="text-xl font-semibold text-black">18 jam</p>
              </div>
              <div className="h-14 flex flex-col justify-end mb-2">
                <p className="text-xl font-semibold text-black">4 port</p>
              </div>
              <p>2x Thunderbolt/USB 4, jek headphone, MagSafe</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-200 py-3 px-4 rounded-full text-base font-normal flex gap-2 items-center">
            Bandingkan semua model Mac
            <div className="bg-blue-600 p-1 rounded-full">
              <IconChevronRight size={24} className="text-gray-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Augment;
