import { motion } from 'framer-motion';
import { IndustryShapes } from './shapes/IndustryShapes';

interface Industry3DDesignProps {
  type: 'restaurant' | 'realestate' | 'healthcare' | 'ecommerce' | 'law' | 'education';
}

const Industry3DDesign = ({ type }: Industry3DDesignProps) => {
  const designs = {
    restaurant: {
      colors: ['#22D3EE', '#0EA5E9'],
      title: 'Restaurant Solutions',
      gradientAngle: '45deg',
      scale: 1.2
    },
    realestate: {
      colors: ['#818CF8', '#6366F1'],
      title: 'Real Estate Management',
      gradientAngle: '60deg',
      scale: 1.1
    },
    healthcare: {
      colors: ['#34D399', '#10B981'],
      title: 'Healthcare Systems',
      gradientAngle: '30deg',
      scale: 1.15
    },
    ecommerce: {
      colors: ['#F472B6', '#EC4899'],
      title: 'E-Commerce Platform',
      gradientAngle: '55deg',
      scale: 1.2
    },
    law: {
      colors: ['#A78BFA', '#8B5CF6'],
      title: 'Legal Services',
      gradientAngle: '40deg',
      scale: 1.1
    },
    education: {
      colors: ['#FB923C', '#F97316'],
      title: 'Education Technology',
      gradientAngle: '35deg',
      scale: 1.15
    }
  };

  const { colors, title, gradientAngle, scale } = designs[type];
  const { Icon, shape } = IndustryShapes[type];

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
      {/* Enhanced 3D Stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64 preserve-3d">
          {/* 3D Transform Container */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: scale, 
              opacity: 1,
              rotateX: [0, 5, 0, -5, 0],
              rotateY: [0, 8, 0, -8, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* SVG Container with Enhanced Lighting */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                {/* Enhanced Gradients */}
                {colors.map((color, index) => (
                  <linearGradient
                    key={`gradient-${color.slice(1)}`}
                    id={`gradient-${color.slice(1)}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={color} stopOpacity="0.95" />
                    <stop offset="50%" stopColor={colors[(index + 1) % 2]} stopOpacity="0.85" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.95" />
                    <animate
                      attributeName="x1"
                      values="0%;100%;0%"
                      dur="15s"
                      repeatCount="indefinite"
                    />
                  </linearGradient>
                ))}

                {/* Enhanced Lighting Effects */}
                <filter id={`lighting-${type}`}>
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                  <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="1.2"
                    specularExponent="20"
                    lightingColor="#ffffff"
                    result="specular"
                  >
                    <fePointLight x="50" y="50" z="200" />
                    <fePointLight x="0" y="50" z="100" />
                    <fePointLight x="100" y="50" z="100" />
                  </feSpecularLighting>
                  <feComposite
                    in="specular"
                    in2="SourceAlpha"
                    operator="in"
                    result="specular"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>

                {/* Shadow Effect */}
                <filter id={`shadow-${type}`}>
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="4"
                    floodColor="#000000"
                    floodOpacity="0.3"
                  />
                </filter>
              </defs>

              {/* Main Shape with Enhanced Effects */}
              <g style={{ filter: `url(#lighting-${type})` }}>
                {shape(colors)}
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Radial Gradient Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at center, ${colors[0]}20 0%, transparent 70%)`
          }}
        />

        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(${colors[0]}20 1px, transparent 1px),
              linear-gradient(90deg, ${colors[0]}20 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            transform: 'perspective(1000px) rotateX(60deg)'
          }}
        />
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent backdrop-blur-sm">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors[0] }} />
            <p className="text-sm text-white/90 font-medium">{title}</p>
          </div>
          <Icon className="w-5 h-5 text-white/75" />
        </motion.div>
      </div>
    </div>
  );
};

export default Industry3DDesign;