import { Canvas } from '@react-three/fiber';
import { KeyboardControls, PerspectiveCamera } from '@react-three/drei';
import { Player } from '../components/game/Player';

function Scene() {

  return (
    <>
      {/* Add a perspective camera */}
      <PerspectiveCamera
        makeDefault
        position={[0, 20, 20]} // Camera position in the sky
        fov={100} // Field of view
        rotation={[- Math.PI / 4, 0, 0]} // Tilt 45 degrees downward and slight rotation
      />

      {/* Add ambient light */}
      <ambientLight intensity={0.5} />
			<Player />
      {/* Add a large plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[200, 200]} /> {/* Large plane dimensions */}
        <meshStandardMaterial color="lightblue" /> {/* Plane color */}
      </mesh>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 5, -20]}>
        <planeGeometry args={[30, 30]} /> {/* Large plane dimensions */}
        <meshStandardMaterial color="blue" /> {/* Plane color */}
      </mesh>
			<gridHelper args={[200,40]}/>
    </>
  );
}

const GamePage = () => {
	return (
		<div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
			<KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "back", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
      ]}>
				<Canvas>
					<Scene />
				</Canvas>
			</KeyboardControls>
		</div>
	)
}

export default GamePage;