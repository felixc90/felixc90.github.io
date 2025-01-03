import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import useModelsStore from '../../store/useModelsStore';

interface SaveButtonProps {
	filename: string
}

const SaveButton = ({ filename }: SaveButtonProps) => {
	const { models } = useModelsStore();

	if (!models) {
		return <></>;
	}

  const handleDownload = () => {
    const jsonString = JSON.stringify({ models: models }, null, 2); // Convert JSON object to a pretty-printed string
    const blob = new Blob([jsonString], { type: 'application/json' }); // Create a Blob
    const url = URL.createObjectURL(blob); // Create a download URL

    // Create a temporary anchor element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
		<Button leftSection={<IconDownload size={14} />} variant="default" onClick={handleDownload}>
			Save
		</Button>
  );
};

export default SaveButton;
