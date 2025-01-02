import { Flex, Space, Tabs } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
// import TilePicker from '../components/map-editor/TilePicker';
import { IconStack2, IconCloud, IconPlanet } from '@tabler/icons-react';
import ModelsTab from '../components/map-editor/ModelsTab';
import EditModelPanel from '../components/map-editor/EditModelPanel';
import { useEffect } from 'react';
import useModelsStore from '../store/useModelsStore';
import { v4 } from 'uuid';
import LayersTab from '../components/map-editor/LayersTab';

const MapEditorPage = () => {
	const iconStyle = { width: '1rem', height: '1rem' };
	const fontStyle = { fontSize: '10pt' };

	const { addModel, selectModel, getSelectedModel } = useModelsStore();
	const model = getSelectedModel();

	useEffect(() => {
		const modelId = v4();
		console.log('CALLED');
		addModel({
			id: modelId,
			src: '/assets/Cafe.glb',
			name: 'Cafe',
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			width: 0,
			height: 0,
			minWidth: 0,
			minHeight: 0,
			mapPosition: [1, 0, 1]
		})

		selectModel(modelId);
	}, [addModel, selectModel])

	return (
		<Flex style={{width: '100%'}}>
			<MapView />
			<Flex direction='column'>
				<EditModelPanel />
				<div style={{width: 'fit-content'}}>
					<Tabs defaultValue="layers">
						<Tabs.List mb='xs'>
							{model && (
								<Tabs.Tab
									value="properties"
									leftSection={<IconPlanet style={iconStyle} />}
									style={fontStyle}
								>
									Properties
								</Tabs.Tab>
							)}
							<Tabs.Tab value="layers" leftSection={<IconStack2 style={iconStyle}/>} style={fontStyle} >
								Layers
							</Tabs.Tab>
							<Tabs.Tab value="models" leftSection={<IconCloud style={iconStyle} />} style={fontStyle} >
								Models
							</Tabs.Tab>
						</Tabs.List>
						{model && (
							<Tabs.Panel value="properties">
								properties tab content
							</Tabs.Panel>
						)}
						<Tabs.Panel value="layers">
							<LayersTab />
						</Tabs.Panel>
						<Tabs.Panel value="models">
							<ModelsTab />
						</Tabs.Panel>
						
					</Tabs>
				</div>
			</Flex>
		</Flex>
	)
}

export default MapEditorPage;