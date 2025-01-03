import { Flex, Group, Tabs, TextInput } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
import { IconStack2, IconCloud } from '@tabler/icons-react';
import EditModelPanel from '../components/map-editor/EditModelPanel';
import ModelsTab from '../components/map-editor/ModelsTab';
import AssetsTab from '../components/map-editor/AssetsTab';
import SaveButton from '../components/map-editor/SaveButton';
import { useState } from 'react';

const MapEditorPage = () => {
	const iconStyle = { width: '1rem', height: '1rem' };
	const fontStyle = { fontSize: '10pt' };
		
	const mapStyle = { width: "70%", height: "100vh", margin: "auto", padding: '2rem'};
	const [mapName, setMapName] = useState('my_map');

	return (
		<Flex w='100%'>
			<div style={mapStyle}>
				<Group gap='sm'>
					<TextInput
						value={mapName}
						onChange={(e) => setMapName(e.target.value)}
					/>
					<SaveButton filename={mapName}/>
				</Group>
				<MapView />
			</div>
			<Flex direction='column' w='30%' style={{padding: '2rem'}}>
				<EditModelPanel />
				<div style={{width: '100%'}}>
					<Tabs defaultValue="models">
						<Tabs.List mb='xs'>
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