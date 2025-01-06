import { Bot, Brain, BarChart3, Mail } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent virtual assistants that handle customer inquiries 24/7, qualifying leads and providing instant support."
  },
  {
    icon: Brain,
    title: "Process Automation",
    description: "Smart workflows that streamline operations, reduce manual tasks, and increase efficiency across your business."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights and predictive analytics to make informed decisions and optimize performance."
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    description: "Personalized email campaigns, social media management, and content generation powered by AI."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;