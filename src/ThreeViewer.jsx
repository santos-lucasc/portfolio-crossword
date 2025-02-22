import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeViewer({ 
  modelPaths = [
    '/portfolio-crossword/lcs_wire.glb',
    '/portfolio-crossword/lcs_green.glb',
    '/portfolio-crossword/lcs_chrome.glb'
  ]
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    const loadedModels = [];
    modelPaths.forEach((modelUrl, index) => {
      loader.load(
        modelUrl,
        (gltf) => {
          const model = gltf.scene;
          model.position.x = (index - 1) * 3;
          scene.add(model);
          loadedModels.push(model);
        },
        undefined,
        (error) => {
          console.error('Error loading model: ', modelUrl, error);
        }
      );
    });

    let reqId;
    const animate = function () {
      reqId = requestAnimationFrame(animate);
      loadedModels.forEach((model) => {
        if (model) {
          model.rotation.y += 0.01;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Force the WebGL context to be lost so it fully cleans up.
      if (renderer.forceContextLoss) {
        renderer.forceContextLoss();
      }
    };
  }, [modelPaths]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeViewer;