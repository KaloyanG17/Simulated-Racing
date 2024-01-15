// Imports
import * as THREE from 'three';
import * as YUKA from 'yuka';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup scene
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
renderer.setClearColor(0x000000);
scene.background = new THREE.Color('darkGreen');

// Setup camera
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);



camera.position.set(100, 330, 120);
camera.lookAt(scene.position);

// Setup lights
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Load the GLTF model
const loader = new GLTFLoader();
loader.load('./assets/track2.glb', function (gltf) {
  const model = gltf.scene;   
  scene.add(model);

  model.traverse(function (child) {
    console.log(child.name);
    if (child.name && child.name.startsWith('prop_cone')) {
      child.visible = false;
    }
    if (child.name && child.name.startsWith('plastic_barrier')) {
      child.visible = false;
    }
  });
});

// Vehicle setup
const entityManager = new YUKA.EntityManager();

const vehicle1 = createYukaCar({ maxSpeed: 40, minSpeed: 10, team: 'red', startPos: 1 });
entityManager.add(vehicle1);

const vehicle2 = createYukaCar({ maxSpeed: 39, minSpeed: 10, team: 'blue', startPos: 2 });
entityManager.add(vehicle2);

const vehicle3 = createYukaCar({ maxSpeed: 39, minSpeed: 10, team: 'red', startPos: 3 });
entityManager.add(vehicle3);

const vehicle4 = createYukaCar({ maxSpeed: 40, minSpeed: 10, team: 'white', startPos: 4 });
entityManager.add(vehicle4);

const vehicle5 = createYukaCar({ maxSpeed: 40, minSpeed: 10, team: 'black', startPos: 5 });
entityManager.add(vehicle5);

const vehicle6 = createYukaCar({ maxSpeed: 40, minSpeed: 10, team: 'blue', startPos: 6 });
entityManager.add(vehicle6);

const vehicle7 = createYukaCar({ maxSpeed: 40, minSpeed: 10, team: 'white', startPos: 7 });
entityManager.add(vehicle7);

const vehicle8 = createYukaCar({ maxSpeed: 40.3, minSpeed: 10, team: 'black', startPos: 8 });
entityManager.add(vehicle8);

const vehicle9 = createYukaCar({ maxSpeed: 40.2, minSpeed: 5, team: 'green', startPos: 9 });
entityManager.add(vehicle9);

const vehicle10 = createYukaCar({ maxSpeed: 40.5, minSpeed: 5, team: 'green', startPos: 10 });
entityManager.add(vehicle10);

// const vehicles = [vehicle1]
const vehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5, vehicle6, vehicle7, vehicle8, vehicle9, vehicle10]; // Add more vehicles if needed // Add more vehicles if needed
const time = new YUKA.Time();

// Sync the YUKA vehicle with the Three.js model
function sync(entity, renderComponent) {
  renderComponent.matrix.copy(entity.worldMatrix);
}

// Getters
const leaderboardElement = document.getElementById('leaderboard');
const zoomOutButton = document.getElementById('zoom-out-btn');
const zoomInButton = document.getElementById('zoom-in-btn');

// Setters
let raceStartTime = Date.now();
let zoom = true;
const obsticles = entityManager.entities;

// Animate the scene 
function animate() {
  const delta = time.update().getDelta();
  entityManager.update(delta);

  // Sort the vehicles by lap time 
  const sortedVehicles = vehicles.slice().sort((a, b) => {
    return a.bestLapTime - b.bestLapTime;
});

  // Zoom in and out
  zoomOutButton.addEventListener('click', () => {
    zoom = false;
  });
  
  zoomInButton.addEventListener('click', () => {
    zoom = true;
  });

  if (zoom) {
    camera.position.copy(sortedVehicles[0].position).add(new THREE.Vector3(5, 25, 10));
  } else {
    camera.position.copy(sortedVehicles[0].position).add(new THREE.Vector3(75, 100, 50));
  }

  for (const vehicle of vehicles) {
    // Add each vehicle as an obstacle for each other vehicle
    const obstacleAvoidanceBehavior = new YUKA.ObstacleAvoidanceBehavior(obsticles);
    obstacleAvoidanceBehavior.dBoxMinLength = 2.5;
    obstacleAvoidanceBehavior.brakingWeight = 0.2;
    vehicle.steering.add(obstacleAvoidanceBehavior);

    // FORWARD FACING TO USE LATER FOR SLIPSTREAM
    // const forward = vehicle1.forward.clone().multiplyScalar(1)

    // Check if the vehicle crossed the finish line
    if (vehicle.path._index === 0 && !vehicle.crossedFinishLine) {
      // Calculate the lap time
      const lapTime = (Date.now() - vehicle.currentLapStartTime) / 1000;

      // Update bestLapTime if the current lap time is better
      if (lapTime < vehicle.bestLapTime || vehicle.bestLapTime === 0 && vehicle.lapNumber > 0) {
        vehicle.bestLapTime = lapTime;
      }

      // Update lap information
      vehicle.lapNumber++;
      vehicle.currentLapStartTime = Date.now();

      // Mark the vehicle as crossed the finish line in the current lap
      vehicle.crossedFinishLine = true;
    }

    // Reset the flag when the vehicle moves away from the finish line
    if (vehicle.path._index !== 0) {
      vehicle.crossedFinishLine = false;
    }
  }

  // Display race positions along with car information
  leaderboardElement.innerHTML = `
  <h2>Qualifying Time: ${raceTimer()} s</h2>
  <ul>
    ${sortedVehicles.map((vehicle, index) => `
      <li>
        Position ${index + 1} | 
        Lap ${vehicle.lapNumber} <br>
        ${(vehicle.velocity.length()).toFixed(0)} km/h | Constructer: ${(vehicle.constructor)} <br>
        Best Lap: ${vehicle.bestLapTime.toFixed(2)} s
      </li>
      <hr>
    `).join('')}
  </ul>
`;

  renderer.render(scene, camera);
}


