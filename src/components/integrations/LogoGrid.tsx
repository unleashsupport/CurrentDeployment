import React from 'react';

// Import all logos with correct path
import wordpressLogo from '../../Logos/wordpress-logo.png';
import woocommerceLogo from '../../Logos/woocommerce-logo-color-white.png';
import wixLogo from '../../Logos/Wix logo black BG.avif';
import shopifyLogo from '../../Logos/Shopify-Syndigo.webp';
import godaddyLogo from '../../Logos/GoDaddy_logo.svg.png';
import squarespaceLogo from '../../Logos/Color-Squarespace-Logo.jpg';

const logos = [
  { src: wordpressLogo, alt: 'WordPress' },
  { src: woocommerceLogo, alt: 'WooCommerce' },
  { src: wixLogo, alt: 'Wix' },
  { src: shopifyLogo, alt: 'Shopify' },
  { src: godaddyLogo, alt: 'GoDaddy' },
  { src: squarespaceLogo, alt: 'Squarespace' }
];

const LogoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full max-w-[120px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;