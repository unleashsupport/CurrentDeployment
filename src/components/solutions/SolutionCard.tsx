import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const SolutionCard = ({ icon: Icon, title, description, features }: SolutionCardProps) => {
  return (
    <div className="bg-[#111] rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
      <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-2.5 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 mr-2 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionCard;