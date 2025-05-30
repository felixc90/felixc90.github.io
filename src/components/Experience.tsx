import { Html, OrbitControls, Scroll, ScrollControls, shaderMaterial, useHelper } from "@react-three/drei";
import { University } from "../models";
import { useControls } from "leva";
import { extend, useFrame } from "@react-three/fiber";
import { LightRail } from "../models";
import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import { EffectComposer, Glitch, Outline, Pixelation, ToneMapping, Vignette } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode, OutlineEffect, PixelationEffect, ToneMappingMode } from "postprocessing";
import { DirectionalLight, PointLight, PointLightHelper } from "three";
import * as THREE from 'three';
import { ToonShaderHatching } from "three/examples/jsm/Addons.js";
import toonVertexShader from './shaders/toon.vert'
import toonFragmentShader from './shaders/toon.frag'
import { GhibliShader } from "./GhibliShader";

export default function Experience()
{
	const dirLight = useRef<DirectionalLight>(null);
	const ambientLightRef = useRef<THREE.AmbientLight>(null);
	const boxRef = useRef<THREE.Mesh>(null);

	const materialRef = useRef<THREE.Material>(null);

	return (
		<>
			{/* <OrbitControls /> */}
			{/* {boxRef.current && 
			<EffectComposer multisampling={8} autoClear={false}>
          <Outline blur visibleEdgeColor={100} edgeStrength={100} width={1000} selection={[boxRef.current]}/>
        </EffectComposer>} */}
			<LightRail />
			<University rotation={[0, Math.PI/2, 0]} />
			<ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[5, 15, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
			{/* <mesh castShadow
        receiveShadow
				position={[0.33, -0.05, -0.68]}>
				<sphereGeometry />
				<shaderMaterial
          attach="material"
          {...GhibliShader}
        />
			</mesh> */}


			
		</>
	)
}

