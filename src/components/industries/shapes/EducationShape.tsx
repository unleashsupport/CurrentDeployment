import { motion } from 'framer-motion';

export const EducationShape = (colors: string[]) => (
  <g className="cube-education transform-style-3d">
    {/* Graduation cap */}
    <motion.path
      d="M25,45 L50,35 L75,45 L50,55 Z"
      fill={`url(#gradient-${colors[0].slice(1)})`}
      className="preserve-3d"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    />
    
    {/* Tassel with animation */}
    <motion.path
      d="M45,48 C45,60 50,65 55,60 L55,48"
      fill={colors[1]}
      className="preserve-3d"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    />
    
    {/* Book pages effect */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.6 }}
    >
      {[0, 2, 4].map((offset) => (
        <rect
          key={offset}
          x={40 + offset}
          y={45 + offset}
          width="20"
          height="3"
          fill={colors[1]}
          opacity={0.8 - (offset * 0.2)}
          className="preserve-3d"
        />
      ))}
    </motion.g>
  </g>
);