/**
 * Reusable helper that collects every public URL of the site and submits
 * them all to IndexNow in a single batch call.
 *
 * Call this from:
 *  - A deploy webhook (POST /api/indexnow-deploy)
 *  - A CI/CD pipeline after `next build`
 *  - Manually via `node -e "require('./src/lib/indexnow-sitemap').submitAllUrls()"`
 */

import { submitUrls } from "@/lib/indexnow";

const BASE = "https://compuservicessoft.com";

/** All static page URLs — keep in sync with src/app/sitemap.ts */
const STATIC_URLS: string[] = [
  `${BASE}/`,
  `${BASE}/desarrollo-web`,
  `${BASE}/desarrollo-web/diseno-web-personalizado`,
  `${BASE}/desarrollo-web/seo-posicionamiento-web-pasto`,
  `${BASE}/desarrollo-web/tienda-online-ecommerce`,
  `${BASE}/desarrollo-web/landing-page`,
  `${BASE}/desarrollo-web/software-a-la-medida`,
  `${BASE}/catalogo`,
  `${BASE}/armar-pc-gamer`,
  `${BASE}/politicas`,
];

/**
 * Fetches dynamic URLs from the API (categories + products) and submits
 * all URLs — static + dynamic — to IndexNow.
 */
export async function submitAllUrls(): Promise<void> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8085";
  const dynamicUrls: string[] = [];

  /* Fetch categories */
  try {
    const res = await fetch(`${apiBase}/api/categories?size=200`);
    if (res.ok) {
      const data = await res.json();
      const items: { nombre: string }[] = data.content ?? data;
      items.forEach((cat) => {
        dynamicUrls.push(`${BASE}/catalogo/categoria/${slugify(cat.nombre)}`);
      });
    }
  } catch (err) {
    console.warn("[IndexNow] Could not fetch categories:", err);
  }

  const all = [...STATIC_URLS, ...dynamicUrls];
  await submitUrls(all);
}

/** Minimal slug helper — mirrors src/lib/utils.ts */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}
