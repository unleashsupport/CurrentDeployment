import { motion } from 'framer-motion';
import Button from './ui/Button';
import ServiceScroller from './ServiceScroller';
import { SparklesCore } from './ui/sparkles';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.9}
          maxSize={2.1}
          particleDensity={115}
          className="w-full h-full"
          particleColor="#2DD4BF"
          speed={0.92}
          particleColorArray={["#2DD4BF", "#3B82F6", "#10B981", "#34D399"]}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            <span className="text-green-400 text-sm">Transforming businesses with AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-white"
          >
            We Build
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 mb-6"
          >
            <ServiceScroller />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 max-w-2xl backdrop-blur-sm bg-black/30 rounded-xl p-4"
          >
            We specialize in AI-powered automations that streamline your operations,
            boost efficiency, and drive remarkable business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col md:flex-row gap-4"
          >
            <Button variant="primary" scrollTo="contact">Book a Free Consultation</Button>
            <Button variant="secondary" scrollTo="services">Explore Services</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;