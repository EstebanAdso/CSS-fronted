/**
 * TEMPORAL — eliminar después de verificar.
 * GET /api/debug-env
 * Muestra exactamente qué headers llegan al servidor.
 */
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const secret = process.env.INDEXNOW_ROUTE_SECRET ?? "";

  // Leer ambos headers para detectar cuál llega
  const authHeader   = req.headers.get("authorization") ?? "(vacío)";
  const xApiKey      = req.headers.get("x-api-key")     ?? "(vacío)";

  return NextResponse.json({
    secret_length : secret.length,
    secret_last4  : secret.slice(-4),
    authorization_header_length: authHeader === "(vacío)" ? 0 : authHeader.length,
    authorization_header_last4 : authHeader === "(vacío)" ? "(vacío)" : authHeader.slice(-4),
    x_api_key_length: xApiKey === "(vacío)" ? 0 : xApiKey.length,
    match_authorization: authHeader === `Bearer ${secret}`,
    match_x_api_key    : xApiKey    === secret,
  });
}
