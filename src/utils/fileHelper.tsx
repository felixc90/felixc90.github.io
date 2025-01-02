import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const ModelToPNG = () => {
  const [downloadUrl, setDownloadUrl] = useState('');
  const canvasRef = useRef(null);
  const gltf = useLoader(GLTFLoader, '/assets/Cafe.glb'); // Replace with your GLTF file

  const convertToPNG = () => {
    // Set up a WebGLRenderer to render the model to a canvas
    const canvas = canvasRef.current;
    const width = 800; // Set canvas width
    const height = 600; // Set canvas height
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(width, height);

    // Set up the scene, camera, and light
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    scene.add(gltf.scene);

    // Set up some lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Render the scene to the canvas
    renderer.render(scene, camera);

    // Convert the canvas to a PNG data URL
    const pngUrl = canvas.toDataURL('image/png');
    
    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'model.png'; // Set the name for the downloaded file
    link.click(); // Automatically download the file
  };

  return (
    <div>
      <button onClick={convertToPNG}>Convert to PNG</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default ModelToPNG;
