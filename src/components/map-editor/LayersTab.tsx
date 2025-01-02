import { Stack } from "@mantine/core";
import useModelsStore from "../../store/useModelsStore"
import LayerCard from "./LayerCard";

const LayersTab = () => {
	const { models } = useModelsStore();

	return (
		<Stack
      align="stretch"
      justify="flex-start"
			style={{gap: 0}}
    >
			{ models.map((model, i) => (
				<div key={i}>
					<LayerCard model={model} />
				</div>
			))}
		</Stack>
	)
}

export default LayersTab;