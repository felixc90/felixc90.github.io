import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/sql.glb');
	
	return (
		<group ref={ref} rotation={[Math.PI/30, -2 * Math.PI / 4, 0]} >
			<mesh scale={1} geometry={nodes['Cylinder'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#df6c20'}/>
			</mesh>
		</group>
	)
}

useGLTF.preload('models/sql.glb')