import { Flex, Group, Select, Tabs, TextInput } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
import { IconStack2, IconCloud } from '@tabler/icons-react';
import ModelsTab from '../components/map-editor/ModelsTab';
import AssetsTab from '../components/map-editor/AssetsTab';
import SaveButton from '../components/map-editor/SaveButton';
import { useEffect, useRef, useState } from 'react';
import { Mode } from '../types/Mode.tsx';
import ModelView from '../components/map-editor/ModelView.tsx';
import useModelsStore from '../store/useModelsStore.tsx';
import ModelViewPanel from '../components/map-editor/ModelViewPanel.tsx';
import { Canvas } from '@react-three/fiber';
import { Model } from '../types/Model.tsx';
import EditModelPanel from '../components/map-editor/EditModelPanel.tsx';
import useEditorStore from '../store/useEditorStore.tsx';

const MapEditorPage = () => {
	const iconStyle = { width: '1rem', height: '1rem' };
	const fontStyle = { fontSize: '10pt' };
		
	const mapStyle = { width: "70%", height: "100vh", margin: "auto", padding: '3rem'};

	const { selectedModelId, getSelectedModel, models } = useModelsStore();
	const { mode, setMode } = useEditorStore();

	const [mapName, setMapName] = useState('my_map');
	const [selectedModel, setSelectedModel] = useState<Model | null>(null);

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		setSelectedModel(getSelectedModel())
	}, [selectedModelId, getSelectedModel, models])

	return (
		<Flex w='100%'>
			<div style={mapStyle}>
				<Group gap='sm'>
					<TextInput
						value={mapName}
						label='Save'
						onChange={(e) => setMapName(e.target.value)}
						rightSection={<SaveButton filename={mapName}/>}
					/> 
					<Select
						label="Mode"
						data={Object.keys(Mode)}
						value={mode}
						defaultValue={Mode.Map}
						allowDeselect={false}
						onChange={(value) => setMode(value as Mode)}
					/>
				</Group>
				<Canvas ref={canvasRef}>
					{ mode === Mode.Map && <MapView canvasRef={canvasRef} /> }
					{ mode === Mode.Edit && selectedModel && <ModelView canvasRef={canvasRef} model={selectedModel} /> }
				</Canvas>
			</div>
			<Flex direction='column' w='30%' style={{padding: '2rem'}}>
				{ mode === Mode.Map && <ModelViewPanel /> }
				{ mode === Mode.Edit && <EditModelPanel /> }
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