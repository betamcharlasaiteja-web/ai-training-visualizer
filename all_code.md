# Project Code

## File: package.json

```json
{
  "name": "ai-training-visualizer",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@react-three/drei": "^9.117.3",
    "@react-three/fiber": "^8.17.10",
    "framer-motion": "^11.15.0",
    "next": "^14.2.21",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.15.0",
    "three": "^0.170.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "^14.2.21",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16"
  }
}

```

## File: next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
};

module.exports = nextConfig;

```

## File: tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                accent: {
                    cyan: '#22d3ee',
                    violet: '#8b5cf6',
                    rose: '#f43f5e',
                    emerald: '#10b981',
                    amber: '#f59e0b',
                },
                surface: {
                    DEFAULT: 'rgba(15, 15, 30, 0.8)',
                    light: 'rgba(255, 255, 255, 0.9)',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(99, 102, 241, 0.3)',
                'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
                'glow-lg': '0 0 40px rgba(99, 102, 241, 0.5)',
                'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
                'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.4)',
                'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.600)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: 0.4 },
                    '50%': { opacity: 1 },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

```

## File: postcss.config.js

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};

module.exports = config;

```

## File: .env.example

```example
# Backend API URL — set this to your deployed Render backend URL
# For local development, leave commented (defaults to http://localhost:3001)
# NEXT_PUBLIC_API_URL=https://your-backend-name.onrender.com

```

## File: README.md

```markdown
# ai-training-visualizer
ai-training-visualizer project

```

## File: .gitignore

```text
# dependencies
node_modules/
.pnp
.pnp.js

# testing
coverage/

# next.js
.next/
out/

# production
build/

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

## File: .eslintrc.json

```json
{
    "extends": "next/core-web-vitals"
}
```

## File: src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap');

:root {
  --bg-primary: #0a0a1a;
  --bg-secondary: #0f0f2e;
  --bg-card: rgba(15, 15, 40, 0.7);
  --bg-card-hover: rgba(25, 25, 60, 0.8);
  --border-color: rgba(99, 102, 241, 0.15);
  --border-glow: rgba(99, 102, 241, 0.4);
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-accent: #818cf8;
  --gradient-start: #6366f1;
  --gradient-end: #22d3ee;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #f43f5e;
}

.light {
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --bg-card: rgba(255, 255, 255, 0.85);
  --bg-card-hover: rgba(255, 255, 255, 0.95);
  --border-color: rgba(99, 102, 241, 0.15);
  --border-glow: rgba(99, 102, 241, 0.3);
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-accent: #4f46e5;
  --gradient-start: #6366f1;
  --gradient-end: #06b6d4;
  --glass-bg: rgba(255, 255, 255, 0.6);
  --glass-border: rgba(99, 102, 241, 0.1);
  --success: #059669;
  --warning: #d97706;
  --danger: #dc2626;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Background mesh gradient */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(34, 211, 238, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.light body::before {
  background:
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 70%),
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(34, 211, 238, 0.04) 0%, transparent 70%);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.5);
}

/* Glass card */
@layer components {
  .glass-card {
    background: var(--bg-card);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-color);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .glass-card-static {
    background: var(--bg-card);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
  }

  .neon-border {
    border: 1px solid var(--border-glow);
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.1), inset 0 0 15px rgba(99, 102, 241, 0.05);
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn-primary {
    @apply px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.45);
  }

  .btn-primary:active {
    transform: translateY(0px);
  }

  .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .btn-secondary {
    @apply px-6 py-3 rounded-xl font-semibold transition-all duration-300;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  }

  .btn-secondary:hover {
    border-color: var(--border-color);
    background: var(--bg-card-hover);
  }

  .btn-danger {
    @apply px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300;
    background: linear-gradient(135deg, #f43f5e, #e11d48);
    box-shadow: 0 4px 15px rgba(244, 63, 94, 0.3);
  }

  .btn-danger:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 25px rgba(244, 63, 94, 0.45);
  }

  .slider-custom {
    @apply w-full h-2 rounded-full appearance-none cursor-pointer;
    background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
    outline: none;
  }

  .slider-custom::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .slider-custom::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  .slider-custom::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border: none;
  }
}

