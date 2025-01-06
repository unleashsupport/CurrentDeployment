import Button from '../ui/Button';
import { useCalendlyPopup } from '../hooks/useCalendlyPopup';
import { CALENDLY_URL } from '../utils/constants';

export const PopupTrigger = () => {
  const openPopup = useCalendlyPopup(CALENDLY_URL);

  return (
    <Button
      variant="primary"
      className="w-full"
      onClick={openPopup}
    >
      Open Popup Scheduler
    </Button>
  );
};