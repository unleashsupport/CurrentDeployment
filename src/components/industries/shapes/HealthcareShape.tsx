import { motion } from 'framer-motion';

export const HealthcareShape = (colors: string[]) => (
  <g className="cube-health transform-style-3d">
    {/* Medical cross with 3D effect */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <rect
        x="44"
        y="25"
        width="12"
        height="50"
        rx="6"
        fill={`url(#gradient-${colors[0].slice(1)})`}
        className="preserve-3d"
      />
      <rect
        x="25"
        y="44"
        width="50"
        height="12"
        rx="6"
        fill={`url(#gradient-${colors[0].slice(1)})`}
        className="preserve-3d"
      />
    </motion.g>
    
    {/* Pulse line effect */}
    <motion.path
      d="M30,50 Q40,50 45,35 Q50,65 55,50 Q60,50 70,50"
      stroke={colors[1]}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  </g>
);