import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useRef } from "react";
import { RenderPixelatedPass } from "three/examples/jsm/Addons.js";

export default function About()
{
	const canvasRef = useRef<typeof Canvas>(null);
	const aboutRef = useRef<typeof HTMLDivElement>(null);

	return (
		<div style={{ height: "300vh", position: "relative"}}>
			{/* <div className="h-full">
				Based in Sydney
			</div> */}
			<Leva />
			<Canvas
				style={{
					height: "100vh",
					top: "0",
					display:"block",
					position: "sticky"
				}}
				shadows
				camera={ {
					fov: 45,
					near: 0.1,
					far: 200,
				}}
			>
				{/* <color attach="background" args={["#000000"]} /> */}
				<Experience />		
			</Canvas>
    </div>
	)
}