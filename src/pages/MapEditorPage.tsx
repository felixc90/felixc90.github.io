import { Flex, Tabs } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
import { IconStack2, IconCloud } from '@tabler/icons-react';
import EditModelPanel from '../components/map-editor/EditModelPanel';
import ModelsTab from '../components/map-editor/ModelsTab';
import AssetsTab from '../components/map-editor/AssetsTab';

const MapEditorPage = () => {
	const iconStyle = { width: '1rem', height: '1rem' };
	const fontStyle = { fontSize: '10pt' };

	return (
		<Flex style={{width: '100%'}}>
			<MapView />
			<Flex direction='column' w={'30%'}>
				<EditModelPanel />
				<div style={{width: '100%'}}>
					<Tabs defaultValue="models">
						<Tabs.List>
							<Tabs.Tab value="models" leftSection={<IconStack2 style={iconStyle}/>} style={fontStyle} >
								Models
							</Tabs.Tab>
							<Tabs.Tab value="assets" leftSection={<IconCloud style={iconStyle} />} style={fontStyle} >
								Assets
							</Tabs.Tab>
						</Tabs.List>
						<Tabs.Panel value="models">
							<ModelsTab />
						</Tabs.Panel>
						<Tabs.Panel value="assets">
							<AssetsTab />
						</Tabs.Panel>
					</Tabs>
				</div>
			</Flex>
		</Flex>
	)
}

export default MapEditorPage;