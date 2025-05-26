import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Leva } from 'leva'

function App() {
  return (
    <>
      <KeyboardControls
				map={ [
						{ name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
						{ name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
						{ name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
						{ name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
				] }
			>
				<Leva />
				<Canvas
					shadows
					camera={ {
							fov: 45,
							near: 0.1,
							far: 200,
							position: [ -5, 5, 9 ],
							rotation: [ -.2, -.3, 0],
					} }
				>
					<Experience />
				</Canvas>
			</KeyboardControls>
    </>
  )
}

export default App
