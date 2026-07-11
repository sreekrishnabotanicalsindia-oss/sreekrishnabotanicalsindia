/**
 * Downloads the product catalogue as a PDF file directly.
 * Uses html2pdf.js to render the catalogue.html page into a PDF.
 */
export async function downloadCatalogue() {
  // Dynamically import html2pdf to keep initial bundle lean
  const html2pdf = (await import('html2pdf.js')).default;

  // Fetch the catalogue HTML from the public folder
  const response = await fetch('/catalogue.html');
  const html = await response.text();

  // Create a hidden container to render the HTML
  const container = document.createElement('div');
  container.innerHTML = html;
  container.style.position = 'fixed';
  container.style.top = '-99999px';
  container.style.left = '-99999px';
  container.style.width = '210mm'; // A4 width
  document.body.appendChild(container);

  const options = {
    margin: 0,
    filename: 'Sree-Krishna-Botanicals-Product-Catalogue-2026.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  try {
    await html2pdf().set(options).from(container).save();
  } finally {
    document.body.removeChild(container);
  }
}
