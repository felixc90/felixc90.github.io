import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { INITIAL_CAMERA_POSITION } from "../../../constants";

const University = () => {
	return (
		<Canvas
			style={{
				height: "100vh"
			}}
			shadows
			orthographic
			camera={ {
					near: 0.1,
					far: 1000,
					zoom: 20,
					position: INITIAL_CAMERA_POSITION,
			} }
		>
			<Experience />
		</Canvas>
	)
}

export default University;