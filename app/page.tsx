import Image from "next/image";
import heroImg from "@/public/welcome-hero.jpg";
import Highlight from "@/components/home/Highlight";
import Viewer3D from "@/components/home/Viewer3D";
import AboutM3 from "@/components/home/AboutM3";
import Display from "@/components/home/Display";
import Augment from "@/components/home/Augment";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[800px] flex flex-col justify-center items-center text-center px-8 gap-6">
        <div>
          <h1 className="mb-2">MacBook Pro</h1>
          <h2 className="text-4xl">Begitu mengesankan. Mencuri perhatian.</h2>
        </div>
        <Image src={heroImg} alt="Hero Image" />
        <button className="btn-primary">Beli</button>
      </section>

      {/* Highlight Section */}
      <Highlight />

      {/* 3D Viewer Section */}
      <Viewer3D />

      {/* M3 Chip Section */}
      <AboutM3 />

      {/* Display Section */}
      <Display />

      {/* Augment Section */}
      <Augment />
    </div>
  );
}
