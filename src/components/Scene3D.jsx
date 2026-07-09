import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ScrollingScene() {
  const pointsRef = useRef();
  const torusKnotRef = useRef();
  const sphereRef = useRef();
  const torusRef = useRef();
  const dodecahedronRef = useRef();
  const cylinderRef = useRef();
  const gridRef = useRef();
  
  const texture = useTexture("/projects.png");

  // Track scroll percentage
  const scrollYRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollYRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mobile layout
  const isMobile = useRef(false);
  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth < 1024;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame((state, delta) => {
    const scroll = scrollYRef.current;
    const time = state.clock.getElapsedTime();
    const mobile = isMobile.current;

    // 1. Slow rotation of background particles
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02 + scroll * 1.2;
      pointsRef.current.rotation.x = scroll * 0.3;
    }

    // 2. Slow rotation of tactical floor grid
    if (gridRef.current) {
      gridRef.current.rotation.z = time * 0.015;
      gridRef.current.position.y = -2.5 - scroll * 1.5;
    }

    // Stages:
    // 0.00 - 0.15: Hero (Torus Knot - Cyber Green Wireframe)
    // 0.15 - 0.32: About (Distorted Sphere - Teal/Green Core)
    // 0.32 - 0.50: Experience (Torus - Warning Amber Wireframe)
    // 0.50 - 0.68: Skills (Dodecahedron - Cyber Green Wireframe)
    // 0.68 - 0.83: Credentials (Dodecahedron - Warning Amber Wireframe)
    // 0.83 - 0.94: Projects (Screenshot Cylinder)
    // 0.94 - 1.00: Contact (Nothing / Digital Grid space only)

    let activeShape = 'hero';
    let targetX = mobile ? 0 : 1.6;
    let targetY = mobile ? -0.5 : 0;
    let targetZ = 0;

    if (scroll < 0.15) {
      activeShape = 'hero';
      targetX = mobile ? 0 : 1.5;
      targetY = mobile ? -0.4 : 0;
    } else if (scroll < 0.32) {
      activeShape = 'about';
      targetX = mobile ? 0 : -1.8;
      targetY = mobile ? -0.4 : 0.1;
    } else if (scroll < 0.50) {
      activeShape = 'experience';
      targetX = mobile ? 0 : 1.8;
      targetY = mobile ? -0.4 : -0.2;
    } else if (scroll < 0.68) {
      activeShape = 'skills';
      targetX = mobile ? 0 : -1.8;
      targetY = mobile ? -0.4 : 0.1;
    } else if (scroll < 0.83) {
      activeShape = 'credentials';
      targetX = mobile ? 0 : 1.8;
      targetY = mobile ? -0.4 : 0;
    } else if (scroll < 0.94) {
      activeShape = 'projects';
      targetX = mobile ? 0 : 0.8;
      targetY = mobile ? -0.5 : -0.3;
    } else {
      activeShape = 'contact';
      targetX = mobile ? 0 : -1.5;
      targetY = mobile ? -0.4 : 0;
    }

    // Helper to smoothly transition scales and position
    const lerpScale = (ref, target) => {
      if (ref.current) {
        const current = ref.current.scale.x;
        const next = THREE.MathUtils.lerp(current, target, 0.08);
        ref.current.scale.set(next, next, next);
        
        if (target > 0.01) {
          ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, 0.08);
          ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.08);
          ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, targetZ, 0.08);
        }
      }
    };

    // Apply scales
    lerpScale(torusKnotRef, activeShape === 'hero' ? 1.0 : 0.0);
    lerpScale(sphereRef, activeShape === 'about' ? 1.1 : 0.0);
    lerpScale(torusRef, activeShape === 'experience' ? 1.0 : 0.0);
    lerpScale(dodecahedronRef, activeShape === 'skills' || activeShape === 'credentials' ? 1.0 : 0.0);
    lerpScale(cylinderRef, activeShape === 'projects' ? 1.0 : 0.0);

    // Apply rotations
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.y = time * 0.25;
      torusKnotRef.current.rotation.x = time * 0.12;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.rotation.x = time * 0.15;
    }
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.y = time * 0.15;
      dodecahedronRef.current.rotation.x = time * 0.25;
    }
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group>
      {/* 1. Tactical digital ground grid */}
      <gridHelper 
        ref={gridRef} 
        args={[30, 30, '#0d9488', '#022c22']} 
        position={[0, -2.5, 0]} 
        rotation={[Math.PI / 2.2, 0, 0]} 
      />

      {/* 2. Cyber-green data coordinate particles */}
      <points ref={pointsRef}>
        <sphereGeometry args={[12, 48, 48]} />
        <pointsMaterial 
          color="#10b981" 
          size={0.02} 
          sizeAttenuation={true} 
          transparent={true} 
          opacity={0.3} 
        />
      </points>

      {/* 3. Hero Torus Knot (Cyber Green Wireframe) */}
      <mesh ref={torusKnotRef} scale={[0, 0, 0]} position={[1.5, 0, 0]}>
        <torusKnotGeometry args={[0.7, 0.22, 120, 16]} />
        <meshStandardMaterial 
          color="#10b981" 
          roughness={0.1} 
          metalness={0.9} 
          wireframe={true} 
        />
      </mesh>

      {/* 4. Distorted Dossier Sphere (Cyber Teal Glass) */}
      <mesh ref={sphereRef} scale={[0, 0, 0]} position={[-1.8, 0.1, 0]}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <MeshDistortMaterial
          color="#0d9488"
          attach="material"
          distort={0.4}
          speed={2.0}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 5. Experience Torus (Warning Amber Wireframe) */}
      <mesh ref={torusRef} scale={[0, 0, 0]} position={[1.8, -0.2, 0]}>
        <torusGeometry args={[0.7, 0.25, 12, 64]} />
        <meshStandardMaterial 
          color="#f59e0b" 
          roughness={0.2} 
          metalness={0.8} 
          wireframe={true} 
        />
      </mesh>

      {/* 6. Skills/Credentials Dodecahedron (Cyber Green Wireframe) */}
      <mesh ref={dodecahedronRef} scale={[0, 0, 0]} position={[-1.8, 0.1, 0]}>
        <dodecahedronGeometry args={[0.85]} />
        <meshStandardMaterial 
          color="#10b981" 
          roughness={0.15} 
          metalness={0.85} 
          wireframe={true} 
        />
      </mesh>

      {/* 7. Screenshot Cylinder (Projects) */}
      <mesh ref={cylinderRef} scale={[0, 0, 0]} position={[0.8, -0.3, 0]} rotation={[0.1, 0.4, 0.15]}>
        <cylinderGeometry args={[1.3, 1.3, 1.8, 64, 64, true]} />
        <meshStandardMaterial 
          map={texture} 
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.85} 
          roughness={0.4} 
          metalness={0.15} 
        />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-gray-950">
      <Canvas camera={{ position: [0, 0, 4.0], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={1.0} color="#10b981" />
        <directionalLight position={[5, -5, 5]} intensity={0.6} color="#f59e0b" />
        <ScrollingScene />
      </Canvas>
    </div>
  );
}
