import Scene from "../components/about/Technology";
import { NeueMontrealMono } from "../../styles/fonts";
import { useState } from "react";

const Skills = () => {
	const items = [
		"JavaScript", "Typescript", "C", "C#", "HTML", "CSS"
		// "Java", "C", "Python", "C#", "HTML/CSS",
		// "Linux", "Git", "NodeJS", "ExpressJS", "MongoDB", "ReactJS", "VueJS"
	]
	
	const [activeLogo, setActiveLogo] = useState<string>("javascript");

	return (
		<div className="h-screen w-screen" >
			<Scene style={{ position: 'absolute' }} activeLogo={activeLogo}/>
			<div className="absolute h-full w-full">
				<div style={NeueMontrealMono} className="flex flex-col justify-around h-full w-full text-sm">
					<div>
						<div className="underline">Technical Skills</div>
						{items.map(item => (
								<div 
									className={"cursor-pointer w-fit hover:underline " 
										+ (item.toLowerCase() === activeLogo ? "underline" : "")}
									onClick={() => setActiveLogo(item.toLowerCase())}
									>
									{item}
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}



export default Skills;