/* Skeleton shimmer */
@keyframes skeleton-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    rgba(99, 102, 241, 0.05) 25%,
    rgba(99, 102, 241, 0.15) 50%,
    rgba(99, 102, 241, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite;
  border-radius: 8px;
}

/* Neural network glow animation */
@keyframes neuron-glow {
  0%, 100% {
    filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.7));
  }
}

/* Data flow animation */
@keyframes data-flow {
  0% {
    stroke-dashoffset: 20;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.recharts-cartesian-grid-horizontal line,
.recharts-cartesian-grid-vertical line {
  stroke: rgba(99, 102, 241, 0.08) !important;
}

.light .recharts-cartesian-grid-horizontal line,
.light .recharts-cartesian-grid-vertical line {
  stroke: rgba(0, 0, 0, 0.06) !important;
}

/* Responsive */
@media (max-width: 768px) {
  .glass-card {
    border-radius: 12px;
  }
}

```

## File: src/app/layout.js

```javascript
import './globals.css';

export const metadata = {
    title: 'AI Training Visualizer — Neural Network Simulator',
    description:
        'Interactive AI model training simulator dashboard. Visualize neural network training with real-time animated graphs, 3D visualizations, and adjustable hyperparameters.',
    keywords: ['AI', 'neural network', 'training', 'visualizer', 'machine learning', 'dashboard'],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">{children}</body>
        </html>
    );
}

```

## File: src/app/page.js

```javascript
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

```

## File: src/components/ChartPanel.jsx

```javascript
'use client';

import { memo, useMemo } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from 'recharts';

const CustomTooltip = ({ active, payload, label, type }) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="rounded-xl px-4 py-3 text-sm shadow-xl border"
                style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--glass-border)',
                    backdropFilter: 'blur(20px)',
                }}
            >
                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Epoch {label}
                </p>
                <p style={{ color: payload[0].color }}>
                    {type === 'loss' ? 'Loss' : 'Accuracy'}:{' '}
                    <span className="font-mono font-bold">
                        {type === 'loss' ? payload[0].value.toFixed(4) : `${payload[0].value.toFixed(2)}%`}
                    </span>
                </p>
            </div>
        );
    }
    return null;
};

