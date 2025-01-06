import { useRef } from 'react';
import LogoItem from './LogoItem';

const logos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
    alt: 'WordPress',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg',
    alt: 'WooCommerce',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg',
    alt: 'Wix',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    alt: 'Shopify',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/godaddy-1.svg',
    alt: 'GoDaddy',
  }
];

const AnimatedLogoScroll = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-8">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="mx-8">
              <LogoItem {...logo} />
            </div>
          ))}
        </div>
        <div className="flex animate-scroll whitespace-nowrap py-8" aria-hidden="true">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.alt}-${index}-duplicate`} className="mx-8">
              <LogoItem {...logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoScroll;