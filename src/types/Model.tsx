export interface Model {
  id: string;
	src: string;
  name: string;
	position: [number, number, number];
  rotation: [number, number, number];
	mapPosition: [number, number, number];
  center: [number, number, number];
  width: number;
  height: number;
	minWidth: number;
	minHeight: number;
	icon: string;
	hide: boolean;
	grid: boolean;
	loaded: boolean;
}

export interface ModelProps {
	model: Model;
}