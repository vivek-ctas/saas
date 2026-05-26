// ── Contact form payload ──────────────────────────────────────────────────

export interface ContactFormPayload {
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  inquiry_type: string;
  message: string;
}

// ── Company contact info returned by backend ─────────────────────────────

export interface CompanyContact {
  email: string;
  phone: string;
  address: string;
  postal_code: string;
  support_hours: string;
  email_hours: string;
}

// ── API response shapes ───────────────────────────────────────────────────

export interface ContactSubmitResponse {
  status: number;
  message: string;
}

export interface CompanyContactResponse {
  status: number;
  data: CompanyContact;
}
