import { motion } from 'framer-motion';

export const EcommerceShape = (colors: string[]) => (
  <g className="cube-cart transform-style-3d">
    {/* Cart body */}
    <motion.path
      d="M25,45 L75,45 L65,65 L35,65 Z"
      fill={`url(#gradient-${colors[0].slice(1)})`}
      className="preserve-3d"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />
    
    {/* Wheels with animation */}
    <motion.g
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {[40, 60].map((cx, i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy="70"
            r="5"
            fill={colors[1]}
            className="preserve-3d"
          />
          <circle
            cx={cx}
            cy="70"
            r="2"
            fill={colors[0]}
            className="preserve-3d"
          />
        </g>
      ))}
    </motion.g>
  </g>
);