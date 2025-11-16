import React from 'react';

const GitHubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
    <title>Twitter</title>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-purple-900/30 mt-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Branding & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-500">GateCraft</h3>
            <p className="text-purple-200/60 text-sm">
              Stay ahead in digital electronics. Join our newsletter for updates, tutorials, and new features.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="w-full bg-zinc-900 text-purple-100 placeholder-purple-700/50 px-3 py-2 rounded-md border border-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button 
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-purple-700 text-white px-3 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200 border border-purple-600"
              >
                Go
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-100 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#simulator" className="text-purple-200/60 hover:text-purple-400 transition-colors duration-200">
                  Simulator
                </a>
              </li>
              <li>
                <a href="#about" className="text-purple-200/60 hover:text-purple-400 transition-colors duration-200">
                  About GateCraft
                </a>
              </li>
            </ul>
          </div>
          
          {/* Technology Stack */}
          <div>
            <h3 className="text-lg font-semibold text-purple-100 tracking-wider uppercase">
              Technology
            </h3>
            <ul className="mt-4 space-y-2 text-purple-200/60">
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Gemini API</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-purple-100 tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-purple-300/60 hover:text-purple-400 transition-colors duration-200" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="#" className="text-purple-300/60 hover:text-purple-400 transition-colors duration-200" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="text-purple-300/60 hover:text-purple-400 transition-colors duration-200" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

        </div>
        <div className="mt-8 border-t border-purple-900/30 pt-6 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-purple-200/40">
          <p>&copy; {new Date().getFullYear()} GateCraft. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;