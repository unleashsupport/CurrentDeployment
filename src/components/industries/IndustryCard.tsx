import Industry2DIcon from './Industry2DIcon';
import { motion } from 'framer-motion';

interface IndustryCardProps {
  title: string;
  description: string;
  type: 'restaurant' | 'realestate' | 'healthcare' | 'ecommerce' | 'law' | 'education';
  features: string[];
}

const industryColors = {
  restaurant: ['#22D3EE', '#0EA5E9'],
  realestate: ['#818CF8', '#6366F1'],
  healthcare: ['#34D399', '#10B981'],
  ecommerce: ['#F472B6', '#EC4899'],
  law: ['#A78BFA', '#8B5CF6'],
  education: ['#FB923C', '#F97316']
};

const IndustryCard = ({ title, description, type, features }: IndustryCardProps) => {
  const colors = industryColors[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative h-[480px] transform-gpu" // Fixed height for consistency
    >
      {/* Enhanced Glow Effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-75 blur-2xl transition duration-300 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              circle at top left,
              ${colors[0]}50,
              ${colors[1]}50
            )
          `,
          transform: 'translateY(20px) scale(0.95)',
        }}
      />
      
      {/* Main Card Content */}
      <div className="relative h-full rounded-xl bg-black/90 p-8 transition-all duration-300 backdrop-blur-sm border border-white/10 flex flex-col">
        {/* Icon Section */}
        <div className="mb-6 flex justify-center">
          <Industry2DIcon type={type} />
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col flex-grow">
          {/* Title with Enhanced Gradient */}
          <h3 
            className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6">{description}</p>

          {/* Features List */}
          <ul className="space-y-3 mt-auto">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-sm text-gray-400"
              >
                {/* Animated Feature Bullet */}
                <motion.div 
                  className="mr-3 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: colors[0] }}
                  whileHover={{ scale: 1.5 }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Enhanced Hover Effects */}
        <motion.div 
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{
            background: `
              radial-gradient(
                circle at center,
                ${colors[0]} 0%,
                transparent 70%
              ),
              linear-gradient(
                to bottom,
                transparent,
                ${colors[1]}40
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
              ${colors[0]}40 0%,
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

export default IndustryCard;