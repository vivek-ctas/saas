// ── API types ───────────────────────────────────────────────────────────────

export type ChatbotSource = 'faq' | 'pricing' | 'knowledge' | 'ai';

export interface SendChatbotMessagePayload {
  visitorId: string;
  // Omit on the first message of a session; the server generates one and
  // returns it so the frontend can persist it for subsequent turns.
  conversationId?: string;
  message: string;
  // Defaults to 'en' on the server when omitted. Only affects the AI path.
  language?: string;
}

export interface ChatbotMessageResponse {
  matched: boolean;
  source?: ChatbotSource;
  requiresAI: boolean;
  // Present when matched; otherwise `message` holds the fallback text.
  answer?: string;
  message?: string;
  conversationId: string;
}

export interface ChatbotSettings {
  _id?: string;
  botName: string;
  welcomeMessage: string;
  defaultLanguage: string;
  aiProvider: string;
  enabled: boolean;
}

export interface ChatbotFaq {
  _id: string;
  question: string;
  answer: string;
  language?: string;
  status?: number;
}

export interface ChatbotHistoryEntry {
  _id: string;
  conversationId: string;
  visitorId: string;
  userMessage: string;
  botMessage: string;
  source: ChatbotSource | string;
  createdAt: string;
}

// ── UI types ─────────────────────────────────────────────────────────────────

export type ChatRole = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  source?: ChatbotSource;
  timestamp: number;
}
