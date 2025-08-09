const Heading = ({ children }: { children: string }) => {
	return (
		<div className="mondwest font-extrabold text-[5rem]/20 mb-6 flex">
			{ children.split('').map(c => (<span className="bounce-title">{c}</span>)) }
		</div>
	)
}


export default Heading;