const Icon = ({ children }) => {
	return (
		<div 
			className="
				rounded-full border-1 border-black h-fit p-2 cursor-pointer 
				hover:bg-black hover:text-amber-50"
		>
			{ children }
		</div>
	)
}

export default Icon;