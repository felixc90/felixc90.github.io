import { NeueMontrealMono } from "../../styles/fonts";
import University from "../components/about/University";

const Education = () => {

	return (
		<div className="h-screen w-screen flex bg-black text-white">
			<University style={{ position: 'absolute' }} />
			<div className="absolute" style={NeueMontrealMono}>
				<div className="pt-20 px-10 text-xs" style={NeueMontrealMono}>
					University of New South Wales, Sydney
				</div>
			</div>
		</div>
	)
}



export default Education;