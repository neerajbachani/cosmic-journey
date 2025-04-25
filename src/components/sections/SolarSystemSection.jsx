import { motion } from 'framer-motion';
import '../../styles/solar-system.css';

export default function SolarSystemSection() {
  return (
    <section id="solar-system" className="relative">
      <div className="solar-system-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Our Solar System
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto font-body">
              Explore the planets and objects orbiting our Sun, each with unique
              characteristics and mysteries to uncover.
            </p>
          </motion.div>

          {/* Solar System Animation */}
          <div className="container ml-[30rem] my-20 max-w-7xl  ">
            <div className="sun"></div>
            <div className="mercury"></div>
            <div className="venus"></div>
            <div className="earth">
              <div className="moon"></div>
            </div>
            <div className="mars"></div>
            <div className="jupiter"></div>
            <div className="saturn"></div>
            <div className="uranus"></div>
            <div className="neptune"></div>
            <div className="pluto"></div>
          </div>

          {/* Planet Information Cards */}
          <div className="mt-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planets.map((planet, index) => (
              <motion.div
                key={planet.id}
                className="bg-space-medium/40 backdrop-blur-md p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {planet.name}
                  </h3>
                </div>
                <p className="text-blue-100 mb-4 font-body">
                  {planet.description}
                </p>
                <div className="space-y-2">
                  {planet.facts.map((fact, i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-5 mt-0.5 mr-2 text-accent-teal">•</div>
                      <p className="text-sm text-blue-100/80">{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={`#${planet.id}`}
                    className="text-accent-teal hover:text-accent-blue transition-colors text-sm font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const planets = [
  {
    id: 'mercury',
    name: 'Mercury',
    description:
      'The smallest planet in our solar system and closest to the Sun.',
    facts: [
      'No atmosphere',
      'Extreme temperature variations',
      'Heavily cratered surface',
    ],
  },
  {
    id: 'venus',
    name: 'Venus',
    description:
      'Similar in size to Earth but with a toxic atmosphere and extreme heat.',
    facts: ['Hottest planet', 'Spins backwards', 'Thickest atmosphere'],
  },
  {
    id: 'earth',
    name: 'Earth',
    description:
      'Our home planet and the only known world with abundant liquid water and life.',
    facts: [
      'Only planet with liquid water on surface',
      'Has one natural satellite (Moon)',
      'Perfect conditions for life',
    ],
  },
  {
    id: 'mars',
    name: 'Mars',
    description:
      'The red planet with evidence of ancient rivers and potential for future exploration.',
    facts: [
      'Has the largest volcano in the solar system',
      'Contains polar ice caps',
      'Has two small moons',
    ],
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    description:
      'The largest planet with a distinctive striped appearance and powerful storms.',
    facts: [
      'Largest planet',
      'Great Red Spot is a persistent storm',
      'Has 79 known moons',
    ],
  },
  {
    id: 'saturn',
    name: 'Saturn',
    description:
      'Famous for its beautiful rings made of ice and rock particles.',
    facts: [
      'Has distinctive rings',
      'Less dense than water',
      'Has hexagonal cloud pattern at north pole',
    ],
  },
];
