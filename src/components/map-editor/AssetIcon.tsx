import { useEffect, useRef } from 'react';
import { unmountComponentAtNode, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import useAssetsStore from '../../store/useAssetsStore';
import { Asset } from '../../types';

interface ModelIconProps {
  url: string;
	asset: Asset;
}

const ModelIcon = ({ url, asset }: ModelIconProps) => {
	const { updateAsset } = useAssetsStore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gltf = useLoader(GLTFLoader, url); // Load model dynamically

	useEffect(() => {
		if (asset.imageDataUrl && canvasRef && canvasRef.current) {
			const canvas = canvasRef.current
    	if (canvas) return () => unmountComponentAtNode(canvas);
		}
	}, [asset.imageDataUrl])

  useEffect(() => {
    const convertToPNG = () => {
      if (!gltf.scene || !canvasRef.current) return; // Ensure the canvas is available
      const canvas = canvasRef.current;
      const width = 256; // Thumbnail size
      const height = 256;
      const renderer = new THREE.WebGLRenderer( {canvas, alpha: true } );
			renderer.setClearColor( 0x000000, 0 ); // the default


      renderer.setSize(width, height);
			renderer.shadowMap.enabled = true;

      // Calculate the bounding box of the model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3()); // Get the center of the bounding box
      const size = box.getSize(new THREE.Vector3()); // Get the size of the bounding box

      // Set up the scene, camera, and light
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera();

      // Position the camera directly above the object for a top-down view
      const cameraHeight = Math.max(size.x, size.y, size.z); // Make sure the camera is far enough to view the whole object
      camera.position.set(center.x, cameraHeight, cameraHeight); // Position above the center of the model
      camera.lookAt(center); // Point the camera directly at the center of the bounding box
			camera.zoom = 0.5;

			camera.updateProjectionMatrix();
      scene.add(gltf.scene);

      // Add ambient light
      const light = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(light);

			// Add a point light that follows the center position
			const dirLight = new THREE.DirectionalLight();
			dirLight.castShadow = true;
			dirLight.shadow.intensity = 1;
			scene.add(dirLight);

      // Render the scene to the canvas
      renderer.render(scene, camera);

      // Convert the canvas to a PNG data URL
      const pngUrl = canvas.toDataURL('image/png');
      updateAsset(asset.id, { imageDataUrl: pngUrl });
    };

    if (gltf) {
      // Wait until the GLTF model is loaded, then convert to PNG
      convertToPNG();
    }
  }, [gltf, asset.id, updateAsset]);

  return (
    <>
      {/* Render the canvas element (it won't be visible, as we're using it only for generating the thumbnail) */}
      {!asset.imageDataUrl && <canvas ref={canvasRef} style={{ display: 'none' }} />}
      {asset.imageDataUrl && <img src={asset.imageDataUrl} style={{ width: '80px', height: '80px' }} alt="Model Preview" />}
    </>
  );
};

export default ModelIcon;
