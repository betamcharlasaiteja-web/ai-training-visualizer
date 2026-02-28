'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

function ProgressSection({ progress, status, currentEpoch, totalEpochs, speed }) {
    const statusConfig = useMemo(() => {
        const configs = {
            idle: {
                label: 'Ready',
                color: '#94a3b8',
                dotColor: 'bg-gray-400',
                description: 'Configure parameters and start training',
            },
            loading: {
                label: 'Loading',
                color: '#f59e0b',
                dotColor: 'bg-amber-400',
                description: 'Fetching training data from server…',
            },
            training: {
                label: 'Training',
                color: '#22c55e',
                dotColor: 'bg-green-400',
                description: `Processing epoch ${currentEpoch} of ${totalEpochs}`,
            },
            paused: {
                label: 'Paused',
                color: '#f59e0b',
                dotColor: 'bg-amber-400',
                description: `Paused at epoch ${currentEpoch}. Click resume to continue.`,
            },
            complete: {
                label: 'Complete',
                color: '#14b8a6',
                dotColor: 'bg-teal-400',
                description: `Training finished — ${totalEpochs} epochs completed`,
            },
            error: {
                label: 'Error',
                color: '#e76f51',
                dotColor: 'bg-orange-400',
                description: 'An error occurred. Please retry.',
            },
        };
        return configs[status] || configs.idle;
    }, [status, currentEpoch, totalEpochs]);

    const eta = useMemo(() => {
        if (status !== 'training') return null;
        const remaining = totalEpochs - currentEpoch;
        const secs = Math.ceil((remaining * speed) / 1000);
        if (secs < 60) return `~${secs}s remaining`;
        return `~${Math.ceil(secs / 60)}m ${secs % 60}s remaining`;
    }, [status, totalEpochs, currentEpoch, speed]);

    return (
        <div className="glass-card p-5" id="progress-section">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <motion.div
                            className={`w-2.5 h-2.5 rounded-full ${statusConfig.dotColor}`}
                            animate={
                                status === 'training'
                                    ? { scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }
                                    : { scale: 1, opacity: 1 }
                            }
                            transition={
                                status === 'training'
                                    ? { duration: 1.2, repeat: Infinity }
                                    : {}
                            }
                        />
                        <span
                            className="text-sm font-bold"
                            style={{ color: statusConfig.color }}
                        >
                            {statusConfig.label}
                        </span>
                    </div>
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {statusConfig.description}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    {eta && (
                        <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                            {eta}
                        </span>
                    )}
                    <span className="text-sm font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>

            {/* Progress bar */}
            <div
                className="h-3 rounded-full overflow-hidden"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
            >
                <motion.div
                    className="h-full rounded-full relative"
                    style={{
                        background: `linear-gradient(90deg, ${statusConfig.color}, #5eead4)`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    {/* Shimmer effect */}
                    {status === 'training' && (
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background:
                                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                backgroundSize: '200% 100%',
                                animation: 'skeleton-shimmer 1.5s infinite',
                            }}
                        />
                    )}
                </motion.div>
            </div>

            {/* Epoch markers */}
            {totalEpochs > 0 && totalEpochs <= 20 && (
                <div className="flex justify-between mt-2 px-1">
                    {Array.from({ length: Math.min(totalEpochs, 10) }).map((_, i) => {
                        const epoch = Math.round(((i + 1) / 10) * totalEpochs);
                        const isDone = currentEpoch >= epoch;
                        return (
                            <span
                                key={i}
                                className="text-xs font-mono"
                                style={{ color: isDone ? statusConfig.color : 'var(--text-secondary)', opacity: isDone ? 1 : 0.4 }}
                            >
                                {epoch}
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default memo(ProgressSection);
