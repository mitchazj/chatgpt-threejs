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

// create a material for the pyramid using the THREE.MeshLambertMaterial class
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

// create a mesh for the pyramid using the THREE.Mesh class and the geometry and material created above
var pyramid = new THREE.Mesh(geometry, material);

// position the pyramid in front of the camera, with a positive z-coordinate
pyramid.position.z = 1;

// create a parent object for the pyramid mesh using the THREE.Object3D class
var parent = new THREE.Object3D();

// add the pyramid mesh as a child of the parent object
parent.add(pyramid);

// add the parent object to the scene
scene.add(parent);

// create a point light using the THREE.PointLight class
var pointLight = new THREE.PointLight(0xffffff, 1, 100);

// position the point light so that it illuminates the pyramid
pointLight.position.set(1, 1, 1);

// add the point light to the scene
scene.add(pointLight);

// create a directional light using the THREE.DirectionalLight class
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);

// position the directional light so that it illuminates the pyramid
directionalLight.position.set(-1, -1, -1);

// add the directional light to the scene
scene.add(directionalLight);

// create an ambient light using the THREE.AmbientLight class
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

// add the ambient light to the scene
scene.add(ambientLight);

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
