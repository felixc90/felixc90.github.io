import { CSSProperties, useEffect, useState } from "react";

const Home = () => {
	const NeueMontrealFont: CSSProperties = {
		fontFamily: "Neue Montreal",
		fontWeight: 400
	}
	
	const NeueMontrealLightFont: CSSProperties = {
		fontFamily: "Neue Montreal",
		fontWeight: 300
	}

	const NeueMontrealMonoFont: CSSProperties = {
		fontFamily: "Neue Montreal Mono",
		fontWeight: 500
	}

	const [time, setTime] = useState<Date>(new Date(0,0,0));

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
	}, [])

	return (
		<div className="h-screen w-screen">
			<div className="flex flex-col justify-around h-full py-32 px-48">
				<span >
					<span style={{...NeueMontrealLightFont}} className="text-6xl my-auto align-middle">{"("}</span>
					<span style={{...NeueMontrealMonoFont}} className="text-md my-auto align-middle mx-24">
					SOFTWARE DESIGN + DEVELOPMENT
					</span>
					<span style={{...NeueMontrealLightFont}} className="text-6xl my-auto align-middle">{")"}</span>
				</span>
				<div className="flex justify-between px-24">
					<div style={{...NeueMontrealFont, wordSpacing:"1rem"}} className="text-6xl">
						Felix Cao
					</div>
					<div style={{...NeueMontrealMonoFont}} className="text-md my-auto">
					SOFTWARE ENGINEER
					</div>
				</div>
				<div className="flex justify-between">
					<div style={{...NeueMontrealFont}} className="text-lg">
						2025 Portfolio
					</div>
					<div style={{...NeueMontrealFont}} className="text-lg">
						Based in Sydney
					</div>
					<div style={{...NeueMontrealFont}} className="text-lg">
						{`${time.toTimeString().split(' ')[0]}`}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;