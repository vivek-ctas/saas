import { apiFetch } from '@/lib/api';
import type {
  ContactFormPayload,
  ContactSubmitResponse,
  WebSettingsData,
} from '../types/contact.types';

// ── Company Info ──────────────────────────────────────────────────────────

/**
 * Fetch full company settings (public - no auth needed).
 * Endpoint: GET /v1/web-settings
 */
export async function fetchWebSettings(): Promise<{
  data: WebSettingsData | null;
  error: string | null;
}> {
  const { data, error } = await apiFetch<{ status: number; data: WebSettingsData }>('/v1/web-settings');
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
