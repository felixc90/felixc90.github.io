import { Canvas } from "@react-three/fiber";
import Experience from "./university/Experience";
import { useState } from "react";
import * as THREE from 'three';
import { X } from "lucide-react";

const Introduction = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(false)

	const miniStyle = { width: "28rem", height: "16rem", border: "solid 1px", borderRadius: "1rem", borderColor: "var(--lighter)", margin: "0 auto", transition: "all 0.3s ease-in-out"};

	const fullStyle = { width: "100vw", height: "100vh", position: "fixed", padding:"0", margin: "0", top: "0", left: "0", zIndex: "20", transition: "all 0.3s ease-in-out", };

	const getAge = () => {
    const birthDate = new Date(2003, 2, 17);
		const now = new Date()

    let years = (now.getFullYear() - birthDate.getFullYear());

    if (now.getMonth() < birthDate.getMonth() || 
        now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate()) {
        years--;
    }

		return years;
	}

	const bio = `
Hi, I'm Felix — a ${getAge()}-year-old Australian software developer with a focus on back-end engineering. 
Through my experience with university and personal projects, and my time at WiseTech Global, I've developed a passion for crafting elegant solutions to complex, real world problems — particularly in system design and data engineering. 
Recently, I've also been exploring WebGL and Three.js which I've used to create the education section of my portfolio (see below).
	`;

	const [active, setActive] = useState(0);

	const items = [
		{
			name: "Academic Summary",
			description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]
		},
		{
			name: "Casual Academic",
			description: []
		},
		{
			name: "Extracurricular",
			description: []
		},
		{
			name: "Student Exchange",
			description: []
		},
	]

	return (
		<div className="bg-darker text-lighter h-[calc(100vh+4rem)] -mx-16 px-16 pt-24">
			<div className="flex neue-montreal-mono justify-between text-xs mb-12">
				<div>THREE.JS</div>
				<div>BLENDER</div>
			</div>
			<div className="max-w-[40rem] text-lg mx-auto text-center mt-8 mb-12">{ bio }</div>
			<div>
				<Canvas
					shadows
					orthographic
					camera={ {
							near: 0.1,
							far: 100,
							zoom: 10,
							position: new THREE.Vector3(30, 15, 30),
					} }
					className={fullScreen ? "" : "hover:cursor-pointer"}
					style={fullScreen ? fullStyle : miniStyle}
					onClick={() => { requestAnimationFrame(() => setFullScreen(true));}}
				>
					<color attach="background" args={['#111111']} />
					<ambientLight />
					<Experience fullScreen={fullScreen} />
				</Canvas>
				{ fullScreen && 
					<div 
						className="px-16 py-12"
						style={{ color:"var(--lighter)", zIndex:"21", height:"100vh", width:"100vw", position: "fixed", top: "0", left: "0"}} 
					>
						<div className="flex flex-col neue-montreal-mono justify-between h-full">
							<div className="flex justify-between">
								<div className="">
									<div className="mb-4 text-sm">ITEMS</div>
									{ items.map((item, i) => <div className={`hover:cursor-pointer mb-1 hover:underline text-xs ${i == active && "underline"}`} onClick={() => setActive(i)}>{ item.name }</div> )}
								</div>
								<div className="flex">
									<div className="max-w-[24rem] text-xs mr-4">
										
										{ items[active].description.map((line) => {
											return (
												<div className="flex flex-col">
													{ line }
												</div>
											)
										})}
									</div>
									<div>
										< X onClick={() => setFullScreen(false)} className="hover:cursor-pointer"/>
									</div>
								</div>
							</div>
							<div className="text-sm">
								UNIVERSITY OF NEW SOUTH WALES, SYDNEY
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default Introduction;
