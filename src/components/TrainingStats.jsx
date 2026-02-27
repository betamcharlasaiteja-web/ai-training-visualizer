'use client';

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StatCard = ({ label, value, suffix, icon, color, trend, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        className="glass-card p-4 relative overflow-hidden group"
        id={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
        {/* Accent bar */}
        <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />

        <div className="flex items-start justify-between">
            <div>
                <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {label}
                </p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl font-bold font-mono"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {value}
                        {suffix && (
                            <span className="text-sm font-normal ml-1" style={{ color: 'var(--text-secondary)' }}>
                                {suffix}
                            </span>
                        )}
                    </motion.p>
                </AnimatePresence>
            </div>
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: `${color}18` }}
            >
                {icon}
            </div>
        </div>

        {trend !== undefined && (
            <div className="mt-2 flex items-center gap-1">
                <span
                    className="text-xs font-semibold"
                    style={{ color: trend >= 0 ? 'var(--success)' : 'var(--danger)' }}
                >
                    {trend >= 0 ? '↑' : '↓'} {Math.abs(trend).toFixed(2)}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    from last epoch
                </span>
            </div>
        )}
    </motion.div>
);

function TrainingStats({ currentStats, bestAccuracy, currentEpoch, totalEpochs, trainingData }) {
    const prevStats = trainingData.length >= 2 ? trainingData[trainingData.length - 2] : null;
    const lossTrend = prevStats && currentStats ? currentStats.loss - prevStats.loss : undefined;
    const accTrend = prevStats && currentStats ? currentStats.accuracy - prevStats.accuracy : undefined;

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" id="training-stats">
            <StatCard
                label="Current Epoch"
                value={currentEpoch || '—'}
                suffix={totalEpochs ? `/ ${totalEpochs}` : ''}
                icon="🔄"
                color="#6366f1"
                delay={0}
            />
            <StatCard
                label="Current Loss"
                value={currentStats ? currentStats.loss.toFixed(4) : '—'}
                icon="📉"
                color="#f43f5e"
                trend={lossTrend}
                delay={0.05}
            />
            <StatCard
                label="Accuracy"
                value={currentStats ? currentStats.accuracy.toFixed(1) : '—'}
                suffix="%"
                icon="🎯"
                color="#10b981"
                trend={accTrend}
                delay={0.1}
            />
            <StatCard
                label="Best Accuracy"
                value={bestAccuracy > 0 ? bestAccuracy.toFixed(1) : '—'}
                suffix="%"
                icon="🏆"
                color="#f59e0b"
                delay={0.15}
            />
        </div>
    );
}

export default memo(TrainingStats);
