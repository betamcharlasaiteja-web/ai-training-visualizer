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
