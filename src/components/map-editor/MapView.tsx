import { OrthographicCamera } from '@react-three/drei';
import useModelsStore from '../../store/useModelsStore';
import { MutableRefObject, Suspense } from 'react';
import ModelView from './ModelView';
import { Mode } from '../../types/Mode';

interface MapViewProps {
	canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const MapView = ({ canvasRef }: MapViewProps) => {
	const { models } = useModelsStore();
	return (
		<>
			<OrthographicCamera
				makeDefault
				position={[0,10,0]}
				rotation={[- Math.PI / 2, 0, 0]} 
				zoom={25}
			/>
			<ambientLight intensity={1} />
			{ models.map((model) => (
				<Suspense key={model.id}>
					<ModelView model={model} mode={Mode.Map} canvasRef={canvasRef}/>
				</Suspense>)
			)}
			<gridHelper args={[32, 32]}/>
		</>
	)
}

export default MapView;