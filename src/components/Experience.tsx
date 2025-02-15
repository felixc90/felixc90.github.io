import {
  Environment,
	OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { Map } from "./Map";
import { Physics, RigidBody } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";

export const Experience = () => {
  const shadowCameraRef = useRef();

  return (
    <>
			<OrbitControls />
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
			<Physics debug={true}>
				<Map
					scale={0.66}
					rotation={[0, Math.PI, 0]}
					position={[0, -1, 0]}
					model={`models/map.glb`}
				/>
				<CharacterController />
			</Physics>
      
    </>
  );
};