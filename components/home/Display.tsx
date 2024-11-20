import display1 from "@/public/display/display-1.jpg";
import display2 from "@/public/display/display-2.jpg";
import display3 from "@/public/display/display-3.jpg";
import display4 from "@/public/display/display-4.jpg";
import display5 from "@/public/display/display-5.jpg";
import display6 from "@/public/display/display-6.jpg";
import cameraIcon from "@/public/icons/camera.png";
import micIcon from "@/public/icons/mic.png";
import spatialAudioIcon from "@/public/icons/spatial-audio.png";
import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";

function Display() {
  return (
    <section className="py-16 px-8">
      <h3>Layar terbaik yang pernah ada di laptop.</h3>
      <div className="my-16">
        <Image src={display1} alt="Display 1" className="scale-125" />
      </div>
      <p className="text-black/70 font-bold text-lg mb-10">
        <span className="text-black">Extreme Dynamic Range</span>(XDR)
        menghadirkan sorotan cerminan yang lebih halus , detail luar biasa dalam
        bayangan, dan warna cemerlang yang mirip aslinya. Dikalibrasi pabrik,
        setiap layar Liquid Retina XDR juga dilengkapi{" "}
        <span className="text-black">ProMotion</span> dan{" "}
        <span className="text-black">mode referensi pro</span>
      </p>
      <Image src={display2} alt="Display 2" />
      <div className="my-16 flex flex-col gap-10 font-bold text-lg">
        <div>
          <p className="mb-5">1</p>
          <p>
            10.000 mini-LED{" "}
            <span className="text-black/70">
              dikelompokkan untuk menghadirkan kontras dan kecerahan yang
              presisi.
            </span>
          </p>
        </div>
        <div>
          <p className="mb-5">2</p>
          <p>
            Film dan penyebar optik khusus{" "}
            <span className="text-black/70">
              memadukan dan membentuk cahaya dengan efisien.
            </span>
          </p>
        </div>
        <div>
          <p className="mb-5">3</p>
          <p>
            Panel LCD{" "}
            <span className="text-black/70">
              memungkinkan refresh rate hingga 120 Hz.
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-200 py-3 px-4 rounded-full text-base font-normal flex gap-2 items-center">
            Kenali lebih dalam chip M3
            <div className="bg-blue-600 p-1 rounded-full">
              <IconPlus size={24} className="text-gray-200" />
            </div>
          </button>
        </div>
      </div>
      <div className="my-16 text-black/70 font-bold text-lg">
        <h3 className="text-black">Jernih. Jelas. Anda fokusnya.</h3>
        <div className="my-10">
          <Image src={display3} alt="Display 3" />
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <Image
              src={cameraIcon}
              alt="Camera Icon"
              height={40}
              className="mb-3"
            />
            <span className="text-black">Kamera 1080p.</span> Teknologi ini
            membuat panggilan video terasa lebih nyata - dengan teknologi untuk
            membantu anda terlihat tajam dalam kondisi apapun.
          </div>
          <div>
            <Image src={micIcon} alt="Mic Icon" height={40} className="mb-3" />
            <span className="text-black">
              Deretan tiga mikrofon berkualitas studio.
            </span>{" "}
            Menangkap suara yang sangat halus dalam produksi audio dan
            meminimalkan kebisingan di latar sehingga suara Anda terdengar
            lantang dan jernih.
          </div>
          <div>
            <Image
              src={spatialAudioIcon}
              alt="Spatial Audio Icon"
              height={40}
              className="mb-3"
            />
            <span className="text-black">Sistem suara enam speaker.</span>{" "}
            <span className="text-black/70">
              Dua pasang force-cancelling woofer dengan dua tweeter memenuhi
              ruangan dengan suara. Dan Audio Spasial dengan Dolby Atmos
              menciptakan ruangan kedap suara tiga dimensi.
            </span>
          </div>
        </div>
      </div>
      <div className="my-16 text-black/70 font-bold text-lg">
        <h3 className="text-black mb-10">Semua terhubung dengan baik.</h3>
        <p>
          MacBook Pro dilengkapi{" "}
          <span className="text-black">serangkaian port yang andal</span> untuk
          menghubungkan periferal kecepatan tinggi, menjalankan layar resolusi
          tinggi, atau langsung mengeluarkan kartu SDXC. Dan mendukung Wi-Fi 6E
          dan Bluetooth 5.3.
        </p>
        <div className="relative h-40 my-10">
          <Image
            src={display4}
            alt="Display 4"
            className="max-w-3xl absolute top-0 left-0"
          />
          <Image
            src={display5}
            alt="Display 5"
            className="max-w-3xl absolute bottom-0 right-0"
          />
        </div>
        <hr className="border-black/70" />
        <ul className="text-3xl text-black my-10">
          <li>Thunderbolt</li>
          <li>HDMI</li>
          <li>SDXC</li>
          <li>Jek headphone</li>
          <li>MagSafe</li>
        </ul>
        <hr className="border-black/70 mb-10" />
        <div>
          <span className="text-black">Mendukung layar eksternal.</span>{" "}
          Menghubungkan satu layar eksternal resolusi tinggi dengan M3, hingga
          dua layar dengan M3 Pro, atau hingga empat layar dengan M3 Max.
        </div>
      </div>
      <div className="my-16 text-black/70 font-bold text-lg">
        <h3 className="text-black">Keamanan ada di sentuhan jari anda.</h3>
        <div className="relative">
          <Image src={display6} alt="Display 6" />
          <p className="absolute right-10 top-40">Touch ID</p>
        </div>
        <p className="py-10">
          Magic Keyboard dilengkapi dengan baris tombol fungsi penuh dan Touch
          ID agar anda dapat membuka kunci Mac dan masuk ke berbagai aplikasi
          dan situs web dengan cepat, mudah, dan aman.
        </p>
        <hr className="border-black/70 mb-5" />
        <p>
          <span className="text-black">
            Keamanan adalah yang paling penting.
          </span>{" "}
          Data sidik jari Anda diubah menjadi representasi matematika
          terenkripsi sehingga Anda tidak perlu lagi mengingat kata sandi.
        </p>
      </div>
    </section>
  );
}

export default Display;
