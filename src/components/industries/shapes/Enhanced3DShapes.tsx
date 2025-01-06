import { motion } from 'framer-motion';

// Helper function for creating depth effects
const createDepthEffect = (color: string) => ({
  filter: `drop-shadow(0 2px 3px ${color}40) drop-shadow(0 4px 6px ${color}30)`,
});

// Helper for gradient definitions
const createGradients = (id: string, colors: string[]) => (
  <>
    <linearGradient id={`front-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={colors[0]} stopOpacity="0.9" />
      <stop offset="50%" stopColor={colors[1]} stopOpacity="0.8" />
      <stop offset="100%" stopColor={colors[0]} stopOpacity="0.9" />
    </linearGradient>
    <linearGradient id={`side-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={colors[0]} stopOpacity="0.7" />
      <stop offset="100%" stopColor={colors[1]} stopOpacity="0.6" />
    </linearGradient>
    <filter id={`glow-${id}`}>
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </>
);

export const Enhanced3DShapes = {
  restaurant: (colors: string[]) => (
    <g style={createDepthEffect(colors[0])}>
      <defs>{createGradients('restaurant', colors)}</defs>
      {/* Enhanced plate with 3D rim */}
      <path
        d="M25,45 C25,35 75,35 75,45 C75,55 25,55 25,45 Z"
        fill={`url(#front-restaurant)`}
        filter={`url(#glow-restaurant)`}
      />
      {/* Detailed food presentation */}
      <path
        d="M35,42 Q50,38 65,42 Q60,46 50,44 Q40,46 35,42"
        fill={colors[1]}
        opacity="0.8"
      />
      {/* Metallic utensils with highlights */}
      <g transform="translate(45,35)">
        <motion.path
          d="M0,0 L2,15 M7,0 L5,15"
          stroke={colors[0]}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>
    </g>
  ),
  // Add other enhanced shapes following similar pattern...
};