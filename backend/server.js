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
