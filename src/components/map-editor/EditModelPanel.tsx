import { Suspense } from 'react';
import { Popover, ActionIcon, NumberInput, Flex, InputLabel } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import useModelsStore from '../../store/useModelsStore';
import ModelView from './ModelView';
import { ensureNumber } from '../../utils/inputHelper';


const EditModelPanel = () => {
	const { updateModel, getSelectedModel, selectedModelId } = useModelsStore();
	const model = getSelectedModel();

	if (!selectedModelId || !model) {
		return <></>
	}

	return (
		<>
		<div style={{height: '30%'}}>
			{/* TODO: add a proper fallback */}
			<Suspense fallback={<>Loading...</>}>
				<ModelView model={model}/>
			</Suspense>
		</div>
		<Popover width={300} trapFocus position="left" withArrow shadow="md">
			<Popover.Target>
				<ActionIcon  aria-label="Settings">
					<IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown>
				<InputLabel>Grid Size</InputLabel>
				<Flex gap='md' mb='md'>
					<NumberInput
						size='xs'
						label="Width"
						value={model.width}
						min={model.minWidth}
						onChange={(value) => updateModel(selectedModelId, {width: ensureNumber(value)})}
					/>
					<NumberInput
						size='xs'
						label="Height"
						value={model.height}
						min={model.minHeight}
						onChange={(value) => updateModel(selectedModelId, {height: ensureNumber(value)})}
					/>
				</Flex>
				<InputLabel>Position</InputLabel>
				<Flex gap='md'>
					<NumberInput
						size='xs'
						label="x"
						value={model.mapPosition[0]}
						onChange={(value) => updateModel(selectedModelId, {
							mapPosition: [ensureNumber(value), model.mapPosition[1], model.mapPosition[2]]
						})}
					/>
					<NumberInput
						size='xs'
						label="y"
						value={model.mapPosition[1]}
						onChange={(value) => updateModel(selectedModelId, {
							mapPosition: [model.mapPosition[0], ensureNumber(value), model.mapPosition[2]]
						})}
					/>
					<NumberInput
						size='xs'
						label="z"
						value={model.mapPosition[2]}
						onChange={(value) => updateModel(selectedModelId, {
							mapPosition: [model.mapPosition[0], model.mapPosition[1], ensureNumber(value)]
						})}
					/>
				</Flex>
			</Popover.Dropdown>
		</Popover>
	</>
	)
}

export default EditModelPanel;