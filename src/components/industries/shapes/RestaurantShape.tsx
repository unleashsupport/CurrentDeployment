import { motion } from 'framer-motion';

export const RestaurantShape = (colors: string[]) => (
  <g className="cube-restaurant transform-style-3d">
    {/* Plate base with 3D effect */}
    <motion.path
      d="M30,50 C30,35 70,35 70,50 C70,65 30,65 30,50"
      fill={`url(#gradient-${colors[0].slice(1)})`}
      className="preserve-3d"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    
    {/* Decorative food elements */}
    <motion.path
      d="M40,45 Q50,40 60,45 Q55,48 50,46 Q45,48 40,45"
      fill={colors[1]}
      className="preserve-3d"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
    />
    
    {/* Utensils with shine effect */}
    <motion.g
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <path
        d="M45,38 L43,48 M55,38 L57,48"
        stroke={colors[0]}
        strokeWidth="2"
        strokeLinecap="round"
        className="preserve-3d"
      />
    </motion.g>
  </g>
);