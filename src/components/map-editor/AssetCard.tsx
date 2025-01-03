import { Text, Flex, Paper, ActionIcon, rem } from "@mantine/core";
import ModelIcon from "./ModelIcon";
import { Suspense } from "react";
import { IconChevronDown, IconChevronUp, IconPlus, IconTrash } from "@tabler/icons-react";
import { v4 } from "uuid";
import useModelsStore from "../../store/useModelsStore";
import { AssetProps } from "../../types";
import useAssetsStore from "../../store/useAssetsStore";

const AssetCard = ({ asset } : AssetProps) => {
	const { addModel } = useModelsStore();
	const { removeAsset } = useAssetsStore();
	const gltfUrl = URL.createObjectURL(asset.file);

	const handleAdd = () => {
		const modelId = v4();
		addModel({
			id: modelId,
			src: gltfUrl,
			name: asset.name,
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			mapPosition: [0, 0, 0],
			center: [0, 0, 0],
			width: 0,
			height: 0,
			minWidth: 0,
			minHeight: 0,
			hide: false,
			grid: true,
			loaded: false,
		})
	}

	const handleRemove = () => {
		removeAsset(asset.id);
	}

	const moveUp = () => {
		// TODO
		return;
	}

	const moveDown = () => {
		// TODO
		return;
	}

	return (
		<Paper shadow="xs" radius="xs">
			<Flex h='80' w='100%' justify='space-between'>
				<Suspense fallback={<div style={{ width: '80px', height: '80px'}}>Loading..</div>}>
					{gltfUrl && <ModelIcon url={gltfUrl}/>}
				</Suspense>
				<Text my='auto'>
					{asset.name}
				</Text>
				<Flex direction='column' p='sm'>
					<ActionIcon.Group>
						<ActionIcon variant="default" size="sm" aria-label="Add" onClick={handleAdd}>
							<IconPlus style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
						<ActionIcon variant="default" size="sm" aria-label="Remove" onClick={handleRemove}>
							<IconTrash style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
						<ActionIcon variant="default" size="sm" aria-label="Move Up" onClick={moveUp}>
							<IconChevronUp style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
						<ActionIcon variant="default" size="sm" aria-label="Move Down" onClick={moveDown}>
							<IconChevronDown style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
					</ActionIcon.Group>
				</Flex>
			</Flex>
		</Paper>)
}

export default AssetCard;