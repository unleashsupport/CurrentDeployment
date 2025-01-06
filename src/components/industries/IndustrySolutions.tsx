import { motion } from 'framer-motion';
import IndustryCard from './IndustryCard';
import CTAButton from '../ui/CTAButton';

const industries = [
  {
    title: "Restaurants",
    description: "Streamline operations and enhance customer service with AI-powered automation.",
    type: "restaurant" as const,
    features: [
      "Automated reservation management",
      "24/7 customer support",
      "Order processing automation",
      "Customer feedback analysis"
    ]
  },
  {
    title: "Real Estate",
    description: "Transform property management and client interactions with intelligent automation.",
    type: "realestate" as const,
    features: [
      "Automated property matching",
      "Virtual tour scheduling",
      "Lead qualification",
      "Follow-up automation"
    ]
  },
  {
    title: "Healthcare",
    description: "Enhance patient care and streamline administrative tasks with AI solutions.",
    type: "healthcare" as const,
    features: [
      "Appointment scheduling",
      "Patient reminders",
      "Follow-up management",
      "Insurance verification"
    ]
  },
  {
    title: "E-Commerce",
    description: "Boost sales and customer satisfaction with automated support and marketing.",
    type: "ecommerce" as const,
    features: [
      "24/7 customer support",
      "Cart recovery",
      "Product recommendations",
      "Order status updates"
    ]
  },
  {
    title: "Law Firms",
    description: "Streamline client intake and case management with intelligent automation.",
    type: "law" as const,
    features: [
      "Client pre-qualification",
      "Appointment scheduling",
      "Document automation",
      "Case status updates"
    ]
  },
  {
    title: "Education",
    description: "Revolutionize learning with AI-powered personalization and automation.",
    type: "education" as const,
    features: [
      "Personalized learning paths",
      "AI-powered tutoring",
      "Automated assessment",
      "Student engagement analytics"
    ]
  }
];

const IndustrySolutions = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/80 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Tailored AI Solutions for Every Industry</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Discover how our AI automation solutions can transform your specific industry
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join the growing number of businesses leveraging our AI solutions to drive innovation and growth.
          </p>
          <CTAButton 
            text="Schedule Your Free Consultation"
            className="mx-auto"
            colors={['#34D399', '#3B82F6']}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;