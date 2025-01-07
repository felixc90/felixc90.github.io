import useEditorStore from "../../store/useEditorStore";
import useModelsStore from "../../store/useModelsStore";
import { CollisionTypes } from "../../types/CollisionTypes";



const CollisionMap = () => {
	const { setCollisionType, selectedModelId, getSelectedModel } = useModelsStore();
	const { selectedCollisionType } = useEditorStore();
	const model = getSelectedModel();

	if (!model) return <></>

  return (
    <>
      {model.collisionMap.map((row, i) =>
        row.map((cell, j) => {
					const collisionType = CollisionTypes[cell];
					const [r, g, b] = collisionType.color;

					return (
						<mesh 
							key={`${i}_${j}`}
							rotation={[-Math.PI / 2, 0, 0]} 
							position={[j - model.width / 2 + 1/2, 8, i - model.height / 2 + 1/2 ]}
							onClick={() => {
								if (selectedModelId && selectedCollisionType) {
									console.log('clicked')
									setCollisionType(selectedModelId, j, i, selectedCollisionType);
								}
							}}
							>
							<planeGeometry args={[1, 1]} /> {/* Large plane dimensions */}
							<meshPhongMaterial color={`rgb(${r}, ${g}, ${b})`} opacity={0.5} transparent/>
						</mesh>
					)
				})
      )}
    </>
  );
};

export default CollisionMap;
