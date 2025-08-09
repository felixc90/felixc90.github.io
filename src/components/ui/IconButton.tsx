import { MouseEventHandler } from "react";

interface IconButtonProps {
	icon?: React.ReactNode,
	onClick?: MouseEventHandler<HTMLDivElement>,
	className?: string,
}

const IconButton = ({ icon, onClick, className }: IconButtonProps) => {

		return (
			<div
				onClick={onClick}
				className={`
					w-12 h-12
					cursor-pointer 
					flex flex-col justify-around my-auto
					border-[1.5px] border-dark rounded-3xl
					bg-light text-dark hover:bg-dark hover:text-light
					ease-linear duration-100 elastic-button
					${className !== undefined && className}
					`}
			>
				<div className="mx-auto">
					{ icon }
				</div>			
			</div>
		)
	}

	export default IconButton;