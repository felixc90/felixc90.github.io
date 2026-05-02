import { Canvas } from "@react-three/fiber";
import Experience from "./university/Experience";
import { CSSProperties, useEffect, useState } from "react";
import { INITIAL_CAMERA_POSITION } from "@/constants";
import ScrambleText from "@/components/ui/ScrambleText";
import MySplitText from "@/components/ui/MySplitText";
import Square from "@/components/ui/Square";
import Education from "./university/Education";

const Introduction = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const miniStyle: CSSProperties = {
    width: "26rem",
    height: "16rem",
    border: "solid 1px",
    borderRadius: "1rem",
    borderColor: "var(--lighter)",
    margin: "0 auto",
    transition: "all 0.3s ease-in-out",
  };

  const fullStyle: CSSProperties = {
    width: "100vw",
    position: "fixed",
    padding: "0",
    margin: "0",
    top: "0",
    left: "0",
    zIndex: "20",
    transition: "all 0.3s ease-in-out",
  };

  const getAge = () => {
    const birthDate = new Date(2003, 2, 17);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();

    if (
      now.getMonth() < birthDate.getMonth() ||
      (now.getMonth() == birthDate.getMonth() &&
        now.getDate() < birthDate.getDate())
    ) {
      years--;
    }

    return years;
  };

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  const bioMain = `
Hi, I'm Felix — a ${getAge()}-year-old Australian software developer with a focus on full-stack engineering. 
Through my experience with university and personal projects, and with energy infrastructure software company Neara, I've developed a passion for crafting elegant solutions to complex, real world problems — particularly in designing scalable systems end-to-end and optimizing for user experience. 
	`;

  const bioExtended = `
Recently, I've also been exploring WebGL and Three.js which I've used to create the Education section of my portfolio (click below).
	`;

  return (
    <div className="bg-darker text-light min-h-[calc(100vh+4rem)] -mx-8 px-8 sm:-mx-16 sm:px-16 pt-24 pb-12">
      <div className="flex justify-around">
        <Square color="var(--lighter)" />
      </div>
      <MySplitText
        duration={2}
        className="max-w-[40rem] mx-auto text-lg text-center mt-8 mb-0"
      >
        {bioMain}
      </MySplitText>
      <MySplitText
        duration={1.5}
        className="max-w-[40rem] text-lg mx-auto text-center mb-12 text-light/55"
        delay={0.8}
      >
        {bioExtended}
      </MySplitText>
      <div className="flex justify-around">
        <div className="hidden md:block neue-montreal-mono text-xs pr-4 m-auto">
          <ScrambleText chars="upperCase">CODED WITH THREE.JS</ScrambleText>
        </div>
        <Canvas
          shadows
          orthographic
          camera={{
            near: 0.1,
            far: 100,
            zoom: 10,
            position: INITIAL_CAMERA_POSITION,
          }}
          className={fullscreen ? "grabbable" : "hover:cursor-pointer"}
          style={fullscreen ? fullStyle : miniStyle}
          onClick={() => {
            requestAnimationFrame(() => setFullscreen(true));
          }}
        >
          <color attach="background" args={["#111111"]} />
          <ambientLight intensity={4} />
          <directionalLight
            position={[48, 32, 0]}
            lookAt={[16, 0, 0]}
            intensity={10}
            castShadow
          />
          <Experience fullscreen={fullscreen} />
        </Canvas>
        <div className="hidden md:block neue-montreal-mono text-xs pl-4 m-auto">
          <ScrambleText chars="upperCase">MODELLED IN BLENDER</ScrambleText>
        </div>
        {fullscreen && <Education setFullscreen={setFullscreen} />}
      </div>
    </div>
  );
};

export default Introduction;
