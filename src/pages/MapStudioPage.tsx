import { Flex } from '@mantine/core';
import { useState } from 'react';

const MapStudioPage = () => {

	const nRows = 10;
	const nCols = 10;

	const zeroMatrix = Array(nRows).fill(Array(nCols).fill(0));

	const [grid, setGrid] = useState<number[][]>(zeroMatrix);
	const [selected, setSelected] = useState<boolean[][]>(zeroMatrix);

	const width = 32;
	const height = 32;

	const handleClick = (i: number, j: number) => {
		const newSelected = selected.map((row, rowIndex) =>
      rowIndex === i
        ? row.map((cell, colIndex) => (colIndex === j ? true : cell))
        : row
    );
		newSelected[i][j] = true;
		setSelected(newSelected);
	}

	return (
		<Flex direction='column' >
			{ grid.map((row, i) => 
				<Flex key={i} style={{ width: 'fit-content', backgroundColor: 'black'}}>
					{ row.map((cell, j) => 
						<div style={{
								border: '1px solid ' + (selected[i][j] ? 'red' : 'white'), 
								width: `${width}px`, 
								height: `${height}px` 
							}} 
							onClick={() => handleClick(i, j)} key={j}>
							{cell}
						</div>)}
				</Flex>
			)}
		</Flex>
		
	)
}

export default MapStudioPage;