import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Grid from '../../utils/gridHelper';
import { ModelProps } from '../../types';

const ModelView = ({ model }: ModelProps) => {
	const gltf = useLoader(GLTFLoader, model.src);

	if (!gltf) {
		return <></>;
	}

	const modelPosition = [
		-model.center[0],
		0,
		-model.center[2],
	]



	const gridPosition: [number, number, number] = [0, 0, 0];
  // const aspect = size.x / size.z; // Aspect ratio (width/height)
  const cameraZoom = Math.min(250 / model.width, 250 / model.height); // Adjust zoom based on size

  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        position={[0, 10, 0]} // Position camera above the model
        rotation={[-Math.PI / 2, 0, 0]} // Top-down view
        zoom={cameraZoom} // Adjust zoom to fit the model
      />
		<ambientLight intensity={1} />
		<primitive
			object={gltf.scene.clone()}
			position={modelPosition}
			rotation={model.rotation}
		/>
		<Grid
			position={gridPosition}
			height={model.height/2}
			width={model.width/2}
			linesHeight={model.height}
			linesWidth={model.width}
		/>
	</Canvas>)
}

export default ModelView;