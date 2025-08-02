import Title from "@/components/typography/Title";
import Square from "@/components/ui/Square";

const About = () => {
	return (
		<div className="bg-light h-[calc(100vh+2rem)] px-16 py-8 text-dark">
			<div className="flex-col flex justify-around mt-14">
				<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450]">
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
					<div>DESIGN</div>
					<Square />
					<Square />
					<Square />
					<div>DEVELOPMENT</div>
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
				</div>
				<div className="flex justify-around w-full">
					<Title>Felix Cao</Title>
				</div>
			</div>
		</div>
	)
}



export default About;