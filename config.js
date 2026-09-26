/*
 * Vinpro Client Desk — configuration
 * ----------------------------------
 * Fill these in after completing SETUP-GUIDE.md steps 1–2.
 * While clientId still starts with "YOUR-", the app runs in DEMO mode with sample data.
 */
window.VINPRO_CONFIG = {
  companyName: "Vinpro Global Services WLL",
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
  vatTrackingStart: "2026-01"
};
