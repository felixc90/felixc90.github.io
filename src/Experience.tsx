import { Environment, useScroll, useTexture } from "@react-three/drei";
import { LightRail, Map } from "./models";
import { useEffect, useRef, useState } from "react";
import { DirectionalLight } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { INITIAL_CAMERA_POSITION, NUM_PAGES, SEGMENT_LENGTH } from '../constants';
import useModelStore from "../store/useModelStore";
import { useControls } from "leva";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";

interface CursorType {
	x: number,
	y: number
};
import Grass from "./models/GrassMesh";
import GrassMesh from "./models/GrassMesh";

export default function Experience()
{
	const dirLight = useRef<DirectionalLight>(null);
	const { lightRail } = useModelStore();
	const scroll = useScroll();

	const {
		cameraPosition
	} = useControls({ cameraPosition: {
		value: {
			"x": INITIAL_CAMERA_POSITION.x, 
			"y": INITIAL_CAMERA_POSITION.y, 
			"z": INITIAL_CAMERA_POSITION.z
		},
		step: 0.1
	}})

	const [ , setCursor ] = useState<CursorType>({
		x: 0,
		y: 0
	})

	useEffect(() => {
		window.addEventListener('mousemove', (event) =>
		{
			const newCursor = {
				x: event.clientX / window.innerWidth - 0.5,
				y: event.clientY / window.innerHeight - 0.5,
			}
			setCursor(newCursor);
		})
	}, [])

	
	useFrame((state) => {
		const newCameraPosition = new THREE.Vector3(
			cameraPosition.x,
			cameraPosition.y, 
			(NUM_PAGES - 1) * SEGMENT_LENGTH * scroll.offset + cameraPosition.z
		);
		state.camera.position.lerp(newCameraPosition, 0.5);

		if (lightRail && lightRail.current) {
			state.camera.lookAt(lightRail.current.position)
		}
	});


	return (
		<>
			{/* <OrbitControls /> */}
			<EffectComposer>
				<Pixelation granularity={2}/>
			</EffectComposer>
			<Environment preset="sunset"/>
			{/* <LightRail /> */}
			<Map rotation={[0, Math.PI/2, 0]} />
			<GrassMesh surfaceMesh={new THREE.Mesh(new THREE.PlaneGeometry(10,10,10,10))}/>
			<ambientLight intensity={0.1} />
      <directionalLight
				ref={dirLight}
				color="white"
				position={[5, 15, 5]}
				intensity={1}
				castShadow
				shadow-camera-far={200}
				shadow-camera-left={-50}
				shadow-camera-right={50}
				shadow-camera-top={50}
				shadow-camera-bottom={-50}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
			{dirLight.current && <directionalLightHelper args={[dirLight.current]} />}
		</>
	)
}

