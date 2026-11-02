import { createOkfServer } from "@copperbox/okf-mcp";
import { store, ensureStoreLoaded } from "./data-loader";

/**
 * Tools that must not be reachable on a public endpoint even in read-only mode:
 * they allow arbitrary fetching of remote trees/archives into the shared store
 * or on-demand bundle reloading.
 */
export const BLOCKED_TOOLS = [
  "load_remote_bundle",
  "load_colocated_remote_bundles",
  "reload_bundles",
] as const;

export type OkfMcpServer = ReturnType<typeof createOkfServer>;
type RegisteredToolHandle = { remove(): void };

/**
 * Removes unsafe dynamic tools from the MCP server instance.
 * Fails closed if the internal registry shape changes.
 */
export function removeBlockedTools(server: OkfMcpServer): void {
  const registry = (server as unknown as {
    _registeredTools?: Record<string, RegisteredToolHandle | undefined>;
  })._registeredTools;

  if (!registry || typeof registry !== "object") {
    throw new Error("Cannot access MCP tool registry to remove blocked tools");
  }

  for (const name of BLOCKED_TOOLS) {
    registry[name]?.remove();
    if (registry[name]) {
      throw new Error(`Failed to remove blocked MCP tool: ${name}`);
    }
  }
}

/**
 * Ensures the bundle store is loaded and creates a clean, secure McpServer instance.
 */
export async function createConfiguredMcpServer(): Promise<OkfMcpServer> {
  await ensureStoreLoaded();
  const server = createOkfServer(store, { writable: false });
  removeBlockedTools(server);
  return server;
}

