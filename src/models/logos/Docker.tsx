import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/docker.glb');
	console.log(nodes)
	return (
		<group scale={0.6} ref={ref} rotation={[0, -3 * Math.PI / 4, 0]} >
			<mesh geometry={nodes['Sphere'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#1d63ed'}/>
			</mesh>
			<mesh geometry={nodes['Curve001'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#1d63ed'}/>
			</mesh>
			<group scale={[1,1,1]}>
				{ [0,1,2,3,4,5,6,7,8,9].map((i) => {
					return (
						<mesh geometry={nodes[`Cube00${i}`].geometry}>
							<meshStandardMaterial metalness={0.2} roughness={.1} color={"#1d63ed"}/>
						</mesh>
					)
				})}	
			</group>
		</group>
	)
}

useGLTF.preload('models/docker.glb')