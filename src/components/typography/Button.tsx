import { MouseEventHandler } from "react";

interface ButtonProps {
	children: React.ReactNode, 
	variant: "filled" | "outline", 
	onClick?: MouseEventHandler<HTMLDivElement>,
	disabled?: boolean
}

const Button = ({ children, variant, onClick, disabled }: ButtonProps) => {

		const variantStyles = {
			"filled": "bg-[#282924] text-[#f8f3df]",
			"outline": "bg-[#f8f3df] text-[#282924] hover:bg-[#282924] hover:text-[#f8f3df]",
		}

		return (
			<div 
				onClick={onClick}
				className={`neue-montreal-mono font-[400] text-xs w-fit py-1 px-2 rounded-sm border-1 border-[#282924] ${variantStyles[variant]} ${!disabled && "cursor-pointer"}`}>
					{ children }
			</div>
		)
	}

	export default Button;