import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="p-6 bg-[#111] rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-green-500/5">
      <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-r from-[#2A9D8F] to-[#264653] p-2.5 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;