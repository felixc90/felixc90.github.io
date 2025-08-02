import { Center, OrbitControls, useScroll } from "@react-three/drei";
import { LightRail, Map } from "@/models";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useControls } from "leva";
import { EffectComposer, Noise, Pixelation, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { lerp } from "three/src/math/MathUtils.js";

// interface CursorType {
// 	x: number,
// 	y: number
// };

interface Props {
	fullScreen: boolean;
}

export default function Experience({ fullScreen }: Props)
{

	// const [ , setCursor ] = useState<CursorType>({
	// 	x: 0,
	// 	y: 0
	// })

	// useEffect(() => {
	// 	window.addEventListener('mousemove', (event) =>
	// 	{
	// 		const newCursor = {
	// 			x: event.clientX / window.innerWidth - 0.5,
	// 			y: event.clientY / window.innerHeight - 0.5,
	// 		}
	// 		setCursor(newCursor);
	// 	})
	// }, [])

	useFrame((state) => {
		const newZoom = fullScreen ? 20 : 10;
		state.camera.zoom = lerp(state.camera.zoom, newZoom, 0.02)
		state.camera.updateProjectionMatrix();
	});


	return (
		<>
		{/* <OrbitControls /> */}
			<EffectComposer>
				<ToneMapping mode={ ToneMappingMode.ACES_FILMIC } />
				<Noise opacity={0.2} />
			</EffectComposer>
			<Center>
				<LightRail />
				<Map rotation={[0, Math.PI/2, 0]} />
			</Center>
		</>
	)
}