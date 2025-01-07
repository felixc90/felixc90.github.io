import { create } from 'zustand';
import { Mode } from '../types/Mode';

interface EditorStore {
	selectedCollisionType: number | null;
	setSelectedCollisionType: (collistionType: number | null) => void;
	mode: Mode;
	setMode: (mode: Mode) => void;
	showCollisionMap: boolean;
	toggleCollisionMap: () => void;
}

const useEditorStore = create<EditorStore>((set) => ({
	selectedCollisionType: null,
	setSelectedCollisionType: (collistionType) => set({ selectedCollisionType: collistionType }),
	mode: Mode.Map,
	setMode: (mode) => set({ mode: mode }),
	showCollisionMap: false,
	toggleCollisionMap: () => set((state) => ({ showCollisionMap: !state.showCollisionMap })),
}));

export default useEditorStore;
