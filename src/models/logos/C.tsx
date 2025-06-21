import { Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/c.glb');
	useFrame((_, delta) => {
		if (ref && ref.current) {
			ref.current.rotation.y += delta * 2/3
		}
	})

	return (
		<group ref={ref} rotation={[0, -3 * Math.PI / 4, 0]} scale={[1.4,1.2,1.2]}>
			<group >
				<mesh scale={1} geometry={nodes['Cylinder001'].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={'#5c6bc0'}/>
				</mesh>
				<mesh scale={1} geometry={nodes['Cylinder002'].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={'#3949ab'}/>
				</mesh>
				<mesh scale={1} geometry={nodes['Cylinder'].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={'#283593'}/>
				</mesh>
				<group position={[-.39, 0, 0]}>
					<mesh scale={1} geometry={nodes['Text-C'].geometry}>
						<meshStandardMaterial metalness={0.2} roughness={.1} color={'#fffff'}/>
					</mesh>
				</group>
			</group>
		</group>
	)
}