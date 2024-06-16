import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import primeM3 from "@/public/m3/prime-mx.jpg";
import primeM3Pro from "@/public/m3/prime-mx-pro.jpg";
import primeM3Max from "@/public/m3/prime-mx-max.jpg";
import hw from "@/public/performance/hw.jpg";
import skethUp from "@/public/performance/screen-sketchup.png";
import photoshop from "@/public/performance/screen-photoshop.png";
import davinci from "@/public/performance/screen-davinci.png";
import houdini from "@/public/performance/screen-houdini.png";
import keynote from "@/public/performance/screen-keynote.png";
import maya from "@/public/performance/screen-maya.png";
import vfx from "@/public/performance/screen-vfx.png";
import macMockup from "@/public/mbp/mbp-mockup.jpg";
import macGraphics from "@/public/mbp/mbp-graphics.jpg";
import macBattery from "@/public/mbp/mbp-battery.jpg";
import proRendering from "@/public/pro-apps/pro-apps-3d-rendering.jpg";
import proGaming from "@/public/pro-apps/pro-apps-gaming.jpg";
import proDesign from "@/public/pro-apps/pro-apps-graphic-design.jpg";
import proHW from "@/public/pro-apps/pro-apps-hw.jpg";
import proMusic from "@/public/pro-apps/pro-apps-music-creation.jpg";
import proPhotoEdit from "@/public/pro-apps/pro-apps-photo-editing.jpg";
import proProductivity from "@/public/pro-apps/pro-apps-productivity.jpg";
import proSoftware from "@/public/pro-apps/pro-apps-software-development.jpg";
import proStem from "@/public/pro-apps/pro-apps-stem.jpg";
import proVideoEdit from "@/public/pro-apps/pro-apps-video-editing.jpg";
import mbpM3 from "@/public/mbp/model-mbp-14-m3.jpg";
import mbpM3Pro from "@/public/mbp/model-mbp-14-m3-pro-max.jpg";
import mbpM316 from "@/public/mbp/model-mbp-16-m3-pro-max.jpg";
import m3Logo from "@/public/m3/mx.png";
import m3MaxLogo from "@/public/m3/mx-pro-max.png";

