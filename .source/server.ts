// @ts-nocheck
import * as __fd_glob_28 from "../content/docs/supplier/index.mdx?collection=docs"
import * as __fd_glob_27 from "../content/docs/settings/index.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/sales/returns.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/sales/index.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/sales/create-sale.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/reports/index.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/purchases/index.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/purchases/create-purchase.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/inventory/index.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/introduction/installation.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/introduction/index.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/introduction/getting-started.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/customers/index.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/clinics/index.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/api/webhooks.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/api/index.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/api/authentication.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/how-to-write.mdx?collection=docs"
import { default as __fd_glob_10 } from "../content/docs/supplier/meta.json?collection=docs"
import { default as __fd_glob_9 } from "../content/docs/settings/meta.json?collection=docs"
import { default as __fd_glob_8 } from "../content/docs/sales/meta.json?collection=docs"
import { default as __fd_glob_7 } from "../content/docs/reports/meta.json?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/purchases/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/inventory/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/introduction/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/customers/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/clinics/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api/meta.json": __fd_glob_1, "clinics/meta.json": __fd_glob_2, "customers/meta.json": __fd_glob_3, "introduction/meta.json": __fd_glob_4, "inventory/meta.json": __fd_glob_5, "purchases/meta.json": __fd_glob_6, "reports/meta.json": __fd_glob_7, "sales/meta.json": __fd_glob_8, "settings/meta.json": __fd_glob_9, "supplier/meta.json": __fd_glob_10, }, {"how-to-write.mdx": __fd_glob_11, "api/authentication.mdx": __fd_glob_12, "api/index.mdx": __fd_glob_13, "api/webhooks.mdx": __fd_glob_14, "clinics/index.mdx": __fd_glob_15, "customers/index.mdx": __fd_glob_16, "introduction/getting-started.mdx": __fd_glob_17, "introduction/index.mdx": __fd_glob_18, "introduction/installation.mdx": __fd_glob_19, "inventory/index.mdx": __fd_glob_20, "purchases/create-purchase.mdx": __fd_glob_21, "purchases/index.mdx": __fd_glob_22, "reports/index.mdx": __fd_glob_23, "sales/create-sale.mdx": __fd_glob_24, "sales/index.mdx": __fd_glob_25, "sales/returns.mdx": __fd_glob_26, "settings/index.mdx": __fd_glob_27, "supplier/index.mdx": __fd_glob_28, });