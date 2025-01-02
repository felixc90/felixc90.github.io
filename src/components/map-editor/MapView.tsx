import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import useModelsStore from '../../store/useModelsStore';
import { Suspense } from 'react';
import MapModel from './MapModel';

const MapView = () => {
	const { models } = useModelsStore();
	
	const mapStyle = { width: "70%", height: "100vh", margin: "auto" }; 

	return (
		<div style={mapStyle}>
			<Canvas>
				<OrthographicCamera
					makeDefault
					position={[0,10,0]}
					rotation={[- Math.PI / 2, 0, 0]} 
					zoom={25}
				/>
				<ambientLight intensity={1} />
				{ models.map((model, i) => (
					<Suspense key={i}>
						<MapModel model={model}/>
					</Suspense>)
				)}
				<gridHelper args={[32, 32]}/>
			</Canvas>
		</div>
	)
}

export default MapView;