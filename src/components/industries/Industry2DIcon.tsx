import { motion } from 'framer-motion';
import { Utensils, Building2, Stethoscope, ShoppingCart, Scale, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Industry2DIconProps {
  type: 'restaurant' | 'realestate' | 'healthcare' | 'ecommerce' | 'law' | 'education';
}

const industryConfig: Record<string, { Icon: LucideIcon; colors: string[] }> = {
  restaurant: {
    Icon: Utensils,
    colors: ['#22D3EE', '#0EA5E9'] // Cyan theme
  },
  realestate: {
    Icon: Building2,
    colors: ['#818CF8', '#6366F1'] // Indigo theme
  },
  healthcare: {
    Icon: Stethoscope,
    colors: ['#34D399', '#10B981'] // Emerald theme
  },
  ecommerce: {
    Icon: ShoppingCart,
    colors: ['#F472B6', '#EC4899'] // Pink theme
  },
  law: {
    Icon: Scale,
    colors: ['#A78BFA', '#8B5CF6'] // Violet theme
  },
  education: {
    Icon: GraduationCap,
    colors: ['#FB923C', '#F97316'] // Orange theme
  }
};

const Industry2DIcon = ({ type }: Industry2DIconProps) => {
  const { Icon, colors } = industryConfig[type];

  return (
    <motion.div
      className="relative w-32 h-32 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Outer Square with Rotating Border */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, ${colors[0]}20, ${colors[1]}20)`,
          border: `2px solid ${colors[0]}30`,
          borderRadius: '1rem',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Inner Content Container */}
      <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-20"
          style={{
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
          }}
        />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(${colors[0]} 1px, transparent 1px),
              linear-gradient(90deg, ${colors[0]} 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }}
        />

        {/* Corner Accents */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-4 h-4"
            style={{
              top: i < 2 ? '-1px' : 'auto',
              bottom: i >= 2 ? '-1px' : 'auto',
              left: i % 2 === 0 ? '-1px' : 'auto',
              right: i % 2 === 1 ? '-1px' : 'auto',
              borderTop: i < 2 ? `2px solid ${colors[0]}` : 'none',
              borderBottom: i >= 2 ? `2px solid ${colors[0]}` : 'none',
              borderLeft: i % 2 === 0 ? `2px solid ${colors[0]}` : 'none',
              borderRight: i % 2 === 1 ? `2px solid ${colors[0]}` : 'none',
            }}
          />
        ))}

        {/* Icon Container */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Icon 
            className="w-14 h-14 transform"
            style={{
              color: colors[0],
              filter: `
                drop-shadow(0 2px 4px ${colors[0]}40)
                drop-shadow(0 4px 8px ${colors[1]}30)
              `
            }}
          />
        </motion.div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          initial={false}
          whileHover={{
            opacity: 0.3,
            background: `radial-gradient(circle at center, ${colors[0]} 0%, transparent 70%)`
          }}
        />
      </div>

      {/* Animated Corner Dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: colors[0],
            top: i < 2 ? '-2px' : 'auto',
            bottom: i >= 2 ? '-2px' : 'auto',
            left: i % 2 === 0 ? '-2px' : 'auto',
            right: i % 2 === 1 ? '-2px' : 'auto',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Industry2DIcon;