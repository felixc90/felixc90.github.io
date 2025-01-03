interface ModelIconProps {
	dataUrl: string;
}

const ModelIcon = ({ dataUrl }: ModelIconProps) => {
  return (
    <>
      {dataUrl && <img src={dataUrl} style={{ width: '80px', height: '80px' }} alt="Model Preview" />}
    </>
  );
};

export default ModelIcon;
