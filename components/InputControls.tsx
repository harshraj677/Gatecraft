import React from 'react';
import { Inputs } from '../types';

interface InputControlsProps {
  inputs: Inputs;
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>;
}

const InputControls: React.FC<InputControlsProps> = ({ inputs, setInputs }) => {
  const toggleInput = (key: string) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [key]: !prevInputs[key],
    }));
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-xl font-medium text-purple-100">Inputs</h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {Object.keys(inputs).map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <span className="font-mono text-xl font-bold text-purple-400">{key}</span>
            <button
              onClick={() => toggleInput(key)}
              aria-label={`Toggle Input ${key}`}
              className={`
                relative inline-flex items-center h-8 w-16 rounded-full border border-purple-900/30
                transition-colors duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-600
                transform-gpu transition-transform active:scale-95
                ${inputs[key] ? 'bg-purple-600 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]' : 'bg-zinc-900'}
              `}
            >
              <span
                className={`
                  inline-block h-6 w-6 transform rounded-full shadow-lg
                  transition-transform duration-300 ease-in-out
                  ${inputs[key] ? 'translate-x-9 bg-white' : 'translate-x-1 bg-purple-900/50'}
                `}
              />
            </button>
            <span className={`font-mono text-2xl font-bold ${inputs[key] ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'text-zinc-700'}`}>
              {inputs[key] ? 1 : 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputControls;