import React from 'react';
import { Gate, Inputs } from '../types';

interface CircuitDiagramProps {
  gate: Gate;
  inputs: Inputs;
  output: boolean;
}

const Line: React.FC<{ x1: number; y1: number; x2: number; y2: number; active: boolean }> = ({ x1, y1, x2, y2, active }) => {
  const baseClasses = "transition-all duration-300";
  const activeClasses = "stroke-purple-500 [filter:drop-shadow(0_0_4px_rgba(168,85,247,0.8))] animate-signal-flow";
  const inactiveClasses = "stroke-purple-900/30";

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      strokeWidth={3}
      strokeDasharray={active ? "4 4" : "none"}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    />
  );
};


const CircuitDiagram: React.FC<CircuitDiagramProps> = ({ gate, inputs, output }) => {
  const inputKeys = Object.keys(inputs);
  
  const getInputY = (index: number): number => {
    switch (gate.numInputs) {
      case 1:
        return 30;
      case 2:
        return 20 + index * 20;
      case 3:
        return 15 + index * 15;
      default:
        return 30;
    }
  };

  const outputX = gate.svgInvertCircle ? 55 : 50;
  
  const textClasses = "fill-current text-purple-200/80 font-bold";
  const gateFillClass = "fill-black";


  return (
    <div className="flex-grow flex items-center justify-center w-full h-full p-4">
      <svg viewBox="-50 -10 200 80" className="w-full h-full">
        {/* Input Lines and Labels */}
        {inputKeys.map((key, index) => (
          <React.Fragment key={key}>
            <text x="-40" y={getInputY(index) + 3} fontSize="12" fontFamily="monospace" textAnchor="start" className={textClasses}>{key}</text>
            <Line x1={-30} y1={getInputY(index)} x2={0} y2={getInputY(index)} active={inputs[key]} />
          </React.Fragment>
        ))}

        {/* Gate Body */}
        <g transform="translate(0, 0)">
          <path
            d={gate.svgPath}
            strokeWidth={3}
            className={`${gateFillClass} transition-all duration-300 ${
              output
                ? 'stroke-purple-500 [filter:drop-shadow(0_0_6px_rgba(168,85,247,0.6))]'
                : 'stroke-purple-900/60'
            }`}
          />
          {gate.svgInvertCircle && (
            <circle
              cx={gate.name === 'NOT' ? 45 : 55}
              cy="30" r="5"
              strokeWidth={3}
              className={`${gateFillClass} transition-all duration-300 ${
                output
                  ? 'stroke-purple-500 [filter:drop-shadow(0_0_6px_rgba(168,85,247,0.6))]'
                  : 'stroke-purple-900/60'
              }`}
            />
          )}
        </g>
        
        {/* Output Line and Label */}
        <Line x1={gate.name === 'NOT' ? 50 : (gate.name === 'XNOR' || gate.name === 'XOR' ? 60 : outputX)} y1={30} x2={gate.name === 'NOT' ? 100 : 110} y2={30} active={output} />
        <text x={gate.name === 'NOT' ? 105 : 115} y="33" fontSize="12" fontFamily="monospace" textAnchor="start" className={textClasses}>Q</text>
      </svg>
    </div>
  );
};

export default CircuitDiagram;