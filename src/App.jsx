import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import SolarSystemSection from './components/sections/SolarSystemSection';
import ExplorationSection from './components/sections/ExplorationSection';
import DiscoveriesSection from './components/sections/DiscoveriesSection';
import Footer from './components/layout/Footer';
import { StarField } from './components/ui/StarField';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-space-darkest flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center animate-pulse mb-4">
            <div className="w-12 h-12 rounded-full bg-space-darkest flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">Cosmic Journey</h2>
          <p className="text-blue-100/70 mt-2 font-body">Preparing for launch...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-darkest text-white overflow-hidden">
      {/* Background Star Field */}
      <StarField />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <SolarSystemSection />
        <ExplorationSection />
        <DiscoveriesSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}