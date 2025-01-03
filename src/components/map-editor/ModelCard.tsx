import { Text, Flex, Paper, ActionIcon, rem, TextInput, Container } from "@mantine/core";
import ModelIcon from "./ModelIcon";
import { Suspense, useState } from "react";
import { ModelProps } from "../../types";
import useModelsStore from "../../store/useModelsStore";
import { IconCopy, IconEye, IconEyeOff, IconPencil, IconTrash } from "@tabler/icons-react";
import { v4 } from "uuid";

const ModelCard = ({ model } : ModelProps) => {
	const { selectModel, addModel, selectedModelId, removeModel, updateModel } = useModelsStore();
	const [toggleEdit, setToggleEdit] = useState<boolean>(false);
	const handleClick = () => {
		selectModel(model.id);
	}

	const editName = (e) => {
		e.stopPropagation();
		setToggleEdit(!toggleEdit);
	}

	const copyModel = (e) => {
		e.stopPropagation();
		const modelId = v4();
		addModel({...model, id: modelId})
	}

	const handleRemove = (e) => {
		e.stopPropagation();
		removeModel(model.id);
	}

	const toggleHide = (e) => {
		e.stopPropagation();
		updateModel(model.id, {
			hide: !model.hide
		})
	}

	return (
		<Paper 
			shadow="xs" radius="xs" onClick={handleClick} 
			bg={selectedModelId === model.id ? 'aliceblue': 'white'}
			style={{ cursor: 'pointer' }}
		>
			<Flex h='80' w='100%' justify='space-between' >
				<Suspense fallback={<div style={{ width: '80px', height: '80px'}}>Loading..</div>}>
					{model.src && <ModelIcon url={model.src}/>}
				</Suspense>
				<Container my='auto'>
					{ toggleEdit ? (
						<TextInput 
							size="md"
							radius="xs"
							value={model.name}
							onChange={(event) => updateModel(model.id, {
								name: event.currentTarget.value
							})}
						/> ) : (
						<Text >
							{model.name}
						</Text>
					)}
				</Container>
				
				<Flex direction='column' p='sm'>
					<ActionIcon.Group>
						<ActionIcon variant="default" size="sm" aria-label="Edit Name" onClick={editName}>
							<IconPencil style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
						<ActionIcon variant="default" size="sm" aria-label="Toggle Hide" onClick={toggleHide}>
							{!model.hide ? (
								<IconEye style={{ width: rem(20) }} stroke={1.5} />) : (
								<IconEyeOff style={{ width: rem(20) }} stroke={1.5} />
							)}
						</ActionIcon>
						<ActionIcon variant="default" size="sm" aria-label="Copy" onClick={copyModel}>
							<IconCopy style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
						<ActionIcon variant="default" size="sm" aria-label="Remove" onClick={handleRemove}>
							<IconTrash style={{ width: rem(20) }} stroke={1.5} />
						</ActionIcon>
					</ActionIcon.Group>
				</Flex>
			</Flex>
		</Paper>)
}

export default ModelCard;