// import { OrbitControls } from "@react-three/drei";
// import { University } from "../../models";
// import { useControls } from "leva";
// import { useFrame } from "@react-three/fiber";

// export default function Experience()
// {
// 	const { 
// 		cameraPosition, 
// 		cameraRotation
// 	} = useControls({ cameraPosition: {
// 		value: {"x":-5,"y":4,"z":9},
// 		step: 0.01
// 	}, cameraRotation: {
// 		value: { x: -.2, y: -.3, z: 0 },
// 		step: 0.01
// 	}})

// 	useFrame((state) => {
// 		// state.camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)
// 		// state.camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z)
// 		// state.camera.updateProjectionMatrix();
// 	})

// 	return (
// 		<>
// 			{/* <OrbitControls /> */}
// 			<University />
// 			<ambientLight intensity={1}/>
// 		</>
// 	)
// }