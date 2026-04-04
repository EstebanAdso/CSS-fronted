/**
 * IndexNow utility — submits URLs to Bing/IndexNow for fast indexing.
 * Docs: https://www.indexnow.org/documentation
 */

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const SITE_HOST = "compuservicessoft.com";

function getKey(): string {
  const key = process.env.INDEXNOW_KEY;
  if (!key) throw new Error("INDEXNOW_KEY environment variable is not set");
  return key;
}

/** Submit a single URL via GET request */
export async function submitUrl(url: string): Promise<void> {
  const key = getKey();
  const endpoint = `${INDEXNOW_ENDPOINT}?url=${encodeURIComponent(url)}&key=${key}`;

  const res = await fetch(endpoint, { method: "GET" });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow single-URL failed [${res.status}]: ${body}`);
  }

  console.log(`[IndexNow] Submitted (GET): ${url}`);
}

/** Submit multiple URLs via POST request (batch — up to 10 000 per call) */
export async function submitUrls(urls: string[]): Promise<void> {
  if (urls.length === 0) return;

  const key = getKey();

  const payload = {
    host: SITE_HOST,
    key,
    keyLocation: `https://${SITE_HOST}/${key}.txt`,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow batch failed [${res.status}]: ${body}`);
  }

  console.log(`[IndexNow] Submitted ${urls.length} URL(s) (POST):`, urls);
}
