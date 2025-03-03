import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { Sprite } from '../Sprite';

export const Tree = ({ position }) => {

	return (
		<RigidBody type="fixed">
			<group position={position} scale={[1.5,2,1]}>
				<Sprite 
					textureImageURL="/tree.png"
					numberOfFrames={1}
					numberOfAnimations={1} 
					animationName={`base`}
					fps={1}
					animationNames={new Map([
						["base", 0]
					])}
				/>
			</group>
			<CuboidCollider position={position} args={[.75,.75,.5]} />
		</RigidBody>
	)
}