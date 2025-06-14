import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

import { Leva } from 'leva'
import { ScrollControls } from '@react-three/drei';
import { INITIAL_CAMERA_POSITION, NUM_PAGES } from '../constants';

function App() {

  return (
    <div>
			<Leva />
			<Canvas
				style={{
					height: "100vh"
				}}
				shadows
				orthographic
				camera={ {
						near: 0.1,
						far: 1000,
						zoom: 27.5,
						position: INITIAL_CAMERA_POSITION,
				} }
			>
				<ScrollControls pages={NUM_PAGES}>
					<Experience />
				</ScrollControls>
			</Canvas>
    </div>
  )
}

export default App;