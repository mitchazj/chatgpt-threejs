// create a scene using the THREE.Scene class
var scene = new THREE.Scene();

// create a camera using the THREE.PerspectiveCamera class
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create a renderer using the THREE.WebGLRenderer class
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a pyramid-shaped geometry using the THREE.CylinderGeometry class
var geometry = new THREE.CylinderGeometry(0, 1, 1, 4, 1, true);

// create a material for the pyramid using the THREE.MeshBasicMaterial class
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// create a mesh for the pyramid using the THREE.Mesh class and the geometry and material created above
var pyramid = new THREE.Mesh(geometry, material);

// create a parent object for the pyramid mesh using the THREE.Object3D class
var parent = new THREE.Object3D();

// add the pyramid mesh as a child of the parent object
parent.add(pyramid);

// add the parent object to the scene
scene.add(parent);

// position the camera so that it points towards the pyramid
camera.position.z = 5;

// create a loop that updates the scene and rotates the pyramid
function animate() {
  requestAnimationFrame(animate);
  
  // rotate the pyramid by a small amount on each frame
  pyramid.rotation.x += 0.01;
  pyramid.rotation.y += 0.01;
  
  // update the scene
  renderer.render(scene, camera);
}

// start the animation loop
animate();
