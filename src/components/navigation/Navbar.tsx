import { NavigationItems } from './NavigationItems';
import Button from '../ui/Button';
import MobileNav from './MobileNav';
import { useScrollPosition } from './hooks/useScrollPosition';

const Navbar = () => {
  const isScrolled = useScrollPosition();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm h-16 border-b border-white/10' 
          : 'bg-transparent h-20'
      }`}
      role="banner"
    >
      <div className="h-full max-w-7xl mx-auto px-4 lg:px-8">
        <nav className="h-full flex items-center justify-between" role="navigation">
          {/* Logo */}
          <a 
            href="/" 
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            aria-label="Unleash Support home"
          >
            Unleash Support
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationItems 
              className="flex items-center space-x-8" 
              itemClassName="text-[15px] px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            />
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};