import { MouseEventHandler } from "react";

interface ButtonProps {
	children?: React.ReactNode, 
	variant?: "filled" | "outline", 
	onClick?: MouseEventHandler<HTMLDivElement>,
	className?: string,
	readonly?: boolean
	disabled?: boolean,
	size?: "icon"
}

const Button = ({ children, variant, onClick, disabled, className, size, readonly }: ButtonProps) => {

		const variantStyles = {
			"filled": `bg-dark text-light`,
			"outline": `bg-light text-dark hover:bg-dark hover:text-light`,
		}

		return (
			<div 
				onClick={onClick}
				className={`${className} neue-montreal-mono font-[400] text-xs w-fit py-1 px-2 border-1 border-dark 
					${size == "icon" ? "rounded-4xl" : "rounded-sm"} 
					${variantStyles[variant]} 
					${(!readonly && !disabled) && "cursor-pointer"}`}>
					{ children }
			</div>
		)
	}

	export default Button;