import React from 'react';
import { Shield, Terminal, Cloud, Database } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'The Ghost (Secure Proxy)',
    desc:
      "OpSec-first design. Your keys never touch the street. Frontend talks to a hardened daemon that shields your creds.",
  },
  {
    icon: Cloud,
    title: 'Multi-Corp Ingest',
    desc:
      'Pull usage directly from OpenAI, Anthropic, Google, Cursor, and Perplexity into a unified stream.',
  },
  {
    icon: Terminal,
    title: 'Terminal Velocity (CLI)',
    desc:
      'Skip the GUI. Jack in with tokentrack.py for raw, scriptable telemetry right in your shell.',
  },
  {
    icon: Database,
    title: 'Unfiltered Stream',
    desc:
      'Audit-grade JSON payloads with no smoothing. What they see is what you see—live.',
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">The Rig</h2>
          <p className="mt-3 text-zinc-300">
            One console to stop the bleed. Built for operators who need certainty in real time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-red-400/20 bg-zinc-900/60 p-6 transition hover:border-red-400/40 hover:bg-zinc-900/80"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/15 text-red-400 ring-1 ring-inset ring-red-400/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
