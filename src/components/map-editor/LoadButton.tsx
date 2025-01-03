import React from 'react';

interface DownloadJsonProps {
  data: object; // The JSON object to download
  filename: string; // The name of the downloaded file
}

const DownloadJson: React.FC<DownloadJsonProps> = ({ data, filename }) => {
  const handleDownload = () => {
    const jsonString = JSON.stringify(data, null, 2); // Convert JSON object to a pretty-printed string
    const blob = new Blob([jsonString], { type: 'application/json' }); // Create a Blob
    const url = URL.createObjectURL(blob); // Create a download URL

    // Create a temporary anchor element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    // Clean up the URL and remove the anchor element
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleDownload}>
      Download JSON
    </button>
  );
};

export default DownloadJson;
