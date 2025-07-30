import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/vue.glb');
	
	return (
		<group ref={ref} rotation={[0, -3 * Math.PI / 4, 0]} >
			<mesh scale={1.15} geometry={nodes['Outer'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#42b883'}/>
			</mesh>
			<mesh scale={1.16} geometry={nodes['Inner'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#35495e'}/>
			</mesh>
		</group>
	)
}