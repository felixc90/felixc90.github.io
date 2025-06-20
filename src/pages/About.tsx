import { CSSProperties, useEffect, useState } from "react";
import University from "../components/about/University";
import { Canvas } from "@react-three/fiber";
import Technologies from "../components/about/Technologies";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { EffectComposer } from "postprocessing";
import Scene from "../components/about/Technology";

const About = () => {
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

		const NeueMontrealFont: CSSProperties = {
			fontFamily: "Neue Montreal",
			fontWeight: 400
		}
		
		const NeueMontrealLightFont: CSSProperties = {
			fontFamily: "Neue Montreal",
			fontWeight: 300
		}
	
		const NeueMontrealMonoFont: CSSProperties = {
			fontFamily: "Neue Montreal Mono",
			fontWeight: 500
		}

	const description = `
		I'm a ${getAge()}-year-old Australian software developer with a focus on back-end engineering. 
		I enjoy exploring complex problems in software design and data engineering, and
		crafting elegant solutions that deliver real value to people.
	`;

	const skills = [
		"JavaScript", "Typescript", "C", "C#", "HTML", "CSS"
		// "Java", "C", "Python", "C#", "HTML/CSS",
		// "Linux", "Git", "NodeJS", "ExpressJS", "MongoDB", "ReactJS", "VueJS"
	]

	const images = [
		'/images/about-1.jpeg',
		'/images/about-2.jpeg',
		'/images/about-3.jpeg'
	]

	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1500);

		// Clean up the interval when the component unmounts
		return () => clearInterval(interval);
	}, []);

	const [activeLogo, setActiveLogo] = useState<string>("javascript");

	return (
		<div>
			{/* <div className="flex flex-col bg-black text-white py-20">
				<div className="mx-auto">
					{ images.map((image, i) => 
						<img src={image} className={ (i == (count % images.length)) ? "" : "hidden"} width={350} height={175} />
					)}
				</div>
				<div className="flex gap-6 mx-auto">
					<div style={{...NeueMontrealLightFont}} className="text-6xl my-auto align-middle">{"("}</div>
					<div className="max-w-180 text-3xl text-center my-auto align-middle">
						{description}
					</div>
					<div style={{...NeueMontrealLightFont}} className="text-6xl my-auto align-middle">{")"}</div>
				</div>
			</div>
			<div className="p-20">
				<div style={NeueMontrealFont} className="text-4xl">Education</div>
				<div>
				</div>
					<University />
			</div> */}
			<div className="h-screen w-screen" >
				
			</div>
			<div className="h-screen w-screen" >
				<Scene style={{ position: 'absolute' }} activeLogo={activeLogo}/>
				<div className="absolute h-full w-full">
					<div style={NeueMontrealMonoFont} className="flex flex-col justify-around h-full w-full text-sm">
						<div>
							<div className="underline">Technical Skills</div>
							{skills.map(skill => (
									<div 
										className={"cursor-pointer w-fit hover:underline " 
											+ (skill.toLowerCase() === activeLogo ? "underline" : "")}
										onClick={() => setActiveLogo(skill.toLowerCase())}
										>
										{skill}
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-screen" >
				
			</div>
		</div>
	)
}



export default About;