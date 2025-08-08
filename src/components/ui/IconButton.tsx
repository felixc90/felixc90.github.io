import { MouseEventHandler } from "react";

interface IconButtonProps {
	children?: React.ReactNode,
	onClick?: MouseEventHandler<HTMLDivElement>,
	className?: string,
}

const IconButton = ({ children, onClick, className }: IconButtonProps) => {

		return (
			<div
				onClick={onClick}
				className={`neue-montreal-mono font-[400] text-xs w-fit py-1 px-2 border-1 border-dark rounded-sm
					cursor-pointer hover:rounded-2xl ease-linear duration-100 elastic-button
					bg-light text-dark hover:bg-dark hover:text-light
					${className !== undefined && className}
					`}>
					{ children }
			</div>
		)
	}

	export default IconButton;