export type CategoryId =
  | "getting-started"
  | "account-users"
  | "billing-gst"
  | "inventory-expiry"
  | "purchases-suppliers"
  | "sales-reports";

export interface HelpCategory {
  id: CategoryId;
  name: string;
  description: string;
  count: number;
  hue: "teal" | "blue" | "amber" | "green" | "violet" | "rose";
  iconName: string;
}

export interface FaqStep {
  title: string;
  body: string;
}

export interface FaqRecord {
  id: string; // "q-{slug}"
  slug: string;
  title: string;
  description: string;
  categoryId: CategoryId;
  categoryName: string;
  tags: string[]; // for internal search only
  fullGuideHref: string;
  fullGuideTitle: string;
  lead: string;
  steps?: FaqStep[];
  notes?: string[];
}

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Store setup, team onboarding, and finding previous records",
    count: 3,
    hue: "teal",
    iconName: "Compass",
  },
  {
    id: "account-users",
    name: "Account & Users",
    description: "Staff logins, role permissions, password changes, and store details",
    count: 6,
    hue: "blue",
    iconName: "Users",
  },
  {
    id: "billing-gst",
    name: "Billing & GST",
    description: "GST bills, NRx & H1 sales, credit notes, and saved drafts",
    count: 5,
    hue: "amber",
    iconName: "Receipt",
  },
  {
    id: "inventory-expiry",
    name: "Inventory & Expiry",
    description: "Batch tracking, MRP updates, loose tablet units, and expiry management",
    count: 5,
    hue: "green",
    iconName: "Package",
  },
  {
    id: "purchases-suppliers",
    name: "Purchases & Suppliers",
    description: "Supplier ledger balances, payment adjustments, and vendor returns",
    count: 2,
    hue: "violet",
    iconName: "Truck",
  },
  {
    id: "sales-reports",
    name: "Sales & Reports",
    description: "Daily sales summaries, bill editing, and store reporting registers",
    count: 2,
    hue: "rose",
    iconName: "BarChart3",
  },
];

export const MOST_ASKED_SHORTCUTS = [
  {
    label: "GST invoice",
    slug: "print-or-share-bill",
    iconName: "Receipt",
  },
  {
    label: "Expiry alerts",
    slug: "wrong-calculations",
    iconName: "ClockAlert",
  },
  {
    label: "Add a staff user",
    slug: "add-user",
    iconName: "UserPlus",
  },
  {
    label: "Reset a password",
    slug: "reset-password",
    iconName: "KeyRound",
  },
] as const;

export const POPULAR_SEARCH_CHIPS = [
  { label: "GST invoice", query: "GST invoice" },
  { label: "Expiry alerts", query: "expiry" },
  { label: "Add user", query: "add user" },
  { label: "Barcode scan", query: "scan" },
] as const;

