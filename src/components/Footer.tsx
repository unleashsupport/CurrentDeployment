import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Unleash Support. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;