import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Grid from '../../utils/gridHelper';
import Model from '../../types/Model';
import { Vector3 } from 'three';

interface MapModelProps {
	model: Model
}

const MapModel = ({ model } : MapModelProps) => {
	const gltf = useLoader(GLTFLoader, '/assets/Cafe.glb')
	
	if (!gltf) {
		return <></>
	}
	const mapPosition = new Vector3(
		model.height/2 + model.mapPosition[0],
		0, 
		model.width/2 + model.mapPosition[2]
	);
	
	const position = [
		model.position[0] + model.mapPosition[0] + model.height/2,
		model.position[1] + model.mapPosition[1],
		model.position[2] + model.mapPosition[2] + model.width/2,
	]

	return (
		<>
			<primitive
				object={gltf.scene.clone()}
				position={position} // Using memoized position
				rotation={model.rotation}
			/>
			<Grid
				position={mapPosition}
				height={model.height/2}
				width={model.width/2}
				linesHeight={model.height}
				linesWidth={model.width}
			/>
		</>
	)
}

export default MapModel;