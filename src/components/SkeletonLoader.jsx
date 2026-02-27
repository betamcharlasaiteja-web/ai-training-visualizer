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
