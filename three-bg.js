// === FONDO 3D LATAMGAMERS (estrellas + autos) ===
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js";

// Configuración base
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg3D"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 6;

// === ESTRELLAS ===
const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  starPositions[i] = (Math.random() - 0.5) * 60;
}
starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xb200ff, size: 0.08, transparent: true, opacity: 0.9 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// === AUTOS ===
const loader = new GLTFLoader();
let cars = [];
const carUrls = [
  "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Car/glTF/Car.gltf", // modelo público
];

carUrls.forEach((url, i) => {
  loader.load(url, (gltf) => {
    const car = gltf.scene;
    car.scale.set(0.4, 0.4, 0.4);
    car.position.set(Math.random() * 8 - 4, Math.random() * 2 - 1, Math.random() * -5);
    car.rotation.y = Math.random() * Math.PI * 2;
    scene.add(car);
    cars.push(car);
  });
});

// === ANIMACIÓN ===
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) - 0.5;
  mouseY = (event.clientY / window.innerHeight) - 0.5;
});

function animate() {
  requestAnimationFrame(animate);

  // Movimiento suave según mouse
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
  camera.lookAt(0, 0, 0);

  stars.rotation.y += 0.0008;
  stars.rotation.x += 0.0003;

  cars.forEach((car, i) => {
    car.rotation.y += 0.002;
  });

  renderer.render(scene, camera);
}
animate();

// === AJUSTE DE TAMAÑO ===
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});