import { apiFetch } from '@/lib/api';
import type {
  ContactFormPayload,
  CompanyContact,
  ContactSubmitResponse,
  CompanyContactResponse,
  CompanySettingsData,
} from '../types/contact.types';

// ── Company Info ──────────────────────────────────────────────────────────

/**
 * Fetch company contact details for the contact page (public — no auth needed).
 */
export async function fetchCompanyContact(): Promise<{
  data: CompanyContact | null;
  error: string | null;
}> {
  const { data, error } = await apiFetch<CompanyContact>('/v1/company-contact');
  return {
    data: data ?? null,
    error,
  };
}

/**
 * Fetch full company settings (public — no auth needed).
 * Endpoint: GET /v1/company-settings
 */
export async function fetchCompanySettings(): Promise<{
  data: CompanySettingsData | null;
  error: string | null;
}> {
  const { data, error } = await apiFetch<{ status: number; data: CompanySettingsData }>('/v1/company-settings');
  return {
    data: data?.data ?? null,
    error,
  };
}

// ── Contact Form Submission ───────────────────────────────────────────────

/**
 * Submit a contact form message to the backend.
 */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ message: string | null; error: string | null }> {
  const { data, error } = await apiFetch<ContactSubmitResponse>('/v1/contact/submit', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (error) {
    return { message: null, error };
  }

  return { message: data?.message ?? 'Message sent!', error: null };
}
