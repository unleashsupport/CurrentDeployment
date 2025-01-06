import { useState } from 'react';
import Button from '../ui/Button';

const ScheduleMeeting = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden bg-[#111] border border-green-500/20">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Schedule a Meeting with Matthew</h2>
        
        {/* Inline Calendar */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/matthew-unleashsupport/15-minute-meeting?preview_source=et_card&month=2025-01" 
          style={{ minWidth: '320px', height: '630px' }}
        />

        {/* Popup Trigger */}
        <Button
          variant="primary"
          className="w-full mt-6"
          onClick={() => {
            if (typeof Calendly !== 'undefined') {
              Calendly.initPopupWidget({
                url: 'https://calendly.com/matthew-unleashsupport/15-minute-meeting?preview_source=et_card&month=2025-01'
              });
            }
          }}
        >
          Open Popup Scheduler
        </Button>
      </div>
    </div>
  );
};

export default ScheduleMeeting;