import { create } from 'zustand';

interface EditorStore {
    selectedCollisionType: number | null;
    setSelectedCollisionType: (value: number | null) => void;
}

const useEditorStore = create<EditorStore>((set) => ({
    selectedCollisionType: null,
    setSelectedCollisionType: (value) => set({ selectedCollisionType: value }),
}));

export default useEditorStore;
