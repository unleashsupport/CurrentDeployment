const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-black/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-green-400 pl-4">
                <h3 className="text-xl font-semibold mb-2">Cutting-Edge AI Technology</h3>
                <p className="text-gray-400">Leveraging the latest advancements in artificial intelligence to deliver powerful automation solutions.</p>
              </div>
              <div className="border-l-2 border-green-400 pl-4">
                <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                <p className="text-gray-400">Tailored automation strategies designed specifically for your business needs and goals.</p>
              </div>
              <div className="border-l-2 border-green-400 pl-4">
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of delivering measurable improvements in efficiency and ROI for our clients.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="AI Technology"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black/90 p-6 rounded-xl">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;