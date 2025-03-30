import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RobotThreeJS = ({ rotation, scale }: { rotation: number; scale: number }) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Define ref type

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // If container is not available, exit early

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // Lights
    const light = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Materials
    const material = new THREE.MeshStandardMaterial({ color: 0x6699ff });

    // Robot Parts
    const body = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 1), material);
    body.position.y = 3;
    scene.add(body);

    const head = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
    head.position.set(0, 5, 0);
    scene.add(head);

    const armMaterial = new THREE.MeshStandardMaterial({ color: 0xff6699 });
    const armGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3);
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-2, 3, 0);
    scene.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(2, 3, 0);
    scene.add(rightArm);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply dynamic transformations from props
      body.scale.set(scale, scale, scale);
      leftArm.rotation.x = rotation;
      rightArm.rotation.x = -rotation;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [rotation, scale]);

  return <div ref={containerRef} className="h-64 w-64 bg-white rounded-lg shadow-md" />;
};

export default RobotThreeJS;
