import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden bg-black">
      {/* Spline 3D scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/QrI46EbSvyxcmozb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-red-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
              Live usage telemetry
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              DATASP1KE
            </h1>
            <p className="mt-4 text-lg md:text-xl text-red-200/90">
              Own the data stream. See the cost of the code.
            </p>
            <p className="mt-4 max-w-xl text-sm md:text-base text-zinc-300">
              Unified, real-time visibility across OpenAI, Anthropic, Google, Cursor, and Perplexity. Your ops, your terms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#console"
                className="rounded-md bg-red-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-red-500/25 transition hover:bg-red-400"
              >
                Open Spike Console
              </a>
              <a
                href="#cli"
                className="rounded-md border border-red-400/40 bg-black/40 px-5 py-3 text-sm font-medium text-red-200 hover:bg-black/60"
              >
                Run via CLI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
