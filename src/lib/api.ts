/**
 * Central API configuration for the frontend.
 * Set NEXT_PUBLIC_API_BASE_URL in your .env.local to point to your backend.
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

/**
 * Generic fetch wrapper with error handling.
 */
export async function apiFetch<T = any>(
  path: string,
  options?: RequestInit,
): Promise<{ data: T | null; error: string | null }> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options?.headers ?? {}) },
      ...options,
    });
    const json = await res.json();
    if (!res.ok) {
      return { data: null, error: json?.message || 'Something went wrong' };
    }
    return { data: json, error: null };
  } catch (err: any) {
    return { data: null, error: err?.message || 'Network error. Please try again.' };
  }
}
