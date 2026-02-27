'use client';

import { useRef, useMemo, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function NeuronNode({ position, color, speed, distort }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <Sphere ref={meshRef} args={[0.4, 32, 32]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.4}
                    roughness={0.2}
                    metalness={0.8}
                    distort={distort}
                    speed={3}
                    transparent
                    opacity={0.85}
                />
            </Sphere>
        </Float>
    );
}

function ConnectionLine({ start, end, color }) {
    const ref = useRef();
    const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end]);
    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });

    return (
        <line ref={ref} geometry={geometry}>
            <lineBasicMaterial color={color} transparent opacity={0.2} />
        </line>
    );
}

function ParticleField() {
    const count = 80;
    const ref = useRef();

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            pos[i] = (Math.random() - 0.5) * 8;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.02;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#6366f1" transparent opacity={0.5} sizeAttenuation />
        </points>
    );
}

function Scene({ progress, isTraining }) {
    const t = progress / 100;
    const activeColor = useMemo(() => {
        const r = Math.round(244 * (1 - t) + 16 * t);
        const g = Math.round(63 * (1 - t) + 185 * t);
        const b = Math.round(94 * (1 - t) + 129 * t);
        return `rgb(${r}, ${g}, ${b})`;
    }, [t]);

    const nodePositions = useMemo(
        () => [
            [0, 0, 0],
            [1.5, 1, 0.5],
            [-1.5, 1, -0.5],
            [1, -1.2, 0.8],
            [-1, -1, -0.8],
            [0, 1.8, 0],
            [0.8, 0.5, -1.2],
        ],
        []
    );

    const connections = useMemo(() => {
        const conns = [];
        for (let i = 0; i < nodePositions.length; i++) {
            for (let j = i + 1; j < nodePositions.length; j++) {
                const dist = Math.sqrt(
                    Math.pow(nodePositions[i][0] - nodePositions[j][0], 2) +
                    Math.pow(nodePositions[i][1] - nodePositions[j][1], 2) +
                    Math.pow(nodePositions[i][2] - nodePositions[j][2], 2)
                );
                if (dist < 2.8) {
                    conns.push({ start: nodePositions[i], end: nodePositions[j] });
                }
            }
        }
        return conns;
    }, [nodePositions]);

    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#22d3ee" />

            {nodePositions.map((pos, i) => (
                <NeuronNode
                    key={i}
                    position={pos}
                    color={isTraining ? activeColor : '#6366f1'}
                    speed={isTraining ? 1.5 : 0.5}
                    distort={isTraining ? 0.3 + t * 0.3 : 0.2}
                />
            ))}

            {connections.map((conn, i) => (
                <ConnectionLine
                    key={i}
                    start={conn.start}
                    end={conn.end}
                    color={isTraining ? activeColor : '#6366f1'}
                />
            ))}

            <ParticleField />

            <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate
                autoRotateSpeed={isTraining ? 2 : 0.5}
                maxDistance={8}
                minDistance={3}
            />
        </>
    );
}

function ThreeScene({ progress = 0, isTraining = false }) {
    return (
        <div className="glass-card p-5 flex flex-col" id="three-scene">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-violet to-accent-rose flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 3L2 12l10 9 10-9z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        3D Network View
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        Interactive · Drag to rotate
                    </p>
                </div>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: 250, background: 'rgba(0,0,0,0.3)' }}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                >
                    <Scene progress={progress} isTraining={isTraining} />
                </Canvas>
            </div>
        </div>
    );
}

export default memo(ThreeScene);
