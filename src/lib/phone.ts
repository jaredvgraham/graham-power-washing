import { clientData } from "@/../config";

/** Visible format required by Google Ads website call conversion replacement. */
export function formatPhoneDisplay(digits: string = clientData.phone): string {
  const d = digits.replace(/\D/g, "");
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return digits;
}

export const phoneDisplay = formatPhoneDisplay();
export const phoneTelHref = `tel:${clientData.phone}`;
