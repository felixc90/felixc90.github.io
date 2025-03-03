import { Tree } from "./Tree";


interface ForestProps {
	position: [number, number, number],
	width: number,
	height: number
}

export const Forest = ({ position, width, height }: ForestProps) => {
	let treeWidth = 1.5;
	let treeHeight = 1.5;

	const positions = [];
	if (width < 0) {
		width *= -1;
		treeWidth *= -1;
	}

	if (height < 0) {
		height *= -1;
		treeHeight *= -1;
	}

	for (let w = 0; w < width; w++) {
		for (let h = 0; h < height; h++) {
			positions.push([position[0] + w * treeWidth, position[1] , position[2] + h * treeHeight]);
		}
	}

	return (
		<>
			{positions.map(position => <Tree position={position} />)}
		</>
	)
}