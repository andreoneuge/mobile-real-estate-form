
/**
 * Envía los datos del formulario a Google Sheets usando un webhook de Apps Script
 * Requiere que tengas un Web App de Google Apps Script publicado (Deploy > New deployment > Web App)
 */
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwoVKu6vLxYzB42uL6eORt8yonOsxNNSLhh6LormCTQlIIhMfn0I8_NwihpKlKjHIIokg/exec";

export async function sendToSheets(data: Record<string, any>) {
  console.log("Enviando datos a Google Sheets:", data);
  
  const resp = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  
  if (!resp.ok) {
    throw new Error("Error al enviar datos a Sheets");
  }
  
  return await resp.json();
}
