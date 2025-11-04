import React from 'react';
import { Terminal } from 'lucide-react';

const CodeBlock = ({ children }) => (
  <pre className="relative overflow-x-auto rounded-lg border border-emerald-400/20 bg-black/70 p-4 text-emerald-300">
    <code className="whitespace-pre-wrap text-sm">{children}</code>
  </pre>
);

const CLITerminal = () => {
  return (
    <section id="cli" className="pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex items-center gap-3 text-emerald-300">
          <Terminal className="h-5 w-5" />
          <h2 className="text-lg font-medium tracking-wide">Terminal Velocity</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-emerald-400/20 bg-zinc-900/60 p-6">
            <h3 className="text-white">tokentrack.py</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Pull usage and spend from the terminal. Pipe to jq, grep, or your own scripts.
            </p>
            <div className="mt-4 space-y-3">
              <CodeBlock>
                $ python tokentrack.py --providers openai anthropic gemini 
                --window 24h --format table
              </CodeBlock>
              <CodeBlock>
                $ python tokentrack.py --raw --since 15m | jq '.events[] | {provider, tokens, cost}'
              </CodeBlock>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-400/20 bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 p-6">
            <h3 className="text-white">OpSec by design</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              <li>Keys never live in the browser. Ever.</li>
              <li>CLI talks to the same hardened proxy as the console.</li>
              <li>Audit the unfiltered JSON stream for absolute clarity.</li>
            </ul>
            <div className="mt-4 rounded-lg border border-emerald-400/20 bg-black/60 p-4 text-sm text-zinc-300">
              <p className="font-medium text-emerald-300">Sample JSON</p>
              <pre className="mt-2 overflow-x-auto text-emerald-200">{`
{
  "provider": "openai",
  "model": "gpt-4o-mini",
  "tokens_in": 1203,
  "tokens_out": 423,
  "cost_usd": 0.045,
  "ts": "2025-02-15T13:24:08Z"
}
`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLITerminal;
