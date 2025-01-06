import { motion } from 'framer-motion';

export const LawShape = (colors: string[]) => (
  <g className="cube-law transform-style-3d">
    {/* Scale beam */}
    <motion.rect
      x="25"
      y="35"
      width="50"
      height="4"
      fill={`url(#gradient-${colors[0].slice(1)})`}
      className="preserve-3d"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
    />
    
    {/* Scale plates with physics animation */}
    <motion.g
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      {[35, 65].map((cx, i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy="45"
            r="8"
            fill={colors[1]}
            className="preserve-3d"
          />
          <circle
            cx={cx}
            cy="45"
            r="4"
            fill={colors[0]}
            opacity={0.6}
            className="preserve-3d"
          />
        </g>
      ))}
    </motion.g>
    
    {/* Center pillar */}
    <motion.rect
      x="48"
      y="30"
      width="4"
      height="40"
      fill={colors[1]}
      className="preserve-3d"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    />
  </g>
);