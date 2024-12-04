import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Position the camera (e.g., 30 degrees downward tilt)
const distance = 400; // Distance from the target
const tiltAngle = THREE.MathUtils.degToRad(60); // Convert degrees to radians
camera.position.set(
  0,
  distance * Math.sin(tiltAngle),
  distance
);

camera.lookAt(new THREE.Vector3(0, 0, 0));


const map = new THREE.TextureLoader().load( '/pl_boy01c.17.png' );
const material = new THREE.SpriteMaterial( { map: map } );

const sprite = new THREE.Sprite( material );
camera.lookAt(sprite.position);
sprite.position.set(0,100,100);
sprite.scale.set(30,30,30)

const loader = new GLTFLoader();
loader.load( '/Plat_full_00_02.glb', function ( gltf ) {
	console.log(gltf)
	scene.add( sprite );
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

