import { useEffect, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import ps from '../../assets/pl_boy01c.17.png'
import { useKeyboardControls } from '@react-three/drei';
enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}


const Player = () => {
  const texture = useLoader(THREE.TextureLoader, ps);
	const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
	const object3D = useRef(new THREE.Sprite(spriteMaterial));

  const { scene } = useThree();
  const CELL_SIZE = 200 / 40;

	const forwardPressed = useKeyboardControls<Controls>(state => state.forward)
	const backPressed = useKeyboardControls<Controls>(state => state.back)
	const leftPressed = useKeyboardControls<Controls>(state => state.left)
	const rightPressed = useKeyboardControls<Controls>(state => state.right)

	useEffect(()=> {
		if (forwardPressed) object3D.current.translateZ(-CELL_SIZE)
		if (backPressed) object3D.current.translateZ(CELL_SIZE)
		if (leftPressed) object3D.current.translateX(-CELL_SIZE)
		if (rightPressed) object3D.current.translateX(CELL_SIZE)
		// const terrainHeight = getTerrainHeight(object3D.current.position.x, object3D.current.position.z);
    // 	object3D.current.position.y = terrainHeight;
	}, [forwardPressed, backPressed, leftPressed, rightPressed])

  useEffect(() => {
		object3D.current.center.set(0.5, 0);
		object3D.current.scale.set(1.5 * CELL_SIZE, 1.5 * CELL_SIZE, 1);
		object3D.current.position.set(CELL_SIZE/2, 0, - CELL_SIZE/2 + CELL_SIZE * 3);
    scene.add(object3D.current);

    return () => {
      if (object3D.current.material) object3D.current.material.dispose();
      texture.dispose();
      scene.remove(object3D.current);
    };
  }, [CELL_SIZE, scene, texture]);

  return null;
};

export { Player };