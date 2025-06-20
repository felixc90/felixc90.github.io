import { CSSProperties } from "react";

const Work = () => {

	const items = [
		{
			name: "WiseTech",
			date: "Mar. 2025 - Present",
			description: "Associate Software Engineer",
			technologies: ["C#", "SQL Server", "Vue"]
		},
		{
			name: "Achilles",
			date: "Jan. 2022",
			description: "Personal Project",
			technologies: ["Typescript", "MongoDB"]
		},
		{
			name: "Buckets",
			date: "Mar. 2025",
			description: "Personal Project",
			technologies: ["Java", "PostgreSQL", "React Native"]
		},
	]

	const NeueMontrealMonoFont: CSSProperties = {
		fontFamily: "Neue Montreal Mono",
		fontWeight: 500
	}
	
	return (
		<div>
			<div className="h-[50vh]">
			</div>
			<div className="grid grid-cols-4 gap-4 ml-24">
				{ items.map(item => 
					<>
						<div className="text-4xl">{item.name}</div>
						<div style={NeueMontrealMonoFont} className="my-auto">{item.description}</div>
						<div style={NeueMontrealMonoFont} className="my-auto">{item.technologies.join(", ")}</div>
						<div style={NeueMontrealMonoFont} className="my-auto">{item.date}</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Work;