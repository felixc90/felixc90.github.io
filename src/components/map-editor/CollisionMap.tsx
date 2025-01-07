import useEditorStore from "../../store/useEditorStore";
import useModelsStore from "../../store/useModelsStore";
import { ModelProps } from "../../types";
import { CollisionTypes } from "../../types/CollisionTypes";



const CollisionMap = ({ model }: ModelProps) => {
	const { setCollisionType, selectedModelId } = useModelsStore();
	const { selectedCollisionType } = useEditorStore();

  return (
    <>
      {model.collisionMap.map((col, i) =>
        col.map((cell, j) => {
					const tile = CollisionTypes[cell];
					return (
						<mesh 
							rotation={[-Math.PI / 2, 0, 0]} 
							position={[i - model.width / 2 + 1/2, 8, j - model.height / 2 + 1/2 ]}
							onClick={() => {
								if (selectedModelId && selectedCollisionType) {
									setCollisionType(selectedModelId, j, i, selectedCollisionType);
								}
							}}
							>
							<planeGeometry args={[1, 1]} /> {/* Large plane dimensions */}
							<meshPhongMaterial color={tile.color} opacity={0.5} transparent/>
						</mesh>
					)
				})
      )}
    </>
  );
};

export default CollisionMap;
