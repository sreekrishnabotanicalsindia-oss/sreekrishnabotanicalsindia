/**
 * Downloads the product catalogue as a PDF file directly.
 * Renders the catalogue HTML in a visible (but covered) overlay so
 * html2canvas can capture it properly, then auto-downloads the PDF.
 */
export async function downloadCatalogue() {
  const html2pdf = (await import('html2pdf.js')).default;

  // Fetch the catalogue HTML
  const response = await fetch('/catalogue.html');
  const html = await response.text();

  // Create a white overlay that covers the whole screen while we render
  // (so the user doesn't see the catalogue flash on screen)
  const overlay = document.createElement('div');
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'background:#fff',
    'z-index:99999',
    'overflow:hidden',
    'pointer-events:none',
  ].join(';');

  // The actual content container – must be visible & on-screen for html2canvas
  const container = document.createElement('div');
  container.innerHTML = html;
  container.style.cssText = [
    'width:794px',            // A4 at 96 dpi
    'position:absolute',
    'top:0',
    'left:0',
    'background:#fff',
  ].join(';');

  overlay.appendChild(container);
  document.body.appendChild(overlay);

  // Give the browser time to paint the content and load Google Fonts
  await new Promise((r) => setTimeout(r, 2500));

  const options = {
    margin: 0,
    filename: 'Sree-Krishna-Botanicals-Product-Catalogue-2026.pdf',
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: {
      scale: 1.5,
      useCORS: true,
      allowTaint: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 794,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['css', 'legacy'] },
  };

  try {
    await html2pdf().set(options).from(container).save();
  } finally {
    // Always remove the overlay regardless of success or failure
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  }
}
