import { Button, ButtonGroup, Flex } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { useRef } from 'react';
import AssetCard from './AssetCard';
import useAssetsStore from '../../store/useAssetsStore';
import { v4 } from 'uuid';

const AssetsTab = () => {
	const openRef = useRef<() => void>(null);

	const { assets, addAsset } = useAssetsStore();

	const handleDrop = (files: FileWithPath[]) => {
		files.forEach(file => addAsset({ 
			id: v4(),
			name: file.name.replace(/\.[^/.]+$/, ""),
			file: file,
		}))
	}

	return (
		<>
			<ButtonGroup my='xs'>
				<Dropzone openRef={openRef} onDrop={handleDrop} activateOnClick={false} style={{padding:'0'}}>
					<Button size='xs' onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
						Upload models
					</Button>
				</Dropzone>
			</ButtonGroup>
			<Flex direction='column' style={{'gap': '0'}}>
				{assets.map((asset, i) => (
					<div key={i}>
						<AssetCard asset={asset} />
					</div>
				))}
			</Flex>
		</>
	)
}

export default AssetsTab;