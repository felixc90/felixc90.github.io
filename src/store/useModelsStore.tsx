import { create } from 'zustand';
import { Model } from '../types/Model';

interface ModelsStore {
  models: Model[];
  selectedModelId: string | null;

  addModel: (model: Model) => void;
  updateModel: (id: string, updates: Partial<Model>) => void;
  removeModel: (id: string) => void;
  selectModel: (id: string | null) => void;
	getSelectedModel: () => Model | null;

}

const useModelsStore = create<ModelsStore>((set, get) => ({
  models: [],
  selectedModelId: null,
  addModel: (model) =>
    set((state) => ({ models: [...state.models, model] })),
  updateModel: (id, updates) => {
    set((state) => ({
      models: state.models.map((model) =>
        model.id === id ? { ...model, ...updates } : model
      ),
    }))
	},
  removeModel: (id) => {
    set((state) => ({
      models: state.models.filter((model) => model.id !== id),
      selectedModelId: (state.selectedModelId === id ? null : state.selectedModelId),
    }))
	},
  selectModel: (id) => set({ selectedModelId: id }),
	getSelectedModel: () => {
    const state = get();
    return state.models.find((m) => m.id === state.selectedModelId) || null;
  },
}));

export default useModelsStore;
