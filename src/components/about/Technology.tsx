import { Canvas, CanvasProps } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { C, CSharp, HTML, JavaScript, TypeScript, CSS } from '../../models'


export default function Scene(props: CanvasProps & { activeLogo: string }) {
  return (
    <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} {...props}>
			<color attach="background" args={['#C0C0C0']} />
		  <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} castShadow />
			{ props.activeLogo === "javascript" && <JavaScript /> }
      { props.activeLogo === "typescript" && <TypeScript /> }
			{ props.activeLogo === "c" && <C /> }
			{ props.activeLogo === "c#" && <CSharp /> }
			{ props.activeLogo === "html" && <HTML /> }
			{ props.activeLogo === "css" && <CSS /> }
      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Canvas>
  )
}