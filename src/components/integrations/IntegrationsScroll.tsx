import AnimatedLogoScroll from './AnimatedLogoScroll';

const IntegrationsScroll = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          Integrates Seamlessly with:
        </h2>
        <div className="relative">
          <AnimatedLogoScroll />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsScroll;