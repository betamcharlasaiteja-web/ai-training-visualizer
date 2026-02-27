## 🧠 AI Training Visualizer

An interactive, full-stack AI model training simulator dashboard built with **Next.js 14** and **Express.js**. Visualize neural network training in real time with animated SVG networks, live loss/accuracy charts, a 3D interactive scene, and a polished glassmorphism dark/light UI.

![Built with](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey?logo=express)
![Three.js](https://img.shields.io/badge/Three.js-r170-orange?logo=three.js)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## 📑 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [State Management](#-state-management)
- [Animation Approach](#-animation-approach)
- [Performance Strategy](#-performance-strategy)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Training Simulation** | Start, Pause, Resume, and Stop with adjustable speed control |
| **Hyperparameter Controls** | Learning Rate slider, Batch Size grid, Epochs slider |
| **Neural Network Visualization** | SVG-based network with loss-driven color transitions (red → green) and pulsing glow animations |
| **Real-Time Charts** | Dual area charts (Loss ↓ and Accuracy ↑) with gradient fills and custom tooltips via Recharts |
| **3D Interactive Scene** | Distorted neuron spheres, connection lines, and particle field with OrbitControls via Three.js |
| **Live Stats Cards** | Animated number transitions with epoch-over-epoch trend indicators |
| **Progress Bar** | Gradient-filled progress with shimmer animation and ETA estimation |
| **Dark / Light Theme** | Spring-animated toggle persisted to `localStorage` |
| **Skeleton Loaders** | Variant-aware shimmer placeholders for all panels during loading |
| **Error Handling** | 3-retry with exponential backoff, timeout handling, and user-friendly error messages |
| **Responsive Design** | 12-column CSS Grid on desktop → single-column stacked layout on mobile |

---

## 🏗 Architecture

The project follows a **client–server** architecture with a clear separation between data generation (backend) and visualization (frontend).

```
┌───────────────────────────────────────────────────────────────────────┐
│                        CLIENT  (Next.js 14)                         │
│                                                                       │
│  ┌─────────────┐     ┌──────────────────────────────────────────────┐ │
│  │  page.js     │────▶│             useTraining() Hook              │ │
│  │  (Dashboard) │     │  status │ params │ trainingData │ actions   │ │
│  └──────┬───────┘     └─────────────────┬────────────────────────────┘ │
│         │                               │                             │
│         │  props ↓                      │  fetchTrainingData()        │
│  ┌──────┴───────────────────────┐       │  ↓                          │
│  │  Components (memoized)       │  ┌────┴──────────┐                  │
│  │  ├─ ControlPanel             │  │   api.js       │                 │
│  │  ├─ NeuralNetworkVisualizer  │  │  (retry +      │                 │
│  │  ├─ ChartPanel               │  │   timeout)     │                 │
│  │  ├─ TrainingStats            │  └────┬───────────┘                 │
│  │  ├─ ProgressSection          │       │                             │
│  │  ├─ ThreeScene (lazy)        │       │  HTTP POST                  │
│  │  ├─ ThemeToggle              │       ▼                             │
│  │  └─ SkeletonLoader           │  ┌────────────────┐                 │
│  └──────────────────────────────┘  │ Express Server  │                │
│                                     │ POST /api/train │                │
│                                     │ GET  /api/health│                │
│                                     └─────────────────┘               │
└───────────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. The user sets hyperparameters (learning rate, batch size, epochs) in `ControlPanel` and clicks **Start Training**.
2. `useTraining()` calls `fetchTrainingData()` in `api.js`, which sends a POST request to the Express backend.
3. The backend generates a full array of `{ epoch, loss, accuracy }` objects using a simulated decay curve with realistic noise.
4. The hook stores the full dataset in a `useRef` and replays it epoch-by-epoch via `setInterval`, appending one data point at a time to trigger incremental UI updates.
5. All visualization components receive the current state via props from the root `page.js` component.

### Component Responsibilities

| Component | Role |
|-----------|------|
| `page.js` | Root dashboard — responsive 12-column grid layout, owns all state via `useTraining()`, passes data down |
| `ControlPanel` | Sliders, batch size selector, and Start/Pause/Resume/Stop buttons |
| `NeuralNetworkVisualizer` | SVG with 4 layers (Input → Hidden 1 → Hidden 2 → Output), animated connections and nodes |
| `ChartPanel` | Two Recharts `AreaChart` instances with gradient fills — Loss vs Epoch, Accuracy vs Epoch |
| `TrainingStats` | Four stat cards — Current Epoch, Current Loss, Accuracy, Best Accuracy — with trend arrows |
| `ProgressSection` | Overall training progress bar with epoch counter, status label, and ETA |
| `ThreeScene` | 3D `@react-three/fiber` canvas with distorted spheres, connection lines, particles, and OrbitControls |
| `ThemeToggle` | Dark ↔ Light mode switch with Framer Motion spring animation |
| `SkeletonLoader` | Shimmer placeholders rendered during loading and Suspense fallbacks |

---

## 🔄 State Management

State is managed entirely through **React hooks** with a single custom hook — `useTraining()` — that encapsulates the full training lifecycle. There is no external state library (no Redux, Zustand, or Context).

### `useTraining()` — The Central Hook

```
┌─────────────────────────────────────────────────────────────────┐
│                       useTraining() Hook                        │
├────────────────┬────────────────────────────────────────────────┤
│  React State   │  status, params, trainingData, currentEpoch,  │
│  (useState)    │  error, speed                                 │
├────────────────┼────────────────────────────────────────────────┤
│  Refs          │  allDataRef (full dataset from API)            │
│  (useRef)      │  intervalRef (playback timer)                  │
│                │  epochIndexRef (current replay position)       │
├────────────────┼────────────────────────────────────────────────┤
│  Derived       │  totalEpochs, progress, currentStats,         │
│  Values        │  bestAccuracy, boolean flags (isTraining,      │
│                │  isPaused, canStart, etc.)                     │
├────────────────┼────────────────────────────────────────────────┤
│  Actions       │  startTraining, pauseTraining, resumeTraining, │
│  (useCallback) │  stopTraining, retryTraining, updateParam,     │
│                │  updateSpeed                                   │
└────────────────┴────────────────────────────────────────────────┘
```

### Status State Machine

The training lifecycle follows a finite state machine with six states:

```
            ┌──── retry ────┐
            ▼               │
  IDLE ──▶ LOADING ──▶ TRAINING ──▶ COMPLETE
                          │   ▲
                       pause resume
                          ▼   │
                        PAUSED
                          │
                         stop
                          ▼
                         IDLE

   (any state) ──error──▶ ERROR ──retry──▶ LOADING
```

### Why Refs For Playback

- **`allDataRef`** — Stores the full dataset from the API. Using a ref avoids re-renders when the dataset is set; components only re-render when individual epochs are appended to `trainingData` via `useState`.
- **`intervalRef`** — Holds the `setInterval` ID for the epoch playback timer. Needed for pause/resume/stop without stale closures.
- **`epochIndexRef`** — Tracks the current replay position. Using a ref prevents the `tickEpoch` callback from needing the index in its dependency array, avoiding unnecessary re-creation.

### Props-Down Architecture

All state flows **top-down** from `page.js` via props. There are no callbacks bubbling events upward beyond the `ControlPanel` action handlers (`onStart`, `onPause`, `onResume`, `onStop`, etc.), which call the hook's memoized actions directly.

---

## 🎬 Animation Approach

Animations are driven by three distinct engines depending on the context:

### 1. Framer Motion — UI & SVG Animations

Used for all React component animations and the SVG neural network:

| What | How |
|------|-----|
| **Neural network connections** | `motion.line` with animated `strokeOpacity` and `strokeWidth` pulsing in a staggered loop (`delay` per connection) |
| **Neural network nodes** | `motion.circle` with animated `fillOpacity` and expanding/contracting glow rings |
| **Stat card numbers** | `AnimatePresence` with `mode="wait"` — outgoing value slides up and fades, incoming value slides in |
| **Button interactions** | `whileHover={{ scale: 1.02 }}` and `whileTap={{ scale: 0.98 }}` for micro-interactions |
| **Header spinner** | Logo icon rotates continuously during training via `animate={{ rotate: 360 }}` with `repeat: Infinity` |
| **Theme toggle** | Spring-animated knob translation between dark/light positions |
| **Error banners** | `initial={{ opacity: 0, y: -10 }}` → `animate={{ opacity: 1, y: 0 }}` slide-in |

### 2. Three.js / React Three Fiber — 3D Scene

Used for the interactive 3D neural network visualization:

| What | How |
|------|-----|
| **Neuron spheres** | `MeshDistortMaterial` with distortion factor driven by training progress (`0.2` idle → `0.6` at 100%) |
| **Sphere rotation** | `useFrame` loop — continuous rotation at speed proportional to `isTraining` |
| **Floating effect** | `@react-three/drei` `Float` wrapper with configurable `speed`, `rotationIntensity`, and `floatIntensity` |
| **Connection lines** | Pulsating opacity via `useFrame` sine wave — `0.15 + sin(t * 2) * 0.1` |
| **Particle field** | 80-point `bufferGeometry` with slow group rotation in `useFrame` |
| **Camera orbit** | `OrbitControls` with `autoRotate` — faster (`2`) during training, slower (`0.5`) when idle |

### 3. CSS Keyframe Animations

Used for lightweight, non-interactive visual effects:

| What | How |
|------|-----|
| **Skeleton shimmer** | `background-position` animation sweeping a gradient highlight across placeholder elements |
| **Neuron glow** | `drop-shadow` filter keyframe pulsing between `4px` and `12px` blur |
| **Data flow lines** | `stroke-dashoffset` animation for directional flow effect on SVG paths |
| **Progress bar shimmer** | Gradient sweep animation on the progress fill bar |

### Color-As-Data Principle

The neural network visualization uses **color as a real-time data indicator**:

```
Loss = 1.0 (high)  →  rgb(239, 68, 68)   🔴 Red
Loss = 0.5 (mid)   →  rgb(128, 127, 99)   🟡 Orange-ish
Loss = 0.0 (low)   →  rgb(16, 185, 129)   🟢 Green
```

The `lossToColor()` function linearly interpolates between red and green, providing an intuitive at-a-glance indicator of training health. This same interpolation is applied to the 3D scene neurons via `activeColor`.

---

## ⚡ Performance Strategy

### Component Memoization

Every visualization component is wrapped with `React.memo()` to prevent unnecessary re-renders:

```
React.memo(ChartPanel)               — only re-renders when trainingData/isLoading changes
React.memo(NeuralNetworkVisualizer)  — only re-renders when loss/isTraining/epoch changes
React.memo(ThreeScene)               — only re-renders when progress/isTraining changes
React.memo(TrainingStats)            — only re-renders when stats/epoch data changes
React.memo(ControlPanel)             — only re-renders when params/status flags change
```

### Hook-Level Optimizations

| Technique | Where | Why |
|-----------|-------|-----|
| `useCallback` | All action functions in `useTraining()` | Prevents child components from re-rendering when the parent re-renders (stable function references) |
| `useMemo` | Chart data transformation in `ChartPanel`, SVG connections/colors in `NeuralNetworkVisualizer`, 3D positions/connections in `ThreeScene` | Avoids expensive recalculations on every render |
| `useRef` | Full dataset, interval ID, epoch index | Stores mutable values without triggering re-renders |

### Code Splitting — Lazy Loading

`ThreeScene` (which bundles Three.js at ~170 KB gzipped) is loaded via `React.lazy()` + `Suspense`:

```jsx
const ThreeScene = lazy(() => import('@/components/ThreeScene'));

<Suspense fallback={<SkeletonLoader variant="network" />}>
  <ThreeScene progress={progress} isTraining={isTraining} />
</Suspense>
```

This keeps the **initial page load** fast (145 KB first load JS) — the 3D scene loads asynchronously with a shimmer placeholder.

### Chart Append Strategy

Recharts can be slow when re-animating the entire chart on every data update. The project avoids this by:

1. **Disabling animation after the first data point** — `isAnimationActive={chartData.length <= 1}`
2. **Appending new points** to the existing array instead of replacing it — the hook uses `setTrainingData((prev) => [...prev, newPoint])` so React and Recharts only diff the new entry.

### 3D Scene Optimizations

| Technique | Detail |
|-----------|--------|
| **DPR capping** | `dpr={[1, 1.5]}` — limits pixel ratio to 1.5× max, preventing expensive rendering on Retina displays |
| **Low particle count** | Only 80 particles in the particle field |
| **Memoized geometry** | `BufferGeometry` and `Vector3` arrays are created once via `useMemo` |
| **Anti-aliased but alpha** | `gl={{ antialias: true, alpha: true }}` — transparent background avoids extra compositing layer |

### CSS Performance

- **`backdrop-filter: blur(20px)`** for glassmorphism uses GPU-accelerated compositing
- **`will-change`-ready** transitions on glass cards with `transition: all 0.3s cubic-bezier(...)`
- **Custom scrollbar** with minimal paint — `6px` track with no background fill

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | Next.js 14 (App Router) | SSR, routing, code splitting |
| **UI Animation** | Framer Motion 11 | Component animations, SVG animations, layout transitions |
| **Charts** | Recharts 2 | Responsive area charts with gradient fills |
| **3D Graphics** | Three.js + @react-three/fiber + @react-three/drei | 3D neural network scene with OrbitControls |
| **Styling** | Tailwind CSS 3 + CSS Custom Properties | Utility-first styling with theme-aware design tokens |
| **Fonts** | Inter, JetBrains Mono, Outfit (Google Fonts) | Modern typography for UI, code, and headings |
| **Backend** | Express.js 5 | REST API for training data simulation |
| **HTTP Client** | Fetch API + custom retry wrapper | Requests with exponential backoff and timeout |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation & Running

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Start the backend
cd ai-training-backend
npm install
node server.js
# → Running on http://localhost:5000

# 3. Start the frontend (in a new terminal)
cd ai-training-visualizer
npm install
npm run dev
# → Running on http://localhost:3000
```

> **Note:** The frontend expects the backend API at `http://localhost:3001` by default. You can override this with the `NEXT_PUBLIC_API_URL` environment variable.

### Build for Production

```bash
cd ai-training-visualizer
npm run build
npm start
```

---

## 📁 Project Structure

```
ai-training-visualizer/
├── backend/
│   ├── server.js                  # Express API — POST /api/train, GET /api/health
│   └── package.json
├── src/
│   ├── app/
│   │   ├── globals.css            # Design system — theme vars, glassmorphism, buttons
│   │   ├── layout.js              # Root layout — fonts, metadata, theme provider
│   │   └── page.js                # Dashboard — 12-col grid, useTraining hook
│   ├── components/
│   │   ├── ControlPanel.jsx       # Sliders, batch size grid, action buttons
│   │   ├── NeuralNetworkVisualizer.jsx  # SVG animated 4-layer neural net
│   │   ├── ChartPanel.jsx         # Dual area charts (Loss, Accuracy)
│   │   ├── TrainingStats.jsx      # Animated stat cards with trends
│   │   ├── ProgressSection.jsx    # Progress bar + ETA
│   │   ├── ThreeScene.jsx         # 3D react-three-fiber scene
│   │   ├── ThemeToggle.jsx        # Dark/Light toggle
│   │   └── SkeletonLoader.jsx     # Shimmer loading placeholders
│   ├── hooks/
│   │   └── useTraining.js         # Training lifecycle state machine
│   └── lib/
│       └── api.js                 # API client with retry + timeout
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

---

## ⚙️ Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001` | Backend API base URL |

---

## 📄 License

ISC
