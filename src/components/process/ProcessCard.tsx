import { LucideIcon } from 'lucide-react';

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icons?: LucideIcon[];
  codeSnippet?: string;
  stats?: {
    label: string;
    value: string;
    isNegative?: boolean;
  }[];
}

const ProcessCard = ({ number, title, description, icons, codeSnippet, stats }: ProcessCardProps) => {
  return (
    <div className="bg-[#111] rounded-xl p-6 hover:bg-[#151515] transition-colors">
      {icons && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {icons.map((Icon, index) => (
            <div key={index} className="bg-black/50 p-3 rounded-lg">
              <Icon className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      )}
      
      <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        {number}
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      {codeSnippet && (
        <div className="bg-black rounded-lg p-4 mb-6">
          <pre className="text-gray-300 text-sm">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      )}

      {stats && (
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-400">{stat.label}</span>
              <span className={`font-medium ${stat.isNegative ? 'text-red-400' : 'text-green-400'}`}>
                {stat.value}
              </span>
            </div>
          ))}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-400">Update Available</span>
            <button className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-lg transition-colors">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessCard;