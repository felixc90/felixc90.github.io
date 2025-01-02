import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { Popover, ActionIcon, NumberInput, Flex } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import useModelsStore from '../../store/useModelsStore';
import { v4 } from 'uuid';
import { useLoader } from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import Grid from '../../utils/gridHelper';
import * as THREE from 'three';


const ModelView = () => {
	const { addModel, selectModel, updateModel, getSelectedModel, selectedModelId } = useModelsStore();

	useEffect(() => {
		const modelId = v4()
		addModel({
			id: modelId,
			src: '/assets/Cafe.glb',
			name: 'Cafe',
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			width: 0,
			height: 0,
			minWidth: 0,
			minHeight: 0
		})

		selectModel(modelId);

		
	}, [addModel, selectModel])

	const gltf = useLoader(GLTFLoader, '/assets/Cafe.glb')
	// const [loaded, setLoaded] = useState(false);
	// const [gridSize, setGridSize] = useState([0, 0]);

  const boxRef = useRef<THREE.Box3 | null>(null);
  // const posRef = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (gltf && !boxRef.current && selectedModelId) {
      // Calculate the bounding box once the model is loaded
      const box = new THREE.Box3().setFromObject(gltf.scene);
      boxRef.current = box;

			const xDist = box.max.x - box.min.x;
			const zDist = box.max.z - box.min.z;
      const center = box.getCenter(new THREE.Vector3());
      const posX =  - center.x;
      const posZ =  - center.z;

			updateModel(selectedModelId, { 
				minWidth: Math.ceil(xDist), 
				minHeight: Math.ceil(zDist),
				width: Math.ceil(xDist), 
				height: Math.ceil(zDist),
				position: [posX, 0, posZ]
			});
    }
  }, [gltf, selectedModelId, updateModel]);


	if (!selectedModelId) {
		return <></>
	}

	return (
		<>
		<div style={{height: '30%'}}>
			<Canvas>
				<OrthographicCamera
					makeDefault
					position={[0,10,0]}
					rotation={[-Math.PI / 2, 0, 0]} 
					zoom={25}
				/>
				<ambientLight intensity={1} />
				<primitive
					object={gltf.scene}
					position={getSelectedModel()?.position} // Using memoized position
					rotation={getSelectedModel()?.rotation}
				/>
				<Grid
					position={[0,0,0]}
					height={(getSelectedModel()?.height ?? 0)/2}
					width={(getSelectedModel()?.width ?? 0)/2}
					linesHeight={getSelectedModel()?.height ?? 0}
					linesWidth={getSelectedModel()?.width ?? 0}
				/>
			</Canvas>
		</div>
		<Popover width={300} trapFocus position="left" withArrow shadow="md">
			<Popover.Target>
				<ActionIcon  aria-label="Settings">
					<IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown>
				{/* {TODO: set default minWidth and minHeight} */}
				<Flex gap='sm'>
					<NumberInput
						size='xs'
						label="Width"
						value={getSelectedModel()?.width}
						min={getSelectedModel()?.minWidth}
						onChange={(value) => updateModel(selectedModelId, {width: typeof value === 'string' ? 0 : value})}
					/>
					<NumberInput
						size='xs'
						label="Height"
						value={getSelectedModel()?.height}
						min={getSelectedModel()?.minHeight}
						onChange={(value) => updateModel(selectedModelId, {height: typeof value === 'string' ? 0 : value})}
					/>
				</Flex>
			</Popover.Dropdown>
		</Popover>
	</>
	)
}

export default ModelView;