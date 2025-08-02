import Title from "@/components/typography/Title";
import Square from "@/components/ui/Square";

const About = () => {
	return (
		<div className="bg-darker h-[calc(100vh+2rem)] px-16 py-8 text-lighter">
			<div className="flex-col flex justify-around mt-18">
				<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450]">
					<div className="flex gap-4">
						<Square color="var(--lighter)" />
						<Square color="var(--lighter)" />
						<Square color="var(--lighter)" />
					</div>
					<div>DESIGN</div>
					<Square color="var(--lighter)" />
					<Square color="var(--lighter)" />
					<Square color="var(--lighter)" />
					<div>DEVELOPMENT</div>
					<div className="flex gap-4">
						<Square color="var(--lighter)" />
						<Square color="var(--lighter)" />
						<Square color="var(--lighter)" />
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