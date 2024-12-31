import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';

function Scene() {
  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0,10,0]}
        rotation={[- Math.PI / 2, 0, 0]} 
  			zoom={25}
      />
      <ambientLight intensity={1} />
			{/* <Model position={[0,0,0]} input={`/assets/Plane.glb`}  />
			<Model position={[1, 0, 10]} input={`/assets/Cafe.glb`}  /> */}
			<gridHelper args={[32, 32]}/>
    </>
  );
}

const MapView = () => {
	const mapStyle = { width: "70%", height: "100vh", margin: "auto" }; 
	return (
		<div style={mapStyle}>
			<Canvas>
				<Scene />
			</Canvas>
		</div>
	)
}

export default MapView;