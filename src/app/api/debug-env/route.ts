/**
 * TEMPORAL — eliminar después de verificar.
 * GET /api/debug-env
 * Muestra si INDEXNOW_ROUTE_SECRET está definido y sus primeros/últimos 4 chars.
 */
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.INDEXNOW_ROUTE_SECRET ?? "";
  const auth = req.headers.get("authorization") ?? "";

  const bearerValue = auth.startsWith("Bearer ") ? auth.slice(7) : auth;

  return NextResponse.json({
    secret_length: secret.length,
    secret_last4: secret.slice(-4),
    auth_header_length: auth.length,
    bearer_value_length: bearerValue.length,
    bearer_last4: bearerValue.slice(-4),
    match: auth === `Bearer ${secret}`,
  });
}
