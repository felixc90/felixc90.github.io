import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

function Scene() {
  return (
    <>
      {/* Add a perspective camera */}
      <PerspectiveCamera
        makeDefault
        position={[0, 50, 100]} // Camera position in the sky
        fov={100} // Field of view
        rotation={[- Math.PI / 3, 0, 0]} // Tilt 45 degrees downward and slight rotation
      />

      {/* Add ambient light */}
      <ambientLight intensity={0.5} />

      {/* Add a large plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[200, 200]} /> {/* Large plane dimensions */}
        <meshStandardMaterial color="lightblue" /> {/* Plane color */}
      </mesh>
			<gridHelper args={[200,40]}/>
    </>
  );
}

function App() {
  return (
		<div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
			<Canvas>
				<Scene />
			</Canvas>
		</div>
  );
}

export default App;