function ChartPanel({ trainingData, isLoading }) {
    const chartData = useMemo(() => {
        return trainingData.map((d) => ({
            epoch: d.epoch,
            loss: d.loss,
            accuracy: d.accuracy,
        }));
    }, [trainingData]);

    if (isLoading) {
        return (
            <div className="glass-card p-5 space-y-4" id="chart-panel">
                <div className="skeleton h-6 w-32" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="skeleton h-[250px]" />
                    <div className="skeleton h-[250px]" />
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card p-5" id="chart-panel">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-emerald to-accent-cyan flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        Training Metrics
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {chartData.length > 0 ? `${chartData.length} epochs recorded` : 'No data yet'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Loss Chart */}
                <div
                    className="rounded-xl p-4 border"
                    style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                >
                    <h4 className="text-xs font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        Loss vs Epoch
                    </h4>
                    <div style={{ height: 220 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#f43f5e" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="epoch"
                                    tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                                    axisLine={{ stroke: 'var(--glass-border)' }}
                                    tickLine={false}
                                />
                                <YAxis
                                    tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                                    axisLine={{ stroke: 'var(--glass-border)' }}
                                    tickLine={false}
                                    domain={[0, 'auto']}
                                />
                                <Tooltip content={<CustomTooltip type="loss" />} />
                                <Area
                                    type="monotone"
                                    dataKey="loss"
                                    stroke="#f43f5e"
                                    strokeWidth={2.5}
                                    fill="url(#lossGradient)"
                                    dot={false}
                                    isAnimationActive={chartData.length <= 1}
                                    animationDuration={300}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Accuracy Chart */}
                <div
                    className="rounded-xl p-4 border"
                    style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                >
                    <h4 className="text-xs font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        Accuracy vs Epoch
                    </h4>
                    <div style={{ height: 220 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="accGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="epoch"
                                    tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                                    axisLine={{ stroke: 'var(--glass-border)' }}
                                    tickLine={false}
                                />
                                <YAxis
                                    tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                                    axisLine={{ stroke: 'var(--glass-border)' }}
                                    tickLine={false}
                                    domain={[0, 100]}
                                />
                                <Tooltip content={<CustomTooltip type="accuracy" />} />
                                <Area
                                    type="monotone"
                                    dataKey="accuracy"
                                    stroke="#10b981"
                                    strokeWidth={2.5}
                                    fill="url(#accGradient)"
                                    dot={false}
                                    isAnimationActive={chartData.length <= 1}
                                    animationDuration={300}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ChartPanel);

```

## File: src/components/ControlPanel.jsx

```javascript
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
                    <p className="text-xs mt-1 opacity-70">
                        {typeof window !== 'undefined' && window.location.hostname !== 'localhost'
                            ? 'Backend may be waking up (free tier). Try again in 30s.'
                            : 'Check that the backend is running on port 3001'}
                    </p>
                </motion.div>
            )}
        </div>
    );
}

export default memo(ControlPanel);

```

## File: src/components/NeuralNetworkVisualizer.jsx

```javascript
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
    if (!isTraining) return { node: '#6366f1', glow: 'rgba(99, 102, 241, 0.3)' };
    const t = Math.max(0, Math.min(1, 1 - loss));
    const r = Math.round(239 * (1 - t) + 16 * t);
    const g = Math.round(68 * (1 - t) + 185 * t);
    const b = Math.round(68 * (1 - t) + 129 * t);
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-primary-500 flex items-center justify-center">
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

```

## File: src/components/ProgressSection.jsx

```javascript
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
                color: '#10b981',
                dotColor: 'bg-emerald-400',
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
                color: '#6366f1',
                dotColor: 'bg-indigo-400',
                description: `Training finished — ${totalEpochs} epochs completed`,
            },
            error: {
                label: 'Error',
                color: '#f43f5e',
                dotColor: 'bg-rose-400',
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
                        background: `linear-gradient(90deg, ${statusConfig.color}, #818cf8)`,
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

```

## File: src/components/SkeletonLoader.jsx

```javascript
'use client';

import { memo } from 'react';

function SkeletonLoader({ variant = 'default' }) {
    if (variant === 'stats') {
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="glass-card p-4 space-y-3">
                        <div className="skeleton h-3 w-20" />
                        <div className="skeleton h-8 w-24" />
                        <div className="skeleton h-2 w-16" />
                    </div>
                ))}
            </div>
        );
    }

    if (variant === 'chart') {
        return (
            <div className="glass-card p-5 space-y-4">
                <div className="skeleton h-5 w-36" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="skeleton h-[260px]" />
                    <div className="skeleton h-[260px]" />
                </div>
            </div>
        );
    }

    if (variant === 'network') {
        return (
            <div className="glass-card p-5 space-y-4">
                <div className="skeleton h-5 w-32" />
                <div className="skeleton h-[250px]" />
            </div>
        );
    }

    if (variant === 'progress') {
        return (
            <div className="glass-card p-5 space-y-3">
                <div className="flex justify-between">
                    <div className="skeleton h-4 w-24" />
                    <div className="skeleton h-4 w-12" />
                </div>
                <div className="skeleton h-3 w-full rounded-full" />
            </div>
        );
    }

    return (
        <div className="glass-card p-5 space-y-3">
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-3/4" />
        </div>
    );
}

export default memo(SkeletonLoader);

