# 🧠 AI Training Visualizer

An interactive neural network training simulator with real-time animated visualizations, 3D network views, and adjustable hyperparameters. Built with a modern **teal/amber** design palette.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-3D-000?logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)
![Express](https://img.shields.io/badge/Express-4-000?logo=express)

---

## ✨ Features

- **Control Panel** — Adjust learning rate, batch size, epochs, and simulation speed in real time
- **Neural Network Visualizer** — Animated 2D network graph with glowing nodes that change color based on loss
- **Real-Time Charts** — Loss and accuracy curves rendered with Recharts as training progresses
- **3D Network View** — Interactive Three.js scene with orbiting distorted spheres and particle fields
- **Training Stats** — Live stat cards for epoch count, current loss, accuracy, and best accuracy
- **Progress Bar** — Animated progress indicator with shimmer effect and ETA estimation
- **Dark / Light Mode** — Theme toggle with smooth transitions and warm teal/amber palette
- **Responsive Design** — Works on desktop, tablet, and mobile

---

## 🏗️ Architecture

```
ai-training-visualizer/
├── backend/
│   └── server.js              # Express API (port 3001)
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens & CSS variables
│   │   ├── layout.js          # Root layout with metadata
│   │   └── page.js            # Main dashboard page
│   ├── components/
│   │   ├── ChartPanel.jsx     # Loss & accuracy area charts
│   │   ├── ControlPanel.jsx   # Hyperparameter controls
│   │   ├── NeuralNetworkVisualizer.jsx  # 2D SVG neural network
│   │   ├── ProgressSection.jsx # Progress bar & status
│   │   ├── SkeletonLoader.jsx  # Loading skeleton states
│   │   ├── ThemeToggle.jsx     # Dark/light mode toggle
│   │   ├── ThreeScene.jsx      # 3D WebGL visualization
│   │   └── TrainingStats.jsx   # Live metric cards
│   ├── hooks/
│   │   └── useTraining.js     # Training state machine hook
│   └── lib/
│       └── api.js             # API client with retry logic
├── tailwind.config.js         # Theme colors & animations
├── package.json
└── README.md
```

### Frontend → Backend Flow

1. User configures hyperparameters via **ControlPanel**
2. Clicks **Start Training** → `useTraining` hook calls `POST /api/train`
3. Backend generates all epoch data instantly and returns it
4. Frontend plays back data epoch-by-epoch at the configured speed
5. Each tick updates charts, stats, neural network colors, and progress bar

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ai-training-visualizer.git
cd ai-training-visualizer

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Running Locally

You need **two terminals** — one for the frontend and one for the backend:

```bash
# Terminal 1 — Backend (port 3001)
cd backend
node server.js

# Terminal 2 — Frontend (port 3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001` | Backend API base URL |
| `PORT` (backend) | `3001` | Express server port |

Create a `.env.local` file in the project root to override:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 14 | App Router, SSR, file-based routing |
| **UI** | React 18 | Component architecture |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS with custom design tokens |
| **Animation** | Framer Motion 11 | Page transitions, micro-interactions |
| **Charts** | Recharts 2 | Loss & accuracy area charts |
| **3D** | Three.js + React Three Fiber | Interactive 3D neural network scene |
| **Backend** | Express 4 | REST API for training data simulation |
| **Fonts** | Inter, JetBrains Mono, Outfit | Typography via Google Fonts |

---

## 🎨 Design System

### Color Palette

The UI uses a warm, natural **teal/amber** palette — no generic AI-blue colors:

| Role | Dark Mode | Light Mode |
|------|-----------|------------|
| **Primary** | Teal `#14b8a6` | Teal `#0d9488` |
| **Accent** | Amber `#d97706` | Amber `#d97706` |
| **Gradient** | Teal → Gold | Teal → Amber |
| **Success** | Sage `#22c55e` | Green `#16a34a` |
| **Danger** | Terracotta `#e76f51` | Terracotta `#c4563d` |
| **Background** | Charcoal `#0c0f17` | Slate `#f8fafc` |

### Components

- **Glass Cards** — Frosted glass effect with `backdrop-blur(20px)` and subtle borders
- **Gradient Buttons** — Teal primary, terracotta danger, with hover lift effects
- **Sliders** — Teal-to-gold gradient track with white thumb and glow shadow
- **Skeleton Loaders** — Teal-tinted shimmer animation for loading states

---

## 📡 API Reference

### `POST /api/train`

Generate simulated training data.

**Request Body:**
```json
{
  "epochs": 50,
  "learningRate": 0.01,
  "batchSize": 32
}
```

**Response:**
```json
{
  "success": true,
  "data": [
    { "epoch": 1, "loss": 0.8921, "accuracy": 49.23 },
    { "epoch": 2, "loss": 0.7134, "accuracy": 58.67 },
    ...
  ]
}
```

### `GET /api/health`

Health check endpoint.

**Response:** `{ "status": "ok", "timestamp": 1234567890 }`

---

## 🧩 State Management

Training state is managed by the `useTraining` custom hook using a finite state machine:

```
IDLE → LOADING → TRAINING → COMPLETE
                    ↕            ↓
                  PAUSED      IDLE (reset)
                    ↓
                  TRAINING
        
Any state → ERROR → IDLE (retry)
```

The hook exposes:
- **State**: `status`, `params`, `trainingData`, `currentEpoch`, `progress`, `currentStats`, `bestAccuracy`
- **Actions**: `startTraining`, `pauseTraining`, `resumeTraining`, `stopTraining`, `retryTraining`, `updateParam`, `updateSpeed`

---

## 🏁 Production Build

```bash
# Build the frontend
npm run build

# Start production server
npm start
```

---

## 📄 License

MIT


---

## 👨‍💻 Author

** Sai Teja Betamcharla **

- 📧 Email: betamcharlasaiteja@gmail.com 
- 🔗 GitHub: https://github.com/betamcharlasaiteja-web  


