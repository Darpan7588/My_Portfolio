import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';

function CyberSphere() {
  const meshRef = useRef();
  const pointsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate outer particles
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.06;
      pointsRef.current.rotation.x = time * 0.03;
    }

    // Rotate inner distorted mesh
    if (meshRef.current) {
      meshRef.current.rotation.y = -time * 0.1;
      meshRef.current.rotation.z = time * 0.05;
      
      // Floating hover effect
      meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;
    }
  });

  return (
    <group>
      {/* Outer Particle Cloud */}
      <points ref={pointsRef}>
        <sphereGeometry args={[2.0, 48, 48]} />
        <pointsMaterial 
          color="#a78bfa" 
          size={0.015} 
          sizeAttenuation={true} 
          transparent={true} 
          opacity={0.35} 
        />
      </points>

      {/* Inner Glowing Bubble */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.4}
          speed={2.2}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[350px] lg:min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={1.0} color="#22d3ee" />
        <directionalLight position={[5, -5, 5]} intensity={0.5} color="#d946ef" />
        <CyberSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
