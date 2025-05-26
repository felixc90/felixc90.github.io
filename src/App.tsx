import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Title from './components/Title';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Leva } from 'leva'

function App() {
  return (
    <>
			<Title />
			<Education />
			<Experience />
			<Projects />
    </>
  )
}

export default App
