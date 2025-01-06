import { Bot, Brain, Zap, Shield, BarChart3, Workflow } from 'lucide-react';
import SolutionCard from './SolutionCard';

const solutions = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Streamline operations with intelligent automation that learns and adapts to your business needs.",
    features: [
      "24/7 automated operations",
      "Self-learning systems",
      "Process optimization",
      "Error reduction"
    ]
  },
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "Gain actionable insights from your data with advanced AI-powered analytics.",
    features: [
      "Predictive analytics",
      "Real-time reporting",
      "Custom dashboards",
      "Trend analysis"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description: "Quick and seamless integration with your existing tools and workflows.",
    features: [
      "API connectivity",
      "Custom webhooks",
      "Third-party plugins",
      "Easy setup"
    ]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and operations.",
    features: [
      "End-to-end encryption",
      "Regular audits",
      "Access control",
      "Compliance ready"
    ]
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor and optimize your automation performance in real-time.",
    features: [
      "Live monitoring",
      "Performance metrics",
      "System health checks",
      "Automated alerts"
    ]
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Build and customize automated workflows tailored to your needs.",
    features: [
      "Visual workflow builder",
      "Conditional logic",
      "Multi-step automation",
      "Template library"
    ]
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;