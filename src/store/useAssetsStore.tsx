import { create } from 'zustand';
import { Asset } from '../types';

interface AssetsStore {
  assets: Asset[];

  addAsset: (asset: Asset) => void;
  removeAsset: (id: string) => void;
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
}));

export default useAssetsStore;
