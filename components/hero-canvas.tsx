"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeroCanvasProps {
  className?: string;
}

export default function HeroCanvas({ className = "" }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion directly
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 560;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setTimeout(() => setWebGlSupported(false), 0);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Clean any prior children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // ROOT GROUP FOR ROTATION & PARALLAX
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // MATERIALS
    // 1. Central Core: Glowing warm frosted sphere
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffa500, // warm amber
      emissive: 0xff6600,
      emissiveIntensity: 0.45,
      roughness: 0.15,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.35,
      ior: 1.5,
      thickness: 1.5,
    });

    // 2. Translucent Cyan Frosted Glass (Water/Plumbing & Cleanliness)
    const glassCyanMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.15,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 1.0,
      transmission: 0.7,
      ior: 1.45,
      thickness: 1.0,
      transparent: true,
      opacity: 0.9,
    });

    // 3. Deep Metallic Indigo (Structure/Electrical/Tools)
    const metallicIndigoMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      roughness: 0.25,
      metalness: 0.85,
    });

    // 4. Warm Golden Amber Polish (Service Quality & Reliability)
    const goldAmberMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0xb45309,
      emissiveIntensity: 0.2,
    });

    // 5. Crisp White Ceramic / Enamel
    const whiteCeramicMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.15,
      metalness: 0.1,
    });

    // GEOMETRIES & SHAPES EVOKING HOME SERVICES
    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [
      coreMaterial,
      glassCyanMaterial,
      metallicIndigoMaterial,
      goldAmberMaterial,
      whiteCeramicMaterial,
    ];

    // CENTRAL GLOWING SPHERE (The home nucleus)
    const coreGeo = new THREE.SphereGeometry(1.3, 48, 48);
    geometriesToDispose.push(coreGeo);
    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    mainGroup.add(coreMesh);

    // INNER WIREFRAME SPHERE
    const wireGeo = new THREE.IcosahedronGeometry(1.6, 2);
    geometriesToDispose.push(wireGeo);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xfde68a,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    materialsToDispose.push(wireMat);
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // SATELLITE 1: Water Droplet / Smooth Teardrop Capsule (Plumbing & Cleaning)
    const dropGeo = new THREE.CapsuleGeometry(0.35, 0.7, 16, 24);
    geometriesToDispose.push(dropGeo);
    const dropMesh = new THREE.Mesh(dropGeo, glassCyanMaterial);
    dropMesh.position.set(2.4, 0.9, 0.4);
    dropMesh.rotation.z = Math.PI / 4;
    mainGroup.add(dropMesh);

    // SATELLITE 2: Precision Torus Ring / Gasket (Maintenance & Mechanical)
    const torusGeo = new THREE.TorusGeometry(0.55, 0.18, 20, 36);
    geometriesToDispose.push(torusGeo);
    const torusMesh = new THREE.Mesh(torusGeo, goldAmberMaterial);
    torusMesh.position.set(-2.5, -0.6, 0.8);
    torusMesh.rotation.x = Math.PI / 3;
    mainGroup.add(torusMesh);

    // SATELLITE 3: Faceted Spark / Crystal Octahedron (Electrical & Energy)
    const sparkGeo = new THREE.OctahedronGeometry(0.55, 0);
    geometriesToDispose.push(sparkGeo);
    const sparkMesh = new THREE.Mesh(sparkGeo, metallicIndigoMaterial);
    sparkMesh.position.set(1.5, -2.1, 0.6);
    mainGroup.add(sparkMesh);

    // SATELLITE 4: Rounded Modern Prism (Architecture / Painting / Home)
    const prismGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    geometriesToDispose.push(prismGeo);
    const prismMesh = new THREE.Mesh(prismGeo, whiteCeramicMaterial);
    prismMesh.position.set(-1.8, 1.9, -0.5);
    prismMesh.rotation.set(0.4, 0.5, 0.6);
    mainGroup.add(prismMesh);

    // SATELLITE 5: Orbiting Halo Ring (System Integrity & Coverage)
    const haloGeo = new THREE.TorusGeometry(2.9, 0.035, 16, 80);
    geometriesToDispose.push(haloGeo);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.8,
    });
    materialsToDispose.push(haloMat);
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.rotation.x = Math.PI / 2.3;
    haloMesh.rotation.y = Math.PI / 6;
    mainGroup.add(haloMesh);

    // FLOATING PARTICLES (Dust / micro-sparks evoking cleanliness)
    const particleCount = 75;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    geometriesToDispose.push(particleGeo);

    const particleMat = new THREE.PointsMaterial({
      color: 0xfde68a,
      size: 0.055,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    materialsToDispose.push(particleMat);
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // LIGHTING - Restrained, clean studio lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.DirectionalLight(0xfff7ed, 1.8);
    warmKeyLight.position.set(5, 6, 7);
    scene.add(warmKeyLight);

    const amberFillLight = new THREE.PointLight(0xf59e0b, 1.8, 14);
    amberFillLight.position.set(-4, -2, 4);
    scene.add(amberFillLight);

    const cyanRimLight = new THREE.PointLight(0x06b6d4, 1.6, 15);
    cyanRimLight.position.set(4, -3, -3);
    scene.add(cyanRimLight);

    const topSoftLight = new THREE.DirectionalLight(0xe0f2fe, 1.0);
    topSoftLight.position.set(0, 8, 2);
    scene.add(topSoftLight);

    // POINTER PARALLAX INTERACTION (Smooth lerping)
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      targetRotation.x = y * 0.45;
      targetRotation.y = x * 0.65;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // VISIBILITY & ANIMATION LOOP
    let animationFrameId: number;
    let isHidden = document.hidden;
    const clock = new THREE.Clock();

    const renderLoop = () => {
      if (isHidden) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Respect prefers-reduced-motion
      if (mediaQuery.matches) {
        renderer.render(scene, camera);
        return;
      }

      // Smooth pointer parallax damping
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      mainGroup.rotation.x = currentRotation.x;
      mainGroup.rotation.y = currentRotation.y + elapsedTime * 0.08;

      // 1. Core breathing
      const coreScale = 1 + Math.sin(elapsedTime * 1.5) * 0.035;
      coreMesh.scale.set(coreScale, coreScale, coreScale);
      wireMesh.rotation.y -= delta * 0.15;
      wireMesh.rotation.x += delta * 0.08;

      // 2. Teardrop (droplet)
      dropMesh.position.y = 0.9 + Math.sin(elapsedTime * 1.8 + 1) * 0.22;
      dropMesh.rotation.x += delta * 0.4;
      dropMesh.rotation.y += delta * 0.3;

      // 3. Torus
      torusMesh.position.y = -0.6 + Math.cos(elapsedTime * 1.4 + 2) * 0.2;
      torusMesh.rotation.x += delta * 0.6;
      torusMesh.rotation.z += delta * 0.4;

      // 4. Spark (octahedron)
      sparkMesh.position.y = -2.1 + Math.sin(elapsedTime * 2.1 + 3) * 0.25;
      sparkMesh.rotation.y += delta * 0.8;
      sparkMesh.rotation.z += delta * 0.5;

      // 5. Ceramic prism
      prismMesh.position.y = 1.9 + Math.cos(elapsedTime * 1.2 + 4) * 0.18;
      prismMesh.rotation.x += delta * 0.35;
      prismMesh.rotation.y += delta * 0.5;

      // 6. Halo ring
      haloMesh.rotation.z += delta * 0.12;

      // 7. Particles drift
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const handleVisibilityChange = () => {
      isHidden = document.hidden;
      if (!isHidden && !mediaQuery.matches) {
        clock.start();
        renderLoop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial render / loop start
    renderLoop();

    // CLEANUP ON UNMOUNT
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      geometriesToDispose.forEach((geo) => geo.dispose());
      materialsToDispose.forEach((mat) => mat.dispose());
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webGlSupported) {
    return (
      <div
        className={`relative flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 p-8 ${className}`}
      >
        <div className="relative text-center text-slate-300 font-medium">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-slate-700 text-amber-400">
            <span className="text-xl">✨</span>
          </div>
          <p className="text-xs text-slate-300">خدمات منزلية احترافية بجودة مضمونة</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] md:min-h-[560px] select-none cursor-grab active:cursor-grabbing ${className}`}
      aria-hidden="true"
    />
  );
}
