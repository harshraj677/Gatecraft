import React, { useState, useEffect, useCallback } from 'react';
import { GateType, Inputs } from './types';
import { GATES } from './constants';
import GateSelector from './components/GateSelector';
import CircuitStageCard from './components/CircuitStageCard';
import TruthTable from './components/TruthTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { ShimmerButton } from './components/ui/shimmer-button';
import { GoogleGenAI } from "@google/genai";

function App() {
  const [selectedGate, setSelectedGate] = useState<GateType>('AND');
  const [inputs, setInputs] = useState<Inputs>({});
  const [output, setOutput] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const gate = GATES[selectedGate];

  useEffect(() => {
    const newInputs: Inputs = {};
    const inputLabels = ['A', 'B', 'C'];
    for (let i = 0; i < gate.numInputs; i++) {
      newInputs[inputLabels[i]] = false;
    }
    setInputs(newInputs);
    setAiDescription('');
  }, [selectedGate, gate.numInputs]);

  useEffect(() => {
    const inputValues = Object.values(inputs);
    if (inputValues.length === gate.numInputs) {
      const result = gate.logic(...inputValues);
      setOutput(result);
    }
  }, [inputs, gate]);

  const handleSelectGate = useCallback((gate: GateType) => {
    setSelectedGate(gate);
  }, []);
  
  const getAIDescription = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setAiDescription('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Explain the ${gate.name} logic gate in a simple and fun way, like you're explaining it to a beginner. Use an analogy. Keep it under 50 words.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const text = response.text;
      setAiDescription(text);
    } catch (e: any) {
      setError(`Error fetching explanation: ${e.message}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [gate.name]);


  return (
    <div className="bg-black text-purple-50 min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="text-center my-8 md:my-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">GateCraft</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-purple-200/60 max-w-3xl mx-auto">
            An interactive playground for learning and experimenting with digital logic gates. Select a gate, toggle the inputs, and see the magic happen!
          </p>
        </header>

        <section id="simulator" className="space-y-8">
          <div className="p-4 sm:p-6 bg-zinc-950/50 border border-purple-900/30 rounded-lg shadow-lg shadow-purple-900/5">
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-100">
              Select a Logic Gate
            </h2>
            <GateSelector
              selectedGate={selectedGate}
              onSelectGate={handleSelectGate}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CircuitStageCard
              gate={gate}
              inputs={inputs}
              setInputs={setInputs}
              output={output}
            />
            <TruthTable gate={gate} currentInputs={inputs} />
          </div>

          <div id="about" className="p-6 bg-zinc-950/50 border border-purple-900/30 rounded-lg text-center shadow-lg shadow-purple-900/5">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">What is a {gate.name} Gate?</h2>
            <p className="text-purple-200/70 mb-6 max-w-2xl mx-auto">{gate.description}</p>
            <ShimmerButton className="shadow-2xl shadow-purple-900/20" onClick={getAIDescription} disabled={isLoading} background="#1a1a1a" shimmerColor="#a855f7">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                {isLoading ? "Crafting Explanation..." : "Ask Gemini ✨"}
              </span>
            </ShimmerButton>
            
            {error && <p className="mt-4 text-red-400">{error}</p>}
            
            {aiDescription && (
              <div className="mt-6 p-4 bg-black border border-purple-800/50 rounded-md text-left max-w-2xl mx-auto animate-fade-in shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <p className="text-purple-100 whitespace-pre-wrap leading-relaxed">{aiDescription}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;