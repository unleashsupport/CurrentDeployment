import { MessageSquare, Users, Phone, Share2, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import CTAButton from '../ui/CTAButton';

const services = [
  {
    icon: MessageSquare,
    title: "Website AI Chat Agent",
    features: [
      "24/7 instant customer support",
      "Automated appointment booking",
      "Product recommendations",
      "Purchase assistance",
      "Query resolution without human intervention"
    ]
  },
  {
    icon: Users,
    title: "Lead Capture System",
    features: [
      "AI-driven form optimization",
      "Intelligent lead qualification",
      "Real-time lead scoring",
      "Automated follow-up sequences",
      "Integration with CRM systems"
    ]
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    features: [
      "Natural language processing",
      "Appointment scheduling",
      "24/7 phone support",
      "Multilingual capabilities",
      "Call routing and prioritization"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    features: [
      "Content generation and scheduling",
      "Performance analytics",
      "Engagement monitoring",
      "Trend analysis",
      "Automated response management"
    ]
  },
  {
    icon: Mail,
    title: "Email Automation",
    features: [
      "Personalized campaign creation",
      "Behavioral triggers",
      "A/B testing",
      "Customer journey mapping",
      "Response optimization"
    ]
  },
  {
    icon: Send,
    title: "Outreach Automation",
    features: [
      "AI-crafted personalized messages",
      "Multi-channel campaign management",
      "Response rate optimization",
      "Automated follow-up sequences",
      "Performance tracking"
    ]
  }
];

const DetailedServices = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-400 mb-8">
            Ready to transform your business with AI automation?
          </p>
          <CTAButton 
            text="Schedule a Free Consultation"
            className="mx-auto"
            colors={['#22D3EE', '#0EA5E9']}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServices;