// ── Contact form payload ──────────────────────────────────────────────────

export interface ContactFormPayload {
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  inquiry_type: string;
  message: string;
}

// ── Company contact info returned by backend (legacy) ────────────────────

export interface CompanyContact {
  email: string;
  phone: string;
  address: string;
  postal_code: string;
  support_hours: string;
  email_hours: string;
}

// ── Full company settings returned by GET /v1/company-settings ───────────

export interface CompanySettingsData {
  company: {
    name: string;
    website?: string;
    tagline?: string;
    about?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    city?: string;
    state?: string;
    country?: string;
    postal_code: string;
    google_map_url?: string;
    working_hours?: string;
    timezone?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
  footer?: {
    about?: string;
    copyright_text?: string;
    show_social?: boolean;
    show_contact?: boolean;
    show_address?: boolean;
    show_working_hours?: boolean;
  };
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
