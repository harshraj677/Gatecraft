import React from 'react';
import { Gate, Inputs } from '../types';

interface TruthTableProps {
  gate: Gate;
  currentInputs: Inputs;
}

const TruthTable: React.FC<TruthTableProps> = ({ gate, currentInputs }) => {
  const headers = Object.keys(gate.truthTable[0]);
  const currentInputValues = Object.values(currentInputs).map(val => val ? 1 : 0);

  const isRowActive = (row: { [key: string]: 0 | 1 }) => {
    if (gate.numInputs !== currentInputValues.length) return false;
    const rowInputValues = headers.slice(0, gate.numInputs).map(header => row[header]);
    return rowInputValues.every((val, index) => val === currentInputValues[index]);
  };

  return (
    <div className="bg-zinc-950/50 p-4 sm:p-6 rounded-lg shadow-lg shadow-purple-900/5 h-full border border-purple-900/30">
      <h2 className="text-xl font-semibold text-purple-400 mb-4 text-center">{gate.name} Gate Truth Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-center font-mono border-collapse">
          <thead>
            <tr className="border-b border-purple-900/50">
              {headers.map((header) => (
                <th key={header} className="p-2 text-purple-300 font-medium tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gate.truthTable.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-purple-900/10 transition-colors duration-300 ${
                  isRowActive(row) ? 'bg-purple-900/30 shadow-[inset_0_0_10px_rgba(168,85,247,0.1)]' : 'hover:bg-purple-900/10'
                }`}
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={`p-2 ${
                      header === 'Output' ? 'font-bold' : ''
                    } ${
                      row[header] === 1 ? 'text-purple-400' : 'text-zinc-600'
                    }`}
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TruthTable;