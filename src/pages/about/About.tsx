import ScrambleText from "@/components/ui/ScrambleText";
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
					<ScrambleText chars="upperCase">YUM CHA</ScrambleText>
					<Square />
					<Square />
					<Square />
					<ScrambleText chars="upperCase">RUNNING</ScrambleText>
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
				</div>
				<div className="justify-around w-full">
					<div className="mt-8 mb-8">
					</div>
					<div className="md:flex">
						<div className="w-1/2 flex justify-around mb-12">
							<div className="md:w-7/12 min-w-60">
								<div className="w-fit border-2 border-dark px-4 py-4">
									<img src={'/images/profile.png'}/>
								</div>
								
								<div className="neue-montreal-mono text-xs mt-1 flex justify-between tracking-wider">
									<div>1536 × 2048</div>
									<div className="tracking-wide">images/profile.jpg</div>
								</div>
							</div>
						</div>
						<div className="w-1/2 text-sm font-[450] mt-4 tracking-tighter neue-montreal-mono">
							<div className="mb-4">DEVELOPER PROFILE 2025</div>
							<div className="mb-4">
								<div>NAME</div>	
								<div className=" ml-4">Felix Cao</div>
							</div>
							<div className="mb-4">
								<div>LOCATION</div>	
								<div className=" ml-4">Sydney, Australia</div>
							</div>
							<div className="mb-4">
								<div>EDUCATION</div>	
								<div className="ml-4">University of New South Wales</div>
								<div className="ml-4">Bachelor of Science (Statistics) / Science (Computer Science)</div>
							</div>
							<div className="mb-4">
								<div>FOCUS</div>
								<div className=" ml-4">Backend engineering; Data engineering</div>
							</div>
							<div className="mb-4">
								<div>DESCRIPTION</div>
								<div className=" ml-4">LOREP IPSUM</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}



export default About;