import { Center, OrbitControls } from "@react-three/drei";
import { LightRail, Map } from "@/models";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { EffectComposer, Noise, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { lerp } from "three/src/math/MathUtils.js";
import { INITIAL_CAMERA_POSITION } from "@/constants";

interface Props {
	fullScreen: boolean;
}

export default function Experience({ fullScreen }: Props)
{

	const [ zoomed, setZoomed ] = useState(false);

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
			state.camera.zoom = lerp(state.camera.zoom, window.innerWidth >= 640 ? 20 : 8, 0.02)
			state.camera.updateProjectionMatrix();
			if (state.camera.zoom > 19) {
				setZoomed(true);
			}
		}
	});


	return (
		<>
			{fullScreen && <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI/2}  minAzimuthAngle={0} maxAzimuthAngle={Math.PI} minZoom={8} maxZoom={80} /> }
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