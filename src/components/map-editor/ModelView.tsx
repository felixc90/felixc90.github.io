import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Grid from '../../utils/gridHelper';
import { Model } from '../../types/Model';
import * as THREE from 'three';
import useModelsStore from '../../store/useModelsStore';
import { MutableRefObject, useEffect, useState } from 'react';
import { Mode } from '../../types/Mode';
import { OrthographicCamera } from '@react-three/drei';
import CollisionMap from './CollisionMap';
import useEditorStore from '../../store/useEditorStore';

interface ModelViewProps {
	model: Model,
	onMap?: boolean,
	canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const ModelView = ({ model, onMap, canvasRef } : ModelViewProps) => {
	const { updateModel, modelIndexOf } = useModelsStore();
	const { mode, showCollisionMap } = useEditorStore();

	const gltf = useLoader(GLTFLoader, model.src);
	const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (gltf && !model.loaded) {
			const box = new THREE.Box3().setFromObject(gltf.scene);
			const xDist = box.max.x - box.min.x;
			const zDist = box.max.z - box.min.z;
			const center = box.getCenter(new THREE.Vector3());
			updateModel(model.id, { 
				minWidth: Math.ceil(xDist), 
				minHeight: Math.ceil(zDist),
				width: Math.ceil(xDist), 
				height: Math.ceil(zDist),
				center: [center.x, 0, center.z],
				loaded: true,
			});
		}
	}, [gltf, model, updateModel]);


	useEffect(() => {
		// Update parent size on component mount or resize
		const updateSize = () => {
			if (canvasRef.current) {
				setCanvasSize({
					width: canvasRef.current.clientWidth,
					height: canvasRef.current.clientHeight,
				});
			}
		};
		// Initial size
		updateSize();

		// Add resize event listener
		window.addEventListener('resize', updateSize);

		// Cleanup the event listener
		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, [canvasRef]);

	if (!gltf || !model.loaded) {
		return <></>;
	}

	if (mode == Mode.Map && model.hide) {
		return <></>;
	}

	const scene = gltf.scene.clone();
	scene.renderOrder = -1 * (modelIndexOf(model.id) ?? 0);

	// TODO: increase grid width/height from center, not top left
	const gridPosition: [number,  number, number] = [0, 0, 0];
	const modelPosition = [-model.center[0], 0, -model.center[2]]
	
	const CANVAS_PADDING = 50
	const MIN_LENGTH = 16

	let cameraZoom = Math.min((canvasSize.width - CANVAS_PADDING) / model.width, (canvasSize.height - CANVAS_PADDING) / model.height);

	if (onMap) {
		[gridPosition[0], gridPosition[2]] = [
			model.mapPosition[0] + model.width / 2,
			model.mapPosition[2] + model.height / 2,
		];
		[modelPosition[0], modelPosition[2]] = [
			model.mapPosition[0] - model.center[0] + model.width / 2,
			model.mapPosition[2] - model.center[2] + model.height / 2,
		];
	}
	
	if (mode === Mode.Edit) {
		cameraZoom = Math.min(
			(canvasSize.width - CANVAS_PADDING) / Math.max(model.width, MIN_LENGTH), 
			(canvasSize.height - CANVAS_PADDING) / Math.max(model.height, MIN_LENGTH))
	}

	return (
		<>
			{ !onMap && (
				<>
					<OrthographicCamera
						makeDefault
						position={[0, 10, 0]} // Position camera above the model
						rotation={[-Math.PI / 2, 0, 0]} // Top-down view
						zoom={cameraZoom} // Adjust zoom to fit the model
					/>
					<ambientLight intensity={1} />
				</>
			)}
			{showCollisionMap && <CollisionMap model={model} />}
			<primitive
				object={scene}
				position={modelPosition}
				rotation={model.rotation}
			/>
			{ model.grid && 
				(<Grid
					renderOrder={-1 * (modelIndexOf(model.id) ?? 0)}
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

export default ModelView;