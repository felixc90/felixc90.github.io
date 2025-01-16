import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SpriteProps {
	textureImageURL: string
	numberOfFrames: number,
	numberOfAnimations: number,
	animationName: string,
	animationNames: Map<string, number>
	fps: number
	pause?: boolean
}

// TODO: refactor
// generalize 
// create types

export const Sprite = ({ 
	textureImageURL, 
	numberOfFrames, 
	numberOfAnimations,
	animationName,
	animationNames,
	fps,
	pause
}: SpriteProps ) => {
	const t = useRef(0);
  const currentFrame = useRef<number>(0);
	const currentAnimation = useRef<number>(animationNames.get(animationName) ?? 0);
	
	const texture = useLoader(THREE.TextureLoader, textureImageURL);
	texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter

	texture.offset.x = (numberOfFrames - 1 - currentFrame.current) / numberOfFrames;
	texture.offset.y = (numberOfAnimations - 1 - currentAnimation.current) / numberOfAnimations;
	
	texture.repeat.set(1 / numberOfFrames, 1 / numberOfAnimations)


	useEffect(() => {
    const animationIndex = animationNames.get(animationName) ?? 0;
    currentAnimation.current = animationIndex;
    texture.offset.y = (numberOfAnimations - 1 - animationIndex) / numberOfAnimations;
  }, [animationName, animationNames, numberOfAnimations, texture]);


	useFrame((_, delta) => {
		if (pause) {
			texture.offset.x = 0;
			return;
		}

		t.current += delta * 1000;
		if (t.current >= (1000 / fps)) {
			currentFrame.current += 1;
	
			if (currentFrame.current >= numberOfFrames) {
				currentFrame.current = 0;
			}
	
			t.current = 0;

			texture.offset.x = (numberOfFrames - 1 - currentFrame.current) / numberOfFrames;
			texture.offset.y = (numberOfAnimations - 1 - currentAnimation.current) / numberOfAnimations;

		}
		
		return { t, currentFrame }
	})

	// TODO
	if (!texture) return <></>;

	return (
		<sprite>
      <spriteMaterial transparent map={texture} />
    </sprite>
	)
}