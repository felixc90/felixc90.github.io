import { Stack } from "@mantine/core";
import useModelsStore from "../../store/useModelsStore"
import ModelCard from "./ModelCard";

const ModelsTab = () => {
	const { models } = useModelsStore();

	return (
		<Stack
      align="stretch"
      justify="flex-start"
			style={{gap: 0}}
    >
			{ models.map((model, i) => (
				<div key={i}>
					<ModelCard model={model} />
				</div>
			))}
		</Stack>
	)
}

export default ModelsTab;