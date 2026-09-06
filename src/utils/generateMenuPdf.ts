/**
 * Menu PDF Downloader
 * Downloads the exact 8-page banquet menu document for HiT FiT & Piwnica pod Żabą.
 */

const baseUrl = (import.meta as any).env?.BASE_URL || '/';
export const MENU_PDF_URL = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}menu-hitfit-piwnica.pdf`;
export const MENU_PDF_FILENAME = 'Karta-Menu-Hit-Fit-Piwnica-pod-Zaba.pdf';

/**
 * Initiates the download of the exact official 8-page Menu PDF.
 */
export function downloadMenuPdf(): void {
  try {
    const link = document.createElement('a');
    link.href = MENU_PDF_URL;
    link.setAttribute('download', MENU_PDF_FILENAME);
    link.setAttribute('target', '_blank');
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Error triggering PDF download:', err);
    window.open(MENU_PDF_URL, '_blank');
  }
}

/**
 * Opens the exact official Menu PDF in a new browser tab.
 */
export function openMenuPdf(): void {
  window.open(MENU_PDF_URL, '_blank');
}
