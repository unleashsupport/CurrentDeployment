import { Brain, Zap, Shield, Clock, Target, Layers } from 'lucide-react';
import BenefitCard from './BenefitCard';
import Button from '../ui/Button';

const benefits = [
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Leverage cutting-edge artificial intelligence and machine learning algorithms that adapt and improve over time."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Implementation",
    description: "Get up and running quickly with our streamlined onboarding process and ready-to-use automation templates."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Rest easy knowing your data is protected by military-grade encryption and regular security audits."
  },
  {
    icon: Clock,
    title: "24/7 Automated Operations",
    description: "Keep your business running smoothly around the clock with reliable automated systems that never sleep."
  },
  {
    icon: Target,
    title: "Precision Accuracy",
    description: "Achieve consistent, error-free results with our refined AI models and quality control systems."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows without disrupting your current operations."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Leading Companies Partner With Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join forward-thinking businesses that trust our AI solutions to drive growth, efficiency, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s`, animationFillMode: 'forwards' }}
            >
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <Button variant="primary">Schedule a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;