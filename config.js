/*
 * Vinpro Client Desk — configuration
 * ----------------------------------
 * Fill these in after completing SETUP-GUIDE.md steps 1–2.
 * While clientId still starts with "YOUR-", the app runs in DEMO mode with sample data.
 */
window.VINPRO_CONFIG = {
  companyName: "Vinpro Global · Bahrain & UAE",
  defaultLocation: "Bahrain",   // location given to clients that have none set
  appName: "Client Desk",

  // Microsoft Entra ID (Azure AD) — from the App Registration "Overview" page
  tenantId: "00b5013f-d3c8-48d9-a978-aa75d3965f09",   // Directory (tenant) ID — VINPRO GLOBAL SERVICES PRIVATE LIMITED
  clientId: "d3901adc-a3a6-4aff-bcd3-94a713403ed2",   // Application (client) ID — "Vinpro Client Desk"

  // SharePoint site that stores the data (created in SETUP-GUIDE step 1)
  sharePointHost: "vinpromail.sharepoint.com",
  sitePath: "/sites/VinproBahrainClientDesk",

  // These Microsoft accounts are always Admins (can manage employees, import, export)
  adminEmails: ["vignesh@vinproglobal.com"],

  // Prefix for the SharePoint list names the app creates (VGS_Clients, VGS_Credentials, ...)
  listPrefix: "VGS_",

  // VAT periods ending before this month are not tracked (avoids old "overdue" noise). Format YYYY-MM
  vatTrackingStart: "2026-01",

  // Accounting & Consultancy: first month tracked. Work is due on the last day of the
  // following month (annual engagements: last day of the month after year end).
  monthlyTrackingStart: "2026-09",

  // Budget vs Actual (Vinpro Global Services WLL, Bahrain) — cash basis, BHD; VAT only once registered
  budgetStart: "2026-01",          // first month tracked, YYYY-MM
  vatRate: 0.10,                   // Bahrain VAT added to fee budgets and worked out on receipts
  vatRegisteredFrom: "",           // "" = not VAT registered. Normally set in the app (Fee budget tab); this is only the default
  financeAccess: ["Admin"],        // roles that can open it; add "Manager" to share with managers
  invoiceAt: "end",                // invoices taken as raised at the "end" (or "start") of each billing month
  defaultTerms: "0",               // due date for fee lines without one: "0" (immediate), "30", "45", "60" or "90"
  expenseHeads: [                  // cash outflow heads, in report order
    "Rent, EWA and LMRA", "Salary, Visa & Ticket", "Bahrain Exps - SG", "Car Rental", "Office Exps",
    "Reimbursement - Fees", "Accommodation", "Travel / Referral Fee", "Vinpro Dubai", "Vinpro Chennai",
    "Vignesh Chennai", "VAT paid to NBR"
  ],
  cashAccounts: [                  // "Check" block: month-end balances keyed in, should total the closing balance
    "Cash", "Petty Cash", "Beyon", "Ila Bank", "SBI Bank", "Flexi Deposit", "BBK Bank"
  ]
};
