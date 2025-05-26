import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./education/Experience";

export default function Education()
{

	return (
		<>
      <KeyboardControls
				map={ [
						{ name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
						{ name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
						{ name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
						{ name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
				] }
			>
				<Leva />
				<Canvas
					shadows
					camera={ {
							fov: 45,
							near: 0.1,
							far: 200,
							position: [ -5, 2.5, 7 ],
							rotation: [ -1, -.5, 0],
					} }
				>
					<Experience />
				</Canvas>
			</KeyboardControls>
    </>
	)
}