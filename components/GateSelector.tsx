import React from 'react';
import { GateType } from '../types';
import { GATES } from '../constants';

interface GateSelectorProps {
  selectedGate: GateType;
  onSelectGate: (gate: GateType) => void;
}

const GateSelector: React.FC<GateSelectorProps> = ({
  selectedGate,
  onSelectGate,
}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
      {(Object.keys(GATES) as GateType[]).map((gateKey) => (
        <div key={gateKey} className="relative group flex items-center">
          <button
            onClick={() => onSelectGate(gateKey)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-600 text-sm sm:text-base transform-gpu ${
              selectedGate === gateKey
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-500'
                : 'bg-black text-purple-200 border border-purple-900/40 hover:bg-purple-900/20 hover:border-purple-500/50 hover:scale-105 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]'
            }`}
          >
            <span>{gateKey}</span>
            {GATES[gateKey].numInputs === 3 && (
              <span
                className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${selectedGate === gateKey ? 'bg-purple-800 text-white' : 'bg-purple-900/50 text-purple-200'}`}
                title="This gate supports 3 inputs"
              >
                3
              </span>
            )}
          </button>
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs p-3 text-center text-xs text-purple-100 bg-black border border-purple-500/50 rounded-md shadow-lg shadow-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible pointer-events-none z-20"
            role="tooltip"
          >
            {GATES[gateKey].description}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-purple-500/50"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GateSelector;