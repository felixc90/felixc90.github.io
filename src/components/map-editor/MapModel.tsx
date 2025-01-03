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
		if (gltf && !boxRef.current && !model.loaded) {
			// Calculate the bounding box once the model is loaded
			const box = new THREE.Box3().setFromObject(gltf.scene);
			boxRef.current = box;

			const xDist = box.max.x - box.min.x;
			const zDist = box.max.z - box.min.z;
			const center = box.getCenter(new THREE.Vector3());
			updateModel(model.id, { 
				minWidth: Math.ceil(xDist), 
				minHeight: Math.ceil(zDist),
				width: Math.ceil(xDist), 
				height: Math.ceil(zDist),
				center: [center.x, 0, center.z],
				loaded: true
			});
		}
	}, [gltf, model, updateModel]);
	
	if (!gltf) {
		return <></>
	}

	if (model.hide || !model.loaded) {
		return <></>
	}

	const gridPosition: [number,  number, number] = [
		model.mapPosition[0] + model.width / 2,
		0,
		model.mapPosition[2] + model.height / 2,
	]

	const modelPosition = [
		model.mapPosition[0] - model.center[0] + model.width / 2,
		0,
		model.mapPosition[2] - model.center[2] + model.height / 2,
	]

	return (
		<>
			<primitive
				object={gltf.scene.clone()}
				position={modelPosition}
				rotation={model.rotation}
			/>
			{ model.grid && 
				(<Grid
					position={gridPosition}
					height={model.height/2}
					width={model.width/2}
					linesHeight={model.height}
					linesWidth={model.width}
				/>)
			}
		</>
	)
}

export default MapModel;