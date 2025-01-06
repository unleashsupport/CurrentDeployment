import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';
import ServiceFeatureList from './ServiceFeatureList';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, features }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-[420px] transform-gpu"
    >
      {/* Enhanced Glow Effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-75 blur-2xl transition duration-300 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              circle at top left,
              #34D39950,
              #10B98150
            )
          `,
          transform: 'translateY(20px) scale(0.95)',
        }}
      />
      
      {/* Main Card Content */}
      <div className="relative h-full rounded-xl bg-black/90 p-8 transition-all duration-300 backdrop-blur-sm border border-white/10 flex flex-col">
        {/* Icon Section */}
        <ServiceIcon Icon={Icon} />
        
        {/* Content Section */}
        <div className="flex flex-col flex-grow">
          {/* Title with Gradient */}
          <motion.h3 
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            {title}
          </motion.h3>

          {/* Features List */}
          <ServiceFeatureList features={features} />
        </div>

        {/* Enhanced Hover Effects */}
        <motion.div 
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{
            background: `
              radial-gradient(
                circle at center,
                #34D399 0%,
                transparent 70%
              ),
              linear-gradient(
                to bottom,
                transparent,
                #10B98140
              )
            `
          }}
        />
      </div>

      {/* Enhanced Bottom Shadow/Glow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-24 opacity-50"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              #34D39940 0%,
              transparent 80%
            )
          `,
          filter: 'blur(20px)',
          transform: 'translateY(40%) scale(0.8)',
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;