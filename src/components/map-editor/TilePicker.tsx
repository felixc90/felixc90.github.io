import { Flex, Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useState } from 'react';

const TilePicker = () => {
	const [tiles, setTiles] = useState<File[]>([]);


	const handleDrop = (files: File[]) => {
		const newTiles = [...tiles];
		newTiles.push(...files);
		setTiles(newTiles);
		console.log(files)
	}


	return (
		<div style={{backgroundColor: 'blue', width:'30%', height: '90vh', borderRadius:'1rem', margin: '1rem'}}>
			<Dropzone
				onDrop={handleDrop}
				onReject={(files) => console.log('rejected files', files)}
				maxSize={5 * 1024 ** 2}
				accept={IMAGE_MIME_TYPE}
				style={{ margin: '1rem' }}
			>
				<Group justify="center" gap="md" mih={100} style={{ pointerEvents: 'none' }}>
					<Dropzone.Accept>
						<IconUpload
							style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
							stroke={1.5}
						/>
					</Dropzone.Accept>
					<Dropzone.Reject>
						<IconX
							style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
							stroke={1.5}
						/>
					</Dropzone.Reject>
					<Dropzone.Idle>
						<IconPhoto
							style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
							stroke={1.5}
						/>
					</Dropzone.Idle>

					<div>
						<Text size="md" inline>
							Drag images here or click to select files
						</Text>
					</div>
				</Group>
			</Dropzone>
			<Flex style={{ padding: '2rem', 'gap': '1rem'}}>
				{tiles.map((tile) => {
					const file = URL.createObjectURL(tile);
					return (<img width='32' height='32' src={file} />)
				})}
			</Flex>

		</div>
	)
}

export default TilePicker