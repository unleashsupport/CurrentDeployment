import { motion } from 'framer-motion';

export const RealEstateShape = (colors: string[]) => (
  <g className="cube-building transform-style-3d">
    {/* Building base */}
    <motion.path
      d="M30,25 L50,15 L70,25 L70,75 L30,75 Z"
      fill={`url(#gradient-${colors[0].slice(1)})`}
      className="preserve-3d"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    />
    
    {/* Windows with lighting effect */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[0, 1].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={40 + col * 15}
              y={35 + row * 12}
              width="8"
              height="8"
              fill={colors[1]}
              className="preserve-3d"
              opacity={0.9 - (row * 0.2)}
            />
          ))}
        </g>
      ))}
    </motion.g>
  </g>
);