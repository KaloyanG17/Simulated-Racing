import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// Setup
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// set background as clear color
scene.background = new THREE.Color('darkGrey');
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 3, 7); // Adjust the position to a higher point
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

// loader.load('./assets/carRB.glb', (gltf) => {
//   carModel = gltf.scene;
//   scene.add(carModel);

//   carModel.traverse(function (child) {
//    if (child.isMesh) {
//       child.castShadow = true;
//       child.material.metalness = 1;
//       child.material.roughness = 0.2;
//    }});

//   // Adjust the car position, scale, or rotation if needed

//   carModel.position.set(-2.5, 0.5, -5);
//   carModel.scale.set(0.02, 0.02, 0.02);
//   carModel.rotation.set(0, 219, 0);
// });

const loader2 = new GLTFLoader();
let carModel2;

loader2.load('./assets/garage.glb', (gltf) => {
  carModel2 = gltf.scene;
  scene.add(carModel2);

  const mixer = new THREE.AnimationMixer(carModel2);

  // Assuming there is only one animation clip, you can access it like this
  const animationClip = gltf.animations[0];

  // Create an AnimationAction
  const action = mixer.clipAction(animationClip);

  // Play the animation
  action.play();

  // Store the mixer and action for later updates
  carModel2.mixer = mixer;
  carModel2.animationAction = action;

  carModel2.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.material.roughness = 0.5;
    }
  });

  // Adjust the car position, scale, or rotation if needed
  carModel2.position.set(0, 0, -10);
  carModel2.scale.set(0.1, 0.1, 0.1);
  carModel2.rotation.set(0, 282, 0);
});



//Load obj file

// const loader1 = new OBJLoader()
// const mtlLoader = new MTLLoader();
// let carModel1;

// const onProgress = function ( xhr ) {

//   if ( xhr.lengthComputable ) {

//     const percentComplete = xhr.loaded / xhr.total * 100;
//     console.log( percentComplete.toFixed( 2 ) + '% downloaded' );

//   }

// };

// mtlLoader.load('./assets/Formula_1_mesh.mtl', (materials) => {
//   materials.preload();
//   materials.side = THREE.DoubleSide;

//   console.log(materials);

//   new OBJLoader().setMaterials(materials).setPath('./assets/').load('Formula_1_mesh.obj', (obj) => {
//     carModel1 = obj;


//     // Adjust the car position, scale, or rotation if needed
//     carModel1.position.set(-3, 0.5, -5);
//     carModel1.scale.set(0.01, 0.01, 0.01);
//     carModel1.rotation.set(0, 180, 0);
//     scene.add(carModel1);
//   },onProgress);
// });


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

  // if (carModel) {
  //   // Rotate the car model
  //   carModel.rotation.y += 0.005;
  // }

  // if (carModel2) {
  //   // Rotate the car model
  //   carModel2.rotation.y += -0.005;
  // }

  if (carModel2 && carModel2.mixer) {
    carModel2.mixer.update(0.016); // Pass the time delta
  }

  renderer.render(scene, camera);
}

animate();
