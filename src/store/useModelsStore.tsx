import { create } from 'zustand';
import { Model } from '../types/Model';

interface ModelsStore {
  models: Model[];
  selectedModelId: string | null;

  addModel: (model: Model) => void;
  updateModel: (id: string, updates: Partial<Model>) => void;
  removeModel: (id: string) => void;
  selectModel: (id: string | null) => void;
	shiftModelUp: (id: string) => void;
	shiftModelDown: (id: string) => void;
	getSelectedModel: () => Model | null;
	modelIndexOf: (id: string) => number | null;
	setCollisionType: (id: string, x: number, y: number, collisionType: number) => void;
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
	shiftModelUp: (id) => set((state) => {
		const index = state.modelIndexOf(id);
    if (index === null || index <= 0 || index >= state.models.length) return {}; // Out of bounds
    const newModels = [...state.models];
    [newModels[index], newModels[index - 1]] = [newModels[index - 1], newModels[index]];
    return { models: newModels };
  }),
	shiftModelDown: (id) => set((state) => {
		const index = state.modelIndexOf(id);
    if (index === null || index < 0 || index >= state.models.length - 1) return {}; // Out of bounds
    const newModels = [...state.models];
    [newModels[index], newModels[index + 1]] = [newModels[index + 1], newModels[index]];
    return { models: newModels };
  }),
	modelIndexOf: (id) => {
		let index = null;
		const state = get();
		for (let i = 0; i < state.models.length; i++) {
			if (state.models[i].id === id) index = i;
		}
		return index;
  },
	setCollisionType: (id, x, y, collisionType) => {
		set((state) => ({
			models: state.models.map((model) => {
				if (model.id !== id) return model;
				
				const updatedCollisionMap = model.collisionMap.map((row, rowIndex) =>
					rowIndex === y
						? row.map((tile, colIndex) => (colIndex === x ? collisionType : tile))
						: row
				);
	
				return { ...model, collisionMap: updatedCollisionMap };
			}),
		}));
	},
}));

export default useModelsStore;
