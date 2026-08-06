import { apiFetch } from '@/lib/api';
import type {
  SendChatbotMessagePayload,
  ChatbotMessageResponse,
  ChatbotSettings,
  ChatbotFaq,
  ChatbotHistoryEntry,
} from '../types/chatbot.types';

// ── Settings ─────────────────────────────────────────────────────────────────

/**
 * Fetch the public chatbot widget settings.
 * Endpoint: GET /v1/chatbot/settings
 */
export async function fetchChatbotSettings(): Promise<{
  data: ChatbotSettings | null;
  error: string | null;
}> {
  const { data, error } = await apiFetch<{
    status: number;
    data: ChatbotSettings;
  }>('/v1/chatbot/settings');
  return {
    data: data?.data ?? null,
    error,
  };
}

// ── FAQs ─────────────────────────────────────────────────────────────────────

/**
 * Fetch the active public FAQs (used for quick-start suggestion chips).
 * Endpoint: GET /v1/chatbot/faqs
 */
export async function fetchChatbotFaqs(): Promise<{
  data: ChatbotFaq[] | null;
  error: string | null;
}> {
  const { data, error } = await apiFetch<{
    status: number;
    data: ChatbotFaq[];
  }>('/v1/chatbot/faqs');
  return {
    data: data?.data ?? null,
    error,
  };
}

// ── History ──────────────────────────────────────────────────────────────────

/**
 * Fetch a visitor's most recent conversation turns (newest first).
 * Endpoint: GET /v1/chatbot/history/:visitorId
 */
export async function fetchChatbotHistory(
  visitorId: string,
): Promise<{ data: ChatbotHistoryEntry[] | null; error: string | null }> {
  const { data, error } = await apiFetch<{
    status: number;
    data: ChatbotHistoryEntry[];
  }>(`/v1/chatbot/history/${visitorId}`);
  return {
    data: data?.data ?? null,
    error,
  };
}

// ── Message ──────────────────────────────────────────────────────────────────

/**
 * Send a message through the chatbot pipeline.
 * Endpoint: POST /v1/chatbot/message
 */
export async function sendChatbotMessage(
  payload: SendChatbotMessagePayload,
): Promise<{ data: ChatbotMessageResponse | null; error: string | null }> {
  const { data, error } = await apiFetch<{
    status: number;
    data: ChatbotMessageResponse;
  }>('/v1/chatbot/message', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (error) {
    return { data: null, error };
  }

  return { data: data?.data ?? null, error: null };
}
