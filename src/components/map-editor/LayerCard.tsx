import { Text, Flex, Paper, ActionIcon, rem } from "@mantine/core";
import ModelIcon from "./ModelIcon";
import { Suspense } from "react";
import { ModelProps } from "../../types";
import useModelsStore from "../../store/useModelsStore";
import { IconSettings } from "@tabler/icons-react";

const LayerCard = ({ model } : ModelProps) => {
	const { selectModel, selectedModelId } = useModelsStore();
	const handleClick = () => {
		selectModel(model.id);
	}

	console.log(model)

	return (
		<Paper shadow="xs" radius="xs" onClick={handleClick} bg={selectedModelId === model.id ? 'aliceblue': 'white'}>
			<Flex h='80' w='100%' justify='space-between' >
				<Suspense fallback={<div style={{ width: '80px', height: '80px'}}>Loading..</div>}>
					{model.src && <ModelIcon url={model.src}/>}
				</Suspense>
				<Text my='auto'>
					{model.name}
				</Text>
				<Flex direction='column' p='sm'>
					<ActionIcon.Group>
						<ActionIcon variant="default" size="sm" aria-label="Settings">
							<IconSettings style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
					</ActionIcon.Group>
				</Flex>
			</Flex>
		</Paper>)
}

export default LayerCard;