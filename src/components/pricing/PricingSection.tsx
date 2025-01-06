import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import Button from '../ui/Button';

const plans = [
  {
    name: "Personal",
    description: "Perfect for small businesses and startups",
    features: [
      { text: "AI Email Automation", included: true },
      { text: "Social Media Management", included: true },
      { text: "Basic Lead Capture", included: true },
      { text: "5 Automation Workflows", included: true },
      { text: "Website Chat Agent", included: false },
      { text: "Voice AI Agent", included: false },
      { text: "Custom Integrations", included: false },
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      { text: "AI Email Automation", included: true },
      { text: "Social Media Management", included: true },
      { text: "Advanced Lead Capture", included: true },
      { text: "Unlimited Workflows", included: true },
      { text: "Website Chat Agent", included: true },
      { text: "Voice AI Agent", included: true },
      { text: "Custom Integrations", included: false },
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations with specific needs",
    features: [
      { text: "AI Email Automation", included: true },
      { text: "Social Media Management", included: true },
      { text: "Advanced Lead Capture", included: true },
      { text: "Unlimited Workflows", included: true },
      { text: "Website Chat Agent", included: true },
      { text: "Voice AI Agent", included: true },
      { text: "Custom Integrations", included: true },
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Subscriptions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your business needs. All plans include our core AI automation features.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl text-gray-400 mb-6">
            Ready to transform your business?
          </p>
          <Button 
            variant="primary"
            scrollTo="contact"
            trackingId="pricing_cta"
            className="transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;