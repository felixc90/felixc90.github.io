import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import useModelsStore from '../../store/useModelsStore';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Grid from '../../utils/gridHelper';
import * as THREE from 'three';

const ModelView = () => {
	const { getSelectedModel, updateModel, selectedModelId } = useModelsStore();
	const model = getSelectedModel();
	const gltf = useLoader(GLTFLoader, '/assets/Cafe.glb');

	const boxRef = useRef<THREE.Box3 | null>(null);

	useEffect(() => {
		if (gltf && !boxRef.current && selectedModelId) {
			// Calculate the bounding box once the model is loaded
			const box = new THREE.Box3().setFromObject(gltf.scene);
			boxRef.current = box;

			const xDist = box.max.x - box.min.x;
			const zDist = box.max.z - box.min.z;
			const center = box.getCenter(new THREE.Vector3());
			const posX =  -center.x;
			const posZ =  -center.z;

			updateModel(selectedModelId, { 
				minWidth: Math.ceil(xDist), 
				minHeight: Math.ceil(zDist),
				width: Math.ceil(xDist), 
				height: Math.ceil(zDist),
				position: [posX, 0, posZ]
			});
		}
	}, [gltf, selectedModelId, updateModel]);

	if (!model || !gltf) {
		return <></>;
	}

	return (<Canvas>
		<OrthographicCamera
			makeDefault
			position={[0,10,0]}
			rotation={[-Math.PI / 2, 0, 0]} 
			zoom={25}
		/>
		<ambientLight intensity={1} />
		<primitive
			object={gltf.scene}
			position={model?.position} // Using memoized position
			rotation={model?.rotation}
		/>
		<Grid
			position={[0, 0, 0]}
			height={(model?.height ?? 0)/2}
			width={(model?.width ?? 0)/2}
			linesHeight={model?.height ?? 0}
			linesWidth={model?.width ?? 0}
		/>
	</Canvas>)
}

export default ModelView;