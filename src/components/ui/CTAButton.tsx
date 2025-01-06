import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from './ScrollToSection';

interface CTAButtonProps {
  text?: string;
  targetSection?: string;
  className?: string;
  colors?: [string, string];
}

const CTAButton = ({ 
  text = "Get Started", 
  targetSection = "contact",
  className = "",
  colors = ['#34D399', '#10B981']
}: CTAButtonProps) => {
  return (
    <motion.button
      onClick={() => scrollToSection(targetSection)}
      className={`group relative px-8 py-4 rounded-full overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]}, ${colors[0]})`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 -z-20 blur-xl opacity-50"
        style={{
          background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]}, ${colors[0]})`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Button content */}
      <div className="flex items-center space-x-3">
        <span className="font-semibold text-white text-lg">{text}</span>
        <motion.div
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.button>
  );
};

export default CTAButton;