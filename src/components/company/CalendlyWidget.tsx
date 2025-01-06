import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget = ({ url }: CalendlyWidgetProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden bg-[#111] border border-green-500/20">
      <div 
        className="calendly-inline-widget" 
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}

export default CalendlyWidget;