import React, { useEffect } from 'react';
import * as THREE from 'three';

const RobotThreeJS = () => {
  useEffect(() => {
    const container = document.querySelector('.threejs-container') as HTMLElement;

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

    // Robot Parts
    const material = new THREE.MeshStandardMaterial({ color: 0x6699ff });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 1), material);
    body.position.y = 3;
    scene.add(body);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
    head.position.set(0, 5, 0);
    scene.add(head);

    // Eyes
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeGeometry = new THREE.SphereGeometry(0.2);

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.5, 5.5, 0.75);
    scene.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.5, 5.5, 0.75);
    scene.add(rightEye);

    // Arms
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0xff6699 });
    const armGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3);

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-2, 3, 0);
    scene.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(2, 3, 0);
    scene.add(rightArm);

    // Legs
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x66ff99 });
    const legGeometry = new THREE.CylinderGeometry(0.4, 0.4, 3);

    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.7, 0.5, 0);
    scene.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.7, 0.5, 0);
    scene.add(rightLeg);

    // Animation
    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      angle += 0.02;
      leftArm.rotation.x = Math.sin(angle) * 0.5;
      rightArm.rotation.x = Math.sin(angle + Math.PI) * 0.5;
      head.rotation.y = Math.sin(angle * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="h-64 w-64">
      <div className="bg-white rounded-lg shadow-md h-full w-full threejs-container" />
    </div>
  );
};

export default RobotThreeJS;
