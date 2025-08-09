import { Canvas } from "@react-three/fiber";
import Experience from "./university/Experience";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { INITIAL_CAMERA_POSITION } from "@/constants";
import ScrambleText from "@/components/ui/ScrambleText";
import MySplitText from "@/components/ui/MySplitText";
import Square from "@/components/ui/Square";

const Introduction = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(false)

	const miniStyle = { width: "26rem", height: "16rem", border: "solid 1px", borderRadius: "1rem", borderColor: "var(--lighter)", margin: "0 auto", transition: "all 0.3s ease-in-out"};

	const fullStyle = { width: "100vw", position: "fixed", padding:"0", margin: "0", top: "0", left: "0", zIndex: "20", transition: "all 0.3s ease-in-out", };

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
	useEffect(() => {
  if (fullScreen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  // Clean up on unmount
		return () => {
			document.body.style.overflow = '';
		};
	}, [fullScreen]);

	const bioMain = `
Hi, I'm Felix — a ${getAge()}-year-old Australian software developer with a focus on backend engineering. 
Through my experience with university and personal projects, and my time at WiseTech Global, I've developed a passion for crafting elegant solutions to complex, real world problems — particularly in system design and data engineering. 
	`;

	const bioExtended = `
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
				"- Mentored groups of high school students in learning introductory programming topics such as game design, web dev and python",
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

	const Description = () => {
		return items[active].description.map((line) => {
				return (
					line == "" ?
					<br /> :
					line == "Academic Transcript" ?
					<div className="flex flex-col hover:cursor-pointer hover:underline pointer-events-auto" onClick={()=> window.open("/documents/transcript.pdf")}>
						Get { line }
					</div> :
					<div className="flex flex-col pointer-events-auto">
						{ line }
					</div>
				)
			})
	}

		const Overflow = () => {
		return items[active].overflow.map((line) => {
			return (
				<div className="flex flex-col pointer-events-auto">
					{ line }
				</div>
			)
		})
	}

	

	return (
		<div className="bg-darker text-light min-h-[calc(100vh+4rem)] -mx-16 px-16 pt-24 pb-12">
			<div className="flex justify-around"><Square color="var(--lighter)"/></div>
			<MySplitText duration={2} className="max-w-[40rem] mx-auto text-lg text-center mt-8 mb-0">
				{ bioMain }
			</MySplitText>
			<MySplitText duration={1.5} className="max-w-[40rem] text-lg mx-auto text-center mb-12 text-light/55" delay={.8}>
				{ bioExtended }
			</MySplitText>
			<div className="flex justify-around">
				<div className="neue-montreal-mono text-xs pr-4 m-auto">
					<ScrambleText chars="upperCase">CODED WITH THREE.JS</ScrambleText>
				</div>
				<Canvas
					shadows
					orthographic
					camera={ {
							near: 0.1,
							far: 100,
							zoom: 10,
							position: INITIAL_CAMERA_POSITION,
					} }
					className={fullScreen ? "grabbable" : "hover:cursor-pointer"}
					style={fullScreen ? fullStyle : miniStyle}
					onClick={() => { requestAnimationFrame(() => setFullScreen(true));}}
				>
					<color attach="background" args={['#111111']} />
					<ambientLight intensity={4}/>
					<directionalLight position={[48, 32, 0]} lookAt={[16,0,0]} intensity={10} castShadow  />
					<Experience fullScreen={fullScreen} />
				</Canvas>
				<div className="neue-montreal-mono text-xs pl-4 m-auto">
					<ScrambleText chars="upperCase">MODELLED IN BLENDER</ScrambleText>
				</div>
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
									<div className="max-w-[24rem] text-xs mr-4 tracking-tight hidden sm:inline">
										<Description />
									</div>
									<div className="inline text-sm sm:hidden max-w-34">
										UNIVERSITY OF NEW SOUTH WALES, SYDNEY
									</div>
									<div>
										< X onClick={() => setFullScreen(false)} className="hover:cursor-pointer pointer-events-auto "/>
									</div>
								</div>
							</div>
							<div className="flex justify-between">
								<div className="text-sm flex flex-col-reverse pointer-events-auto">
									<div className="max-w-[24rem] text-xs mr-4 tracking-tight inline sm:hidden">
										<Description />
										<br/>
										<Overflow />
									</div>
									<ScrambleText chars="upperCase" duration={3} className="text-sm hidden sm:inline">
										UNIVERSITY OF NEW SOUTH WALES, SYDNEY
									</ScrambleText>
								</div>
								<div className="max-w-[24rem] text-xs mr-4 tracking-tight hidden sm:inline">
									<Overflow />
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
