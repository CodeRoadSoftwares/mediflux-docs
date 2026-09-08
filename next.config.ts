import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Keep URLs from the previous documentation structure working. These are
    // permanent redirects so crawlers replace the retired URLs in their index.
    return [
      // Renamed sections.
      { source: "/docs/clinic/:path*", destination: "/docs/clinics/:path*", permanent: true },
      { source: "/docs/drugs/:path*", destination: "/docs/inventory/:path*", permanent: true },
      { source: "/docs/suppliers/:path*", destination: "/docs/supplier/:path*", permanent: true },

      // Retired top-level pages.
      { source: "/docs/accounting/ledgers", destination: "/docs/settings/accounting-settings", permanent: true },
      { source: "/docs/help-support", destination: "/docs/introduction", permanent: true },

      // Introduction pages that were consolidated or renamed.
      { source: "/docs/introduction/quick-start", destination: "/docs/introduction/getting-started", permanent: true },
      { source: "/docs/introduction/configuration", destination: "/docs/introduction/getting-started", permanent: true },
      { source: "/docs/introduction/security", destination: "/docs/introduction", permanent: true },
      {
        source: "/docs/introduction/video-tutorials",
        destination: "https://www.youtube.com/@MediFluxSoftware/playlists",
        permanent: true,
      },
      { source: "/docs/getting-started", destination: "/docs/introduction/getting-started", permanent: true },

      // Legacy customer URLs.
      { source: "/docs/customers/credit-management", destination: "/docs/customers/customer-ledger", permanent: true },
      { source: "/docs/customers/ledger", destination: "/docs/customers/customer-ledger", permanent: true },
      { source: "/docs/customers/store-requests", destination: "/docs/customers/store-request", permanent: true },
      { source: "/docs/customers/trash", destination: "/docs/customers/customer-trash", permanent: true },

      // Settings and supplier page names now use explicit, descriptive slugs.
      { source: "/docs/settings/account", destination: "/docs/settings/account-info", permanent: true },
      { source: "/docs/settings/accounting", destination: "/docs/settings/accounting-settings", permanent: true },
      { source: "/docs/settings/bill-template", destination: "/docs/settings/bill-templates", permanent: true },
      { source: "/docs/settings/notification", destination: "/docs/settings/notifications", permanent: true },
      { source: "/docs/settings/subscription", destination: "/docs/settings/subscriptions", permanent: true },
      { source: "/docs/settings/user", destination: "/docs/settings/user-management", permanent: true },
      { source: "/docs/supplier/add", destination: "/docs/supplier/add-supplier", permanent: true },
      { source: "/docs/supplier/ledger", destination: "/docs/supplier/supplier-ledger", permanent: true },
      { source: "/docs/supplier/list", destination: "/docs/supplier/supplier-list", permanent: true },
      { source: "/docs/supplier/profile", destination: "/docs/supplier/supplier-profile", permanent: true },
      { source: "/docs/supplier/trash", destination: "/docs/supplier/supplier-trash", permanent: true },

      // Former overview and detail pages.
      { source: "/docs/inventory/overview", destination: "/docs/inventory", permanent: true },
      { source: "/docs/purchases/overview", destination: "/docs/purchases", permanent: true },
      { source: "/docs/purchases/create-purchase", destination: "/docs/purchases/add-purchase", permanent: true },
      { source: "/docs/reports/analytics", destination: "/docs/reports", permanent: true },
      { source: "/docs/reports/profit-loss", destination: "/docs/reports", permanent: true },

      // Sales pages were split into retail and wholesale guides.
      { source: "/docs/sales/add-retail-sale", destination: "/docs/sales/add-sale-retail", permanent: true },
      { source: "/docs/sales/add-sale", destination: "/docs/sales/add-sale-retail", permanent: true },
      { source: "/docs/sales/add-wholesale-sale", destination: "/docs/sales/add-wholesale", permanent: true },
      { source: "/docs/sales/billing", destination: "/docs/sales/add-sale-retail", permanent: true },
      { source: "/docs/sales/create-sale", destination: "/docs/sales/add-sale-retail", permanent: true },
      { source: "/docs/sales/returned", destination: "/docs/sales/returned-sales", permanent: true },
      { source: "/docs/sales/returns", destination: "/docs/sales/returned-sales", permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/docs/introduction",
      },
      {
        source: "/docs/:path*.md",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
