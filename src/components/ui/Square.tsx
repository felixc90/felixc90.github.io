interface SquareProps {
	color?: string,
	size?: number
	className?: string,
}

const Square = ({ color = "var(--dark)", size = 2.5, className }: SquareProps) => {
		return (
			<div style={{
				backgroundColor: color, 
				height: `calc(var(--spacing)*${size})`,
				width: `calc(var(--spacing)*${size})`
			
			}} className={`w-2 h-${size} my-auto ${className ?? ""}`}>
			</div>
		)
	}

export default Square