```

## File: src/components/ThemeToggle.jsx

```javascript
'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            setIsDark(false);
            document.documentElement.classList.add('light');
        }
    }, []);

    const toggle = useCallback(() => {
        setIsDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.remove('light');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.add('light');
                localStorage.setItem('theme', 'light');
            }
            return next;
        });
    }, []);

    return (
        <motion.button
            onClick={toggle}
            className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300"
            style={{
                background: isDark
                    ? 'linear-gradient(135deg, #312e81, #1e1b4b)'
                    : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                border: '1px solid',
                borderColor: isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(245, 158, 11, 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
            id="theme-toggle"
        >
            <motion.div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                animate={{
                    x: isDark ? 0 : 26,
                    background: isDark ? '#818cf8' : '#ffffff',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={isDark ? 'moon' : 'sun'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="text-[10px]"
                    >
                        {isDark ? '🌙' : '☀️'}
                    </motion.span>
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
}

export default memo(ThemeToggle);

```

## File: src/components/ThreeScene.jsx

```javascript
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

```

## File: src/components/TrainingStats.jsx

```javascript
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

```

## File: src/hooks/useTraining.js

```javascript
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { fetchTrainingData } from '@/lib/api';

const INITIAL_PARAMS = {
    learningRate: 0.01,
    batchSize: 32,
    epochs: 50,
};

const STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    TRAINING: 'training',
    PAUSED: 'paused',
    COMPLETE: 'complete',
    ERROR: 'error',
};

export default function useTraining() {
    const [status, setStatus] = useState(STATUS.IDLE);
    const [params, setParams] = useState(INITIAL_PARAMS);
    const [trainingData, setTrainingData] = useState([]);
    const [currentEpoch, setCurrentEpoch] = useState(0);
    const [error, setError] = useState(null);
    const [speed, setSpeed] = useState(200); // ms per epoch tick

    const allDataRef = useRef([]);
    const intervalRef = useRef(null);
    const epochIndexRef = useRef(0);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const tickEpoch = useCallback(() => {
        const idx = epochIndexRef.current;
        const data = allDataRef.current;

        if (idx >= data.length) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setStatus(STATUS.COMPLETE);
            return;
        }

        setTrainingData((prev) => [...prev, data[idx]]);
        setCurrentEpoch(data[idx].epoch);
        epochIndexRef.current = idx + 1;
    }, []);

    const startPlayback = useCallback(
        (spd) => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(tickEpoch, spd);
        },
        [tickEpoch]
    );

    const startTraining = useCallback(async () => {
        setStatus(STATUS.LOADING);
        setError(null);
        setTrainingData([]);
        setCurrentEpoch(0);
        epochIndexRef.current = 0;

        try {
            const data = await fetchTrainingData(params);
            allDataRef.current = data;
            setStatus(STATUS.TRAINING);
            startPlayback(speed);
        } catch (err) {
            setError(err.message || 'Failed to fetch training data');
            setStatus(STATUS.ERROR);
        }
    }, [params, speed, startPlayback]);

    const pauseTraining = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setStatus(STATUS.PAUSED);
    }, []);

    const resumeTraining = useCallback(() => {
        setStatus(STATUS.TRAINING);
        startPlayback(speed);
    }, [speed, startPlayback]);

    const stopTraining = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        allDataRef.current = [];
        epochIndexRef.current = 0;
        setTrainingData([]);
        setCurrentEpoch(0);
        setStatus(STATUS.IDLE);
        setError(null);
    }, []);

    const retryTraining = useCallback(() => {
        startTraining();
    }, [startTraining]);

    const updateParam = useCallback((key, value) => {
        setParams((prev) => ({ ...prev, [key]: value }));
    }, []);

    const updateSpeed = useCallback(
        (newSpeed) => {
            setSpeed(newSpeed);
            // If actively training, restart interval with new speed
            if (status === STATUS.TRAINING && intervalRef.current) {
                clearInterval(intervalRef.current);
                startPlayback(newSpeed);
            }
        },
        [status, startPlayback]
    );

    // Derived values
    const totalEpochs = params.epochs;
    const progress = totalEpochs > 0 ? (currentEpoch / totalEpochs) * 100 : 0;
    const currentStats = trainingData.length > 0 ? trainingData[trainingData.length - 1] : null;
    const bestAccuracy =
        trainingData.length > 0 ? Math.max(...trainingData.map((d) => d.accuracy)) : 0;
    const isTraining = status === STATUS.TRAINING;
    const isLoading = status === STATUS.LOADING;
    const isPaused = status === STATUS.PAUSED;
    const isComplete = status === STATUS.COMPLETE;
    const isIdle = status === STATUS.IDLE;
    const isError = status === STATUS.ERROR;
    const canStart = isIdle || isComplete || isError;

    return {
        // State
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

        // Booleans
        isTraining,
        isLoading,
        isPaused,
        isComplete,
        isIdle,
        isError,
        canStart,

        // Actions
        startTraining,
        pauseTraining,
        resumeTraining,
        stopTraining,
        retryTraining,
        updateParam,
        updateSpeed,
    };
}

