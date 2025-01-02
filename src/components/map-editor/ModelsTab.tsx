import { Button, ButtonGroup, Flex, Group } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { useRef, useState } from 'react';
import ModelCard from './ModelCard';

const ModelsTab = () => {
	const openRef = useRef<() => void>(null);

	const [gltfFiles, setGltfFiles] = useState<FileWithPath[]>([]);

	const handleDrop = (files: FileWithPath[]) => {
		const newFiles = [...gltfFiles, ...files];
		setGltfFiles(newFiles);
	}
	

	return (
		<>
			<ButtonGroup>
				<Dropzone openRef={openRef} onDrop={handleDrop} activateOnClick={false} style={{padding:'0'}}>
					<Button size='xs' onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
						Upload models
					</Button>
				</Dropzone>
			</ButtonGroup>
			<Flex direction='column' style={{'gap': '0'}}>
				{gltfFiles.map((gltfFile, i) => (
					<div key={i}>
						<ModelCard gltfFile={gltfFile} />
					</div>
				))}
			</Flex>
		</>
	)
}

export default ModelsTab;