import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';
import { Vector3 } from 'three';

interface GridProps {
	position: Vector3 | [number, number, number];
  height?: number;
  width?: number;
  linesHeight?: number;
  linesWidth?: number;
  color?: string | number;
}

const Grid: React.FC<GridProps> = ({
	position = [0,0,0],
  height = 2,
  width = 2,
  linesHeight = 4,
  linesWidth = 4,
  color = 0xdd006c,
}) => {
	const [posX, posY, posZ] = position;

  const lines = useMemo(() => {
    const positions: [start: [number, number, number], end: [number, number, number]][] = [];
    const stepW = (2 * width) / linesWidth;
    const stepH = (2 * height) / linesHeight;

    // Vertical lines
    for (let i = -width; i <= width; i += stepW) {
      positions.push([[-height+ posX, 0, i+ posZ], [height+ posX, 0, i+ posZ]]);
    }

    // Horizontal lines
    for (let i = -height; i <= height; i += stepH) {
      positions.push([[i+ posX, 0, -width+ posZ], [i+ posX, 0, width + posZ]]);
    }

    return positions;
  }, [height, width, linesHeight, linesWidth, posX, posY, posZ]);

  return (
    <>
      {lines.map(([start, end], index) => (
        <Line
          key={index}
          points={[start, end]}
          color={color}
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}
    </>
  );
};

export default Grid;
