import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Subscriptions' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useKeyboardNavigation(isOpen, onClose);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
          onClick={onClose}
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-black border-l border-white/10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/95 backdrop-blur-sm">
              <span className="text-xl font-semibold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Menu
              </span>
              <motion.button
                onClick={onClose}
                className="p-2.5 hover:bg-white/10 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <nav className="px-4 py-8">
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => handleNavigation(item.href)}
                      className="w-full px-6 py-4 text-left text-lg font-medium tracking-wide hover:bg-white/10 rounded-xl transition-all duration-200"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
              <Button 
                variant="primary" 
                className="w-full justify-center py-4 text-lg font-medium tracking-wide"
                onClick={onClose}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};