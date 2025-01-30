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
import { Anita } from "./models/Anita";
import { Ainsworth } from "./models/Ainsworth";
import { Scientia } from "./models/Scientia";
import { Clancy } from "./models/Clancy";
import { Center } from "./models/Center";

const maps = {
  castle_on_hills: {
    scale: 3,
    position: [-6, -7, 0],
  },
  animal_crossing_map: {
    scale: 20,
    position: [-15, -1, 10],
  },
  city_scene_tokyo: {
    scale: 0.72,
    position: [0, -1, -3.5],
  },
  de_dust_2_with_real_light: {
    scale: 0.3,
    position: [-5, -3, 13],
  },
  medieval_fantasy_book: {
    scale: 0.4,
    position: [-4, 0, -6],
  },
	plane: {
    scale: 1,
    position: [0, -4, 0],
  },
	plat: {
    scale: 0.4,
    position: [0, 0, 0],
  },
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const { map } = useControls("Map", {
    map: {
      value: "plane",
      options: Object.keys(maps),
    },
  });

  return (
    <>
			{/* <OrbitControls /> */}
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
			<Physics debug={false}>
				<Map
					scale={maps[map].scale}
					position={maps[map].position}
					model={`models/${map}.glb`}
				/>
				<CharacterController />
				{/* <RigidBody colliders='trimesh' >
					<Center scale={[.036,.036,.036]} position={[0,-4,6]} rotation={[0, Math.PI, 0]}/>
				</RigidBody> */}
				{/* <RigidBody colliders='trimesh' >
					<Clancy scale={[0.7,0.7,0.7]} position={[6,-3,0]} rotation={[0, Math.PI, 0]}/>
				</RigidBody>
				<RigidBody colliders='trimesh' >
					<Ainsworth scale={[0.7,0.7,0.7]} position={[-6,-3,0]} rotation={[0, Math.PI, 0]}/>
				</RigidBody>
				<RigidBody colliders='trimesh' >
					<Scientia scale={[0.7,0.7,0.7]} position={[0,0,9]} rotation={[0, Math.PI, 0]}/>
				</RigidBody> */}
			</Physics>
      
    </>
  );
};