import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / (window.innerHeight), 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// set background as clear color
scene.background = new THREE.Color('darkGrey');
camera.position.setZ(10);
camera.position.setX(-10);
camera.position.setY(1);

renderer.render(scene, camera);

// // Load the car model
const loader = new GLTFLoader();
let carModel;

loader.load('./assets/car.glb', (gltf) => {
  carModel = gltf.scene;
  scene.add(carModel);

  carModel.traverse(function (child) {
   if (child.isMesh) {
      child.castShadow = true;
      child.material.metalness = 1;
      child.material.roughness = 0.2;
   }});

  // Adjust the car position, scale, or rotation if needed
  carModel.position.set(3, 0.5, -7);
  carModel.scale.set(1, 1, 1);
  carModel.rotation.set(0, 180, 0);
});



//Load obj file

// const loader1 = new OBJLoader()
const mtlLoader = new MTLLoader();
let carModel1;

const onProgress = function ( xhr ) {

  if ( xhr.lengthComputable ) {

    const percentComplete = xhr.loaded / xhr.total * 100;
    console.log( percentComplete.toFixed( 2 ) + '% downloaded' );

  }

};

mtlLoader.load('./assets/Formula_1_mesh.mtl', (materials) => {
  materials.preload();
  materials.side = THREE.DoubleSide;

  console.log(materials);

  new OBJLoader().setMaterials(materials).setPath('./assets/').load('Formula_1_mesh.obj', (obj) => {
    carModel1 = obj;


    // Adjust the car position, scale, or rotation if needed
    carModel1.position.set(-3, 0.5, -7);
    carModel1.scale.set(0.01, 0.01, 0.01);
    carModel1.rotation.set(0, 180, 0);
    scene.add(carModel1);
  },onProgress);
});



// Lights
const pointLight = new THREE.PointLight('white');
pointLight.position.set(0,1,0);

const ambientLight = new THREE.AmbientLight('blue');

scene.add(pointLight);

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
    carModel.rotation.y += 0.005;
  }

  if (carModel1) {
    // Rotate the car model
    carModel1.rotation.y += -0.005;
  }

  renderer.render(scene, camera);
}

animate();
