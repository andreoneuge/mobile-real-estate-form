
/**
 * Envía los datos del formulario a Google Sheets usando un webhook de Apps Script
 * Requiere que tengas un Web App de Google Apps Script publicado (Deploy > New deployment > Web App)
 */
const ENDPOINT =
  "AQUI_PONES_TU_URL_DEL_WEB_APP"; // <--- Reemplaza esto con la URL real de tu Web App

export async function sendToSheets(data: Record<string, any>) {
  // Validar que el endpoint esté configurado
  if (ENDPOINT === "AQUI_PONES_TU_URL_DEL_WEB_APP" || ENDPOINT === "TU_WEBHOOK_AQUI") {
    throw new Error("Debes configurar el endpoint del Google Apps Script en src/lib/sendToSheets.ts");
  }
  
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
