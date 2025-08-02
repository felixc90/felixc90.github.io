import { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { EffectComposer, N8AO, Noise } from '@react-three/postprocessing'
import { C, CSharp, HTML, JavaScript, TypeScript, CSS, React, Vue } from '@/models'
import * as THREE from 'three';
import data from "@/data/skills.json";
import Button from "@/components/ui/Button";
import Square from "@/components/ui/Square";

const Skills = () => {
	
	const { skills } = data;
	const [activeLogo, setActiveLogo] = useState<number>(0);

	const Rotating = ({ speed, children, axis }: { speed: number, children: React.ReactNode, axis: "x" | "y" | "z" }) => {
		const ref = useRef<THREE.Group>(null);
		useFrame((state) => {
			if (ref.current) {
				ref.current.rotation[axis] = state.clock.elapsedTime * speed;
			}
		});
		return <group ref={ref}>{children}</group>;
	}

	const bio = "Throughout my software engineering journey, I've worked with variety of tools. " +
	"Here's a list of technologies I've used, from the ones I know best to the ones I'm still growing with:"

	return (
		<div className="h-4/5 flex w-full flex-col md:flex-row">
			<div className="w-full md:w-[calc(100%-8rem)] md:max-w-[50%] md:pr-12 flex-col flex justify-between" >
				<div className="">
					<Button variant="filled" disabled>
						TECHNICAL SKILLS
					</Button>
					<div className="h-full w-full lg:text-xl md:text-sm">
						<div className="my-2">
						{ bio }
						</div>
						<div className="flex gap-1.5 flex-wrap">
							{skills.map((skill, i) => (
								<Button variant={i == activeLogo ? "filled" : "outline"} onClick={() => setActiveLogo(i)}>
									{skill.name}
								</Button>
							))}
						</div>
					</div>
				</div>
				<div className="flex justify-between neue-montreal-mono text-xs my-8">
						<div>
							<div className="mb-3">COLOR</div>
							{ skills[activeLogo].colors.map((color, i) => {
								return (
									<div className="flex mt-1" key={i}>
										<Square size={3} color={color} />
										<div className="ml-1">{ color.toUpperCase() }</div>
									</div>
								)
							})}
						</div>
						<div className="h-full flex flex-col-reverse">
							public/models/{skills[activeLogo].glb}
						</div>
				</div>
			</div>

			<Canvas  shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
				className="w-[calc(100%-8rem)]"
			 	style={{ border: "solid 1px", borderRadius: "1rem", borderColor: "white" }}>
				<color attach="background" args={['#111111']} />
				<ambientLight intensity={1} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} castShadow />
				<Rotating axis="y" speed={3/4}>
					{ skills[activeLogo].name.toLowerCase() === "javascript" && <JavaScript /> }
					{ skills[activeLogo].name.toLowerCase() === "typescript" && <TypeScript /> }
					{ skills[activeLogo].name.toLowerCase() === "c" && <C /> }
					{ skills[activeLogo].name.toLowerCase() === "c#" && <CSharp /> }
					{ skills[activeLogo].name.toLowerCase() === "html" && <HTML /> }
					{ skills[activeLogo].name.toLowerCase() === "css" && <CSS /> }
					{ skills[activeLogo].name.toLowerCase() === "vue" && <Vue /> }
				</Rotating>
				<Rotating axis="z" speed={1/2}>
					{ skills[activeLogo].name.toLowerCase() === "react" && <React /> }
				</Rotating>
				<EffectComposer multisampling={8}>
					<N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
					<Noise opacity={0.2} />
					{/* <Pixelation granularity={3} /> */}
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
		</div>
	)
}

export default Skills;