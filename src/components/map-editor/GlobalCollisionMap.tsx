import { useEffect, useState } from "react";
import useMapStore from "../../store/useMapStore";
import useModelsStore from "../../store/useModelsStore";
import { CollisionTypes } from "../../types/CollisionTypes";
import { Text } from "@react-three/drei";

const GlobalCollisionMap = () => {
	const { map } = useMapStore();
	const { models } = useModelsStore();

	const [collisionMap, setCollisionMap] = useState<number[][]>(Array.from({ length: map.height }, () => Array(map.width).fill(0)));

	useEffect(() => {
		const newCollisionMap = Array.from({ length: map.height }, () => Array(map.width).fill(0));

		console.log(newCollisionMap.length, newCollisionMap[0].length)
		for (let m = models.length - 1; m >= 0; m--) {
			const model = models[m];
			if (!model.collisionMap.length || !model.collisionMap[0].length) continue;
			console.log('dim', model.collisionMap.length, model.collisionMap[0].length)
			for (let i = 0; i < model.collisionMap.length; i++) {
				for (let j = 0; j < model.collisionMap[0].length; j++) {
					const [y, x] = [model.mapPosition[1] + i, model.mapPosition[0] + j];
					if (y >= map.height || x >= map.width || y < 0 || x < 0) continue;
					newCollisionMap[y][x] = model.collisionMap[i][j];
				}
			} 
		}
		setCollisionMap(newCollisionMap)
	}, [models, map])

  return (
    <>
      {collisionMap.map((row, i) =>
        row.map((cell, j) => {
					const collisionType = CollisionTypes[cell];
					const [r, g, b] = collisionType.color;
					return (
						<mesh 
							key={`${i}_${j}`}
							rotation={[-Math.PI / 2, 0, 0]} 
							position={[j + 1/2, 8, i + 1/2]}
							>
							<Text color={`rgb(${r}, ${g}, ${b})`}>
									{cell}
							</Text>
							<planeGeometry args={[1, 1]} /> {/* Large plane dimensions */}
							<meshPhongMaterial color={`rgb(${r}, ${g}, ${b})`} transparent opacity={0.5} 
							/>
						</mesh>
					)
				})
      )}
    </>
  );
};

export default GlobalCollisionMap;
