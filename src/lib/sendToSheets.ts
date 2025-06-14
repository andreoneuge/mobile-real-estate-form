
/**
 * Envía los datos del formulario a Google Sheets usando un webhook de Apps Script
 * Requiere que tengas un Web App de Google Apps Script publicado (Deploy > New deployment > Web App)
 */
const ENDPOINT =
  "TU_WEBHOOK_AQUI"; // <--- Cambiar por el web app desplegado del Apps Script

export async function sendToSheets(data: Record<string, any>) {
  // Ajusta el endpoint abajo antes de desplegar.
  if (ENDPOINT === "TU_WEBHOOK_AQUI") {
    throw new Error("Debes configurar el endpoint del Google Apps Script");
  }
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
