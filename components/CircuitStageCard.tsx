import React from 'react';
import { Gate, Inputs } from '../types';
import CircuitDiagram from './CircuitDiagram';
import InputControls from './InputControls';
import OutputDisplay from './OutputDisplay';

interface CircuitStageCardProps {
  gate: Gate;
  inputs: Inputs;
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>;
  output: boolean;
}

const CircuitStageCard: React.FC<CircuitStageCardProps> = ({
  gate,
  inputs,
  setInputs,
  output,
}) => {
  return (
    <div className="bg-zinc-950/50 p-4 sm:p-6 rounded-lg shadow-lg shadow-purple-900/5 flex flex-col gap-6 h-full border border-purple-900/30">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-400">{gate.name} Gate</h2>
        <p className="text-purple-200/60 mt-1">{gate.description}</p>
      </div>
      <div className="flex-grow min-h-[200px] sm:min-h-[250px] flex items-center justify-center">
        <CircuitDiagram gate={gate} inputs={inputs} output={output} />
      </div>
      <div className="border-t border-purple-900/30 pt-6 flex flex-col sm:flex-row items-center justify-around gap-6">
        <InputControls inputs={inputs} setInputs={setInputs} />
        <OutputDisplay output={output} />
      </div>
    </div>
  );
};

export default CircuitStageCard;