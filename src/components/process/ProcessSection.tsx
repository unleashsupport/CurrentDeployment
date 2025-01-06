import { Image, Database, Lightbulb, Code, Shield, BarChart } from 'lucide-react';
import ProcessCard from './ProcessCard';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessCard
            number="01"
            title="Analyze"
            description="We assess your workflows to identify high-impact AI opportunities."
            icons={[Image, Database, Lightbulb]}
          />
          
          <ProcessCard
            number="02"
            title="Build & Implement"
            description="We build tailored AI solutions, prioritizing quality and security at every step."
            codeSnippet={`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-
    width, initial-scale=1.0">
  </head>`}
            icons={[Code, Shield]}
          />
          
          <ProcessCard
            number="03"
            title="Maintain & Improve"
            description="We deliver ongoing maintenance and performance enhancements to maximize your AI investment."
            icons={[BarChart]}
            stats={[
              { label: "Software Speed", value: "+38%" },
              { label: "Workflow Efficiency", value: "+25%" },
              { label: "Operational Cost", value: "-11%", isNegative: true }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;