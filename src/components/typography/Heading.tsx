import { CSSProperties } from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
	const style: CSSProperties = {
		fontFamily: "Mondwest",
		fontWeight: "800",
		fontSize: "5rem",
		marginBottom: "1.5rem",
		lineHeight: "5rem",
	}

	return (
		<div style={style}>
			{ children }
		</div>
	)
}


export default Heading;