import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Grid from '../../utils/gridHelper';
import { ModelProps } from '../../types/Model';
import * as THREE from 'three';
import useModelsStore from '../../store/useModelsStore';
import { useEffect, useRef } from 'react';

const MapModel = ({ model } : ModelProps) => {
	const { updateModel } = useModelsStore();
	const gltf = useLoader(GLTFLoader, model.src);

	const boxRef = useRef<THREE.Box3 | null>(null);

	useEffect(() => {
		if (gltf && !boxRef.current) {
			// Calculate the bounding box once the model is loaded
			const box = new THREE.Box3().setFromObject(gltf.scene);
			boxRef.current = box;

			const xDist = box.max.x - box.min.x;
			const zDist = box.max.z - box.min.z;
			const center = box.getCenter(new THREE.Vector3());
			const posX =  -center.x;
			const posZ =  -center.z;

			updateModel(model.id, { 
				minWidth: Math.ceil(xDist), 
				minHeight: Math.ceil(zDist),
				width: Math.ceil(xDist), 
				height: Math.ceil(zDist),
				position: [posX, 0, posZ],
				hide: false
			});
		}
	}, [gltf, model, updateModel]);
	
	if (!gltf) {
		return <></>
	}

	const modelMapPosition = model.mapPosition;

	const mapPosition = new THREE.Vector3(
		model.height/2 + modelMapPosition[0],
		0, 
		model.width/2 + modelMapPosition[2]
	);
	
	const position = [
		model.position[0] + modelMapPosition[0] + model.height/2,
		model.position[1] + modelMapPosition[1],
		model.position[2] + modelMapPosition[2] + model.width/2,
	]

	if (model.hide) {
		return <></>
	}

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