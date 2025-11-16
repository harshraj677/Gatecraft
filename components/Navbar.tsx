import React from 'react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

interface NavbarProps {
  setSidebarOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black/90 border-b border-purple-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 hover:to-white transition-all duration-300">
              GateCraft
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#simulator"
                className="text-purple-200 hover:bg-purple-900/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Simulator
              </a>
              <a
                href="#about"
                className="text-purple-200 hover:bg-purple-900/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-purple-900/20 inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;