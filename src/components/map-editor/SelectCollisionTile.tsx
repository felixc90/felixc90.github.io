import { Select } from "@mantine/core"
import { CollisionTypes, CollisionTypeId } from "../../types/CollisionTypes";
import useEditorStore from "../../store/useEditorStore";

const SelectCollisionTile = () => {
	const { setSelectedCollisionType } = useEditorStore();
	const handleChange = (value: string | null) => {
		if (value === null) {
			setSelectedCollisionType(value)
			return;
		}
		setSelectedCollisionType(CollisionTypeId.get(value) ?? 0);
	};

	return (
		<Select
			onChange={handleChange}
			label="Collision tile"
			data={CollisionTypes}
			w='fit-content'
		/>
	)
}

export default SelectCollisionTile;