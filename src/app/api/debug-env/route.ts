/**
 * TEMPORAL — eliminar después de verificar.
 * GET /api/debug-env
 * Muestra si INDEXNOW_ROUTE_SECRET está definido y sus primeros/últimos 4 chars.
 */
import { NextResponse } from "next/server";

export async function GET() {
  const secret = process.env.INDEXNOW_ROUTE_SECRET ?? "";
  return NextResponse.json({
    defined: secret.length > 0,
    length: secret.length,
    // Muestra solo los primeros y últimos 4 chars para no exponer el valor completo
    preview: secret.length > 8
      ? `${secret.slice(0, 4)}...${secret.slice(-4)}`
      : "(muy corto o vacío)",
  });
}