```

## File: src/lib/api.js

```javascript
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Retry wrapper with exponential backoff.
 * @param {Function} fn - Async function to retry
 * @param {number} retries - Max retries
 * @param {number} delay - Initial delay in ms
 */
async function withRetry(fn, retries = 3, delay = 500) {
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === retries) throw error;
            const backoff = delay * Math.pow(2, attempt);
            await new Promise((resolve) => setTimeout(resolve, backoff));
        }
    }
}

/**
 * Fetch training data from the backend.
 * @param {{ epochs: number, learningRate: number, batchSize: number }} params
 * @returns {Promise<Array<{ epoch: number, loss: number, accuracy: number }>>}
 */
export async function fetchTrainingData(params) {
    return withRetry(async () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        try {
            const response = await fetch(`${API_BASE}/api/train`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params),
                signal: controller.signal,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Server error: ${response.status}`);
            }

            const result = await response.json();

            if (!result.success || !Array.isArray(result.data)) {
                throw new Error('Invalid response format');
            }

            return result.data;
        } finally {
            clearTimeout(timeoutId);
        }
    });
}

/**
 * Health check endpoint.
 */
export async function checkHealth() {
    try {
        const response = await fetch(`${API_BASE}/api/health`);
        return response.ok;
    } catch {
        return false;
    }
}

```

## File: backend/package-lock.json

```json
{
    "name": "ai-training-backend",
    "version": "1.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
        "": {
            "name": "ai-training-backend",
            "version": "1.0.0",
            "dependencies": {
                "cors": "^2.8.5",
                "express": "^4.21.1"
            }
        },
        "node_modules/accepts": {
            "version": "1.3.8",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
            "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
            "license": "MIT",
            "dependencies": {
                "mime-types": "~2.1.34",
                "negotiator": "0.6.3"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/array-flatten": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
            "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
            "license": "MIT"
        },
        "node_modules/body-parser": {
            "version": "1.20.4",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.4.tgz",
            "integrity": "sha512-ZTgYYLMOXY9qKU/57FAo8F+HA2dGX7bqGc71txDRC1rS4frdFI5R7NhluHxH6M0YItAP0sHB4uqAOcYKxO6uGA==",
            "license": "MIT",
            "dependencies": {
                "bytes": "~3.1.2",
                "content-type": "~1.0.5",
                "debug": "2.6.9",
                "depd": "2.0.0",
                "destroy": "~1.2.0",
                "http-errors": "~2.0.1",
                "iconv-lite": "~0.4.24",
                "on-finished": "~2.4.1",
                "qs": "~6.14.0",
                "raw-body": "~2.5.3",
                "type-is": "~1.6.18",
                "unpipe": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8",
                "npm": "1.2.8000 || >= 1.4.16"
            }
        },
        "node_modules/bytes": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
            "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/call-bind-apply-helpers": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
            "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0",
                "function-bind": "^1.1.2"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/call-bound": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
            "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
            "license": "MIT",
            "dependencies": {
                "call-bind-apply-helpers": "^1.0.2",
                "get-intrinsic": "^1.3.0"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/content-disposition": {
            "version": "0.5.4",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
            "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
            "license": "MIT",
            "dependencies": {
                "safe-buffer": "5.2.1"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/content-type": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
            "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/cookie": {
            "version": "0.7.2",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
            "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/cookie-signature": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.7.tgz",
            "integrity": "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==",
            "license": "MIT"
        },
        "node_modules/cors": {
            "version": "2.8.6",
            "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
            "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
            "license": "MIT",
            "dependencies": {
                "object-assign": "^4",
                "vary": "^1"
            },
            "engines": {
                "node": ">= 0.10"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "license": "MIT",
            "dependencies": {
                "ms": "2.0.0"
            }
        },
        "node_modules/depd": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
            "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/destroy": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
            "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8",
                "npm": "1.2.8000 || >= 1.4.16"
            }
        },
        "node_modules/dunder-proto": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
            "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
            "license": "MIT",
            "dependencies": {
                "call-bind-apply-helpers": "^1.0.1",
                "es-errors": "^1.3.0",
                "gopd": "^1.2.0"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
            "license": "MIT"
        },
        "node_modules/encodeurl": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
            "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/es-define-property": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
            "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/es-errors": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
            "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/es-object-atoms": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
            "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
            "license": "MIT"
        },
        "node_modules/etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/express": {
            "version": "4.22.1",
            "resolved": "https://registry.npmjs.org/express/-/express-4.22.1.tgz",
            "integrity": "sha512-F2X8g9P1X7uCPZMA3MVf9wcTqlyNp7IhH5qPCI0izhaOIYXaW9L535tGA3qmjRzpH+bZczqq7hVKxTR4NWnu+g==",
            "license": "MIT",
            "dependencies": {
                "accepts": "~1.3.8",
                "array-flatten": "1.1.1",
                "body-parser": "~1.20.3",
                "content-disposition": "~0.5.4",
                "content-type": "~1.0.4",
                "cookie": "~0.7.1",
                "cookie-signature": "~1.0.6",
                "debug": "2.6.9",
                "depd": "2.0.0",
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "finalhandler": "~1.3.1",
                "fresh": "~0.5.2",
                "http-errors": "~2.0.0",
                "merge-descriptors": "1.0.3",
                "methods": "~1.1.2",
                "on-finished": "~2.4.1",
                "parseurl": "~1.3.3",
                "path-to-regexp": "~0.1.12",
                "proxy-addr": "~2.0.7",
                "qs": "~6.14.0",
                "range-parser": "~1.2.1",
                "safe-buffer": "5.2.1",
                "send": "~0.19.0",
                "serve-static": "~1.16.2",
                "setprototypeof": "1.2.0",
                "statuses": "~2.0.1",
                "type-is": "~1.6.18",
                "utils-merge": "1.0.1",
                "vary": "~1.1.2"
            },
            "engines": {
                "node": ">= 0.10.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/finalhandler": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.2.tgz",
            "integrity": "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==",
            "license": "MIT",
            "dependencies": {
                "debug": "2.6.9",
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "on-finished": "~2.4.1",
                "parseurl": "~1.3.3",
                "statuses": "~2.0.2",
                "unpipe": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/forwarded": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
            "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/function-bind": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
            "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
            "license": "MIT",
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/get-intrinsic": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
            "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
            "license": "MIT",
            "dependencies": {
                "call-bind-apply-helpers": "^1.0.2",
                "es-define-property": "^1.0.1",
                "es-errors": "^1.3.0",
                "es-object-atoms": "^1.1.1",
                "function-bind": "^1.1.2",
                "get-proto": "^1.0.1",
                "gopd": "^1.2.0",
                "has-symbols": "^1.1.0",
                "hasown": "^2.0.2",
                "math-intrinsics": "^1.1.0"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/get-proto": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
            "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
            "license": "MIT",
            "dependencies": {
                "dunder-proto": "^1.0.1",
                "es-object-atoms": "^1.0.0"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/gopd": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
            "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/has-symbols": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
            "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/hasown": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
            "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
            "license": "MIT",
            "dependencies": {
                "function-bind": "^1.1.2"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/http-errors": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
            "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
            "license": "MIT",
            "dependencies": {
                "depd": "~2.0.0",
                "inherits": "~2.0.4",
                "setprototypeof": "~1.2.0",
                "statuses": "~2.0.2",
                "toidentifier": "~1.0.1"
            },
            "engines": {
                "node": ">= 0.8"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "license": "MIT",
            "dependencies": {
                "safer-buffer": ">= 2.1.2 < 3"
            },
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
            "license": "ISC"
        },
        "node_modules/ipaddr.js": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.10"
            }
        },
        "node_modules/math-intrinsics": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
            "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/merge-descriptors": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
            "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
            "license": "MIT",
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
            "license": "MIT",
            "bin": {
                "mime": "cli.js"
            },
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/mime-db": {
            "version": "1.52.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
            "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/mime-types": {
            "version": "2.1.35",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
            "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
            "license": "MIT",
            "dependencies": {
                "mime-db": "1.52.0"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
            "license": "MIT"
        },
        "node_modules/negotiator": {
            "version": "0.6.3",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
            "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/object-assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
            "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/object-inspect": {
            "version": "1.13.4",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
            "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/on-finished": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
            "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
            "license": "MIT",
            "dependencies": {
                "ee-first": "1.1.1"
            },
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/path-to-regexp": {
            "version": "0.1.12",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.12.tgz",
            "integrity": "sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==",
            "license": "MIT"
        },
        "node_modules/proxy-addr": {
            "version": "2.0.7",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
            "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
            "license": "MIT",
            "dependencies": {
                "forwarded": "0.2.0",
                "ipaddr.js": "1.9.1"
            },
            "engines": {
                "node": ">= 0.10"
            }
        },
        "node_modules/qs": {
            "version": "6.14.2",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.2.tgz",
            "integrity": "sha512-V/yCWTTF7VJ9hIh18Ugr2zhJMP01MY7c5kh4J870L7imm6/DIzBsNLTXzMwUA3yZ5b/KBqLx8Kp3uRvd7xSe3Q==",
            "license": "BSD-3-Clause",
            "dependencies": {
                "side-channel": "^1.1.0"
            },
            "engines": {
                "node": ">=0.6"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/range-parser": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/raw-body": {
            "version": "2.5.3",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz",
            "integrity": "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==",
            "license": "MIT",
            "dependencies": {
                "bytes": "~3.1.2",
                "http-errors": "~2.0.1",
                "iconv-lite": "~0.4.24",
                "unpipe": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/safe-buffer": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
            "funding": [
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/feross"
                },
                {
                    "type": "patreon",
                    "url": "https://www.patreon.com/feross"
                },
                {
                    "type": "consulting",
                    "url": "https://feross.org/support"
                }
            ],
            "license": "MIT"
        },
        "node_modules/safer-buffer": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
            "license": "MIT"
        },
        "node_modules/send": {
            "version": "0.19.2",
            "resolved": "https://registry.npmjs.org/send/-/send-0.19.2.tgz",
            "integrity": "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==",
            "license": "MIT",
            "dependencies": {
                "debug": "2.6.9",
                "depd": "2.0.0",
                "destroy": "1.2.0",
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "fresh": "~0.5.2",
                "http-errors": "~2.0.1",
                "mime": "1.6.0",
                "ms": "2.1.3",
                "on-finished": "~2.4.1",
                "range-parser": "~1.2.1",
                "statuses": "~2.0.2"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/send/node_modules/ms": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
            "license": "MIT"
        },
        "node_modules/serve-static": {
            "version": "1.16.3",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.3.tgz",
            "integrity": "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==",
            "license": "MIT",
            "dependencies": {
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "parseurl": "~1.3.3",
                "send": "~0.19.1"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/setprototypeof": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
            "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
            "license": "ISC"
        },
        "node_modules/side-channel": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
            "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0",
                "object-inspect": "^1.13.3",
                "side-channel-list": "^1.0.0",
                "side-channel-map": "^1.0.1",
                "side-channel-weakmap": "^1.0.2"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/side-channel-list": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
            "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0",
                "object-inspect": "^1.13.3"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/side-channel-map": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
            "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
            "license": "MIT",
            "dependencies": {
                "call-bound": "^1.0.2",
                "es-errors": "^1.3.0",
                "get-intrinsic": "^1.2.5",
                "object-inspect": "^1.13.3"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/side-channel-weakmap": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
            "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
            "license": "MIT",
            "dependencies": {
                "call-bound": "^1.0.2",
                "es-errors": "^1.3.0",
                "get-intrinsic": "^1.2.5",
                "object-inspect": "^1.13.3",
                "side-channel-map": "^1.0.1"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/statuses": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
            "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/toidentifier": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
            "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
            "license": "MIT",
            "engines": {
                "node": ">=0.6"
            }
        },
        "node_modules/type-is": {
            "version": "1.6.18",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
            "license": "MIT",
            "dependencies": {
                "media-typer": "0.3.0",
                "mime-types": "~2.1.24"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/unpipe": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/utils-merge": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
            "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4.0"
            }
        },
        "node_modules/vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        }
    }
}

```

## File: backend/package.json

```json
{
    "name": "ai-training-backend",
    "version": "1.0.0",
    "description": "Express backend for AI Training Visualizer",
    "main": "server.js",
    "scripts": {
        "start": "node server.js",
        "dev": "node server.js"
    },
    "dependencies": {
        "cors": "^2.8.5",
        "express": "^4.21.1"
    }
}
```

## File: backend/server.js

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Allow all origins in production (Render/Vercel), restrict in dev
const allowedOrigins = process.env.NODE_ENV === 'production'
    ? '*'
    : ['http://localhost:3000', 'http://127.0.0.1:3000'];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

/**
 * Generate realistic training simulation data.
 * Loss decays exponentially with noise; accuracy grows logarithmically with noise.
 */
function generateTrainingData(epochs, learningRate, batchSize) {
    const data = [];
    // Scale factors — higher LR = faster convergence, larger batch = slightly slower
    const lrScale = Math.log10(learningRate * 1000 + 1) / Math.log10(1001); // 0→1 for lr 0.001→1
    const convergenceRate = 2.5 + lrScale * 3; // 2.5 to 5.5
    const batchPenalty = 1 - (batchSize - 16) / 1200; // tiny slowdown for bigger batches

    for (let i = 0; i < epochs; i++) {
        const progress = (i + 1) / epochs;
        const t = progress * convergenceRate * batchPenalty;

        // Loss: exponential decay from ~0.92 to near 0, with diminishing noise
        const lossBase = 0.92 * Math.exp(-t);
        const lossNoise = (Math.random() - 0.5) * 0.06 * Math.exp(-t * 0.5);
        const loss = Math.max(0.005, lossBase + lossNoise);

        // Accuracy: climb from ~48% to ~97%
        const accBase = 48 + 49 * (1 - Math.exp(-t * 1.2));
        const accNoise = (Math.random() - 0.5) * 3 * Math.exp(-progress);
        const accuracy = Math.min(99.5, Math.max(30, accBase + accNoise));

        data.push({
            epoch: i + 1,
            loss: parseFloat(loss.toFixed(4)),
            accuracy: parseFloat(accuracy.toFixed(2)),
        });
    }

    return data;
}

// POST /api/train — returns full training data
app.post('/api/train', (req, res) => {
    try {
        const { epochs = 50, learningRate = 0.01, batchSize = 32 } = req.body;

        // Validate inputs
        if (epochs < 1 || epochs > 200) {
            return res.status(400).json({ error: 'Epochs must be between 1 and 200' });
        }
        if (learningRate <= 0 || learningRate > 1) {
            return res.status(400).json({ error: 'Learning rate must be between 0 and 1' });
        }
        if (![16, 32, 64, 128, 256].includes(batchSize)) {
            return res.status(400).json({ error: 'Batch size must be one of: 16, 32, 64, 128, 256' });
        }

        const data = generateTrainingData(epochs, learningRate, batchSize);

        // Simulate slight network delay
        setTimeout(() => {
            res.json({ success: true, data });
        }, 300 + Math.random() * 200);
    } catch (error) {
        console.error('Training error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET / — root landing (so Render URL shows something useful)
app.get('/', (req, res) => {
    res.json({
        service: 'AI Training Visualizer API',
        status: 'running',
        endpoints: {
            'POST /api/train': 'Start training simulation (body: { epochs, learningRate, batchSize })',
            'GET /api/health': 'Health check',
        },
    });
});

// GET /api/health — health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: Date.now() });
});

app.listen(PORT, () => {
    console.log(`🧠 AI Training Backend running on http://localhost:${PORT}`);
});

```

