import { memo } from 'react';

interface LogoItemProps {
  src: string;
  alt: string;
}

const LogoItem = memo(({ src, alt }: LogoItemProps) => (
  <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center group">
    <img
      src={src}
      alt={alt}
      className="w-32 h-16 object-contain opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 filter invert"
      loading="lazy"
    />
  </div>
));

export default LogoItem;