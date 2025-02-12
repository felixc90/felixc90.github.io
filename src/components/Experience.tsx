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
    scale: 4,
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
			</Physics>
      
    </>
  );
};