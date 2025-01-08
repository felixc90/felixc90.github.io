import { OrthographicCamera } from '@react-three/drei';
import useModelsStore from '../../store/useModelsStore';
import { MutableRefObject, Suspense, useEffect, useState } from 'react';
import ModelView from './ModelView';
import useMapStore from '../../store/useMapStore';
import Grid from '../../utils/gridHelper';
import { MapConstants } from '../../types/MapConstants';
import useEditorStore from '../../store/useEditorStore';
import GlobalCollisionMap from './GlobalCollisionMap';

interface MapViewProps {
	canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const MapView = ({ canvasRef }: MapViewProps) => {
	const { models } = useModelsStore();
	const { map } = useMapStore();
	const { showCollisionMap } = useEditorStore();
	const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
		width: 0,
		height: 0,
	});

	// TODO: remove duplicate code
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

	const CANVAS_PADDING = 50

	const cameraZoom = Math.min(
		(canvasSize.width - CANVAS_PADDING) / Math.max(map.width, MapConstants.MIN_WIDTH), 
		(canvasSize.height - CANVAS_PADDING) / Math.max(map.height, MapConstants.MIN_HEIGHT), 
	);

	const gridPosition: [number, number, number] = [map.width / 2, 0, map.height / 2]

	return (
		<>
			<OrthographicCamera
				makeDefault
				position={[gridPosition[0],10,gridPosition[2]]}
				rotation={[- Math.PI / 2, 0, 0]} 
				zoom={cameraZoom}
			/>
			<ambientLight intensity={1} />
			{ models.map((model) => (
				<Suspense key={model.id}>
					<ModelView model={model} canvasRef={canvasRef} onMap/>
				</Suspense>)
			)}
			{ showCollisionMap && <GlobalCollisionMap />}
			<Grid width={map.width} height={map.height} position={gridPosition} renderOrder={-1000}/>
		</>
	)
}

export default MapView;