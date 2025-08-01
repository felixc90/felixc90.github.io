import { CSSProperties } from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
	const style: CSSProperties = {
		fontFamily: "Mondwest",
		fontWeight: "800",
		fontSize: "10rem",
		marginTop: "4rem",
		lineHeight: "9rem",
		marginLeft: "auto",
		marginRight: "auto",
	}

	return (
		<div style={style}>
			{ children }
		</div>
	)
}


export default Title;