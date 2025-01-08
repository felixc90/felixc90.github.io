import { Suspense, useEffect } from 'react';
import modelsData from '../assets/map.json';
import useModelsStore from '../store/useModelsStore';
import useMapStore from '../store/useMapStore';
import { Model, Map } from '../types';
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import Grid from '../utils/gridHelper';
import MapModel from '../components/game/MapModel';
import { Canvas } from '@react-three/fiber';

// function Scene() {

//   return (
//     <>
//       {/* Add a perspective camera */}
//       <PerspectiveCamera
//         makeDefault
//         position={[0, 20, 20]} // Camera position in the sky
//         fov={100} // Field of view
//         rotation={[- Math.PI / 4, 0, 0]} // Tilt 45 degrees downward and slight rotation
//       />

//       {/* Add ambient light */}
//       <ambientLight intensity={0.5} />
// 			<Player />
//       {/* Add a large plane */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//         <planeGeometry args={[200, 200]} /> {/* Large plane dimensions */}
//         <meshStandardMaterial color="lightblue" /> {/* Plane color */}
//       </mesh>
// 			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 5, -20]}>
//         <planeGeometry args={[30, 30]} /> {/* Large plane dimensions */}
//         <meshStandardMaterial color="blue" /> {/* Plane color */}
//       </mesh>
// 			<gridHelper args={[200,40]}/>
//     </>
//   );
// }



const GamePage = () => {
	const { models, loadModels } = useModelsStore();
	const { map, loadMap } = useMapStore();

	useEffect(() => {
		loadModels(modelsData.models as Model[]);
		loadMap(modelsData.map as Map);
	}, [loadMap, loadModels])

	useEffect(() => {
		console.log(models);
	}, [models])
	
	{/* <KeyboardControls
	map={[
		{ name: "forward", keys: ["ArrowUp", "w", "W"] },
		{ name: "back", keys: ["ArrowDown", "s", "S"] },
		{ name: "left", keys: ["ArrowLeft", "a", "A"] },
		{ name: "right", keys: ["ArrowRight", "d", "D"] },
	]}>
		<Canvas>
			<Scene />
		</Canvas>
	</KeyboardControls> */}
	return (
		<div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
			<Canvas>
				<PerspectiveCamera
					makeDefault
					position={[map.width/2, 20, map.height + 10]}
					rotation={[- Math.PI / 4, 0, 0]} 
				/>
				<ambientLight intensity={1} />
				{ models.map((model, i) => (
					<Suspense key={model.id}>
						<MapModel model={model} index={i}/>
					</Suspense>)
				)}
				<Grid width={map.width} height={map.height} position={[map.width/2, 0, map.height/2]} renderOrder={-1}/>
			</Canvas>
		</div>
	)
}

export default GamePage;

