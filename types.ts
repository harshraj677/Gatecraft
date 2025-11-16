// FIX: The original file was empty or contained placeholder text, causing 'not a module' errors.
// This new content defines the core application types used across different components.
export type GateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';

export interface Inputs {
  [key: string]: boolean;
}

export interface TruthTableRow {
  [key: string]: 0 | 1;
}

export interface Gate {
  name: GateType;
  description: string;
  numInputs: 1 | 2 | 3;
  logic: (...args: boolean[]) => boolean;
  truthTable: TruthTableRow[];
  svgPath: string;
  svgInvertCircle: boolean;
}
