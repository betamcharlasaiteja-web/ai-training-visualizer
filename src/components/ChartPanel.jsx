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