export const FAQ_RECORDS: FaqRecord[] = [
  // --- 1) Getting Started (3) ---
  {
    id: "q-how-do-i-sign-in",
    slug: "how-do-i-sign-in",
    title: "How do I sign in to MediFlux?",
    description: "Sign in directly to your active MediFlux store or launch from desktop and mobile apps.",
    categoryId: "getting-started",
    categoryName: "Getting Started",
    tags: ["getting-started", "login", "account", "sign in", "signin", "password", "app", "pwa", "settings"],
    fullGuideHref: "/docs/introduction/getting-started",
    fullGuideTitle: "Getting Started Guide",
    lead: "If you already have an active subscription and a store, you can sign in directly. If you do not have a store yet, create one first.",
    steps: [
      {
        title: "Open the login page",
        body: "Go to the MediFlux login portal at app.mediflux.in from any modern browser.",
      },
      {
        title: "Enter credentials",
        body: "Enter your registered email address and password.",
      },
      {
        title: "Access your dashboard",
        body: "Click Login to open your store dashboard. If you cannot remember your password, choose Login with Phone/OTP to sign in via text code.",
      },
    ],
    notes: [
      "You can also install MediFlux as an app on Windows or Android for one-click desktop or mobile access without re-entering URLs.",
    ],
  },
  {
    id: "q-forget-password",
    slug: "forget-password",
    title: "How do I invite my team?",
    description: "Invite pharmacy staff members and assign their roles and permissions in MediFlux.",
    categoryId: "getting-started",
    categoryName: "Getting Started",
    tags: ["getting-started", "users", "team", "invite", "staff", "settings", "user-management", "login"],
    fullGuideHref: "/docs/settings/user-management",
    fullGuideTitle: "Team & User Settings",
    lead: "Invite staff from Settings → User Management. Each person gets their own login so you can control what they can see and do.",
    steps: [
      {
        title: "Open User Management",
        body: "Open Settings from the sidebar, then select User Management.",
      },
      {
        title: "Add user details",
        body: "Select Add user and enter their name, email, phone, and role (e.g. Cashier, Pharmacist, Admin).",
      },
      {
        title: "Set permissions & invite",
        body: "Choose module permissions (Read, Write, Delete), set their initial password, and save to grant immediate access.",
      },
    ],
    notes: [
      "Staff members can only view and perform actions permitted by their assigned role.",
    ],
  },
  {
    id: "q-cannot-find-a-sale",
    slug: "cannot-find-a-sale",
    title: "How do I find a previous sale?",
    description: "Search previous sales by customer, drug name, or invoice number in Sales List.",
    categoryId: "getting-started",
    categoryName: "Getting Started",
    tags: ["getting-started", "search", "sales", "sales-list", "find sale", "invoice search", "bill history", "settings"],
    fullGuideHref: "/docs/sales/sale-list",
    fullGuideTitle: "Sales List Guide",
    lead: "Go to Sales → Sales List to find any previous sale or bill.",
    steps: [
      {
        title: "Open Sales List",
        body: "From the MediFlux sidebar, click on Sales and choose Sales List.",
      },
      {
        title: "Search by keyword",
        body: "Enter a Customer Name, Drug Name, or Invoice Number into the search bar.",
      },
      {
        title: "Apply filters",
        body: "Filter by Date Range, Sale Type (Retail/Wholesale), or Payment Status to locate the exact transaction.",
      },
    ],
    notes: [
      "Use the date picker filter if you are looking for bills created in previous months or financial years.",
    ],
  },

  // --- 2) Account & Users (6) ---
  {
    id: "q-add-user",
    slug: "add-user",
    title: "How do I add another user?",
    description: "Add a new user to your MediFlux account and assign their permissions.",
    categoryId: "account-users",
    categoryName: "Account & Users",
    tags: ["account", "users", "user-management", "add user", "staff", "cashier", "pharmacist", "permissions", "profile"],
    fullGuideHref: "/docs/settings/user-management",
    fullGuideTitle: "User Management Guide",
    lead: "Go to Settings → User Management and select Create user.",
    steps: [
      {
        title: "Enter user details",
        body: "Enter the user's Role, Name, Email Address, and Phone. Under Security, enter a Password and Confirm Password.",
      },
      {
        title: "Set permissions",
        body: "Under Permissions, select the required Read, Write, and Delete checkboxes for each store module.",
      },
      {
        title: "Create the user",
        body: "Review the details and select Create User. The account is activated immediately in your Store Users list.",
      },
    ],
    notes: [
      "The permissions assigned to a user determine what they can view, add, or delete across billing, inventory, and accounting.",
    ],
  },
  {
    id: "q-remove-user",
    slug: "remove-user",
    title: "How do I remove a user?",
    description: "Deactivate user access to your MediFlux account while preserving historic sales records.",
    categoryId: "account-users",
    categoryName: "Account & Users",
    tags: ["account", "users", "user-management", "remove user", "delete user", "deactivate", "staff", "permissions"],
    fullGuideHref: "/docs/settings/user-management",
    fullGuideTitle: "User Management Guide",
    lead: "To remove a user's access to your MediFlux account, deactivate the user from Settings → User Management.",
    steps: [
      {
        title: "Open User Management",
        body: "Go to Settings → User Management and locate the user in the Store Users list.",
      },
      {
        title: "Edit the user",
        body: "Select Edit next to the user's name.",
      },
      {
        title: "Deactivate access",
        body: "Change their status to Inactive or clear their module access and save. The user can no longer log in.",
      },
    ],
    notes: [
      "Deactivating a user keeps their past sales and audit trails intact while immediately preventing any future login.",
    ],
  },
  {
    id: "q-user-permission",
    slug: "user-permission",
    title: "How do I change a user's permissions?",
    description: "Update module access permissions (Read, Write, Delete) for any staff member.",
    categoryId: "account-users",
    categoryName: "Account & Users",
    tags: ["account", "users", "permissions", "user-management", "roles", "access control", "read write delete", "profile"],
    fullGuideHref: "/docs/settings/user-management",
    fullGuideTitle: "Roles & Permissions Guide",
    lead: "Go to Settings → User Management and find the user whose permissions you want to change.",
    steps: [
      {
        title: "Open user details",
        body: "Select Edit next to the user in the Store Users list.",
      },
      {
        title: "Update permissions",
        body: "Under Permissions, select or clear the required Write, Read, and Delete checkboxes for each module.",
      },
      {
        title: "Save changes",
        body: "Click Save Changes. The new permissions take effect immediately on their next operation.",
      },
    ],
    notes: [
      "Ensure staff have Write permissions for Sales if they are responsible for creating bills and collecting payments.",
    ],
  },
  {
    id: "q-reset-password",
    slug: "reset-password",
    title: "How do I change or update my password?",
    description: "Update the password for your main account from Profile, or update staff passwords from User Management.",
    categoryId: "account-users",
    categoryName: "Account & Users",
    tags: ["account", "login", "password", "profile", "reset password", "change password", "security", "store"],
    fullGuideHref: "/docs/introduction/getting-started",
    fullGuideTitle: "Account Security Guide",
    lead: "Update the password for the main account from Profile, or change passwords for other users from User Management.",
    steps: [
      {
        title: "Update password for the main account",
        body: "Click your profile avatar in the top-right corner, select Profile, click Edit Profile, enter your new Password and Confirm Password, and click Update.",
      },
      {
        title: "Update password for another user (Admin only)",
        body: "Go to Settings → User Management, find the user in Store Users, click Edit, enter a new password, and save.",
      },
    ],
    notes: [
      "If you forgot your password and cannot sign in, use the Login with Phone/OTP option on the login page.",
    ],
  },
  {
    id: "q-login-troubleshoot",
    slug: "login-troubleshoot",
    title: "What do I do if I cannot log in?",
    description: "Troubleshoot common login failures, password issues, and OTP authentication.",
    categoryId: "account-users",
    categoryName: "Account & Users",
    tags: ["account", "login", "troubleshooting", "cannot login", "wrong password", "otp", "login issue", "password"],
    fullGuideHref: "/docs/introduction/getting-started",
    fullGuideTitle: "Login & Access Guide",
    lead: "If you cannot log in to MediFlux, first check that the Email and Password you entered are correct.",
    steps: [
      {
        title: "Check for typos and spaces",
        body: "Make sure there are no extra leading or trailing spaces in the password, as even a small difference will prevent you from logging in.",
      },
      {
        title: "Log in with Phone & OTP",
        body: "If password login fails, choose Login with Phone/OTP to receive a secure one-time verification code on your registered number.",
      },
      {
        title: "Contact store admin or support",
        body: "If your user status was deactivated, ask your store Admin to verify your account or contact MediFlux support.",
      },
    ],
    notes: [
      "Our support specialists on WhatsApp (+91 91036 67857) can verify your registered store email within minutes.",
    ],
  },
  {
    id: "q-change-store-details",
    slug: "change-store-details",
    title: "How do I change my store details?",
    description: "View and update your pharmacy address, contact number, and owner details.",
    categoryId: "account-users",
    categoryName: "Account & Users",
    tags: ["account", "store", "settings", "store details", "address", "phone", "gstin", "dl number", "profile"],
    fullGuideHref: "/docs/settings/overview",
    fullGuideTitle: "Store Settings Guide",
    lead: "Go to Settings → Account to view and update your store details.",
    steps: [
      {
        title: "Open Account Settings",
        body: "From the MediFlux sidebar, navigate to Settings → Account.",
      },
      {
        title: "Update editable information",
        body: "You can update Owner Name, Phone, Email, and Store Address directly from the account settings page.",
      },
      {
        title: "Updating legal Store Name or License",
        body: "Store Name and Drug License numbers cannot be changed directly due to compliance locks. Contact MediFlux support to update verified legal credentials.",
      },
    ],
    notes: [
      "Any updates to your store phone and address will reflect automatically on newly printed bills and receipts.",
    ],
  },

  // --- 3) Billing & GST (4) ---
  {
    id: "q-print-or-share-bill",
    slug: "print-or-share-bill",
    title: "How do I print or share a bill?",
    description: "Print thermal and A4 bills or share invoices directly via WhatsApp.",
    categoryId: "billing-gst",
    categoryName: "Billing & GST",
    tags: ["billing", "sales", "invoices", "invoice", "print bill", "share bill", "whatsapp invoice", "gst", "pdf", "drafts"],
    fullGuideHref: "/docs/sales/sale-list",
    fullGuideTitle: "Invoice Printing Guide",
    lead: "You can print or download a bill by opening its invoice from Sales → Sales List.",
    steps: [
      {
        title: "Open the invoice",
        body: "Find the sale in Sales List. Click the three-dot menu (⋮) on that row and select View Invoice.",
      },
      {
        title: "Print or download",
        body: "Click Print (or press Ctrl+P) to send the bill to your thermal (80mm/58mm) or A4/A5 printer, or click Download to save a PDF.",
      },
      {
        title: "Share on WhatsApp",
        body: "Click Share on WhatsApp to send a clean digital invoice link directly to the customer's mobile number.",
      },
    ],
    notes: [
      "You can configure thermal or A4 page formats, store logo, and terms & conditions under Settings → Print Preferences.",
    ],
  },
  {
    id: "q-draft-and-add-sale-diff",
    slug: "draft-and-add-sale-diff",
    title: "What is the difference between Save Draft and Add on a sale?",
    description: "Learn how Save Draft pauses billing while + Add finalises the sale and deducts stock.",
    categoryId: "billing-gst",
    categoryName: "Billing & GST",
    tags: ["billing", "drafts", "sales", "save draft", "add sale", "commit sale", "inventory deduction", "gst", "invoice"],
    fullGuideHref: "/docs/sales/drafts",
    fullGuideTitle: "Sales & Drafts Guide",
    lead: "Save Draft does not add the sale. It only pauses the bill so you can complete it later. + Add commits the transaction.",
    steps: [
      {
        title: "Save Draft (Paused bill)",
        body: "Stores the current bill items under Sales → Drafts without deducting inventory, without updating ledgers, and without generating an invoice number.",
      },
      {
        title: "When to use Save Draft",
        body: "Use Save Draft when a customer needs to pick another medicine, when you need to answer another phone order, or when prescription verification is pending.",
      },
      {
        title: "+ Add (Completed sale)",
        body: "Finalises the transaction, commits the bill, assigns the official invoice number, deducts batch stock, and updates accounting reports.",
      },
    ],
    notes: [
      "A saved draft is not a completed sale and will not appear in statutory GST reports until finalised with + Add.",
    ],
  },
  {
    id: "q-nrx-sale",
    slug: "nrx-sale",
    title: "How do I make an NRx or H1 sale?",
    description: "Dispense Schedule H1 and Narcotic drugs with mandatory doctor and patient records.",
    categoryId: "billing-gst",
    categoryName: "Billing & GST",
    tags: ["billing", "nrx", "h1", "schedule h1", "narcotics", "doctor prescription", "patient", "sales", "gst", "invoices"],
    fullGuideHref: "/docs/sales/add-sale-retail",
    fullGuideTitle: "NRx & H1 Dispensing Guide",
    lead: "NRx and H1 sales use the same Add Sale flow as regular sales, with mandatory doctor and patient records.",
    steps: [
      {
        title: "Start Add Sale",
        body: "Go to Sales → Add Sale. The drug Type (NRx or H1) is automatically detected from the drug master.",
      },
      {
        title: "Enter Doctor & Patient info",
        body: "Select or add the Prescribing Doctor (with registration number) and Patient Name. Both are required for statutory compliance.",
      },
      {
        title: "Complete the sale",
        body: "Select the batch, enter quantity, and complete the bill. MediFlux automatically logs the transaction into your statutory Schedule H1 / NRx register.",
      },
    ],
    notes: [
      "You can export the official Schedule H1 register directly from Reports → Statutory Registers whenever drug inspectors request it.",
    ],
  },
  {
    id: "q-create-credit-note",
    slug: "create-credit-note",
    title: "How do I create a credit note?",
    description: "Issue a credit note when a customer returns sold medicines, restoring stock to inventory.",
    categoryId: "billing-gst",
    categoryName: "Billing & GST",
    tags: ["billing", "credit-note", "returns", "sales return", "customer refund", "stock return", "gst invoice", "invoices"],
    fullGuideHref: "/docs/sales/add-credit-note",
    fullGuideTitle: "Credit Notes Guide",
    lead: "A Credit Note is used when a customer returns medicines that were previously sold. It updates the customer ledger and adds stock back to inventory.",
    steps: [
      {
        title: "Open Credit Note form",
        body: "Go to Sales → Add Credit Note.",
      },
      {
        title: "Select customer & original bill",
        body: "Select the date, search for the customer, and pick the original sale from their transaction history.",
      },
      {
        title: "Specify returned medicines",
        body: "Enter the returned quantity and batch. The rate and GST populate automatically from the original invoice.",
      },
      {
        title: "Save Credit Note",
        body: "Click Save. Stock is restored to inventory and the customer balance is credited.",
      },
    ],
    notes: [
      "Credit notes automatically feed into your GSTR-1 return as outward amendments to reduce net tax liability.",
    ],
  },

  // --- 4) Inventory & Expiry (4) ---
  {
    id: "q-wrong-calculations",
    slug: "wrong-calculations",
    title: "Why is the total wrong when I sell tablets instead of a full strip?",
    description: "Fix loose tablet unit pricing and ensure strip Units are set correctly on batches.",
    categoryId: "inventory-expiry",
    categoryName: "Inventory & Expiry",
    tags: ["inventory", "units", "tablets", "loose tablets", "strip calculation", "strip price", "expiry", "retail", "adjustment"],
    fullGuideHref: "/docs/inventory/drug-list",
    fullGuideTitle: "Drug Master & Units Guide",
    lead: "When you sell loose tablets (e.g. 10 tablets from a strip of 20), the price is calculated from the unit price. If Units was entered incorrectly at purchase, the bill total will be wrong.",
    steps: [
      {
        title: "Understand how Units work",
        body: "At purchase, each item needs the correct Units value (tablets per strip). For a strip of 20 tablets costing ₹100, Units must be 20. If left as 1, the software calculates ₹100 per single tablet.",
      },
      {
        title: "Option 1: Update the purchase",
        body: "Go to the original purchase bill, edit the line for that drug, set the correct Units value (e.g. 10 or 20), and save.",
      },
      {
        title: "Option 2: Update from Drug List",
        body: "Go to Drugs → Drug List, switch to Separated View, find the drug batch, click Edit, enter the correct Units, and save.",
      },
    ],
    notes: [
      "While billing: QTY = full strips/packs; TABS = number of loose tablets. If selling only loose tablets, keep QTY blank and enter count in TABS.",
    ],
  },
  {
    id: "q-add-purchase-from-photo",
    slug: "add-purchase-from-photo",
    title: "How do I add a purchase from a photo?",
    description: "Use AI Bill Scan to upload a photo of supplier invoices and auto-fill batches, expiries, and rates.",
    categoryId: "inventory-expiry",
    categoryName: "Inventory & Expiry",
    tags: ["inventory", "scan", "ocr", "ai bill scan", "invoice photo", "purchases", "camera", "expiry", "units"],
    fullGuideHref: "/docs/purchases/ai-bill-scan",
    fullGuideTitle: "AI Bill Scan Guide",
    lead: "You can add a purchase by uploading a photo of the supplier's invoice. MediFlux reads the bill and pre-fills the drugs so you only need to review and finalise.",
    steps: [
      {
        title: "Open Add Purchase",
        body: "Go to Purchases → Add Purchase (or click + → Add Purchase).",
      },
      {
        title: "Upload supplier invoice",
        body: "Select the supplier, then choose Scan / Upload Invoice and select the invoice photo or PDF.",
      },
      {
        title: "Review extracted data",
        body: "MediFlux OCR extracts drug names, batch numbers, expiry dates, quantities, rates, and GST. Review and adjust any unmatched item.",
      },
      {
        title: "Save purchase",
        body: "Click Save Purchase to add the batches into your inventory and update supplier ledger payables.",
      },
    ],
    notes: [
      "For best results, take a flat, well-lit photo with all column headers and totals visible.",
    ],
  },
  {
    id: "q-create-debit-note",
    slug: "create-debit-note",
    title: "How do I create a debit note?",
    description: "Record damaged, excess, or expired medicine returns to suppliers and adjust accounts payable.",
    categoryId: "inventory-expiry",
    categoryName: "Inventory & Expiry",
    tags: ["inventory", "debit-note", "suppliers", "expired stock", "damaged stock", "vendor return", "adjustment", "expiry"],
    fullGuideHref: "/docs/inventory/create-debit-note",
    fullGuideTitle: "Debit Notes Guide",
    lead: "A Debit Note records returning medications to a supplier (damaged, excess, or expired stock). The selected quantity is permanently removed from inventory.",
    steps: [
      {
        title: "Method 1: From Drug List (Separated View)",
        body: "Go to Drugs → Drug List, switch to Separated View, find the batch, click Actions (⋮), and select Create Debit Note.",
      },
      {
        title: "Method 2: From Inventory Menu",
        body: "Go to Inventory → Create Debit Note, select the supplier, search for the drug, and pick the batch to return.",
      },
      {
        title: "Specify return quantity & save",
        body: "Enter the quantity being returned, review the purchase rate, and click Save Debit Note.",
      },
    ],
    notes: [
      "Saving a debit note deducts the items from stock and reduces your outstanding payable balance in the Supplier Ledger.",
    ],
  },
  {
    id: "q-customer-adjust-entry",
    slug: "customer-adjust-entry",
    title: "How do I adjust the amount in a customer ledger?",
    description: "Correct customer ledger balances for opening dues, price adjustments, or write-offs.",
    categoryId: "inventory-expiry",
    categoryName: "Inventory & Expiry",
    tags: ["inventory", "adjustment", "customers", "customer ledger", "opening balance", "write off", "ledger", "tablets"],
    fullGuideHref: "/docs/customers/customer-ledger",
    fullGuideTitle: "Customer Ledger Guide",
    lead: "To correct a customer's outstanding balance (for example a missed opening balance, price correction, or write-off), add an Adjustment entry from the customer ledger.",
    steps: [
      {
        title: "Open Customer Ledger",
        body: "Go to Customers → Ledger and select the customer from the left panel.",
      },
      {
        title: "Click Actions → Adjustment",
        body: "Click Actions at the top-right and choose Adjustment Entry.",
      },
      {
        title: "Choose Debit or Credit & save",
        body: "Select Debit (customer owes you more) or Credit (customer owes you less), enter the amount, add a note explaining why, and click Save.",
      },
    ],
    notes: [
      "Always write a clear note in the description field for transparent customer reconciliation.",
    ],
  },
  {
    id: "q-change-medicine-mrp",
    slug: "change-medicine-mrp",
    title: "How do I change the MRP of a medicine?",
    description: "Update one medicine's MRP from its Edit action or change the MRP for multiple medicines in bulk.",
    categoryId: "inventory-expiry",
    categoryName: "Inventory & Expiry",
    tags: ["inventory", "drugs", "mrp", "price", "bulk update", "separated view", "medicine"],
    fullGuideHref: "/help/inventory/change-medicine-mrp",
    fullGuideTitle: "Change Medicine MRP Guide",
    lead: "Change an MRP from Drug List → Separated View, either by editing one medicine or using Bulk Update for several medicines.",
    steps: [
      {
        title: "Change one medicine",
        body: "In Drug List → Separated View, open the medicine's actions (⋮), select Edit, update the MRP, and save. You can also select its checkbox and click Update.",
      },
      {
        title: "Change multiple medicines",
        body: "Select the medicines in Separated View, click Update, enter the new value in MRP, leave other fields blank, and click Update Drugs.",
      },
    ],
    notes: [
      "Only fields you fill in are changed; blank fields keep their existing values.",
    ],
  },

  // --- 5) Purchases & Suppliers (2) ---
  {
    id: "q-supplier-adjust-entry",
    slug: "supplier-adjust-entry",
    title: "How do I adjust the amount in a supplier ledger?",
    description: "Correct distributor balances for opening balances, promotional credits, or cash settlements.",
    categoryId: "purchases-suppliers",
    categoryName: "Purchases & Suppliers",
    tags: ["purchases", "suppliers", "ledger", "supplier ledger", "vendor payment", "adjustment", "returns"],
    fullGuideHref: "/docs/supplier/supplier-ledger",
    fullGuideTitle: "Supplier Ledger Guide",
    lead: "To correct a supplier's outstanding balance (for example a missed opening balance, price correction, or write-off), add an Adjustment entry from the supplier ledger.",
    steps: [
      {
        title: "Open Supplier Ledger",
        body: "Go to Suppliers → Ledger and select the distributor from the left panel.",
      },
      {
        title: "Click Actions → Adjustment",
        body: "Click Actions at the top-right and select Adjustment Entry.",
      },
      {
        title: "Select Debit or Credit & save",
        body: "Select Debit (you owe supplier less) or Credit (you owe supplier more), enter the amount, add a note, and click Save.",
      },
    ],
    notes: [
      "Use Debit adjustment when a supplier grants a turnover rebate, scheme discount, or rate correction.",
    ],
  },
  {
    id: "q-return-sale",
    slug: "return-sale",
    title: "How do I return a sale?",
    description: "Process customer product returns, issue refunds, and restore stock back to the correct batch.",
    categoryId: "purchases-suppliers",
    categoryName: "Purchases & Suppliers",
    tags: ["purchases", "returns", "sales return", "billing", "refund", "return sale", "restore stock", "suppliers", "ledger"],
    fullGuideHref: "/docs/sales/returned-sales",
    fullGuideTitle: "Sales Returns Guide",
    lead: "You can return a completed sale directly from Sales → Sales List.",
    steps: [
      {
        title: "Find the sale",
        body: "Go to Sales → Sales List, find the sale, and click the three-dot menu (⋮) on its row. Choose Return Sale.",
      },
      {
        title: "Enter return details",
        body: "Select the return date, choose the items and quantities being returned, and confirm the refund mode (Cash or Customer Credit).",
      },
      {
        title: "Save return",
        body: "Click Save Return. The stock is returned to active inventory batches and the refund is recorded.",
      },
    ],
    notes: [
      "Items are restored into their original batch numbers with their recorded expiry dates.",
    ],
  },
  {
    id: "q-wrong-mrp",
    slug: "wrong-mrp",
    title: "Why is the MRP wrong after scanning a bill?",
    description: "Troubleshoot an incorrect MRP caused by a low-quality bill, a blurry photo, or incorrect column mapping.",
    categoryId: "billing-gst",
    categoryName: "Billing & GST",
    tags: ["purchases", "mrp", "scan", "ocr", "invoice", "photo", "mapping", "wrong price"],
    fullGuideHref: "/help/purchases/wrong-mrp",
    fullGuideTitle: "Wrong MRP Troubleshooting Guide",
    lead: "If the MRP is wrong after scanning a bill, check the invoice quality, photo clarity, and column mapping.",
    steps: [
      {
        title: "Check the bill quality",
        body: "Use a clean, legible invoice and make sure the MRP column is fully visible. Re-scan and compare the extracted MRP with the printed bill.",
      },
      {
        title: "Retake blurry photos",
        body: "Use good lighting, keep the bill flat and fully in frame, and hold the camera directly above it. Avoid glare and shadows.",
      },
      {
        title: "Verify column mapping",
        body: "In Map Invoice Headers, match the column containing the printed MRP to MRP, then verify the values in Review & Import before confirming.",
      },
    ],
    notes: [
      "If the MRP is still wrong on a clear bill with correct mapping, contact the MediFlux Support Team.",
    ],
  },

  // --- 6) Sales & Reports (2) ---
  {
    id: "q-todays-sale",
    slug: "todays-sale",
    title: "How do I check today's sales?",
    description: "Check today's billing revenue, bill counts, and cash register breakdown.",
    categoryId: "sales-reports",
    categoryName: "Sales & Reports",
    tags: ["sales", "sales-list", "reports", "today sales", "daily register", "cash summary", "retail"],
    fullGuideHref: "/docs/sales/sale-list",
    fullGuideTitle: "Daily Sales & Register",
    lead: "You can check today's sales directly from Sales → Sales List.",
    steps: [
      {
        title: "Open Sales List",
        body: "Go to Sales → Sales List from the main navigation sidebar.",
      },
      {
        title: "View today's bills",
        body: "Recent sales are displayed by default so you can immediately see the latest bills without applying any filters.",
      },
      {
        title: "Filter by today's date",
        body: "Click Filter, set the date range to Today, and apply. The summary banner displays total revenue, cash vs digital split, and total bills.",
      },
    ],
    notes: [
      "For complete end-of-day cash reconciliation, check Reports → Daybook or Reports → Sales Summary.",
    ],
  },
  {
    id: "q-update-sale",
    slug: "update-sale",
    title: "How do I edit a sale?",
    description: "Edit customer name, doctor reference, payment mode, or line items on recorded sales.",
    categoryId: "sales-reports",
    categoryName: "Sales & Reports",
    tags: ["sales", "sales-list", "billing", "edit sale", "update bill", "modify invoice", "retail", "reports"],
    fullGuideHref: "/docs/sales/sale-list",
    fullGuideTitle: "Sales Editing Guide",
    lead: "You can update an existing sale from Sales → Sales List.",
    steps: [
      {
        title: "Find the sale",
        body: "Search for the sale you want to update in Sales → Sales List using the search bar or date filters.",
      },
      {
        title: "Open the update option",
        body: "Click the three-dot menu (⋮) on the sale row and choose Edit Sale.",
      },
      {
        title: "Update and save",
        body: "Modify the customer details, doctor name, payment method, or line items, then select Update Sale to save your changes.",
      },
    ],
    notes: [
      "If GST statutory returns have already been filed for that month, issue an amendment Credit Note rather than modifying the invoice.",
    ],
  },
];
