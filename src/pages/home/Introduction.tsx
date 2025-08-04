import { Canvas } from "@react-three/fiber";
import Experience from "./university/Experience";
import { useState } from "react";
import * as THREE from 'three';
import { X } from "lucide-react";

const Introduction = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(false)

	const miniStyle = { width: "26rem", height: "16rem", border: "solid 1px", borderRadius: "1rem", borderColor: "var(--lighter)", margin: "0 auto", transition: "all 0.3s ease-in-out"};

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
Recently, I've also been exploring WebGL and Three.js which I've used to create the Education section of my portfolio (click below).
	`;

	const [active, setActive] = useState(0);

	const items = [
		{
			name: "Academic Summary",
			description: [
				"University of New South Wales (2021 - 2025)",
				"Bachelor of Science (Statistics) / Science (Computer Science)",  "",
				"Weighted Average Mark (WAM): 89.607", "",
				"Awards",
				"- Harry Manson Award (2024)",
				"- The Faculty of Science Dean's List for Academic Excellence (2021)",
				"- The Faculty of Engineering Dean's Award for the Best Performance in Year 1, 2 or 3 (2021)",
				"",
				"Academic Transcript"
			],
			overflow: []
		},
		{
			name: "Casual Academic",
			description: [
				"COMP2521: Data Structures and Algorithms",
				"Tutor and Lab Assistant", "2021 Term 3 - 2025 Term 1 (10 terms)",
				"",
				"Taught classes of 24 students the fundamentals of data structures and algorithms, covering topics such as algorithm analysis, recursion, trees, graphs and sorting algorithms",
				"",
				"See more in the work section"
			],
			overflow: []
		},
		{
			name: "Extracurricular: CSESoc",
			description: [
				"Computer Science and Engineering Society",
				"",
				"Socials Director (2022)",
				"- Worked with co-directors over 3 months to plan a camp for 150 attendees. Responsibilities include liasing with campsite, organising transport, planning activities and recruiting and training camp leaders.",
				"- Led a team of 8 subcommittee members to help plan social events such as 20 weekly BBQs, game nights, pub crawls and parties",
			],
			overflow: [
				"Vice President (2023)",
				"- Oversaw five teams that worked together to run social events, careers events, outreach events and competitions for the computer science community",
			]
		},
		{
			name: "Extracurricular: CompClub",
			description: [
				"CompClub Mentor (2021 - 2022)",
				"- Mentored groups of high school students in learning introductory programming topics such as game design, web dev and python.",
				"- Organised and presented a workshop teaching basic cybersecurity along with designing and running a CTF for the students"
			],
			overflow: []
		},
		{
			name: "Student Exchange",
			description: ["University of Toronto, Canada (Sep. - Dec. 2024)",
				"",
				"Courses",
				"- CSC311 (Introduction to Machine Learning)",
				"- CSC317 (Computer Graphics)",
				"- AST101 (The Sun and Its Neighbours)",
				"- PSY100 (Introductory Psychology)"
			],
			overflow: []
		},
	]

	return (
		<div className="bg-darker text-light min-h-[calc(100vh+4rem)] -mx-16 px-16 pt-24 ">
			<div className="flex neue-montreal-mono justify-between text-xs mb-12">
				<div>CODED WITH THREE.JS</div>
				<div>MODELLED IN BLENDER</div>
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
					className={fullScreen ? "grabbable" : "hover:cursor-pointer"}
					style={fullScreen ? fullStyle : miniStyle}
					onClick={() => { requestAnimationFrame(() => setFullScreen(true));}}
				>
					<color attach="background" args={['#111111']} />
					<ambientLight />
					<Experience fullScreen={fullScreen} />
				</Canvas>
				{ fullScreen && 
					<div 
						className={`px-16 py-12 pointer-events-none`}
						style={{ color:"var(--lighter)", zIndex:"21", height:"100vh", width:"100vw", position: "fixed", top: "0", left: "0"}} 
					>
						<div className="flex flex-col neue-montreal-mono justify-between h-full">
							<div className="flex justify-between">
								<div className="">
									<div className="mb-4 text-sm">ITEMS</div>
									{ items.map((item, i) => <div className={`hover:cursor-pointer mb-1 hover:underline text-xs pointer-events-auto ${i == active && "underline"}`} onClick={() => setActive(i)}>{ item.name }</div> )}
								</div>
								<div className="flex">
									<div className="max-w-[24rem] text-xs mr-4 tracking-tight">
										{ items[active].description.map((line) => {
											return (
												line == "" ?
												<br /> :
												line == "Academic Transcript" ?
												<div className="flex flex-col hover:cursor-pointer hover:underline pointer-events-auto" onClick={()=> window.open("/documents/transcript.pdf")}>
													{ line }
												</div> :
												<div className="flex flex-col pointer-events-auto">
													{ line }
												</div>
											)
										})}
									</div>
									<div>
										< X onClick={() => setFullScreen(false)} className="hover:cursor-pointer pointer-events-auto "/>
									</div>
								</div>
							</div>
							<div className="flex justify-between">
								<div className="text-sm flex flex-col-reverse pointer-events-auto">
									UNIVERSITY OF NEW SOUTH WALES, SYDNEY
								</div>
								<div className="max-w-[24rem] text-xs mr-4 tracking-tight">
										{ items[active].overflow.map((line) => {
											return (
												<div className="flex flex-col pointer-events-auto">
													{ line }
												</div>
											)
										})}
									</div>
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default Introduction;
