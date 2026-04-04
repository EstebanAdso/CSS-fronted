/**
 * POST /api/indexnow-deploy
 *
 * Webhook endpoint — call this after each deployment to submit every
 * public URL to IndexNow in one shot.
 *
 * Example (curl):
 *   curl -X POST https://compuservicessoft.com/api/indexnow-deploy \
 *        -H "Authorization: Bearer <INDEXNOW_ROUTE_SECRET>"
 *
 * Vercel deploy hook: add this URL in Project → Settings → Deploy Hooks
 * and call it from the "Post-deployment webhook" step in your workflow.
 */

import { NextRequest, NextResponse } from "next/server";
import { submitAllUrls } from "@/lib/indexnow-sitemap";

export async function POST(req: NextRequest) {
  /* --- Auth check -------------------------------------------------------- */
  const secret = process.env.INDEXNOW_ROUTE_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization") ?? "";
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    await submitAllUrls();
    return NextResponse.json({ ok: true, message: "All URLs submitted to IndexNow" });
  } catch (err) {
    console.error("[IndexNow deploy] Error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 502 }
    );
  }
}
