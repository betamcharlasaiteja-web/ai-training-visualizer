'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

const BATCH_SIZES = [16, 32, 64, 128, 256];

function ControlPanel({
    params,
    onUpdateParam,
    speed,
    onUpdateSpeed,
    onStart,
    onPause,
    onResume,
    onStop,
    onRetry,
    isTraining,
    isLoading,
    isPaused,
    isComplete,
    isError,
    canStart,
    error,
}) {
    return (
        <div className="glass-card p-6 space-y-6" id="control-panel">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        Hyperparameters
                    </h2>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        Configure training settings
                    </p>
                </div>
            </div>

            {/* Learning Rate */}
            <div className="space-y-2" id="learning-rate-control">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        Learning Rate
                    </label>
                    <span
                        className="text-sm font-mono font-semibold px-2 py-0.5 rounded-md"
                        style={{ background: 'var(--glass-bg)', color: 'var(--text-accent)' }}
                    >
                        {params.learningRate.toFixed(3)}
                    </span>
                </div>
                <input
                    type="range"
                    min="0.001"
                    max="1"
                    step="0.001"
                    value={params.learningRate}
                    onChange={(e) => onUpdateParam('learningRate', parseFloat(e.target.value))}
                    className="slider-custom"
                    disabled={isTraining || isLoading || isPaused}
                    id="learning-rate-slider"
                />
                <div className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <span>0.001</span>
                    <span>1.000</span>
                </div>
            </div>

            {/* Batch Size */}
            <div className="space-y-2" id="batch-size-control">
                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Batch Size
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                    {BATCH_SIZES.map((size) => (
                        <motion.button
                            key={size}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onUpdateParam('batchSize', size)}
                            disabled={isTraining || isLoading || isPaused}
                            className={`py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${params.batchSize === size
                                    ? 'bg-gradient-to-br from-primary-500 to-accent-violet text-white shadow-glow-sm'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            style={
                                params.batchSize !== size
                                    ? { background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }
                                    : {}
                            }
                            id={`batch-size-${size}`}
                        >
                            {size}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Epochs */}
            <div className="space-y-2" id="epochs-control">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        Epochs
                    </label>
                    <span
                        className="text-sm font-mono font-semibold px-2 py-0.5 rounded-md"
                        style={{ background: 'var(--glass-bg)', color: 'var(--text-accent)' }}
                    >
                        {params.epochs}
                    </span>
                </div>
                <input
                    type="range"
                    min="5"
                    max="200"
                    step="1"
                    value={params.epochs}
                    onChange={(e) => onUpdateParam('epochs', parseInt(e.target.value))}
                    className="slider-custom"
                    disabled={isTraining || isLoading || isPaused}
                    id="epochs-slider"
                />
                <div className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <span>5</span>
                    <span>200</span>
                </div>
            </div>

            {/* Speed Control */}
            <div className="space-y-2" id="speed-control">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        Speed
                    </label>
                    <span
                        className="text-sm font-mono font-semibold px-2 py-0.5 rounded-md"
                        style={{ background: 'var(--glass-bg)', color: 'var(--text-accent)' }}
                    >
                        {speed <= 50 ? '🚀 Turbo' : speed <= 150 ? '⚡ Fast' : speed <= 300 ? '▶ Normal' : '🐢 Slow'}
                    </span>
                </div>
                <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={520 - speed}
                    onChange={(e) => onUpdateSpeed(520 - parseInt(e.target.value))}
                    className="slider-custom"
                    id="speed-slider"
                />
                <div className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <span>Slow</span>
                    <span>Fast</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2" id="training-controls">
                {canStart && (
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onStart}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                        id="start-training-btn"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        {isError ? 'Retry Training' : isComplete ? 'Train Again' : 'Start Training'}
                    </motion.button>
                )}

                {isLoading && (
                    <button className="btn-primary w-full opacity-70 cursor-wait flex items-center justify-center gap-2" disabled>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Fetching Data…
                    </button>
                )}

                {isTraining && (
                    <div className="flex gap-2">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onPause}
                            className="btn-secondary flex-1 flex items-center justify-center gap-2"
                            id="pause-btn"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" />
                                <rect x="14" y="4" width="4" height="16" />
                            </svg>
                            Pause
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onStop}
                            className="btn-danger flex-1 flex items-center justify-center gap-2"
                            id="stop-btn"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                            </svg>
                            Stop
                        </motion.button>
                    </div>
                )}

                {isPaused && (
                    <div className="flex gap-2">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onResume}
                            className="btn-primary flex-1 flex items-center justify-center gap-2"
                            id="resume-btn"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Resume
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onStop}
                            className="btn-danger flex-1 flex items-center justify-center gap-2"
                            id="stop-btn-paused"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                            </svg>
                            Stop
                        </motion.button>
                    </div>
                )}
            </div>

            {/* Error */}
            {isError && error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl text-sm border"
                    style={{ background: 'rgba(244, 63, 94, 0.1)', borderColor: 'rgba(244, 63, 94, 0.3)', color: '#f87171' }}
                >
                    <p className="font-medium">⚠️ {error}</p>
                    <p className="text-xs mt-1 opacity-70">Check that the backend is running on port 3001</p>
                </motion.div>
            )}
        </div>
    );
}

export default memo(ControlPanel);
