import { CSSProperties } from "react";

const Home = () => {

	const PPEikoFont: CSSProperties = {
		fontFamily: "PPEiko",
		fontWeight: 500
	}

	return (
		<div className="h-screen w-screen">
			<div className="flex justify-around h-full">
				<div className="flex flex-col justify-around">
					<div style={{...PPEikoFont, wordSpacing: "2rem"}} className="text-8xl tracking-wide">
						Felix Cao
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;