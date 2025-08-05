import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/java.glb');
	console.log(nodes)
	return (
		<group ref={ref} rotation={[0, -3 * Math.PI / 4, 0]} >
			<mesh scale={1} geometry={nodes['Cube'].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={'#ffffff'}/>
			</mesh>
			<group scale={[1,1,1]}>
				{ [1,2,3,4,5,6,7,8].map((i) => {
					return (
						<group>
							<mesh scale={1} geometry={nodes[`Curve00${i}`].geometry}>
								<meshStandardMaterial metalness={0.2} roughness={.1} color={[3, 7].includes(i) ? "#F8981D" : "#5382A1"}/>
							</mesh>
							<mesh scale={[-1,1,-1]} geometry={nodes[`Curve00${i}`].geometry}>
								<meshStandardMaterial metalness={0.2} roughness={.1} color={[3, 7].includes(i) ? "#F8981D" : "#5382A1"}/>
							</mesh>
						</group>
						
					)
				})}	
			</group>
		</group>
	)
}

useGLTF.preload('models/java.glb')