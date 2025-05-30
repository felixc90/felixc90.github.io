import { shaderMaterial } from "@react-three/drei";
import ghibliFragmentShader from './shaders/ghibli.frag';
import ghibliVertexShader from './shaders/ghibli.vert';
import * as THREE from 'three';
import { extend } from "@react-three/fiber";


const GhibliShaderMaterial = shaderMaterial(
  {
    colorMap: [
        new THREE.Color("#427062"),
        new THREE.Color("#33594E"),
        new THREE.Color("#234549"),
        new THREE.Color("#1E363F"),
    ],

    brightnessThresholds: [
			0.9, 0.45, 0.001
		],
    lightPosition: new THREE.Vector3(5, 5, 5),
  },
	ghibliVertexShader,
  ghibliFragmentShader
)

extend({ GhibliShaderMaterial })

export default GhibliShaderMaterial;