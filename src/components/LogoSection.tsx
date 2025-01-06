import { motion } from 'framer-motion';

const LogoSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <motion.img
          src="https://imgur.com/oUDuA8J.png"
          alt="Unleash Support Logo"
          className="w-96 h-auto filter brightness-90 hover:brightness-100 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default LogoSection;