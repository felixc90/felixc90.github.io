import { useLoader, Vector3 } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import Grid from '../../utils/gridHelper';
import React, { useEffect, useRef, useState } from 'react';

interface ModelProps {
  input: string;
  position?: Vector3;
  rotation?: Vector3;
}

const Model = ({
  input,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: ModelProps) => {
  const gltf = useLoader(GLTFLoader, input);
  const [loaded, setLoaded] = useState(false);
	const [gridSize, setGridSize] = useState([0, 0]);

  const boxRef = useRef<THREE.Box3 | null>(null);
  const posRef = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (gltf && !boxRef.current) {
      // Calculate the bounding box once the model is loaded
      const box = new THREE.Box3().setFromObject(gltf.scene);
      boxRef.current = box;

			const xDist = box.max.x - box.min.x;
			const zDist = box.max.z - box.min.z;
      const center = box.getCenter(new THREE.Vector3());
      const posX = position[0] - center.x + Math.ceil(xDist) / 2;
      const posZ = position[2] - center.z + Math.ceil(zDist) / 2;
			

			setGridSize([Math.ceil(xDist), Math.ceil(zDist)])

      posRef.current = [posX, posZ];
      setLoaded(true);  // Mark model as loaded
    }
  }, [gltf, position]);

  // Only render once the model is loaded
  if (!loaded) {
    return null; // Or a loading spinner, or fallback UI
  }

  const [posX, posZ] = posRef.current || [0, 0];

	const maxX = boxRef.current?.max.x ?? 0;
	const minX = boxRef.current?.min.x ?? 0;
	const maxZ = boxRef.current?.max.x ?? 0;
	const minZ = boxRef.current?.min.x ?? 0;
	const xDist = maxX - minX;
	const zDist = maxZ - minZ;
  const gridPosition = [position[0] + Math.ceil(xDist) / 2, 0, position[2] + Math.ceil(zDist) / 2];

  return (
    <>
      <primitive
        object={gltf.scene}
        position={[posX, 0, posZ]} // Using memoized position
        rotation={rotation}
      />
      <Grid
				position={gridPosition}
				height={gridSize[0]/2}
				width={gridSize[1]/2}
				linesHeight={gridSize[0]}
				linesWidth={gridSize[1]}
			/>
    </>
  );
};

export default Model;
