'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const LAYERS = [
    { name: 'Input', nodes: 4, x: 80 },
    { name: 'Hidden 1', nodes: 6, x: 240 },
    { name: 'Hidden 2', nodes: 5, x: 400 },
    { name: 'Output', nodes: 2, x: 560 },
];

const SVG_WIDTH = 640;
const SVG_HEIGHT = 340;

function getNodeY(totalNodes, index, height) {
    const spacing = height / (totalNodes + 1);
    return spacing * (index + 1);
}

function lossToColor(loss, isTraining) {
    if (!isTraining) return { node: '#14b8a6', glow: 'rgba(20, 184, 166, 0.3)' };
    const t = Math.max(0, Math.min(1, 1 - loss));
    const r = Math.round(231 * (1 - t) + 34 * t);
    const g = Math.round(111 * (1 - t) + 197 * t);
    const b = Math.round(81 * (1 - t) + 94 * t);
    return {
        node: `rgb(${r}, ${g}, ${b})`,
        glow: `rgba(${r}, ${g}, ${b}, 0.5)`,
    };
}

function NeuralNetworkVisualizer({ currentLoss, isTraining, currentEpoch }) {
    const loss = currentLoss ?? 1;
    const colors = useMemo(() => lossToColor(loss, isTraining || currentEpoch > 0), [loss, isTraining, currentEpoch]);

    // Generate connections between consecutive layers
    const connections = useMemo(() => {
        const conns = [];
        for (let l = 0; l < LAYERS.length - 1; l++) {
            const from = LAYERS[l];
            const to = LAYERS[l + 1];
            for (let i = 0; i < from.nodes; i++) {
                for (let j = 0; j < to.nodes; j++) {
                    conns.push({
                        key: `${l}-${i}-${j}`,
                        x1: from.x,
                        y1: getNodeY(from.nodes, i, SVG_HEIGHT),
                        x2: to.x,
                        y2: getNodeY(to.nodes, j, SVG_HEIGHT),
                        delay: (l * 0.15) + (i * 0.03) + (j * 0.02),
                    });
                }
            }
        }
        return conns;
    }, []);

    return (
        <div className="glass-card p-5 flex flex-col" id="neural-network-visualizer">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        Neural Network
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {isTraining ? 'Training in progress…' : currentEpoch > 0 ? 'Training complete' : 'Awaiting training'}
                    </p>
                </div>
                {(isTraining || currentEpoch > 0) && (
                    <div className="ml-auto flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{
                                background: colors.node,
                                boxShadow: `0 0 8px ${colors.glow}`,
                            }}
                        />
                        <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                            Loss: {loss.toFixed(4)}
                        </span>
                    </div>
                )}
            </div>

            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <svg
                    viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
                    className="w-full h-full max-h-[300px]"
                    style={{ minHeight: '180px' }}
                >
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={colors.node} stopOpacity="0.2" />
                            <stop offset="50%" stopColor={colors.node} stopOpacity="0.5" />
                            <stop offset="100%" stopColor={colors.node} stopOpacity="0.2" />
                        </linearGradient>
                    </defs>

                    {/* Connections */}
                    {connections.map((conn) => (
                        <motion.line
                            key={conn.key}
                            x1={conn.x1}
                            y1={conn.y1}
                            x2={conn.x2}
                            y2={conn.y2}
                            stroke="url(#connectionGrad)"
                            strokeWidth={isTraining ? 1.5 : 0.8}
                            strokeOpacity={isTraining ? 0.6 : 0.2}
                            initial={false}
                            animate={
                                isTraining
                                    ? {
                                        strokeOpacity: [0.2, 0.6, 0.2],
                                        strokeWidth: [0.8, 1.8, 0.8],
                                    }
                                    : { strokeOpacity: 0.2, strokeWidth: 0.8 }
                            }
                            transition={
                                isTraining
                                    ? {
                                        duration: 1.5 + conn.delay,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }
                                    : { duration: 0.5 }
                            }
                        />
                    ))}

                    {/* Nodes */}
                    {LAYERS.map((layer, layerIdx) =>
                        Array.from({ length: layer.nodes }).map((_, nodeIdx) => {
                            const y = getNodeY(layer.nodes, nodeIdx, SVG_HEIGHT);
                            return (
                                <g key={`node-${layerIdx}-${nodeIdx}`}>
                                    {/* Glow ring */}
                                    <motion.circle
                                        cx={layer.x}
                                        cy={y}
                                        r={14}
                                        fill="none"
                                        stroke={colors.node}
                                        strokeWidth={1}
                                        initial={false}
                                        animate={
                                            isTraining
                                                ? {
                                                    r: [14, 18, 14],
                                                    strokeOpacity: [0.1, 0.4, 0.1],
                                                }
                                                : { r: 14, strokeOpacity: 0.1 }
                                        }
                                        transition={
                                            isTraining
                                                ? {
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: layerIdx * 0.2 + nodeIdx * 0.1,
                                                }
                                                : { duration: 0.5 }
                                        }
                                    />
                                    {/* Main node */}
                                    <motion.circle
                                        cx={layer.x}
                                        cy={y}
                                        r={10}
                                        fill={colors.node}
                                        filter={isTraining ? 'url(#glow)' : undefined}
                                        initial={false}
                                        animate={
                                            isTraining
                                                ? {
                                                    fillOpacity: [0.6, 1, 0.6],
                                                }
                                                : { fillOpacity: currentEpoch > 0 ? 0.8 : 0.4 }
                                        }
                                        transition={
                                            isTraining
                                                ? {
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: layerIdx * 0.15 + nodeIdx * 0.08,
                                                }
                                                : { duration: 0.5 }
                                        }
                                    />
                                    {/* Inner dot */}
                                    <circle cx={layer.x} cy={y} r={3} fill="white" opacity={0.6} />
                                </g>
                            );
                        })
                    )}

                    {/* Layer labels */}
                    {LAYERS.map((layer, idx) => (
                        <text
                            key={`label-${idx}`}
                            x={layer.x}
                            y={SVG_HEIGHT - 8}
                            textAnchor="middle"
                            fill="var(--text-secondary)"
                            fontSize="11"
                            fontFamily="Inter, sans-serif"
                            fontWeight="500"
                        >
                            {layer.name}
                        </text>
                    ))}
                </svg>
            </div>
        </div>
    );
}

export default memo(NeuralNetworkVisualizer);
