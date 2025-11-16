import React from 'react';

interface OutputDisplayProps {
  output: boolean;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-xl font-medium text-purple-100">Output</h3>
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-16 h-16">
          <div
            className={`w-full h-full rounded-full transition-all duration-300 border border-purple-900/30 ${
              output
                ? 'bg-purple-500 animate-pulse'
                : 'bg-black'
            }`}
          />
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 ${
              output
                ? 'shadow-[0_0_25px_8px] shadow-purple-500/80 mix-blend-screen'
                : 'shadow-[inset_0_0_10px_rgba(88,28,135,0.2)]'
            }`}
          />
        </div>
        <span className={`font-mono text-2xl font-bold ${output ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'text-zinc-700'}`}>
          {output ? 1 : 0}
        </span>
      </div>
    </div>
  );
};

export default OutputDisplay;