import { Container } from "@mantine/core";
import Model from "../../types/Model";

interface MapModelProps {
	model: Model;
}

const ModelCard = ({ model } : MapModelProps) => {
	return (
		<Container h='50' bg={'blue'} w='100%'>
			{model.name}
		</Container>)
}

export default ModelCard;