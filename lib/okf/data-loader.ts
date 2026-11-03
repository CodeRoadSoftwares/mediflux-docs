import path from "node:path";
import { OkfStore } from "@copperbox/okf-mcp";

// Path to the local OKF bundle
export const okfPath = path.join(process.cwd(), "okf");

// Singleton store instance configured with the local bundle
export const store = new OkfStore([
  {
    id: "mediflux",
    root: okfPath,
    writable: false,
  },
]);

let storeReady: Promise<void> | null = null;

/**
 * Ensures the OKF store is loaded once into memory during cold start.
 * Retries on subsequent calls if loading fails.
 */
export function ensureStoreLoaded(): Promise<void> {
  if (!storeReady) {
    storeReady = store.load().catch((err) => {
      storeReady = null;
      throw err;
    });
  }
  return storeReady;
}

// Pre-warm the store during module evaluation (cold start)
void ensureStoreLoaded().catch(() => {});

