import { motion } from 'framer-motion';

interface ServiceFeatureListProps {
  features: string[];
}

const ServiceFeatureList = ({ features }: ServiceFeatureListProps) => {
  return (
    <ul className="space-y-3 mt-auto">
      {features.map((feature, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center text-sm text-gray-400"
        >
          {/* Animated Feature Bullet */}
          <motion.div 
            className="mr-3 h-1.5 w-1.5 rounded-full bg-green-400"
            whileHover={{ scale: 1.5 }}
          />
          {feature}
        </motion.li>
      ))}
    </ul>
  );
}

export default ServiceFeatureList;