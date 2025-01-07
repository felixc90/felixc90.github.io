import { forwardRef, useRef } from 'react';
import { ColorSwatch, Text, NumberInput, Flex, InputLabel, rem, Space, Container, Select, Group, Avatar, ComboboxLikeRenderOptionInput, ComboboxItem } from '@mantine/core';
import { IconAdjustments, IconGridPattern, IconGridPatternFilled } from '@tabler/icons-react';
import useModelsStore from '../../store/useModelsStore';
import { ensureNumber } from '../../utils/inputHelper';
import SelectCollisionTile from './SelectCollisionTile';


const EditModelPanel = () => {
	const { updateModel, getSelectedModel, selectedModelId } = useModelsStore();
	const model = getSelectedModel();
	
	if (!selectedModelId || !model) {
		return <div style={{height: '30%'}}></div>
	}	

	return (
		<div style={{height: '30%'}}>
			<Flex h='100%'>
				<Flex direction='column' gap='md'>
					<Container w='100%'>
						<InputLabel>Grid Size</InputLabel>
						<Flex gap='md'>
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
					</Container>
					<Container w='100%'>
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
					</Container>
					<Container w='100%'>
					<SelectCollisionTile />
					</Container>
				</Flex>
			</Flex>
	</div>
	)
}

export default EditModelPanel;