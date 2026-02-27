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
