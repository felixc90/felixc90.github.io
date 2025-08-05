import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/git.glb');
	
	return (
		<group ref={ref} rotation={[0, -2 * Math.PI / 4, 0]} >
			<mesh scale={[0.6,0.8,0.8]} geometry={nodes['Cube'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#f05133'}/>
			</mesh>
		</group>
	)
}

useGLTF.preload('models/git.glb')