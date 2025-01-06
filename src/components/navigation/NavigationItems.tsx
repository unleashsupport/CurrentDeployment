interface NavigationItemsProps {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

export const NavigationItems = ({ 
  className = '', 
  itemClassName = '',
  onItemClick 
}: NavigationItemsProps) => {
  const menuItems = [
    { href: '#services', label: 'Services' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      onItemClick?.();
    }
  };

  return (
    <div className={className}>
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={handleClick}
          className={`w-full hover:bg-white/5 active:bg-white/10 transition-colors ${itemClassName}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};