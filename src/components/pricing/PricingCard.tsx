import { Check } from 'lucide-react';
import Button from '../ui/Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

const PricingCard = ({ name, description, features, popular }: PricingCardProps) => {
  return (
    <div className={`relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
      popular 
        ? 'bg-gradient-to-b from-green-500/20 to-blue-500/20 border border-green-500/20' 
        : 'bg-white/5'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-gray-400 mb-8">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
              feature.included ? 'text-green-400' : 'text-gray-600'
            }`} />
            <span className={feature.included ? 'text-white' : 'text-gray-600'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Button variant={popular ? 'primary' : 'secondary'} className="w-full">
        Contact Sales
      </Button>
    </div>
  );
};

export default PricingCard;