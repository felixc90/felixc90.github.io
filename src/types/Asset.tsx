import { FileWithPath } from "@mantine/dropzone";

export interface Asset {
	id: string;
  name: string;
	file: FileWithPath;
	imageDataUrl: string;
}

export interface AssetProps {
	asset: Asset;
}