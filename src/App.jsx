import React from 'react';
import HeroCover from './components/HeroCover.jsx';
import SpikeConsole from './components/SpikeConsole.jsx';
import FeatureCards from './components/FeatureCards.jsx';
import CLITerminal from './components/CLITerminal.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroCover />
      <main>
        <SpikeConsole />
        <FeatureCards />
        <CLITerminal />
      </main>
      <footer className="border-t border-emerald-400/20 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-zinc-400">
          <p>DATASP1KE — Own the data stream. See the cost of the code.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
