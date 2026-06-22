import React from "react";
import { GridScan } from "../components/backgrounds/BgWhyMe";
import OrbitCard from "../components/OrbitCard";
import CenterCard from "../components/CenterCard";
const About = () => {
  return (
    <section id="about" className="relative min-h-screen   overflow-hidden">
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
        <div className="relative w-[900px]  h-[900px]   mx-auto">
          <div className=" absolute  left-1/2  top-[45%]  -translate-x-1/2  -translate-y-1/2">
            <CenterCard />
          </div>
          <div className="absolute top-[5%]  left-1/2 -translate-x-1/2">
            <OrbitCard
              title="Card 1"
              description="Placeholder text"
              color="cyan"
            />
          </div>
          <div className="absolute top-[18%] left-0">
            <OrbitCard
              title="Card 2"
              description="Placeholder text"
              color="purple"
            />
          </div>
          <div className="absolute top-[18%] right-0">
            <OrbitCard
              title="Card 3"
              description="Placeholder text"
              color="emerald"
            />
          </div>
          <div className="absolute bottom-[18%] left-0">
            <OrbitCard
              title="Card 4"
              description="Placeholder text"
              color="amber"
            />
          </div>
          <div className="absolute bottom-[18%] right-0">
            <OrbitCard
              title="Card 5"
              description="Placeholder text"
              color="rose"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <OrbitCard
              title="Card 6"
              description="Placeholder text"
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
