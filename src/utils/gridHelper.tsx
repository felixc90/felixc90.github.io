import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';

interface GridProps {
	position?: [number, number, number];
  height?: number;
  width?: number;
  linesHeight?: number;
  linesWidth?: number;
  color?: string | number;
	renderOrder?: number;
}

const Grid: React.FC<GridProps> = ({
	position = [0, 0, 0],
  height = 1,
  width = 1,
  color = '#000000',
	renderOrder = 0,
}) => {
	[height, width] = [height/2, width/2]
  const lines = useMemo(() => {
    const positions: [start: [number, number, number], end: [number, number, number]][] = [];
    const [stepW, stepH] = [1, 1];

    // Vertical lines
    for (let i = -width; i <= width; i += stepW) {
      positions.push([[position[0] + i, 0, position[2] - height], [position[0] + i, 0, position[2] + height]]);
    }

    // // Horizontal lines
		for (let i = -height; i <= height; i += stepH) {
      positions.push([[position[0] - width, 0, position[2] + i], [position[0] + width, 0, position[2] + i]]);
    }

    return positions;
  }, [height, width, position]);

  return (
    <>
      {lines.map(([start, end], index) => (
        <Line
					renderOrder={renderOrder}
          key={index}
          points={[start, end]}
          color={color}
          lineWidth={1}
          transparent
        />
      ))}
    </>
  );
};

export default Grid;
