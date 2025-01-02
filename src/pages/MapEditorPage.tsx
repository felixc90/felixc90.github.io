import { Flex, Tabs } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
// import TilePicker from '../components/map-editor/TilePicker';
import { IconStack2, IconCloud, IconPlanet } from '@tabler/icons-react';
import ModelsTab from '../components/map-editor/ModelsTab';
import ModelView from '../components/map-editor/ModelView';

const MapEditorPage = () => {
	const iconStyle = { width: '1rem', height: '1rem' };
	const fontStyle = { fontSize: '10pt' };

	return (
		<Flex style={{width: '100%'}}>
			<MapView />
			<Flex direction='column'>
				<ModelView />
				<div style={{width: 'fit-content'}}>
					<Tabs defaultValue="objects">
						<Tabs.List>
							<Tabs.Tab value="layers" leftSection={<IconStack2 style={iconStyle}/>} style={fontStyle} >
								Layers
							</Tabs.Tab>
							<Tabs.Tab value="models" leftSection={<IconCloud style={iconStyle} />} style={fontStyle} >
								Models
							</Tabs.Tab>
							<Tabs.Tab value="properties" leftSection={<IconPlanet style={iconStyle} />} style={fontStyle} >
								Properties
							</Tabs.Tab>
						</Tabs.List>
						<Tabs.Panel value="layers">
							layers tab content
						</Tabs.Panel>
						<Tabs.Panel value="models">
							<ModelsTab />
						</Tabs.Panel>
						<Tabs.Panel value="properties">
							properties tab content
						</Tabs.Panel>
					</Tabs>
				</div>
			</Flex>
		</Flex>
	)
}

export default MapEditorPage;