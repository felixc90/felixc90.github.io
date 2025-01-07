import { Group, NumberInput, Switch } from "@mantine/core"
import { ensureNumber } from '../../utils/inputHelper.tsx';
import useMapStore from "../../store/useMapStore.tsx";
import useEditorStore from "../../store/useEditorStore.tsx";

const MapViewActions = () => {

	const { map, updateMap } = useMapStore();
	// TODO: collision map is global
	const { showCollisionMap, toggleCollisionMap } = useEditorStore();

	return (
		<Group>
			<NumberInput
				size='xs'
				label="Width"
				value={map.width}
				min={1}
				w={100}
				onChange={(value) => updateMap({width: ensureNumber(value)})}
				/>
			<NumberInput
				size='xs'
				label="Height"
				value={map.height}
				min={1}
				w={100}
				onChange={(value) => updateMap({height: ensureNumber(value)})}
				/>
			<Switch 
				checked={showCollisionMap} 
				label="Collision Map"
				labelPosition="left"
				onChange={toggleCollisionMap} mb='md'
			/>
		</Group>
		)
}

export default MapViewActions;