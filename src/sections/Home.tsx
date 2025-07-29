import { useEffect, useState } from "react";
// import Scene from "../components/home/Ocean";
import { NeueBitBold, NeueMontrealBold, NeueMontrealMono } from '../../styles/fonts';

const Home = () => {

	const [time, setTime] = useState<Date>(new Date(0,0,0));

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
	}, [])

	return (
		<div className="h-screen w-screen" >
			<div className="flex flex-col justify-between h-full">
				<div className="flex-col justify-between w-full mt-30">
					<div className="flex justify-around">
						<div className="flex justify-between gap-16">
							<div style={NeueMontrealMono} className="text-sm w-24 my-auto">
								DESIGN
							</div>
							<div>
								<div className="text-9xl/32 text-center " style={{...NeueMontrealBold}}>SOFTWARE</div>
								<div className="text-[10rem]/24 text-center" style={{...NeueBitBold}}>ENGINEER</div>
								<div className="text-md text-center" style={{...NeueMontrealMono}}>BASED IN SYDNEY</div>
							</div>
							<div style={NeueMontrealMono} className="text-sm w-24 my-auto">
								DEVELOPMENT
							</div>
						</div>
					</div>
					<div className="w-80 mx-auto mt-12 -mb-24">
						<div style={NeueMontrealMono} className="text-md">I'm Felix.</div>
						<div className="bg-white h-40">Video</div>
					</div>
				</div>
				<div style={NeueMontrealMono} className="flex justify-between w-full pb-12 px-8">
					<div className="flex text-sm gap-6">
						<a>[EMAIL]</a>
						<a>[LINKEDIN]</a>
						<a>[GITHUB]</a>
					</div>
					<div>
						SYD {`${time.toTimeString().split(' ')[0]}`}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;