function AboutM3() {
  return (
    <section className="mt-32 bg-black text-white/50 py-14">
      <div>
        <div className="px-8 mb-14">
          <h2 className="mb-28">Jelajahi cerita lengkapnya.</h2>
          <h3 className="text-white mb-10">Tiga lompatan besar.</h3>
          <p className="font-semibold text-lg">
            MacBook Pro melesat berkat chip M3, M3 Pro, dan M3 Max. Dirancang
            dengan <span className="text-white">teknologi 3 nanometer</span> dan
            dilengkapi{" "}
            <span className="text-white">
              arsitektur GPU yang sepenuhnya baru
            </span>
            , ini adalah chip tercanggih yang pernah dibuat untuk komputer
            pribadi. Dan masing-masing{" "}
            <span className="text-white">
              menghadirkan performa dan kemampuan yang lebih profesional
            </span>
            .{" "}
          </p>
        </div>
        <div className="pl-8 relative w-max flex gap-14">
          <div className="w-40">
            <Image src={primeM3} alt="M3 Processor" />
            <ul className="flex flex-col gap-6 text-2xl font-semibold text-teal-500 py-10">
              <li>CPU 8-Core</li>
              <li>GPU 10-Core</li>
              <li>Memori terintegrasi hingga 24 GB</li>
            </ul>
          </div>
          <div className="w-40">
            <Image src={primeM3Pro} alt="M3 Pro Processor" />
            <ul className="flex flex-col gap-6 text-2xl font-semibold text-blue-500 py-10">
              <li>CPU 8-Core</li>
              <li>GPU 10-Core</li>
              <li>Memori terintegrasi hingga 24 GB</li>
            </ul>
          </div>
          <div className="w-40">
            <Image src={primeM3Max} alt="M3 Max Processor" />
            <ul className="flex flex-col gap-6 text-2xl font-semibold text-purple-400 py-10">
              <li>CPU 8-Core</li>
              <li>GPU 10-Core</li>
              <li>Memori terintegrasi hingga 24 GB</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end mb-20">Slide Control</div>
      </div>
      <div>
        <h3 className="text-white px-8 mb-10">
          Performa grafis yang mengubah segalanya.
        </h3>
        <div className="relative h-[40vh] w-svw">
          <Image
            src={hw}
            alt="Performance HW image"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50"
          />
          <Image
            src={skethUp}
            alt="Sketch Up image"
            width={120}
            className="absolute right-1 bottom-20"
          />
          <Image
            src={photoshop}
            alt="Photoshop image"
            width={120}
            className="absolute right-8 bottom-36"
          />
          <Image
            src={houdini}
            alt="Houdini image"
            width={120}
            className="absolute -left-4 bottom-20"
          />
          <Image
            src={maya}
            alt="Maya image"
            width={100}
            className="absolute left-8 bottom-32"
          />
          <Image
            src={vfx}
            alt="VFX image"
            width={140}
            className="absolute left-12 top-10"
          />
          <Image
            src={keynote}
            alt="Keynote image"
            width={100}
            className="absolute top-16 right-24"
          />
          <Image
            src={davinci}
            alt="DaVinci image"
            width={120}
            className="absolute top-8 right-2"
          />
        </div>
        <hr className="border-gray-600 mx-8 mb-10" />
      </div>
      <div className="px-8 text-lg font-semibold">
        <p className="mb-4">
          Kelas arsitektur GPU sepenuhnya baru yang sangat indah dipandang. Dan{" "}
          <span className="text-white">terobosan terbesar dalam grafis</span>{" "}
          untuk Apple silicon. Caching dinamis mengoptimalkan memori on-chip
          yang cepat untuk meningkatkan penggunaan GPU rata-rata secara
          signifikan — mendorong{" "}
          <span className="text-white">
            peningkatan performa yang sangat besar
          </span>{" "}
          untuk aplikasi dan game profesional yang paling berat.
        </p>
        <p className="mb-14">
          <span className="text-white">
            Game akan terlihat semakin mendetail
          </span>{" "}
          berkat mesh shading yang didukung perangkat keras. Hal ini
          menghadirkan kemampuan dan efisiensi yang lebih besar pada pemrosesan
          geometri, sehingga memungkinkan{" "}
          <span className="text-white">
            game merender adegan yang lebih kompleks secara visual.
          </span>
        </p>
        <div className="mb-52">
          <h3 className="text-white mb-2">Rendering hingga 2,5x lebih cepat</h3>
          <p>dibandingkan MacBook Pro 16 inci dengn M1 Max</p>
        </div>
        <div className="mb-20">
          <h3 className="text-white mb-10">
            Ray tracing yang dipercepat dengan perangkat keras.
          </h3>
          <p>
            Untuk pertama kalinya, MacBook Pro dilengkapi ray tracing yang
            dipercepat perangkat keras. Digabungkan dengan arsitektur grafis
            baru, hal ini memungkinkan aplikasi profesional menghadirkan
            performa{" "}
            <span className="text-white">
              rendering dua setengah kali lebih cepat
            </span>{" "}
            dan memungkinkan game menghadirkan{" "}
            <span className="text-white">
              bayangan dan pantulan yang semakin realistis.
            </span>
          </p>
        </div>
        <div className="relative mb-10 mx-4">
          <Image src={macMockup} alt="Mac Blank Screen" />
          <Image
            src={macGraphics}
            alt="Maxon Cinema 4D Screen Image"
            width={270}
            className="absolute top-2 left-1/2 -translate-x-1/2"
          />
          <p className="font-normal text-base py-4 px-6">Maxon Cinema 4D</p>
        </div>
        <hr className="border-gray-600" />
      </div>
      <div className="mt-10 px-8 text-lg font-semibold">
        <p className="mb-2">Performa multithread</p>
        <figure className="mb-2 text-4xl text-white">
          CPU hingga 80% lebih cepat
        </figure>
        <p>dibandingkan Macbook Pro 16 inci dengan M1 Max</p>
        <p className="my-10">
          Core CPU generasi berikutnya{" "}
          <span className="text-white">
            mendorong pengalaman super responsif
          </span>{" "}
          sekaligus mempertahankan efisiensi daya yang mengagumkan
        </p>
        <div className="mb-10">
          <p>Lebih dari</p>
          <figure className="mb-2 text-4xl text-white">
            18 triliun pengoperasian
          </figure>
          <p>per detik</p>
        </div>
        <p>
          Neural Engine 16-core yang disempurnakan{" "}
          <span className="text-white">
            mempercepat model pembelajaran mesin populer
          </span>
          . Alat pemrosesan ganbar seperti DeNoise AI dan Gigapixel AI dari
          Topaz semakin melesat.
        </p>
        <hr className="my-10 border-gray-600" />
        <div className="flex justify-center">
          <button className="bg-white/20 text-white py-3 px-4 rounded-full text-base font-normal flex gap-2 items-center">
            Kenali lebih dalam chip M3
            <div className="bg-blue-600 p-1 rounded-full">
              <IconPlus size={24} />
            </div>
          </button>
        </div>
        <div className="mt-60">
          <figure className="mb-8 text-4xl text-white">
            Tak kenal lelah sepanjang hari.
          </figure>
          <p>
            Macbook Pro memiliki{" "}
            <span className="text-white">
              kekuatan baterai paling tahan lama yang pernah ada di Mac
            </span>
            - hingga 22 jam. Inilah efisiensi yang dihadirkan oleh keajaiban
            Apple Silicon. Dan semua model tetap sama cepatnya, baik ketika
            dicolokkan atau tidak. Jadi, kapan pun tugas atau inspirasi muncul,
            Anda bisa langsung menyelesaikannya.
          </p>
        </div>
        <div className="relative my-10 mx-4">
          <Image src={macMockup} alt="Mac Blank Screen" />
          <Image
            src={macBattery}
            alt="Maxon Cinema 4D Screen Image"
            width={270}
            className="absolute top-2 left-1/2 -translate-x-1/2"
          />
          <p className="font-normal text-base py-4 px-6">Adobe Premiere Pro</p>
        </div>
        <div className="mb-14">
          <p>Pemutaran video hingga</p>
          <figure className="text-white text-4xl mt-2">22 jam</figure>
        </div>
        <div className="mb-40">
          <p>Penelusuran web nirkabel hingga</p>
          <figure className="text-white text-4xl mt-2">15 jam</figure>
        </div>
        <div>
          <h3 className="text-white mb-8">Tingkatkan performa aplikasi.</h3>
          <p>
            Dengan ribuan aplikasi yang dioptimalkan untuk membuka potensi
            maksimal macOS dan Apple Silicon,{" "}
            <span className="text-white">chip M3 mempercepat performa</span>{" "}
            dengan cara yang baru. Kini aplikasi semakin melesat - mulai dari
            aplikasi produktivitas andalan hingga game favorit dan aplikasi pro
            yang bekerja paling keras.
          </p>
          <div className="my-8">
            <Link rel="stylesheet" href="" className="text-blue-500">
              Selengkapnya tentang macOS &gt;
            </Link>
          </div>
        </div>
        <div className="px-3 mb-8">
          <div className="bg-[#161617] px-3 pt-3 relative mb-2">
            <Image src={proHW} alt="Mac Blank Screen" />
            <Image
              src={proSoftware}
              alt="Software Development"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[71svw] rounded-t"
            />
          </div>
          <p className="text-base font-normal">Xcode</p>
        </div>
        <p className="text-xl text-white mb-16">Pengembangan perangkat lunak</p>
        <p className="text-base">
          Xcode, Unity editor, Create ML, TensorFlow, PyTorch, NAG Fortran
          Compiler, Docker, IntelliJ, dan banyak lagi.
        </p>
      </div>
      <div className="bg-[#161617] my-16 py-16 px-8">
        <h2 className="text-white mb-10">
          <div>MacBook Pro</div>untuk semua orang.
        </h2>
        <div className="flex gap-10 w-max">
          <div className="w-64">
            <p className="text-2xl font-bold text-white">MacBook Pro 14"</p>
            <p className="font-semibold mb-3">Chip M3</p>
            <hr className="border-gray-600" />
            <div className="mb-10 w-[87.5%] h-48 flex flex-col justify-end">
              <Image src={mbpM3} alt='Macbook Pro 14"' className="mb-3" />
              <div className="flex justify-between">
                <p>Abu-abu</p>
                <p>Perak</p>
              </div>
            </div>
            <div className="mb-14">
              <Image src={m3Logo} alt="M3 Logo" height={52} />
            </div>
            <p className="text-xl font-semibold">
              Mendukung satu layar eksternal
            </p>
            <p className="text-xl my-14 font-semibold">
              Kekuatan baterai hingga <span className="text-white">22 jam</span>
            </p>
          </div>
          <div className="w-64">
            <p className="text-2xl font-bold text-white">MacBook Pro 14"</p>
            <p className="font-semibold mb-3">Chip M3 Pro atau M3 Max</p>
            <hr className="border-gray-600" />
            <div className="mb-10 w-[87.5%] h-48 flex flex-col justify-end">
              <Image
                src={mbpM3Pro}
                alt='Macbook Pro 14" M3 Pro / M3 Max'
                className="mb-3"
              />
              <div className="flex justify-between">
                <p>Hitam Kosmik</p>
                <p>Perak</p>
              </div>
            </div>
            <div className="mb-14">
              <Image src={m3MaxLogo} alt="M3 Logo" height={52} />
            </div>
            <p className="text-xl font-semibold">
              Mendukung{" "}
              <span className="text-white">Hingga dua atau empat</span> layar
              eksternal
            </p>
            <p className="text-xl my-14 font-semibold">
              Kekuatan baterai hingga <span className="text-white">18 jam</span>
            </p>
          </div>
          <div className="w-64">
            <p className="text-2xl font-bold text-white">MacBook Pro 16"</p>
            <p className="font-semibold mb-3">Chip M3 Pro atau M3 Max</p>
            <hr className="border-gray-600" />
            <div className="mb-10 h-48 flex flex-col justify-end">
              <Image
                src={mbpM316}
                alt='Macbook Pro 16" M3 Pro / M3 Max'
                className="mb-3"
              />
              <div className="flex justify-between">
                <p>Hitam Kosmik</p>
                <p>Perak</p>
              </div>
            </div>
            <div className="mb-14">
              <Image src={m3MaxLogo} alt="M3 Logo" height={52} />
            </div>
            <p className="text-xl font-semibold">
              Mendukung{" "}
              <span className="text-white">Hingga dua atau empat</span> layar
              eksternal
            </p>
            <p className="text-xl my-14 font-semibold">
              Kekuatan baterai hingga <span className="text-white">22 jam</span>
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-end">Slide Control</div>
      </div>
    </section>
  );
}

export default AboutM3;
