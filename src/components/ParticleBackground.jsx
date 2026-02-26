import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = ({ progressRef }) => {
    const pointsRef = useRef();
    const materialRef = useRef();

    const PARTICLE_COUNT = 6000;

    // Generate random positions (Trophy/Rocket) and target positions (Globe)
    const [positions, targetPositions, sizes, colors] = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const target = new Float32Array(PARTICLE_COUNT * 3);
        const sz = new Float32Array(PARTICLE_COUNT);
        const col = new Float32Array(PARTICLE_COUNT * 3);

        const colorGold = new THREE.Color('#ff9800'); // Orange/Gold
        const colorCyan = new THREE.Color('#00ffff'); // Cyan

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Ambient scattered dust uniformly everywhere, super wide
            pos[i * 3 + 0] = (Math.random() - 0.5) * 120; // Spread horizontally
            pos[i * 3 + 1] = (Math.random() - 0.5) * 120; // Spread vertically
            pos[i * 3 + 2] = (Math.random() - 0.5) * 120; // Spread depth

            // Target positions also scattered for a gentle morphing effect across the screen
            target[i * 3 + 0] = (Math.random() - 0.5) * 120;
            target[i * 3 + 1] = (Math.random() - 0.5) * 120;
            target[i * 3 + 2] = (Math.random() - 0.5) * 120;

            // Mix Cyan and Gold colors
            const c = Math.random() > 0.5 ? colorGold : colorCyan;
            col[i * 3 + 0] = c.r;
            col[i * 3 + 1] = c.g;
            col[i * 3 + 2] = c.b;

            // Bolder, larger sizes
            sz[i] = Math.random() * 4.0 + 2.0;
        }
        return [pos, target, sz, col];
    }, []);

    const uniforms = useMemo(() => ({
        uProgress: { value: 0 },
        uTime: { value: 0 }
    }), []);

    const vertexShader = `
    attribute vec3 aTargetPosition;
    attribute vec3 aColor;
    attribute float aSize;
    uniform float uProgress;
    uniform float uTime;

    varying float vDistance;
    varying vec3 vColor;

    void main() {
      vColor = aColor;

      // Interpolate between galaxy and globe based on scroll
      vec3 morphedPosition = mix(position, aTargetPosition, uProgress);

      // Add subtle floating motion
      float noise = sin(morphedPosition.x * 2.0 + uTime) * 0.1;
      morphedPosition.y += noise;

      vec4 mvPosition = modelViewMatrix * vec4(morphedPosition, 1.0);
      gl_PointSize = aSize * (20.0 / -mvPosition.z); // Perspective scaling
      gl_Position = projectionMatrix * mvPosition;

      vDistance = distance(position, aTargetPosition); // Could be use for color Variation
    }
  `;
    const fragmentShader = `
    varying float vDistance;
    varying vec3 vColor;
    void main() {
      // Circular points
      vec2 xy = gl_PointCoord.xy - vec2(0.5);
      float ll = length(xy);
      if(ll > 0.5) discard;
      
      // Softer, bolder glow using vColor from attributes
      float intensity = pow(1.0 - (ll * 2.0), 1.2);
      
      // Make the center of the particle slightly brighter/whiter
      vec3 core = mix(vColor, vec3(1.0), 0.5);
      vec3 finalColor = mix(vColor, core, intensity);
      
      gl_FragColor = vec4(finalColor, min(intensity * 1.5, 1.0));
    }
  `;

    useFrame((state) => {
        // Rotation of entire system
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.001;
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
        }

        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            // Smoothly approach scroll progress
            const targetProgress = progressRef.current?.value || 0;
            const curProgress = materialRef.current.uniforms.uProgress.value;
            materialRef.current.uniforms.uProgress.value += (targetProgress - curProgress) * 0.05;
        }
    });

    return (
        <points ref={pointsRef} position={[0, 0, 0]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={PARTICLE_COUNT}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aTargetPosition"
                    count={PARTICLE_COUNT}
                    array={targetPositions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aSize"
                    count={PARTICLE_COUNT}
                    array={sizes}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-aColor"
                    count={PARTICLE_COUNT}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default function ParticleBackground({ progressRef }) {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
                {/* Background color is handled by CSS body, canvas is transparent */}
                <ParticleSystem progressRef={progressRef} />
            </Canvas>
        </div>
    );
}
