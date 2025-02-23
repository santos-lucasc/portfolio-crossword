// ThreeViewer.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { rotate } from 'three/tsl';

// Model configuration with individual properties and animation settings
const modelConfigs = [
  {
    path: '/portfolio-crossword/lcs_wire.glb',
    wireframe: true,
    position: { x: -7, y: 0, z: 0 },
    // First model moves opposite to mouse with high sensitivity
    animationModifier: {
      rotationFactor: -0.08,
      mouseFactor: -1.5,
      autoRotation: 0.002,
      phase: 0 // For out-of-phase animations
    }
  },
  {
    path: '/portfolio-crossword/lcs_chrome.glb',
    wireframe: false,
    position: { x: 0, y: 0, z: 3 },
    rotation: { x: Math.PI , y: Math.PI , z: 0 },
    // Third model moves perpendicular to mouse with low sensitivity
    animationModifier: {
      rotationFactor: 0.03,
      mouseFactor: -0.75,
      autoRotation: 0.003,
      phase: Math.PI // 180 degrees out of phase
    }
  },
  {
    path: '/portfolio-crossword/lcs_green.glb',
    wireframe: false,
    position: { x: 5, y: 0, z: 0 },
    rotation: { x: Math.PI / 2, y: Math.PI / 2, z: 0 },
    // Second model follows mouse with medium sensitivity
    animationModifier: {
      rotationFactor: 0.5,
      mouseFactor: 1,
      autoRotation: -0.001,
      phase: Math.PI / 2 // 90 degrees out of phase
    }
  }

];

function ThreeViewer() {
  const mountRef = useRef(null);
  const loadedModels = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotations = useRef(modelConfigs.map(() => ({ x: 0, y: 0, z: 0 })));
  const currentRotations = useRef(modelConfigs.map(() => ({ x: 0, y: 0, z: 0 })));
  const time = useRef(0);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const rightLight = new THREE.PointLight(0xffff00, 1, 1800);
    rightLight.position.set(10, 10, 20);
    scene.add(rightLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 1100);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1010);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Mouse movement handler
    const handleMouseMove = (event) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Load models
    const loader = new GLTFLoader();
    modelConfigs.forEach((config, index) => {
      loader.load(
        config.path,
        (gltf) => {
          const model = gltf.scene;
          
          // Apply position from config
          model.position.set(
            config.position.x,
            config.position.y,
            config.position.z
          );

          // Apply wireframe if specified
          if (config.wireframe) {
            model.traverse((child) => {
              if (child.isMesh) {
                const wireframeMaterial = new THREE.MeshBasicMaterial({
                  wireframe: true,
                  color: 0x00ff00
                });
                child.material = wireframeMaterial;
              }
            });
          }

          scene.add(model);
          loadedModels.current[index] = model;
        },
        undefined,
        (error) => {
          console.error('Error loading model:', config.path, error);
        }
      );
    });

    // Animation loop with smooth interpolation
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    let reqId;
    const animate = function () {
      reqId = requestAnimationFrame(animate);
      time.current += 0.01;

      loadedModels.current.forEach((model, index) => {
        if (model) {
          const config = modelConfigs[index];
          const { rotationFactor, mouseFactor, autoRotation, phase } = config.animationModifier;

          // Calculate target rotations based on mouse position and time
          targetRotations.current[index] = {
            x: mousePosition.current.y * rotationFactor * mouseFactor + 
               Math.sin(time.current + phase) * 0.1,
            y: mousePosition.current.x * rotationFactor * mouseFactor + 
               time.current * autoRotation,
            z: Math.cos(time.current + phase) * 0.05 // Subtle z-axis rotation
          };

          // Smooth interpolation of current rotation to target rotation
          currentRotations.current[index] = {
            x: lerp(currentRotations.current[index].x, targetRotations.current[index].x, 0.05),
            y: lerp(currentRotations.current[index].y, targetRotations.current[index].y, 0.05),
            z: lerp(currentRotations.current[index].z, targetRotations.current[index].z, 0.05)
          };

          // Apply rotations
          model.rotation.x = currentRotations.current[index].x;
          model.rotation.y = currentRotations.current[index].y;
          model.rotation.z = currentRotations.current[index].z;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      loadedModels.current.forEach((model) => {
        scene.remove(model);
      });
      if (renderer.forceContextLoss) {
        renderer.forceContextLoss();
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeViewer;