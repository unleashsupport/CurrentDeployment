import { useEffect, useRef } from 'react';

const CALENDLY_URL = "https://calendly.com/matthew-unleashsupport/15-minute-meeting";

export const InlineCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget when component mounts
    if (calendarRef.current) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div 
      ref={calendarRef}
      className="calendly-inline-widget rounded-lg overflow-hidden bg-black/50" 
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};