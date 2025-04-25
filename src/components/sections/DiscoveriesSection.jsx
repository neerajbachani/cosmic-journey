import { motion } from "framer-motion";

const discoveries = [
  {
    title: "Black Hole First Image",
    year: 2019,
    image: "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The Event Horizon Telescope collaboration released the first direct image of a black hole, specifically the supermassive black hole at the center of galaxy M87."
  },
  {
    title: "Gravitational Waves",
    year: 2015,
    image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "LIGO detected gravitational waves produced by the collision of two black holes, confirming a major prediction of Einstein's general theory of relativity."
  },
  {
    title: "Exoplanets in Habitable Zone",
    year: 2020,
    image: "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "NASA's TESS mission has discovered numerous exoplanets in the habitable zone of their stars, where conditions might be right for liquid water and potentially life."
  },
  {
    title: "Water on Mars",
    year: 2018,
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Evidence of liquid water was discovered beneath the surface of Mars, raising new possibilities about potential habitability on the Red Planet."
  }
];

export default function DiscoveriesSection() {
  return (
    <div id="discoveries" className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Scientific Discoveries</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto font-body">
            Major breakthroughs that have transformed our understanding of the cosmos and our place within it.
          </p>
        </motion.div>

        {/* Discoveries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {discoveries.map((discovery, index) => (
            <motion.div
              key={index}
              className="bg-space-medium/40 backdrop-blur-md rounded-lg overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={discovery.image}
                  alt={discovery.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-white font-heading">{discovery.title}</h3>
                  <span className="text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full text-sm">
                    {discovery.year}
                  </span>
                </div>
                <p className="text-blue-100/90 font-body">{discovery.description}</p>
                <a 
                  href={`#discovery-${index}`} 
                  className="mt-4 inline-block text-accent-teal hover:text-accent-blue transition-colors"
                >
                  Read more
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive visualization */}
        <motion.div 
          className="mt-20 bg-space-medium/30 backdrop-blur-md p-8 rounded-lg border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center font-heading">Cosmic Phenomena Explained</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div 
              className="bg-space-dark/50 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent-blue/30 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-accent-blue"></div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-heading">Black Holes</h4>
              <p className="text-blue-100/80 font-body">Regions of spacetime where gravity is so strong that nothing can escape, not even light.</p>
            </motion.div>
            
            <motion.div 
              className="bg-space-dark/50 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center animate-spin-slow">
                <div className="w-8 h-8 rounded-full bg-yellow-300"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-heading">Neutron Stars</h4>
              <p className="text-blue-100/80 font-body">Incredibly dense stellar remnants formed from the collapsed core of a massive star.</p>
            </motion.div>
            
            <motion.div 
              className="bg-space-dark/50 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-purple-600/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute inset-4 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute inset-6 bg-purple-600/80 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                <div className="absolute inset-8 bg-purple-600 rounded-full"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-heading">Dark Matter</h4>
              <p className="text-blue-100/80 font-body">Mysterious substance that doesn't interact with light but exerts gravitational influence.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}