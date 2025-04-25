import { motion } from "framer-motion";
import { World } from "../ui/Globe";
import { Mars, Venus } from "../ui/Planet";
import { DEFAULT_GLOBE_CONFIG, MISSION_DATA } from "../../lib/utils";

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Star field background is added in the main App component */}
      
      {/* Content positioned above Earth */}
      <motion.div 
        className="relative z-10 pt-32 px-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4 font-heading"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 100 
          }}
        >
          Cosmic Journey
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore the wonders of our universe through an interactive adventure
        </motion.p>
        
        <motion.div 
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#solar-system" 
            className="px-6 py-3 rounded-md bg-accent-blue text-white font-medium hover:bg-accent-blue/80 transition-colors"
          >
            Start Exploring
          </a>
          <a 
            href="#learn" 
            className="px-6 py-3 rounded-md bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
      
      {/* Neighboring planets */}
      <Venus className="animate-float" />
      <Mars className="animate-float delay-1000" />
      
      {/* Earth globe positioned at bottom center */}
      <motion.div 
        className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-full h-[600px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <World 
          data={MISSION_DATA} 
          globeConfig={DEFAULT_GLOBE_CONFIG} 
        />
      </motion.div>
      
      {/* Decorative elements - Orbits */}
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"></div>
      <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"></div>
    </div>
  );
}