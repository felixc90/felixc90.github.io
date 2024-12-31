import { useLoader, Vector3 } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import Grid from '../../utils/gridHelper';
import React, { useEffect, useRef, useState } from 'react';

interface ModelProps {
  input: string;
  position?: Vector3 | [number, number, number];
  rotation?: Vector3 | [number, number, number];
	width: string | number;
	height: string | number;
	setInitialDimensions: (width: number, height: number) => void;
}

const Model = ({
  input,
	width,
	height,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
	setInitialDimensions
}: ModelProps) => {


  const gltf = useLoader(GLTFLoader, input);
  const [loaded, setLoaded] = useState(false);

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
      const posX = - center.x;
      const posZ = - center.z;
			

			setInitialDimensions(Math.ceil(xDist), Math.ceil(zDist))

      posRef.current = [posX, posZ];
      setLoaded(true);  // Mark model as loaded
    }
  }, [gltf, position, setInitialDimensions]);

  // Only render once the model is loaded
  if (!loaded) {
    return null; // Or a loading spinner, or fallback UI 
  }

  const [posX, posZ] = posRef.current || [0, 0];
  


  return (
    <>
      <primitive
        object={gltf.scene}
        position={[posX, 0, posZ]} // Using memoized position
        rotation={rotation}
      />
      <Grid
				position={position}
				height={typeof height === 'string' ? 0 : height/2}
				width={typeof width === 'string' ? 0 : width/2}
				linesHeight={typeof height === 'string' ? 0 : height}
				linesWidth={typeof width === 'string' ? 0 : width}
			/>
    </>
  );
};

export default Model;
