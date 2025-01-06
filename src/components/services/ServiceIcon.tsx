import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon: LucideIcon;
}

const ServiceIcon = ({ Icon }: ServiceIconProps) => {
  return (
    <motion.div
      className="relative w-16 h-16 mb-6"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-20"
        style={{
          background: 'linear-gradient(45deg, #34D399, #10B981)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon Container */}
      <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-green-400/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-green-400" />
      </div>

      {/* Corner Accents */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400"
          style={{
            top: i < 2 ? '-1px' : 'auto',
            bottom: i >= 2 ? '-1px' : 'auto',
            left: i % 2 === 0 ? '-1px' : 'auto',
            right: i % 2 === 1 ? '-1px' : 'auto',
            borderRadius: '50%',
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
}

export default ServiceIcon;