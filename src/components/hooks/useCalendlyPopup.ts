import { useCallback } from 'react';

export const useCalendlyPopup = (url: string) => {
  return useCallback(() => {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({ url });
    }
  }, [url]);
};