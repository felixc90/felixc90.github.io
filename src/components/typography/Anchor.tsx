import { MouseEventHandler } from "react";

interface AnchorProps {
	children: React.ReactNode;
	onClick?: MouseEventHandler<HTMLDivElement>
}

const Anchor = ({ children, onClick }: AnchorProps) => {
	return (
		<div className="w-fit hover:underline hover:cursor-pointer" onClick={onClick}>
			{ children }
		</div>
	)
}


export default Anchor;