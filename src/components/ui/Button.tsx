import { MouseEventHandler } from "react";

interface ButtonProps {
	children?: React.ReactNode, 
	variant?: "filled" | "outline", 
	onClick?: MouseEventHandler<HTMLDivElement>,
	className?: string,
	readonly?: boolean
	disabled?: boolean,
	size?: "icon",
	color?: string,
}

const Button = ({ children, variant, onClick, disabled, className, size, readonly }: ButtonProps) => {

		return (
			<div
				onClick={onClick}
				className={`neue-montreal-mono font-[400] text-xs w-fit py-1 px-2 border-1 border-dark
					
					${className !== undefined && className} 
					${size == "icon" ? "rounded-4xl" : "rounded-sm"} 
					${variant == "filled" && `bg-dark text-light`} 
					${variant == "outline" && `bg-light text-dark hover:bg-dark hover:text-light`} 
					${(!readonly && !disabled) && "cursor-pointer hover:rounded-2xl ease-linear duration-100 elastic-button"}
					`}>
					{ children }
			</div>
		)
	}

	export default Button;