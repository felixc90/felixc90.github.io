import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import config from "../config.json";
import { Ainsworth, Centrepoint, Auditorium, Historic, Modern, OperaHouse, RedCenter, Scientia, TowerOne } from "./models";
import { Tree } from "./sprites/Tree";
import { Forest } from "./sprites/Forest";


const componentMap = {
  Ainsworth: (props) => <Ainsworth {...props} />,
  Centrepoint: (props) => <Centrepoint {...props} />,
  Auditorium: (props) => <Auditorium {...props} />,
  Historic: (props) => <Historic {...props} />,
  Modern: (props) => <Modern {...props} />,
  OperaHouse: (props) => <OperaHouse {...props} />,
  RedCenter: (props) => <RedCenter {...props} />,
  Scientia: (props) => <Scientia {...props} />,
  TowerOne: (props) => <TowerOne {...props} />
};

export const Map = ({ model, ...props }) => {
  const { scene, animations } = useGLTF(model);
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions]);

  return (
    <group>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={scene} {...props} ref={group} />
      </RigidBody>


      {/* Dynamically load objects from config */}
      {config.objects.map((obj, index) => {
        const ModelComponent = componentMap[obj.type]; // Get correct component
        return (
					<RigidBody colliders='hull' type="fixed">
						{ ModelComponent ? (
							<ModelComponent 
								key={index}
								position={[obj.position.x, obj.position.y, obj.position.z]}
								rotation={[obj.rotation.x, obj.rotation.y, obj.rotation.z]}
								scale={[obj.scale.x, obj.scale.y, obj.scale.z]}
							/>
						) : null}
					</RigidBody>
				)
      })}
    </group>
  );
};
