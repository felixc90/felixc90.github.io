import { NumberInput, Flex, InputLabel, Container, Switch } from '@mantine/core';
import useModelsStore from '../../store/useModelsStore';
import { ensureNumber } from '../../utils/inputHelper';
import SelectCollisionType from './SelectCollisionType';
import useEditorStore from '../../store/useEditorStore';


const EditModelPanel = () => {
	const { updateModel, getSelectedModel, selectedModelId } = useModelsStore();
	const { showCollisionMap, toggleCollisionMap } = useEditorStore();
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
						<Switch 
							checked={showCollisionMap} 
							label="Collision Map"
							labelPosition="left"
							onChange={toggleCollisionMap} mb='md'
						/>
						<SelectCollisionType disabled={!showCollisionMap} />
					</Container>
				</Flex>
			</Flex>
	</div>
	)
}

export default EditModelPanel;