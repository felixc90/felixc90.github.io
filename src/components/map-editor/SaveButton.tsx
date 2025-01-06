import { ActionIcon, Button, rem } from '@mantine/core';
import { IconDownload, IconPlus } from '@tabler/icons-react';
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
		<ActionIcon
			style={{ width: 'fit-content' }}
			variant="default"
			size='md'
			onClick={handleDownload}
		>
			<IconDownload style={{ width: rem(20) }} stroke={1.5} />
		</ActionIcon>
  );
};

export default SaveButton;
