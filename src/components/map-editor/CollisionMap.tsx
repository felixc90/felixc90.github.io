import { useState } from "react";
import useEditorStore from "../../store/useEditorStore";
import useModelsStore from "../../store/useModelsStore";
import { CollisionTypes } from "../../types/CollisionTypes";
import { Text } from "@react-three/drei";



const CollisionMap = () => {
	const { setCollisionType, selectedModelId, getSelectedModel } = useModelsStore();
	const { selectedCollisionType } = useEditorStore();
	const model = getSelectedModel();

	const [ hovering, setHovering ] = useState<[number, number] | null>(null);

	if (!model) return <></>

  return (
    <>
      {model.collisionMap.map((row, i) =>
        row.map((cell, j) => {
					const collisionType = CollisionTypes[cell];
					const [r, g, b] = collisionType.color;

					return (
						<mesh 
							onPointerEnter={(e) => {
								e.stopPropagation();
								setHovering([i, j])
							}}
							onPointerLeave={(e) => {
								e.stopPropagation();
								setHovering(null);
							}}
							key={`${i}_${j}`}
							rotation={[-Math.PI / 2, 0, 0]} 
							position={[j - model.width / 2 + 1/2, 8, i - model.height / 2 + 1/2 ]}
							onClick={() => {
								if (selectedModelId && selectedCollisionType !== null && hovering) {
									setCollisionType(selectedModelId, hovering[1], hovering[0], selectedCollisionType);
								}
							}}
							>
							<Text color={`rgba(${r}, ${g}, ${b}, 0.1)`}>
									{cell}
							</Text>
							<planeGeometry args={[1, 1]} /> {/* Large plane dimensions */}
							<meshPhongMaterial color={`rgb(${r}, ${g}, ${b})`} transparent
								opacity={
									(hovering && hovering[0] === i && hovering[1] === j) ? 0.3 : 0.5
								} 
							/>
						</mesh>
					)
				})
      )}
    </>
  );
};

export default CollisionMap;
