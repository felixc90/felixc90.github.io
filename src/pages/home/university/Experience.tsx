import { Center, OrbitControls, useScroll } from "@react-three/drei";
import { LightRail, Map } from "@/models";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useControls } from "leva";
import { EffectComposer, Noise, Pixelation, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { lerp } from "three/src/math/MathUtils.js";
import { INITIAL_CAMERA_POSITION } from "@/constants";

// interface CursorType {
// 	x: number,
// 	y: number
// };

interface Props {
	fullScreen: boolean;
}

export default function Experience({ fullScreen }: Props)
{

	const [ zoomed, setZoomed ] = useState(false);

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
	useEffect(() => {
		if (!fullScreen) {
			setZoomed(false);
		}
	}, [fullScreen])

	useFrame((state) => {
		if (!fullScreen) {
			state.camera.zoom = lerp(state.camera.zoom, 10, 0.05)
			state.camera.position.lerp(INITIAL_CAMERA_POSITION, 0.2)
			state.camera.lookAt(new THREE.Vector3(0,0,0))
			state.camera.updateProjectionMatrix();
		} else if (!zoomed) {
			state.camera.zoom = lerp(state.camera.zoom, 20, 0.02)
			state.camera.updateProjectionMatrix();
			if (state.camera.zoom > 19) {
				setZoomed(true);
			}
		}
	});


	return (
		<>
			{fullScreen && <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI/2}  minAzimuthAngle={0} maxAzimuthAngle={Math.PI} minZoom={12} maxZoom={80} /> }
			<EffectComposer>
				<ToneMapping mode={ ToneMappingMode.ACES_FILMIC } />
				<Noise opacity={0.2} />
				{/* <Pixelation granularity={1} /> */}
			</EffectComposer>
			<Center>
				<LightRail />
				<Map rotation={[0, Math.PI/2, 0]} />
			</Center>
		</>
	)
}