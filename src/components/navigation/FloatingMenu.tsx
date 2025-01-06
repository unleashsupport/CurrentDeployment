import { useState, useEffect } from 'react';

const menuItems = [
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

const FloatingMenu = () => {
  const [activeItem, setActiveItem] = useState('services');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 300 && rect.bottom >= 300;
      });

      if (currentSection) {
        setActiveItem(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveItem(id);
    }
  };

  return (
    <div className="fixed left-1/2 top-8 -translate-x-1/2 z-50 hidden md:block">
      <div className="bg-[#111]/90 backdrop-blur-md rounded-full px-1.5 py-1.5 flex items-center border border-green-500/20">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
              activeItem === item.id
                ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg shadow-green-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingMenu;