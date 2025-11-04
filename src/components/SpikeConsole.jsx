import React from 'react';
import { Activity } from 'lucide-react';

// Simple sparkline component for the "token bleed" visualization
const Sparkline = ({ points = [] }) => {
  const width = 320;
  const height = 72;
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const norm = (v) => ((v - min) / (max - min || 1)) * (height - 8) + 4;
  const step = width / (points.length - 1 || 1);
  const path = points
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step},${height - norm(v)}`)
    .join(' ');

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="url(#spark)" strokeWidth="2" />
      <g>
        {points.map((v, i) => (
          <circle key={i} cx={i * step} cy={height - norm(v)} r="1.8" fill="#34d399" />
        ))}
      </g>
    </svg>
  );
};

const SpikeConsole = () => {
  // Example synthetic data for different providers
  const data = {
    OpenAI: [4, 6, 9, 7, 12, 16, 14, 18, 20, 17, 22, 19],
    Anthropic: [2, 3, 4, 3, 5, 6, 7, 6, 8, 7, 9, 10],
    Gemini: [1, 2, 2, 3, 2, 4, 5, 3, 4, 6, 5, 7],
    Perplexity: [1, 1, 1, 2, 2, 3, 2, 3, 4, 3, 5, 4],
  };

  const items = Object.entries(data);
  const total = items.reduce((sum, [, arr]) => sum + arr[arr.length - 1], 0);

  return (
    <section id="console" className="relative -mt-12 pb-8 sm:pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex items-center gap-3 text-emerald-300">
          <Activity className="h-5 w-5" />
          <h2 className="text-lg font-medium tracking-wide">Unified Spike Console</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([provider, points]) => (
            <div key={provider} className="rounded-xl border border-emerald-400/20 bg-zinc-900/60 p-4 backdrop-blur">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300">{provider}</span>
                <span className="text-sm text-emerald-400">{points[points.length - 1]} creds/min</span>
              </div>
              <Sparkline points={points} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-4">
          <p className="text-sm text-zinc-300">
            Current burn rate across rigs
          </p>
          <p className="text-2xl font-semibold text-emerald-400">
            {total.toFixed(0)} creds/min
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpikeConsole;
