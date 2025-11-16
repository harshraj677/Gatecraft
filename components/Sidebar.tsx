import React from 'react';

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-950 border-l border-purple-900/30 z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-purple-900/30">
          <h2 className="text-xl font-bold text-purple-400">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-purple-200 hover:text-white focus:outline-none p-1 rounded-md hover:bg-purple-900/20 transition-colors"
            aria-label="Close menu"
          >
            <XIcon />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <a
            href="#simulator"
            onClick={() => setSidebarOpen(false)}
            className="block px-4 py-3 rounded-md text-purple-100 hover:bg-purple-900/20 hover:text-white transition-colors border border-transparent hover:border-purple-900/30"
          >
            Simulator
          </a>
          <a
            href="#about"
            onClick={() => setSidebarOpen(false)}
            className="block px-4 py-3 rounded-md text-purple-100 hover:bg-purple-900/20 hover:text-white transition-colors border border-transparent hover:border-purple-900/30"
          >
            About
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;