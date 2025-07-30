interface SquareProps {
	color?: string,
	size?: number
}

const Square = ({ color = "#282924", size = 2 }: SquareProps) => {
		return (
			<div style={{
				backgroundColor: color, 
				height: `calc(var(--spacing)*${size})`,
				width: `calc(var(--spacing)*${size})`
			
			}} className={`w-2 h-${size} my-auto`}>
			</div>
		)
	}

export default Square