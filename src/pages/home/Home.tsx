import Square from "@/components/ui/Square";
import Skills from './Skills';
import Projects from './Projects';
import Work from './Work';
import Title from "@/components/typography/Title";
import Introduction from "./Introduction";
import ScrambleText from "@/components/ui/ScrambleText";
import Barcode from "@/assets/Barcode";
const Home = () => {

	return (
		<div className="px-16 py-8">
			<div className="h-[calc(100vh-4rem)] w-full ">
				<div className="flex flex-col justify-between h-full">
					<div className="flex-col flex justify-around mt-14">
						<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450]">
							<div className="flex gap-4">
								<Square />
								<Square />
								<Square />
							</div>
							<ScrambleText chars="upperCase">DESIGN</ScrambleText>
							<Square />
							<Square />
							<Square />
							<ScrambleText chars="upperCase">DEVELOPMENT</ScrambleText>
							<div className="flex gap-4">
								<Square />
								<Square />
								<Square />
							</div>
						</div>
						<div className="flex flex-col">
							<div className="flex w-full mt-14 sm:flex-row flex-col">
								<div className="w-1/2 flex flex-row sm:flex-row-reverse pr-8 pointer-events-auto">
									<Title>Software</Title>
								</div>
								<div className="w-1/2 flex">
									<Title>Engineer</Title>
								</div>
							</div>
							<div className="flex w-full sm:flex-row flex-col">
								<div className="w-0 sm:w-1/2">
								</div>
								<div className="w-2/3 sm:w-1/2 flex justify-between">
									<div className="neue-montreal-mono text-xs md:text-sm font-[450] mt-12 flex-col flex w-fit">
										<ScrambleText chars="upperCase">DESIGNING AND BUILDING THINGS</ScrambleText>
										<ScrambleText chars="upperCase">TRYING TO WRITE CODE</ScrambleText>
										<div className="flex justify-between w-full mb-6">
											<ScrambleText chars="upperCase">BASED IN SYDNEY,</ScrambleText>
											<ScrambleText chars="upperCase">AU</ScrambleText>
										</div>
										<div className="neuebit text-6xl md:text-8xl flex gap-2">
											<div className="shift-right">→</div><div className="shift-right">→</div><div className="shift-right">→</div>
										</div>

									</div>
								</div>
							</div>

						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex justify-between neue-montreal-mono font-[450] text-[10px]/[8px] sm:text-sm">
							<div className="flex gap-8">
								<div className="flex flex-col-reverse gap-3">
									<div>©2025 PORTFOLIO</div>
									<div className="w-full h-4 border-1 border-dark flex">
										<div className="w-1/2 h-full flex flex-col"><div className="h-1/2 bg-dark"></div><div className="h-1/2"></div></div>
										<div className="w-1/2 h-full flex flex-col"><div className="h-1/2"></div><div className="h-1/2 bg-dark"></div></div>
									</div>
								</div>
								<div className="flex flex-col-reverse">
									<div className="neuebit flex gap-2 text-5xl/6 sm:text-7xl/8 h-fit ">
										<div className="bounce-icon">♥</div><div className="bounce-icon">☕</div><div className="bounce-icon">⛅</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col neue-montreal-mono">
								<div className="flex justify-around mb-1">SN1703200330072025</div>
								<div className="h-8 sm:h-12">
									<Barcode />
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr className="border-1 border-dashed border-dark/70 mt-12"/>
			</div>
			<div className="min-h-screen h-fit w-full my-32">
				<Introduction />
			</div>
			<div className="md:h-screen w-full pt-16">
				<Skills />
			</div>
			<div className="w-full my-16 md:-mt-4">
				<Work />
			</div>
			<div className="w-full my-16">
				<Projects />
			</div>
		</div>
	)
}

export default Home;