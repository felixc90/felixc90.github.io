
const Title = ({ children }: { children: string }) => {

	return (
		<div className="mondwest font-extrabold text-7xl/20 md:text-8xl lg:text-[8.5rem] flex">
			{ children.split('').map(c => (<span className="bounce-title">{c}</span>)) }
		</div>
	)
}


export default Title;