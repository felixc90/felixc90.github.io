import { CSSProperties } from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
	const style: CSSProperties = {
		fontFamily: "Mondwest",
		fontWeight: "800",
		marginTop: "4rem",
		marginLeft: "auto",
		marginRight: "auto",
	}

	return (
		<div style={style} className="text-8xl/28 md:text-9xl lg:text-[10rem]">
			{ children }
		</div>
	)
}


export default Title;