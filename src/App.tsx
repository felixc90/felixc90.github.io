import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

import { Leva } from 'leva'
import { Scroll, ScrollControls } from '@react-three/drei';
import * as THREE from 'three';
import { INITIAL_CAMERA_POSITION, NUM_PAGES } from '../constants';
import Home from './components/Home';

function App() {

  return (
    <div>
			<Leva />
			<Canvas
				style={{
					height: "100vh"
				}}
				shadows
				camera={ {
						fov: 45,
						near: 0.1,
						far: 200,
						position: INITIAL_CAMERA_POSITION,
				} }
			>
				<color attach="background" args={['black']} />
				<ScrollControls pages={NUM_PAGES}>
					<Experience />
				{/* <Scroll html>
					<Home />
				</Scroll> */}
				</ScrollControls>
			</Canvas>
    </div>
  )
}

export default App;