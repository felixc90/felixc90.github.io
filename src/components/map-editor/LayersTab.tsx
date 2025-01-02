import { Stack } from "@mantine/core";
import useModelsStore from "../../store/useModelsStore"
import ModelCard from "./ModelCard";

const LayersTab = () => {
	const { models } = useModelsStore();

	return (
		<Stack
      align="stretch"
      justify="flex-start"
			style={{gap: 0}}
    >
			{ models.map((model) => <ModelCard model={model} />)}
			{ models.map((model) => <ModelCard model={model} />)}
			{ models.map((model) => <ModelCard model={model} />)}

		</Stack>
	)
}

export default LayersTab;