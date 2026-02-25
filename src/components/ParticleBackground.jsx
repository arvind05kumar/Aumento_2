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
            // --- INITIAL SHAPE (Trophy/Rocket on Right) ---
            if (i < 3500) {
                // Outer shell: Hollow elongated capsule/cylinder focus
                const h = (Math.random() - 0.5) * 14;
                let currentR = 3.5;

                // Taper the top and bottom to make a bullet/capsule shape
                if (h > 4) currentR = 3.5 * (7 - h) / 3;
                if (h < -4) currentR = 3.5 * (h + 7) / 3;

                // Make mostly hollow, with some internal volume
                if (Math.random() > 0.3) {
                    currentR = currentR * (0.9 + Math.random() * 0.1);
                } else {
                    currentR = currentR * Math.random();
                }

                const theta = 2 * Math.PI * Math.random();
                pos[i * 3 + 0] = currentR * Math.cos(theta);
                pos[i * 3 + 1] = h;
                pos[i * 3 + 2] = currentR * Math.sin(theta);

                col[i * 3 + 0] = colorGold.r;
                col[i * 3 + 1] = colorGold.g;
                col[i * 3 + 2] = colorGold.b;
            } else if (i < 5000) {
                // Inner core sphere (Cyan) located towards the bottom/middle
                const r = 2.5 * Math.cbrt(Math.random());
                const theta = 2 * Math.PI * Math.random();
                const phi = Math.acos(2 * Math.random() - 1);

                pos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
                pos[i * 3 + 1] = (r * Math.cos(phi)) - 1.5; // Offset core downwards
                pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

                col[i * 3 + 0] = colorCyan.r;
                col[i * 3 + 1] = colorCyan.g;
                col[i * 3 + 2] = colorCyan.b;
            } else {
                // Ambient scattered dust
                pos[i * 3 + 0] = (Math.random() - 0.5) * 20;
                pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
                pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

                // Mostly Cyan dust, some Gold
                const c = Math.random() > 0.8 ? colorGold : colorCyan;
                col[i * 3 + 0] = c.r;
                col[i * 3 + 1] = c.g;
                col[i * 3 + 2] = c.b;
            }

            // --- TARGET SHAPE (Globe) ---
            const radius = 6;
            const theta2 = 2 * Math.PI * Math.random();
            const phi2 = Math.acos(2 * Math.random() - 1);
            target[i * 3 + 0] = radius * Math.sin(phi2) * Math.cos(theta2);
            target[i * 3 + 1] = radius * Math.sin(phi2) * Math.sin(theta2);
            target[i * 3 + 2] = radius * Math.cos(phi2);

            // Random sizes for depth effect
            sz[i] = Math.random() * 2 + 0.5;
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
      
      // Color: Cyan to Light Cyan with soft glow
      vec3 coreColor = vec3(0.0, 1.0, 1.0); // #00FFFF Cyan
      vec3 outerColor = vec3(0.0, 0.5, 0.8);
      
      float intensity = 1.0 - (ll * 2.0);
      gl_FragColor = vec4(mix(outerColor, coreColor, intensity), intensity);
    }
  `;

    useFrame((state) => {
        // Rotation of entire system
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.002;
            // Add a slight tilt on z axis to match the image, un-tilt as scroll progresses
            const targetProgress = progressRef.current?.value || 0;
            pointsRef.current.rotation.z = THREE.MathUtils.lerp(-0.5, 0, targetProgress);
            // Re-center if scrolled down
            pointsRef.current.position.x = THREE.MathUtils.lerp(5.5, 0, targetProgress);
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
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
        <points ref={pointsRef} position={[5.5, 0, 0]} rotation={[0, 0, -0.5]}>
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
