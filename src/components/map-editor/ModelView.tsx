import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { Popover, TextInput, ActionIcon, NumberInput, Flex } from '@mantine/core';
import Model from './Model';
import { IconAdjustments } from '@tabler/icons-react';
import { useState } from 'react';

const MapView = () => {
	const [width, setWidth] = useState<string | number>('');
	const [height, setHeight] = useState<string | number>('');

	const handleInitialDimensions = (initialWidth: number, initialHeight: number) => {
    setWidth(initialWidth);
    setHeight(initialHeight);
  };

	return (
		<>
		<div style={{height: '30%', backgroundColor: 'grey'}}>
			<Canvas>
				<OrthographicCamera
					makeDefault
					position={[0,10,0]}
					rotation={[-Math.PI / 2, 0, 0]} 
					zoom={25}
				/>
				<ambientLight intensity={1} />
				<Model 
					position={[0,0,0]} 
					input={`/assets/Cafe.glb`}  
					width={width}
					height={height}
					setInitialDimensions={handleInitialDimensions}
				/>
			</Canvas>
		</div>
		<Popover width={300} trapFocus position="left" withArrow shadow="md">
			<Popover.Target>
				<ActionIcon  aria-label="Settings">
					<IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown>
				<Flex gap='sm'>
					<NumberInput
						size='xs'
						label="Width"
						value={width}
						onChange={setWidth}
					/>
					<NumberInput
						size='xs'
						label="Height"
						value={height}
						onChange={setHeight}
					/>
				</Flex>
			</Popover.Dropdown>
		</Popover>
	</>
	)
}

export default MapView;