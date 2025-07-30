// import { Center, OrbitControls, useScroll } from "@react-three/drei";
// import { LightRail, Map } from "../../models";
// import { useEffect, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from 'three';
// import useModelStore from "../../../store/useModelStore";
// import { useControls } from "leva";
// import { EffectComposer, Pixelation, ToneMapping } from "@react-three/postprocessing";
// import { ToneMappingMode } from "postprocessing";
// import { INITIAL_CAMERA_POSITION } from "../../../constants";

// interface CursorType {
// 	x: number,
// 	y: number
// };

// export default function Experience()
// {
// 	const { lightRail } = useModelStore();
// 	// const scroll = useScroll();

// 	const {
// 		cameraPosition,
// 		lightRailControls,
// 	} = useControls({ 
// 		cameraPosition: {
// 			value: {
// 				"x": INITIAL_CAMERA_POSITION.x, 
// 				"y": INITIAL_CAMERA_POSITION.y, 
// 				"z": INITIAL_CAMERA_POSITION.z
// 			},
// 			step: 0.1
// 		},
// 		lightRailControls: true
// 	})

// 	const [ , setCursor ] = useState<CursorType>({
// 		x: 0,
// 		y: 0
// 	})

// 	useEffect(() => {
// 		window.addEventListener('mousemove', (event) =>
// 		{
// 			const newCursor = {
// 				x: event.clientX / window.innerWidth - 0.5,
// 				y: event.clientY / window.innerHeight - 0.5,
// 			}
// 			setCursor(newCursor);
// 		})
// 	}, [])

	
// 	useFrame((state) => {
// 		if (!lightRailControls) return;
// 		const newCameraPosition = new THREE.Vector3(
// 			cameraPosition.x,
// 			cameraPosition.y, 
// 			cameraPosition.z
// 		);
// 		state.camera.position.lerp(newCameraPosition, 0.5);
// 	});


// 	return (
// 		<>
// 			{!lightRailControls && <OrbitControls /> }
// 			<EffectComposer>
// 				<ToneMapping mode={ ToneMappingMode.ACES_FILMIC } />
// 			</EffectComposer>
// 			<Center>
// 				<LightRail />
// 				<Map rotation={[0, Math.PI/2, 0]} />
// 			</Center>
// 		</>
// 	)
// }