function createYukaCar({ maxSpeed, minSpeed, team, startPos }) {
  // Setup track path
  const path = new YUKA.Path();
  path.add(new YUKA.Vector3(10, 0, -27));
  path.add(new YUKA.Vector3(125, 0, -27));
  path.add(new YUKA.Vector3(175, 1, -32));
  path.add(new YUKA.Vector3(230, 2, -55));
  path.add(new YUKA.Vector3(267, 2, -100));
  path.add(new YUKA.Vector3(282, 3, -160));
  path.add(new YUKA.Vector3(275, 3, -197));
  path.add(new YUKA.Vector3(250, 3, -247));
  path.add(new YUKA.Vector3(198, 2, -282));
  path.add(new YUKA.Vector3(150, 1, -292));
  path.add(new YUKA.Vector3(118, 0, -282));
  path.add(new YUKA.Vector3(90, 1, -263));
  path.add(new YUKA.Vector3(60, 0, -252));
  path.add(new YUKA.Vector3(-120, 0, -252));
  path.add(new YUKA.Vector3(-140, 0, -235));
  path.add(new YUKA.Vector3(-140, 0, -185));
  path.add(new YUKA.Vector3(-132, -2, -165));
  path.add(new YUKA.Vector3(-103, -5, -140));
  path.add(new YUKA.Vector3(-80, -4, -135));
  path.add(new YUKA.Vector3(-65, -2, -145));
  path.add(new YUKA.Vector3(-55, 1, -170));
  path.add(new YUKA.Vector3(-45, 4, -195));
  path.add(new YUKA.Vector3(-20, 4, -205));
  path.add(new YUKA.Vector3(20, 4, -207));
  path.add(new YUKA.Vector3(80, 2, -207));
  path.add(new YUKA.Vector3(100, 1, -218));
  path.add(new YUKA.Vector3(115, 1, -230));
  path.add(new YUKA.Vector3(130, 0, -242));
  path.add(new YUKA.Vector3(170, 1, -240));
  path.add(new YUKA.Vector3(185, 0, -220));
  path.add(new YUKA.Vector3(185, 1, -190));
  path.add(new YUKA.Vector3(147, 1, -100));
  path.add(new YUKA.Vector3(120, 1, -72));
  path.add(new YUKA.Vector3(90, 1, -65));
  path.add(new YUKA.Vector3(-15, 1, -97));
  path.add(new YUKA.Vector3(-50, 1, -95));
  path.add(new YUKA.Vector3(-70, 1, -85));
  path.add(new YUKA.Vector3(-120, 0, -55));
  path.add(new YUKA.Vector3(-135, 0, -40));
  path.add(new YUKA.Vector3(-115, 0, -27));
  path.loop = true;

  // Setup vehicle
  const vehicle = new YUKA.Vehicle();
  vehicle.position.copy(path.current());
  vehicle.maxSpeed = maxSpeed;
  vehicle.minSpeed = minSpeed;
  vehicle.boundingRadius = 0.8;
  vehicle.constructor = team;


  // Add a property to keep track of the start time of the current lap
  vehicle.currentLapStartTime = Date.now();
  vehicle.lapNumber = 0;
  vehicle.bestLapTime = 0;

  // Store the path in the vehicle
  vehicle.path = path;

  // THINGS TO CHANGE
  // vehicle.mass = 1.1; 
  // vehicle.maxTurnRate = 1; ???
  // vehicle.maxForce = 100; How much car can turn and accelerate 


  // Set vehicle start position (if odd start on left, if even start on right)
  if (startPos % 2 === 0) {
    vehicle.position.add(new YUKA.Vector3(-startPos*6 , 0, 3));
  } else {  
    vehicle.position.add(new YUKA.Vector3(-startPos*6 , 0, -3));
  }

  // Setup vehicle steering
  const followPathBehavior = new YUKA.FollowPathBehavior(path, 4);
  vehicle.steering.add(followPathBehavior);

  const onPathBehavior = new YUKA.OnPathBehavior(path); // can change radius and predictor factor dont know how they work yet 0.1 and 1 are default
  vehicle.steering.add(onPathBehavior);

  // Create visual markers for each path point
  const markerGeometry = new THREE.SphereGeometry(0.5, 16, 16);
  const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  for (const point of path._waypoints) {
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(point);
    scene.add(marker);
  }
  

  // Setup vehicle render component
  const loader1 = new GLTFLoader();
  loader1.load('./assets/car.glb', function (glb) {
    const model = glb.scene;
    model.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = new THREE.MeshStandardMaterial({ color: team });
      }
    });

    scene.add(model);
    model.matrixAutoUpdate = false;
    vehicle.rotateTo(path.current(), true);
    vehicle.scale = new YUKA.Vector3(1, 1, 1);
    vehicle.setRenderComponent(model, sync);
  });

  return vehicle;
}

function lapTimer() {
  return (Date.now() - lapStartTime) / 1000;
}

function raceTimer() {
  return ((Date.now() - raceStartTime) / 1000);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
