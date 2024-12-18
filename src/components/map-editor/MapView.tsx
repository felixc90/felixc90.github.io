import { Canvas, useLoader } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Scene() {
	
	const gltf = useLoader(GLTFLoader, `/assets/Plane.glb`);

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, 50, 0]}
        rotation={[- Math.PI / 2, 0, 0]} 
      />
      <ambientLight intensity={1} />
			<primitive
				object={gltf.scene}
				position={[0, 1, 0]}
				children-0-castShadow
			/>
    </>
  );
}

const MapView = () => {
	
	return (
		<div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
			<Canvas>
				<Scene />
			</Canvas>
		</div>
	)
}

export default MapView;