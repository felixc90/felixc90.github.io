import { create } from 'zustand';
import { Map } from '../types/Map';
import { MapConstants } from '../types/MapConstants';

interface MapStore {
	map: Map;
	updateMap: (updates: Partial<Map>) => void;
}

const useMapStore = create<MapStore>((set) => ({
	map: {
		name: 'my_map',
		width: MapConstants.MIN_WIDTH,
		height: MapConstants.MIN_HEIGHT,
	},
	updateMap: (updates: Partial<Map>) => set((state) => ({
		map: {...state.map, ...updates}
	}))
}));

export default useMapStore;
