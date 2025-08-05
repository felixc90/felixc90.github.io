import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/python.glb');
	console.log(nodes)
	return (
		<group ref={ref} scale={0.8} rotation={[0, -3 * Math.PI / 4, 0]} >
			<mesh geometry={nodes["Curve002"].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={"#FFE052"}/>
			</mesh>
			<mesh geometry={nodes["Curve001"].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={"#387EB8"}/>
			</mesh>
		</group>
	)
}

useGLTF.preload('models/python.glb')