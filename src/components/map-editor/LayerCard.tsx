import { Text, Flex, Paper } from "@mantine/core";
import ModelIcon from "./ModelIcon";
import { Suspense } from "react";
import { ModelProps } from "../../types";

const LayerCard = ({ model } : ModelProps) => {
	return (
		<Paper shadow="xs" radius="xs">
			<Flex h='80' w='100%' >
				<Suspense fallback={<div style={{ width: '80px', height: '80px'}}>Loading..</div>}>
					{model.src && <ModelIcon url={model.src}/>}
				</Suspense>
					<Text>
						{model.name}
					</Text>
			</Flex>
		</Paper>)
}

export default LayerCard;