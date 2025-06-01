import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef, useMemo, useState } from "react";
import { MeshSurfaceSampler } from "three/examples/jsm/Addons.js";
import { GrassMaterial } from "./GrassMaterial";
import { useFrame } from "@react-three/fiber";

const GRASS_COUNT = 10000;

interface GrassMeshProps {
	surfaceMesh: THREE.Mesh;
}

const GrassMesh = ({ surfaceMesh }: GrassMeshProps) => {
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);

  const perlinNoise = useTexture("/perlinnoise.webp");
  const grassTexture = useTexture("/grass.jpeg");

  const grassGeometry = useMemo(() => new THREE.PlaneGeometry(0.1, 0.5), []);

	const { grassMaterial, uniforms } = useMemo(() => {
		const u = { uTime: { value: 0 } };

		const mat = new GrassMaterial();
		mat.setupTextures(grassTexture, perlinNoise);
		mat.material.side = THREE.DoubleSide;
		mat.material.transparent = true;

		return {
			grassMaterial: mat,
			uniforms: u
		};
	}, [grassTexture, perlinNoise]);

  // Store generated matrices
  const [matrices, setMatrices] = useState([]);

  // On mount, sample points and generate instance matrices
  useEffect(() => {
    const sampler = new MeshSurfaceSampler(surfaceMesh).build();

    const tempPosition = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const yAxis = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    const randomQuat = new THREE.Quaternion();
    const matrix = new THREE.Matrix4();
    const scale = new THREE.Vector3(1, 1, 1);

    const newMatrices = [];

    for (let i = 0; i < GRASS_COUNT; i++) {
      sampler.sample(tempPosition, normal);
      quaternion.setFromUnitVectors(yAxis, normal);
      randomQuat.setFromEuler(new THREE.Euler(0, Math.random() * Math.PI * 2, 0));
      quaternion.multiply(randomQuat);
      matrix.compose(tempPosition, quaternion, scale);
      newMatrices.push(matrix.clone());
    }

    setMatrices(newMatrices);
  }, [surfaceMesh]);

	useFrame((state) => {
		uniforms.uTime.value += state.clock.getDelta();
		grassMaterial.update(uniforms.uTime.value);
	})

  // Apply matrices to instanced mesh
  useEffect(() => {
    if (!instancedMeshRef || !instancedMeshRef.current || matrices.length === 0) return;
    matrices.forEach((mat, i) => {
      instancedMeshRef.current?.setMatrixAt(i, mat);
    });
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [matrices, instancedMeshRef]);

  return (
    <>
      {/* Instanced grass */}
      <instancedMesh
        ref={instancedMeshRef}
        args={[grassGeometry, grassMaterial.material, GRASS_COUNT]}
        receiveShadow
        castShadow
      />
    </>
  );
};

export default GrassMesh;
