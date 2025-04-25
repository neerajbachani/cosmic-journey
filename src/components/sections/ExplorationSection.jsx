import { motion } from "framer-motion";

const missions = [
  {
    year: 1957,
    title: "Sputnik 1",
    description: "First artificial Earth satellite",
    icon: "🛰️",
    achievement: "Launched by the Soviet Union, it was the first human-made object to orbit Earth."
  },
  {
    year: 1961,
    title: "Vostok 1",
    description: "First human spaceflight",
    icon: "👨‍🚀",
    achievement: "Yuri Gagarin became the first human to journey into outer space."
  },
  {
    year: 1969,
    title: "Apollo 11",
    description: "First humans on the Moon",
    icon: "🌙",
    achievement: "Neil Armstrong and Buzz Aldrin became the first humans to walk on the lunar surface."
  },
  {
    year: 1990,
    title: "Hubble Space Telescope",
    description: "Revolutionary space telescope",
    icon: "🔭",
    achievement: "Provided unprecedented deep space images and revolutionized our understanding of the cosmos."
  },
  {
    year: 1997,
    title: "Mars Pathfinder",
    description: "Mars rover mission",
    icon: "🔴",
    achievement: "Deployed the Sojourner rover, the first wheeled vehicle to rove on another planet."
  },
  {
    year: 2021,
    title: "Perseverance Rover",
    description: "Mars 2020 mission",
    icon: "🚗",
    achievement: "Searching for signs of ancient life and collecting samples for potential return to Earth."
  }
];

export default function ExplorationSection() {
  return (
    <div id="exploration" className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Space Exploration</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto font-body">
            Humanity's journey beyond Earth has been marked by incredible achievements and bold missions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-accent-blue/30 transform md:translate-x-[-50%]"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {missions.map((mission, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-accent-blue transform translate-x-[-50%] z-10"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:px-12 ml-8 md:ml-0">
                    <div className="bg-space-medium/40 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-accent-teal/30 transition-colors">
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{mission.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white font-heading">{mission.title}</h3>
                          <p className="text-accent-teal">{mission.year}</p>
                        </div>
                      </div>
                      <p className="text-blue-100 mb-2 font-medium">{mission.description}</p>
                      <p className="text-blue-100/80 text-sm">{mission.achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future exploration */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4 font-heading">The Future of Exploration</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 font-body">
              What frontiers will humanity explore next? Mars colonization, interstellar travel, or new discoveries within our own solar system?
            </p>
            <a 
              href="#future-missions" 
              className="px-6 py-3 rounded-md bg-accent-purple text-white font-medium hover:bg-accent-purple/80 transition-colors inline-block"
            >
              Discover Future Missions
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}