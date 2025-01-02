import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Grid from '../../utils/gridHelper';
import { ModelProps } from '../../types';

const ModelView = ({ model }: ModelProps) => {
	const gltf = useLoader(GLTFLoader, model.src);

	if (!gltf) {
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
			position={model.position} // Using memoized position
			rotation={model.rotation}
		/>
		<Grid
			position={[0, 0, 0]}
			height={model.height/2}
			width={model.width/2}
			linesHeight={model.height}
			linesWidth={model.width}
		/>
	</Canvas>)
}

export default ModelView;