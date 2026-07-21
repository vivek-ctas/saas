import { apiFetch } from '@/lib/api';
import type { Plan, PlansApiResponse, CurrencyOption, CurrenciesApiResponse } from '@/types';

/**
 * Fetches active, self-serve plans for the pricing page.
 * Public - no auth required.
 * Endpoint: GET /v1/manage-plan/public/plans
 */
export async function fetchPublicPlans(): Promise<{ plans: Plan[]; error: string | null }> {
  const { data, error } = await apiFetch<PlansApiResponse>('/v1/manage-plan/public/plans');
  return { plans: data?.data ?? [], error };
}

/**
 * Fetches all active currencies / countries for the checkout form country dropdown.
 * Endpoint: GET /v1/manage-plan/get-currencies
 * Response shape: { data: [{ id, code, country, status }] }
 */
export async function fetchCurrencies(): Promise<{ currencies: CurrencyOption[]; error: string | null }> {
  const { data, error } = await apiFetch<CurrenciesApiResponse>('/v1/manage-plan/get-currencies');
  // Only show active currencies (status = 1). Backend may return either legacy fields
  // (`country`, `code`) or preferred newer fields (`country_name`, `country_code`).
  const raw = (data?.data ?? []).filter((c) => c.status === 1);
  // Normalize to ensure `country_name` and `country_code` exist on each item.
  const active = raw.map((c) => ({
    ...c,
    country_name: c.country_name ?? (c.country ? (c.country.charAt(0) + c.country.slice(1).toLowerCase()) : ''),
    country_code: c.country_code ?? c.code ?? '',
  }));
  return { currencies: active, error };
}
