import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Solar System', path: '#solar-system' },
    { name: 'Exploration', path: '#exploration' },
    { name: 'Discoveries', path: '#discoveries' },
    { name: 'Learn', path: '#learn' },
  ];
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-space-darkest/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="sr-only">Cosmic Journey</span>
              <motion.div 
                className="flex items-center" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-space-darkest flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue"></div>
                  </div>
                </div>
                <span className="ml-2 text-xl font-bold font-heading text-white">Cosmic Journey</span>
              </motion.div>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md inline-flex items-center justify-center text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-base font-medium text-white hover:text-accent-teal transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#about"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue"
            >
              About
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-space-dark/90 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-medium hover:text-accent-teal"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#about"
                className="block w-full text-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-accent-blue to-accent-purple"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}