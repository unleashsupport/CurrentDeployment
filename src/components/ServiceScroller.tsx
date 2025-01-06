import { useEffect, useRef } from 'react';

const services = [
  "Lead Generation Solutions",
  "Social Media Management",
  "Email Marketing Systems",
  "Intelligent Chatbots",
  "Customer Support Solutions",
  "Sales Pipeline Systems",
  "Data Analytics Solutions",
  "Personalized Marketing",
  "Content Generation Systems",
  "Market Research Solutions"
];

const ServiceScroller = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let speed = 100;
    
    const type = () => {
      const fullText = services[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        speed = 50;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        speed = 100;
      }
      
      if (scrollRef.current) {
        scrollRef.current.textContent = currentText;
      }
      
      if (!isDeleting && currentText === fullText) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % services.length;
        speed = 500;
      }
      
      setTimeout(type, speed);
    };
    
    type();
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="text-4xl md:text-6xl text-gray-600 h-16 font-bold flex items-center justify-center"
    />
  );
};

export default ServiceScroller;