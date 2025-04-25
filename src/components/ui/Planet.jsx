import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Planet({ name, color, size, position, className, children }) {
  return (
    <motion.div
      className={cn(
        `absolute z-20 rounded-full ${size} ${position}`,
        className
      )}
      style={{
        background: color,
        boxShadow: `0 0 20px rgba(${color}, 0.5)`,
      }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -10, 0],
        transition: { 
          opacity: { duration: 1 },
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function Mars({ className }) {
  return (
    <Planet
      name="Mars"
      color="linear-gradient(135deg, #c1440e, #7a2c0c)"
      size="w-24 h-24 md:w-32 md:h-32"
      position="right-10 bottom-40"
      className={className}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute w-8 h-6 bg-[#902d09] rounded-full top-4 left-8 opacity-70"></div>
        <div className="absolute w-10 h-10 bg-[#902d09] rounded-full bottom-2 right-3 opacity-70"></div>
      </div>
    </Planet>
  );
}

export function Venus({ className }) {
  return (
    <Planet
      name="Venus"
      color="linear-gradient(135deg, #a67c52, #8a6642)"
      size="w-24 h-24 md:w-32 md:h-32"
      position="left-10 bottom-40"
      className={className}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute w-full h-2 bg-[#c4966a] top-6 opacity-40"></div>
        <div className="absolute w-full h-2 bg-[#c4966a] top-12 opacity-40"></div>
        <div className="absolute w-full h-2 bg-[#c4966a] top-18 opacity-40"></div>
      </div>
    </Planet>
  );
}