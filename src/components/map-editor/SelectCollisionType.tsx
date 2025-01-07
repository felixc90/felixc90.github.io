import { CheckIcon, ColorSwatch, Group, rem, Select, SelectProps } from "@mantine/core"
import { CollisionTypes, CollisionTypeId } from "../../types/CollisionTypes";
import useEditorStore from "../../store/useEditorStore";

interface SelectCollisionTileProps {
	disabled?: boolean
}

const SelectCollisionTile = ({ disabled }: SelectCollisionTileProps) => {


	const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
		const [r, g, b] = CollisionTypes[CollisionTypeId.get(option.value) ?? 0].color;
		return (
		<Group justify="space-between" w='100%'>
			{option.label}
			<ColorSwatch
				color={`rgba(${r}, ${g}, ${b}, 0.5)`}
			>
				{checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
			</ColorSwatch>
		</Group>)
	}

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
			disabled={disabled}
			onChange={handleChange}
			placeholder="Select collision type"
			data={CollisionTypes}
			renderOption={renderSelectOption}
			w='fit-content'
		/>
	)
}

export default SelectCollisionTile;