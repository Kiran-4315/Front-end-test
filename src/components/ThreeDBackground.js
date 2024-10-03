// src/components/ThreeDBackground.js
import { useEffect } from 'react'; // Only import what you need
import * as THREE from 'three';

const ThreeDBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5; // Move the camera back

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01; // Rotate the cube
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement); // Cleanup on component unmount
    };
  }, []);

  return null; // No need to render anything from this component
};

export default ThreeDBackground;
