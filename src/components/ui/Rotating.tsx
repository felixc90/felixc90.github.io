import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

const Rotating = ({ speed, children, axis }: { speed: number, children: React.ReactNode, axis: "x" | "y" | "z" }) => {
		const ref = useRef<THREE.Group>(null);
		useFrame((state) => {
			if (ref.current) {
				ref.current.rotation[axis] = state.clock.elapsedTime * speed;
			}
		});
		return <group ref={ref}>{children}</group>;
	}

	export default Rotating;