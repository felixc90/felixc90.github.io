import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ModelProps } from '../../types/Model';

const MapModel = ({ model, index } : ModelProps & { index: number }) => {

	const gltf = useLoader(GLTFLoader, model.src);

	if (!gltf || !model.loaded) {
		return <></>;
	}

	const scene = gltf.scene.clone();
	scene.renderOrder = -1 * index;

	// TODO: implement model position
	const modelPosition = [
		model.mapPosition[0] - model.center[0] + model.width / 2,
		0,
		model.mapPosition[2] - model.center[2] + model.height / 2,
	]
	return (
		<>
			<primitive
				object={scene}
				position={modelPosition}
				rotation={model.rotation}
			/>
		</>
	)
}

export default MapModel;