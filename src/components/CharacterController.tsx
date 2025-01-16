import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { Character } from "./Character";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useKeyboardControls } from "@react-three/drei";
import { Sprite } from "./Sprite";

const normalizeAngle = (angle: number) => {
  while (angle > Math.PI) angle -= 2 * Math.PI;
  while (angle < -Math.PI) angle += 2 * Math.PI;
  return angle;
};

const lerpAngle = (start: number, end: number, t: number) => {
  start = normalizeAngle(start);
  end = normalizeAngle(end);

  if (Math.abs(end - start) > Math.PI) {
    if (end > start) {
      start += 2 * Math.PI;
    } else {
      end += 2 * Math.PI;
    }
  }

  return normalizeAngle(start + (end - start) * t);
};

export const CharacterController = () => {
	const { WALK_SPEED, RUN_SPEED } = useControls("Character Control", {
		WALK_SPEED: { value: 0.8, min: 0.1, max: 4, step: 0.1 },
		RUN_SPEED: { value: 1.6, min: 0.2, max: 12, step: 0.1 },
	})

	const [animation, setAnimation] = useState("idle");
	const [direction, setDirection] = useState("forward");
	const rb = useRef<RapierRigidBody>(null);
  const container = useRef<Group>(null);
  const character = useRef<Group>(null);
  const cameraTarget = useRef<Group>(null);
  const cameraPosition = useRef<Group>(null);

	const characterRotationTarget = useRef(0);
  const cameraWorldPosition = useRef(new Vector3());
  const cameraLookAtWorldPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());

	const [, get] = useKeyboardControls();

  useFrame(({ camera }) => {

		if (rb.current) {
			const vel = rb.current.linvel();
			const movement = {
				x: 0,
				z: 0,
			}
		
			if (get().forward) {
				movement.z = 1;
				setDirection("forward");
			}
		
			if (get().backward) {
				movement.z = -1;
				setDirection("backward");
			}
		
			const speed = get().run ? RUN_SPEED : WALK_SPEED;
		
			if (get().left) {
				movement.x = 1;
				setDirection("left");
			}
		
			if (get().right) {
				movement.x = -1;
				setDirection("right");
			}

			if (movement.x !== 0 || movement.z !== 0) {
				vel.x = movement.x * speed;
				vel.z = movement.z * speed;
				if (speed === RUN_SPEED) {
					// TODO: change
					setAnimation("run");
				} else {
					setAnimation("walk");
				}
			} else {
				setAnimation("idle");
			}

			if (character.current) {
				character.current.rotation.y = lerpAngle(
					character.current.rotation.y,
					characterRotationTarget.current,
					0.1
				);
			}

			rb.current.setLinvel(vel, true);
		}

		// if (cameraPosition.current) {
		// 	cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
		// 	camera.position.lerp(cameraWorldPosition.current, 0.1);
		// }

    // if (cameraTarget.current) {
    //   cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
    //   cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

    //   camera.lookAt(cameraLookAt.current);
    // }

  });

  return (
    <RigidBody colliders={false} lockRotations ref={rb}>
      <group ref={container}>
        <group ref={cameraTarget} position-z={1.5} />
        <group ref={cameraPosition} position-y={4} position-z={-4} />
        <group ref={character}>
          {/* <Character scale={0.18} position-y={-0.25} animation={animation} /> */}
					<Sprite 
						textureImageURL="/34024.png"
						numberOfFrames={4}
						numberOfAnimations={12} 
						animationName={`${animation}_${direction}`}
						fps={10}
						animationNames={new Map([
							["walk_forward", 0], ["walk_backward", 1], ["walk_left", 2], ["walk_right", 3],
							["idle_forward", 4], ["idle_backward", 5], ["idle_left", 6], ["idle_right", 7],
							["run_forward", 8], ["run_backward", 9], ["run_left", 10], ["run_right", 11]
						])}
					/>
        </group>
      </group>
      <CapsuleCollider args={[0.14, 0.32]} />
    </RigidBody>
  );
};
