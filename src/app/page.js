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
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-violet flex items-center justify-center shadow-glow-sm"
                            animate={{ rotate: isTraining ? 360 : 0 }}
                            transition={isTraining ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Brain outline — left hemisphere */}
                                <path d="M12 2C9.5 2 7.5 3.2 6.5 5C5.2 5.3 4 6.5 3.5 8C2.8 9.8 3 11.5 3.8 13C3.3 14.2 3.2 15.5 3.8 17C4.5 18.8 6 20 7.5 20.5C8.5 21.5 10 22 12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                {/* Brain outline — right hemisphere */}
                                <path d="M12 2C14.5 2 16.5 3.2 17.5 5C18.8 5.3 20 6.5 20.5 8C21.2 9.8 21 11.5 20.2 13C20.7 14.2 20.8 15.5 20.2 17C19.5 18.8 18 20 16.5 20.5C15.5 21.5 14 22 12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                {/* Central stem */}
                                <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                {/* Left branches */}
                                <line x1="12" y1="7" x2="7" y2="6" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                <line x1="12" y1="10.5" x2="6" y2="10" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                <line x1="12" y1="14" x2="6.5" y2="15" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                <line x1="12" y1="17" x2="7.5" y2="18.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                {/* Right branches */}
                                <line x1="12" y1="7" x2="17" y2="6" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                <line x1="12" y1="10.5" x2="18" y2="10" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                <line x1="12" y1="14" x2="17.5" y2="15" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                <line x1="12" y1="17" x2="16.5" y2="18.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                                {/* Neural nodes — center */}
                                <circle cx="12" cy="7" r="1.3" fill="white" />
                                <circle cx="12" cy="10.5" r="1.3" fill="white" />
                                <circle cx="12" cy="14" r="1.3" fill="white" />
                                <circle cx="12" cy="17" r="1.3" fill="white" />
                                {/* Neural nodes — left */}
                                <circle cx="7" cy="6" r="1" fill="white" opacity="0.9" />
                                <circle cx="6" cy="10" r="1" fill="white" opacity="0.9" />
                                <circle cx="6.5" cy="15" r="1" fill="white" opacity="0.9" />
                                <circle cx="7.5" cy="18.5" r="1" fill="white" opacity="0.9" />
                                {/* Neural nodes — right */}
                                <circle cx="17" cy="6" r="1" fill="white" opacity="0.9" />
                                <circle cx="18" cy="10" r="1" fill="white" opacity="0.9" />
                                <circle cx="17.5" cy="15" r="1" fill="white" opacity="0.9" />
                                <circle cx="16.5" cy="18.5" r="1" fill="white" opacity="0.9" />
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
                                    style={{ background: isTraining ? '#22c55e' : '#c2742e' }}
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
