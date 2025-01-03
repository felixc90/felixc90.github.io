import { create } from 'zustand';
import { Asset } from '../types';

interface AssetsStore {
  assets: Asset[];

  addAsset: (asset: Asset) => void;
  removeAsset: (id: string) => void;
	updateAsset: (id: string, updates: Partial<Asset>) => void;
}

const useAssetsStore = create<AssetsStore>((set) => ({
  assets: [],
  addAsset: (asset) =>
    set((state) => ({ assets: [...state.assets, asset] })),
  removeAsset: (id) => {
    set((state) => ({
      assets: state.assets.filter((asset) => asset.id !== id),
    }))
	},
	updateAsset: (id, updates) => {
    set((state) => ({
      assets: state.assets.map((asset) =>
        asset.id === id ? { ...asset, ...updates } : asset
      ),
    }))
	},
}));

export default useAssetsStore;
