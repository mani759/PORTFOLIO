import React from "react";
import { GridScan } from "../components/backgrounds/BgWhyMe";
import OrbitCard from "../components/OrbitCard";
const About = () => {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <GridScan
          sensitivity={0.3}
          lineThickness={1}
          linesColor="#d7b04c"
          gridScale={0.18}
          scanColor="#d7b04c"
          scanOpacity={0.5}
          bloomIntensity={0.2}
          chromaticAberration={0}
          noiseIntensity={0.005}
          lineJitter={0.05}
          scanGlow={0.2}
          scanSoftness={5}
          enablePost
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-white font-bold flex justify-center text-3xl mt-0">
          Why Me
        </h2>

        <OrbitCard title="Card 1" description="Placeholder text" color="cyan" />

        <OrbitCard title="Card Two" description="Testing" color="emerald" />
        <OrbitCard title="Card 3" description="Testing" color="purple" />
        <OrbitCard title="Card 4" description="Testing" color="amber" />
        <OrbitCard title="Card 5" description="Testing" color="rose" />
        <OrbitCard title="Card 6" description="Testing" color="blue" />
      </div>
    </section>
  );
};

export default About;
