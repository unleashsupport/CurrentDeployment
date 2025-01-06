import { Utensils, Building2, Stethoscope, ShoppingCart, Scale, GraduationCap } from 'lucide-react';

export const IndustryShapes = {
  restaurant: {
    Icon: Utensils,
    shape: (colors: string[]) => (
      <g className="cube-restaurant transform-style-3d">
        <circle
          cx="50"
          cy="50"
          r="35"
          fill={`url(#gradient-${colors[0].slice(1)})`}
          className="preserve-3d"
        />
        <path
          d="M35,45 C35,35 65,35 65,45 C65,55 35,55 35,45"
          fill={colors[1]}
          className="preserve-3d"
        />
        <path
          d="M45,40 L55,40"
          stroke={colors[0]}
          strokeWidth="3"
          strokeLinecap="round"
          className="preserve-3d"
        />
      </g>
    )
  },
  
  realestate: {
    Icon: Building2,
    shape: (colors: string[]) => (
      <g className="cube-building transform-style-3d">
        <rect
          x="30"
          y="25"
          width="40"
          height="50"
          rx="4"
          fill={`url(#gradient-${colors[0].slice(1)})`}
          className="preserve-3d"
        />
        <rect
          x="40"
          y="35"
          width="8"
          height="8"
          fill={colors[1]}
          className="preserve-3d"
        />
        <rect
          x="52"
          y="35"
          width="8"
          height="8"
          fill={colors[1]}
          className="preserve-3d"
        />
      </g>
    )
  },
  
  healthcare: {
    Icon: Stethoscope,
    shape: (colors: string[]) => (
      <g className="cube-health transform-style-3d">
        <circle
          cx="50"
          cy="50"
          r="35"
          fill={`url(#gradient-${colors[0].slice(1)})`}
          className="preserve-3d"
        />
        <rect
          x="44"
          y="30"
          width="12"
          height="40"
          rx="6"
          fill={colors[1]}
          className="preserve-3d"
        />
        <rect
          x="30"
          y="44"
          width="40"
          height="12"
          rx="6"
          fill={colors[1]}
          className="preserve-3d"
        />
      </g>
    )
  },
  
  ecommerce: {
    Icon: ShoppingCart,
    shape: (colors: string[]) => (
      <g className="cube-cart transform-style-3d">
        <path
          d="M25,45 L75,45 L65,65 L35,65 Z"
          fill={`url(#gradient-${colors[0].slice(1)})`}
          className="preserve-3d"
        />
        <circle
          cx="40"
          cy="70"
          r="5"
          fill={colors[1]}
          className="preserve-3d"
        />
        <circle
          cx="60"
          cy="70"
          r="5"
          fill={colors[1]}
          className="preserve-3d"
        />
      </g>
    )
  },
  
  law: {
    Icon: Scale,
    shape: (colors: string[]) => (
      <g className="cube-law transform-style-3d">
        <rect
          x="45"
          y="30"
          width="10"
          height="40"
          fill={`url(#gradient-${colors[0].slice(1)})`}
          className="preserve-3d"
        />
        <rect
          x="25"
          y="35"
          width="50"
          height="4"
          fill={colors[1]}
          className="preserve-3d"
        />
        <circle
          cx="35"
          cy="45"
          r="8"
          fill={colors[1]}
          className="preserve-3d"
        />
        <circle
          cx="65"
          cy="45"
          r="8"
          fill={colors[1]}
          className="preserve-3d"
        />
      </g>
    )
  },
  
  education: {
    Icon: GraduationCap,
    shape: (colors: string[]) => (
      <g className="cube-education transform-style-3d">
        <path
          d="M25,45 L50,35 L75,45 L50,55 Z"
          fill={`url(#gradient-${colors[0].slice(1)})`}
          className="preserve-3d"
        />
        <path
          d="M45,48 L45,60 Q50,65 55,60 L55,48"
          fill={colors[1]}
          className="preserve-3d"
        />
      </g>
    )
  }
};