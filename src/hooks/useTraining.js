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
