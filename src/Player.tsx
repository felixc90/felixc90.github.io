import { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import ps from './assets/pl_boy01c.17.png'

const Player = () => {
  const texture = useLoader(THREE.TextureLoader, ps);
  const { scene } = useThree();
  const CELL_SIZE = 200 / 40;

  useEffect(() => {
		const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
		const object3D = new THREE.Sprite(spriteMaterial);
		object3D.center.set(0.5, 0);
		object3D.scale.set(1.5 * CELL_SIZE, 1.5 * CELL_SIZE, 1);
		object3D.position.set(CELL_SIZE/2, 0, - CELL_SIZE/2 + 15 * CELL_SIZE);
    scene.add(object3D);

    return () => {
      if (object3D.material) object3D.material.dispose();
      texture.dispose();
      scene.remove(object3D);
    };
  }, [CELL_SIZE, scene, texture]);

  return null;
};

export { Player };