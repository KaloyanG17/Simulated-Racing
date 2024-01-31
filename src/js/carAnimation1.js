import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Setup
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// set background as clear color

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

camera.position.set(0, 3, 10); // Adjust the position to a higher point
camera.lookAt(scene.position);

// Setup lights
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 10);
directionalLight.position.set(0, 1, 10);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 10);
directionalLight2.position.set(0, 1, -10);
scene.add(directionalLight2);

renderer.render(scene, camera);

// // Load the car model
const loader = new GLTFLoader();
let carModel;

loader.load('./assets/carMerc.glb', (gltf) => {
  carModel = gltf.scene;
  scene.add(carModel);

  carModel.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.material.roughness = 0.5;
    }
  });
  carModel.castShadow = true;

  // Adjust the car position, scale, or rotation if needed
  carModel.position.set(-4, 0, -3.5);
  carModel.scale.set(1, 1, 1);
  carModel.rotation.set(0, 1, 0);
});

// // Load the car model
const loader2 = new GLTFLoader();
let carModel2;

loader2.load('./assets/carRB.glb', (gltf) => {
  carModel2 = gltf.scene;
  scene.add(carModel2);

  carModel2.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.material.roughness = 0.5;
    }
  });
  carModel2.castShadow = true;

  // Adjust the car position, scale, or rotation if needed
  carModel2.position.set(3, 0, -3);
  carModel2.scale.set(0.02, 0.02, 0.02);
  carModel2.rotation.set(0, 18, 0);
});



// Scroll Animation
function moveCamera() {
   const t = document.body.getBoundingClientRect().top;
   camera.position.z = t * -1 + 5; // Adjust the distance from the car
   camera.position.x = t * -2;
   camera.rotation.y = t * -0.002; // Adjust the rotation speed
 }

document.body.onscroll = moveCamera;
moveCamera();

// Load Track
const loader1 = new GLTFLoader();
loader1.load(`./assets/track2.glb`, function (gltf) {
  const model = gltf.scene;
  model.position.set(0, -4, 202);
  model.receiveShadow = true;
  scene.add(model);
});


// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
