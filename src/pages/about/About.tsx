import Heading from "@/components/typography/Heading";
import Title from "@/components/typography/Title";
import Square from "@/components/ui/Square";

const About = () => {
	return (
		<div className="bg-light min-h-[calc(100vh+2rem)] px-16 py-8 pb-32 text-dark">
			<div className="flex-col flex justify-around mt-14">
				<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450] mb-8">
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
					<div>{"  DESIGN   "}</div>
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
				<div className="justify-around w-full">
					<div className="mt-16 mb-8">
					</div>
					<div className="md:flex">
						<div className="w-1/2 flex justify-around">
							<div className="w-2/3">
								<div className="w-fit border-2 border-dark px-4 py-4">
									<img src={'/images/profile.png'}/>
								</div>
								
								<div className="neue-montreal-mono text-xs mt-1 flex justify-between">
									<div>1536 × 2048</div>
									<div className="tracking-wide">images/profile.jpg</div>
								</div>
							</div>
						</div>
						<div className="w-1/2 text-sm font-[450] mt-4 tracking-tighter">
							<div className="neue-montreal-mono mb-4">DEVELOPER PROFILE 2025</div>
							<div className="neue-montreal-mono">NAME</div>
							<div className="neue-montreal-mono ml-4 mb-4">Felix Cao</div>
							<div className="neue-montreal-mono">LOCATION</div>
							<div className="neue-montreal-mono ml-4 mb-4">Sydney, Australia</div>
							<div className="neue-montreal-mono">EDUCATION</div>
							<div className="neue-montreal-mono ml-4">University of New South Wales</div>
							<div className="neue-montreal-mono ml-4 mb-4">Bachelor of Science (Statistics) / Science (Computer Science)</div>
							<div className="neue-montreal-mono">FOCUS</div>
							<div className="neue-montreal-mono ml-4 mb-4">Backend engineering; Data engineering</div>
							<div className="neue-montreal-mono">DESCRIPTION</div>
							<div className="neue-montreal-mono ml-4 mb-4">LOREP IPSUM</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}



export default About;