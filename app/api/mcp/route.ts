import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createConfiguredMcpServer } from "@/lib/okf/mcp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request): Promise<Response> {
  try {
    const server = await createConfiguredMcpServer();

    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // stateless
      enableJsonResponse: true,
    });

    await server.connect(transport);
    return transport.handleRequest(req);
  } catch (err) {
    return Response.json(
      {
        jsonrpc: "2.0",
        id: null,
        error: {
          code: -32603,
          message: `Failed to handle MCP request: ${(err as Error).message}`,
        },
      },
      { status: 503 }
    );
  }
}

export async function GET(): Promise<Response> {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}
