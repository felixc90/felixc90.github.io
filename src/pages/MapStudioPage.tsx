import { Flex } from '@mantine/core';
import MapView from '../components/map-editor/MapView';
// import TilePicker from '../components/map-editor/TilePicker';

const MapStudioPage = () => {

	return (
		<Flex style={{width: '100%'}}>
			<MapView />
			{/* <TilePicker file={file} setFile={setFile}/> */}
		</Flex>
	)
}

export default MapStudioPage;