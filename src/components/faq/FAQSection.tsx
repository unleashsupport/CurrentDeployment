import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Is my company a good fit for You?",
    answer: "We work with businesses of all sizes across various industries. Our solutions are particularly effective for companies looking to automate processes, improve efficiency, or enhance customer engagement through AI."
  },
  {
    question: "How long does it take to implement my requests?",
    answer: "Implementation timelines vary based on project complexity. Typical integrations take 2-4 weeks, while more complex solutions might take 6-8 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Are your solutions secure?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, regular security audits, and comply with industry standards to ensure your data and systems remain protected."
  },
  {
    question: "How many AI can I intergrate?",
    answer: "Our platform supports unlimited AI integrations. You can combine multiple AI solutions to create a comprehensive automation ecosystem tailored to your specific needs."
  },
  {
    question: "Do you offer continuous support?",
    answer: "Yes, we provide 24/7 support for all our clients. Our team of experts is always available to help with any questions or issues that may arise."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time without any long-term commitments or hidden fees. We believe in earning your business every month."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-500/20">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium group-hover:text-green-400 transition-colors">
          {question}
        </span>
        <Plus 
          className={`flex-shrink-0 w-5 h-5 text-green-400 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
          Answers
        </h2>
        <p className="text-gray-400 text-center mb-16">
          We've gone ahead and answered some of the questions you might have.
        </p>
        <div className="grid grid-cols-1 gap-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;