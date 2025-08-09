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
					<ScrambleText chars="upperCase">BUILDING</ScrambleText>
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
							<div className="md:w-1/2 min-w-60">
								<div className="w-fit border-2 border-dark px-4 py-4">
									<img src={'/images/profile.png'}/>
								</div>
								
								<div className="neue-montreal-mono text-xs mt-1 flex justify-between tracking-wider">
									<div>1536 × 2048</div>
									<div className="tracking-wide">images/profile.jpg</div>
								</div>
							</div>
						</div>
						<div className="md:w-1/2 text-sm sm:text-xs lg:text-sm  font-[450] tracking-tighter neue-montreal-mono">
							<div className="mb-4">PROFILE</div>
							<div className="mb-4">
								<ScrambleText chars="upperCase">NAME</ScrambleText>	
								<div className="ml-4">Felix Cao</div>
							</div>
							<div className="mb-4">
								<ScrambleText chars="upperCase">LOCATION</ScrambleText>	
								<div className="ml-4">Sydney, Australia</div>
							</div>
							<div className="mb-4">
								<ScrambleText chars="upperCase">EDUCATION</ScrambleText>	
								<div className="ml-4">University of New South Wales</div>
								<div className="ml-4">Bachelor of Science (Statistics) / Science (Computer Science)</div>
							</div>
							<div className="mb-4">
								<ScrambleText chars="upperCase">FOCUS</ScrambleText>
								<div className="ml-4">Backend engineering; Data engineering</div>
							</div>
							<div className="mb-4">
								<ScrambleText chars="upperCase">DESCRIPTION</ScrambleText>
								<div className="ml-4 max-w-[30rem]">
									I love building things that help make peoples' lives easier and make impact on the world. I am focused on architectural and data-related ideas but more recently, 
									I've also been tuning my frontend skills working on this website, learning GSAP and Three.js to render animations along the way. 
									In my spare time, I like to run track and create animations in Blender.
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}



export default About;