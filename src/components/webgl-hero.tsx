"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform } from "framer-motion";

type Particle = { t: number, factor: number, speed: number, xFactor: number, yFactor: number, zFactor: number, mx: number, my: number };

const generateParticles = (count: number): Particle[] => {
  const temp: Particle[] = [];
  for (let i = 0; i < count; i++) {
    temp.push({ 
      t: Math.random() * 100, 
      factor: 20 + Math.random() * 100, 
      speed: 0.01 + Math.random() / 200, 
      xFactor: -50 + Math.random() * 100, 
      yFactor: -50 + Math.random() * 100, 
      zFactor: -50 + Math.random() * 100, 
      mx: 0, 
      my: 0 
    });
  }
  return temp;
};

function Particles() {
  const count = 2000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);

  const [particles] = useState(() => generateParticles(count));

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      const { factor, speed, xFactor, yFactor, zFactor } = particle;
      particle.t += speed / 2;
      const t = particle.t;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });

    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]} castShadow={false} receiveShadow={false}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#c4b5fd" transparent opacity={0.6} />
      </instancedMesh>
    </>
  );
}

function Scene() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to camera Z position
  const zPosition = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  useFrame((state) => {
    // Smoothly update camera Z based on framer-motion value without triggering react-hooks/immutability
    state.camera.position.set(
      state.camera.position.x,
      state.camera.position.y,
      THREE.MathUtils.lerp(state.camera.position.z, zPosition.get() + 5, 0.1)
    );
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#c084fc" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Particles />
      </Float>

      {/* Volumetric Fog matching Tailwind dark bg */}
      <fog attach="fog" args={['#0a0a0a', 5, 30]} />
    </>
  );
}

export function WebGLHero() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-[100vh] w-full overflow-hidden">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true, antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}
