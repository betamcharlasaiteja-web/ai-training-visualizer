'use client';

import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import useTraining from '@/hooks/useTraining';
import ControlPanel from '@/components/ControlPanel';
import NeuralNetworkVisualizer from '@/components/NeuralNetworkVisualizer';
import ChartPanel from '@/components/ChartPanel';
import TrainingStats from '@/components/TrainingStats';
import ProgressSection from '@/components/ProgressSection';
import ThemeToggle from '@/components/ThemeToggle';
import SkeletonLoader from '@/components/SkeletonLoader';

const ThreeScene = lazy(() => import('@/components/ThreeScene'));

export default function Home() {
    const {
        status,
        params,
        trainingData,
        currentEpoch,
        totalEpochs,
        progress,
        currentStats,
        bestAccuracy,
        error,
        speed,
        isTraining,
        isLoading,
        isPaused,
        isComplete,
        isIdle,
        isError,
        canStart,
        startTraining,
        pauseTraining,
        resumeTraining,
        stopTraining,
        retryTraining,
        updateParam,
        updateSpeed,
    } = useTraining();

    return (
        <main className="min-h-screen relative z-10">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: 'var(--glass-border)', background: 'var(--bg-card)' }}>
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 via-accent-violet to-accent-cyan flex items-center justify-center shadow-glow-sm"
                            animate={{ rotate: isTraining ? 360 : 0 }}
                            transition={isTraining ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                                <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
                                <path d="M12 22a4 4 0 0 1-4-4c0-1.95 1.4-3.58 3.25-3.93" />
                                <path d="M12 22a4 4 0 0 0 4-4c0-1.95-1.4-3.58-3.25-3.93" />
                                <circle cx="12" cy="12" r="2" fill="white" />
                            </svg>
                        </motion.div>
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold">
                                <span className="gradient-text">AI Training</span>
                                <span style={{ color: 'var(--text-primary)' }}> Visualizer</span>
                            </h1>
                            <p className="text-[11px] hidden sm:block" style={{ color: 'var(--text-secondary)' }}>
                                Interactive Neural Network Simulator
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {(isTraining || isPaused) && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg"
                                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: isTraining ? '#10b981' : '#f59e0b' }}
                                    animate={isTraining ? { scale: [1, 1.3, 1] } : {}}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                />
                                <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                                    Epoch {currentEpoch}/{totalEpochs}
                                </span>
                            </motion.div>
                        )}
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    {/* Sidebar — Control Panel */}
                    <aside className="lg:col-span-3 space-y-5">
                        <ControlPanel
                            params={params}
                            onUpdateParam={updateParam}
                            speed={speed}
                            onUpdateSpeed={updateSpeed}
                            onStart={startTraining}
                            onPause={pauseTraining}
                            onResume={resumeTraining}
                            onStop={stopTraining}
                            onRetry={retryTraining}
                            isTraining={isTraining}
                            isLoading={isLoading}
                            isPaused={isPaused}
                            isComplete={isComplete}
                            isError={isError}
                            canStart={canStart}
                            error={error}
                        />

                        {/* 3D Scene — Sidebar on desktop */}
                        <div className="hidden lg:block">
                            <Suspense fallback={<SkeletonLoader variant="network" />}>
                                <ThreeScene progress={progress} isTraining={isTraining} />
                            </Suspense>
                        </div>
                    </aside>

                    {/* Main Area */}
                    <div className="lg:col-span-9 space-y-5">
                        {/* Progress */}
                        <ProgressSection
                            progress={progress}
                            status={status}
                            currentEpoch={currentEpoch}
                            totalEpochs={totalEpochs}
                            speed={speed}
                        />

                        {/* Stats */}
                        <TrainingStats
                            currentStats={currentStats}
                            bestAccuracy={bestAccuracy}
                            currentEpoch={currentEpoch}
                            totalEpochs={totalEpochs}
                            trainingData={trainingData}
                        />

                        {/* Neural Network Visualizer */}
                        <NeuralNetworkVisualizer
                            currentLoss={currentStats?.loss}
                            isTraining={isTraining}
                            currentEpoch={currentEpoch}
                        />

                        {/* Charts */}
                        <ChartPanel
                            trainingData={trainingData}
                            isLoading={isLoading}
                        />

                        {/* 3D Scene — Full width on mobile */}
                        <div className="lg:hidden">
                            <Suspense fallback={<SkeletonLoader variant="network" />}>
                                <ThreeScene progress={progress} isTraining={isTraining} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t mt-8 py-4" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
                    <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                        AI Training Visualizer · Built with Next.js, Framer Motion, Recharts & Three.js
                    </p>
                </div>
            </footer>
        </main>
    );
}
