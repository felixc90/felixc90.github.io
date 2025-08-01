import Square from "@/components/ui/Square";
import Skills from './Skills';
import Projects from './Projects';
import Work from './Work';
import Title from "@/components/typography/Title";

const Home = () => {

	return (
		<div className="px-16 py-8">
			<div className="h-[calc(100vh-8rem)] w-full ">
				<div className="flex flex-col justify-between h-full">
					<div className="flex-col flex justify-around mt-18">
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
							<Title>Software Engineer</Title>
						</div>
					</div>
					<div className="flex justify-between neue-montreal-mono text-sm font-[450]">
						<div>PORTFOLIO'25</div>
						<div>BASED IN SYDNEY</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-full mt-48">
				<Skills />
			</div>
			<div>
				<Work />
			</div>
			<div className="w-full my-16">
				<Projects />
			</div>
		</div>
	)
}

export default Home;