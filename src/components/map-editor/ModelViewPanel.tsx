import { Suspense, useRef } from 'react';
import { Popover, ActionIcon, NumberInput, Flex, InputLabel, rem, Space, Container } from '@mantine/core';
import { IconAdjustments, IconGridPattern, IconGridPatternFilled } from '@tabler/icons-react';
import useModelsStore from '../../store/useModelsStore';
import { ensureNumber } from '../../utils/inputHelper';
import ModelView from './ModelView';
import { Canvas } from '@react-three/fiber';
import { Mode } from '../../types/Mode';


const ModelViewPanel = () => {
	const { updateModel, getSelectedModel, selectedModelId } = useModelsStore();
	const model = getSelectedModel();
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	
	if (!selectedModelId || !model) {
		return <div style={{height: '30%'}}></div>
	}
	
	const toggleGrid = () => {
		updateModel(model.id, {
			grid: !model.grid
		});
	}

	return (
		<div style={{height: '30%'}}>
			<Flex h='100%'>
				<Flex direction='column' gap='md'>
					<Popover width={300} trapFocus position="left" withArrow shadow="md">
						<Popover.Target>
							<ActionIcon aria-label="Settings" size="lg" variant='default'>
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
					<ActionIcon.Group>
						<ActionIcon variant="default" size="lg" aria-label="Toggle Grid" onClick={toggleGrid}>
							{model.grid ? (
								<IconGridPatternFilled style={{ width: rem(20) }} stroke={1.5} />) : (
								<IconGridPattern style={{ width: rem(20) }} stroke={1.5} />
							)}
						</ActionIcon>
					</ActionIcon.Group>
					<Space />
				</Flex>
				<Container p='1rem'>
					<Suspense fallback={<>Loading...</>} >
						<Canvas ref={canvasRef}>
							<ModelView model={model} mode={Mode.Edit} canvasRef={canvasRef}/>
						</Canvas>
					</Suspense>
				</Container>
			</Flex>
			{/* TODO: add a proper fallback */}
	</div>
	)
}

export default ModelViewPanel;