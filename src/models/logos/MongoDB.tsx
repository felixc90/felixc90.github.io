import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';

export function Model() {
	const ref = useRef<THREE.Group>(null)
	const { nodes } = useGLTF('/models/mongodb.glb');
	console.log(nodes);
	return (
		<group ref={ref} rotation={[0, -1 * Math.PI / 4, 0]} >
			<group scale={1.1}>
				<group scale={[-1, 1, -1]} >
					<mesh geometry={nodes["Curve002"].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={"#b8c4c2"}/>
					</mesh>
					<mesh geometry={nodes["Curve001"].geometry}>
						<meshStandardMaterial metalness={0.2} roughness={.1} color={"#10aa50"}/>
					</mesh>
					<mesh geometry={nodes["Curve003"].geometry}>
						<meshStandardMaterial metalness={0.2} roughness={.1} color={"#12924f"}/>
					</mesh>
				</group>
				<mesh geometry={nodes["Curve002"].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={"#b8c4c2"}/>
				</mesh>
				<mesh geometry={nodes["Curve001"].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={"#10aa50"}/>
				</mesh>
				<mesh geometry={nodes["Curve003"].geometry}>
					<meshStandardMaterial metalness={0.2} roughness={.1} color={"#12924f"}/>
				</mesh>
			</group>
			<mesh scale={[1,1,1.12]} geometry={nodes["Cylinder"].geometry}>
				<meshStandardMaterial metalness={0.2} roughness={.1} color={"#21313c"}/>
			</mesh>
		</group>
	)
}

useGLTF.preload('models/mongodb.glb')