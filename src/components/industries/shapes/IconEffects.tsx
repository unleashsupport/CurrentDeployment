import { motion } from 'framer-motion';

export const createIconEffects = (colors: string[]) => ({
  // Lighting effect
  filter: `drop-shadow(0 2px 4px ${colors[0]}40)
          drop-shadow(0 4px 8px ${colors[1]}30)`,
  
  // Animation variants
  variants: {
    hover: {
      scale: 1.05,
      filter: `drop-shadow(0 4px 8px ${colors[0]}60)
              drop-shadow(0 8px 16px ${colors[1]}40)`,
    },
    tap: {
      scale: 0.95,
    },
  },
  
  // Gradient definitions
  gradientDefs: (id: string) => (
    <>
      <linearGradient
        id={`primary-${id}`}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </linearGradient>
      <filter id={`inner-glow-${id}`}>
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="0" />
        <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feFlood floodColor={colors[0]} floodOpacity="0.5" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </>
  ),
});