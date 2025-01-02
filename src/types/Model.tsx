export interface Model {
  id: string;
	src: string;
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  width: number;
  height: number;
	minWidth: number;
	minHeight: number;
	mapPosition: [number, number, number];
	hide: boolean;
}

export interface ModelProps {
	model: Model;
}