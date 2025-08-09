
const Title = ({ children }: { children: string }) => {

	return (
		<div className="mondwest font-extrabold text-7xl/20 md:text-8xl lg:text-[8.5rem] flex">
			{ children.split('').map((c, i) => (<span key={i} className="bounce-title">{c}</span>)) }
		</div>
	)
}


export default Title;