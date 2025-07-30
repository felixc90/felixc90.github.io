import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/react.glb');

	return (	
		<group ref={ref} scale={2.2}>
			<mesh scale={1} geometry={nodes['Icosphere'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#61dafb'}/>
			</mesh>
			<mesh scale={1} geometry={nodes['Torus001'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#61dafb'}/>
			</mesh>
			<mesh scale={1} geometry={nodes['Torus002'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#61dafb'}/>
			</mesh>
			<mesh scale={1} geometry={nodes['Torus003'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#61dafb'}/>
			</mesh>
		</group>
	)
}

useGLTF.preload('models/react.glb')