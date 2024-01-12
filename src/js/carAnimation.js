import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// set background as clear color
scene.background = new THREE.Color('#f4f4f4');
camera.position.setZ(-1);
camera.position.setX(-100);
camera.position.setY(1);

renderer.render(scene, camera);

// Load the car model
const loader = new GLTFLoader();
let carModel;

loader.load('./assets/car.glb', (gltf) => {
  carModel = gltf.scene;
  scene.add(carModel);

  carModel.traverse(function (child) {
   console.log(child);
   if (child.isMesh) {
      child.castShadow = true;
      child.material.metalness = 1;
      child.material.roughness = 0.2;
   }});

  // Adjust the car position, scale, or rotation if needed
  carModel.position.set(0, 0.8, -5);
  carModel.scale.set(1, 1, 1);
  carModel.rotation.set(0, 180, 0);
});

// Lights
const pointLight = new THREE.PointLight('white');
pointLight.position.set(0,0,0);

const ambientLight = new THREE.AmbientLight('red');

scene.add(pointLight, ambientLight);

// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -1;
  camera.position.x = t * -2;
  camera.rotation.y = t * -2;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  if (carModel) {
    // Rotate the car model
    carModel.rotation.y += -0.005;
  }

  renderer.render(scene, camera);
}

animate();
