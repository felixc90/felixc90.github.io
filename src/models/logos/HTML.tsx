import { Text3D, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/javascript.glb');

	return (
		<group ref={ref} rotation={[0, -3 * Math.PI / 4, 0]} >
			<mesh scale={1} geometry={nodes['Cube'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#f16529'}/>
			</mesh>
			<Text3D font="./fonts/Logo Fonts/Dinish-Bold.json" rotation={[0, Math.PI / 2, 0]} position={[.44,-.58,.35]} scale={[0.3, 0.4, 0.42]}>
				HTML
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#FFFFFF'}/>
			</Text3D>
		</group>
	)
}