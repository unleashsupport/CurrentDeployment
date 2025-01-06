import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom X (formerly Twitter) icon component with consistent sizing
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/unleash_support/',
    label: 'Follow us on Instagram',
    color: '#E1306C'
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=100084282103549',
    label: 'Like us on Facebook',
    color: '#1877F2'
  },
  {
    icon: XIcon,
    href: 'https://x.com/UnleashSupport',
    label: 'Follow us on X',
    color: '#000000'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/unleash-support/posts/?feedView=all',
    label: 'Connect on LinkedIn',
    color: '#0A66C2'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
      {socialLinks.map(({ icon: Icon, href, label, color }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="relative p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Icon */}
          <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors relative z-10" />
          
          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 rounded-lg blur-md transition-opacity"
            style={{ backgroundColor: color }}
            whileHover={{ opacity: 0.5 }}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;