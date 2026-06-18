export interface ExchangeRateResponse {
    result: string;
    provider: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    rates: Record<string, number>;
}

/**
 * Fetches exchange rates from a public API.
 * Base currency is always USD as per requirement.
 */
export async function fetchExchangeRates(): Promise<ExchangeRateResponse> {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
    }
    return response.json();
}

/**
 * Formats a currency amount based on the currency code.
 */
export function formatConvertedPrice(amount: number, currencyCode: string): string {
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode.toUpperCase(),
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    } catch (error) {
        // Fallback if currency code is invalid or unsupported
        return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
    }
}
