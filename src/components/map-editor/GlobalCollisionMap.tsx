import { useEffect, useState } from "react";
import useMapStore from "../../store/useMapStore";
import useModelsStore from "../../store/useModelsStore";
import { CollisionTypes } from "../../types/CollisionTypes";
import { Text } from "@react-three/drei";

const GlobalCollisionMap = () => {
	const { map } = useMapStore();
	const { models } = useModelsStore();

	const [collisionMap, setCollisionMap] = useState<number[][]>(Array.from({ length: map.width }, () => Array(map.height).fill(0)));

	useEffect(() => {
		const newCollisionMap = Array.from({ length: map.width }, () => Array(map.height).fill(0));
		for (let m = models.length - 1; m >= 0; m--) {
			const model = models[m];
			if (!model.collisionMap.length) continue;
			for (let i = 0; i < model.width; i++) {
				for (let j = 0; j < model.height; j++) {
					console.log(model.width, model.height)
					const [y, x] = [model.mapPosition[1] + map.height/2 + j, model.mapPosition[0] + map.width/2 + i];
					if (y >= map.height || x >= map.width || y < 0 || x < 0) continue;
					newCollisionMap[x][y] = model.collisionMap[j][i];
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
							position={[i - map.width / 2 +  1/2, 8, j - map.height / 2 + 1/2 ]}
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
