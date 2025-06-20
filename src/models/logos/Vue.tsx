import { Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/javascript.glb');
	useFrame((_, delta) => {
		if (ref && ref.current) {
			ref.current.rotation.y += delta * 2/3
		}
	})
	return (
		<group ref={ref} rotation={[0, -Math.PI / 2, 0]}>
			<mesh scale={1} geometry={nodes['Cube'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#663399'}/>
			</mesh>
			<Text3D font="./fonts/logos/Dinnish-Bold.json" rotation={[0, Math.PI / 2, 0]} position={[.4,-.7,.3]} scale={0.65}>
				CSS
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#FFFFFF'}/>
			</Text3D>
		</group>
	)
}