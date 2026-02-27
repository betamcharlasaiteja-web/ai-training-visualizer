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
