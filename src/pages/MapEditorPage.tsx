import { Flex, Tabs } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
// import TilePicker from '../components/map-editor/TilePicker';
import { IconStack2, IconCloud, IconPlanet } from '@tabler/icons-react';
import ModelsTab from '../components/map-editor/ModelsTab';
import EditModelPanel from '../components/map-editor/EditModelPanel';
import useModelsStore from '../store/useModelsStore';
import LayersTab from '../components/map-editor/LayersTab';

const MapEditorPage = () => {
	const iconStyle = { width: '1rem', height: '1rem' };
	const fontStyle = { fontSize: '10pt' };

	const { getSelectedModel } = useModelsStore();
	const model = getSelectedModel();

	return (
		<Flex style={{width: '100%'}}>
			<MapView />
			<Flex direction='column' w={'30%'}>
				<EditModelPanel />
				<div style={{width: '100%'}}>
					<Tabs defaultValue="layers">
						<Tabs.List>
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