'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  fetchChatbotSettings,
  fetchChatbotFaqs,
  fetchChatbotHistory,
  sendChatbotMessage,
} from '@/services/chatbot.service';
import type {
  ChatMessage,
  ChatbotFaq,
  ChatbotSettings,
  ChatbotSource,
} from '@/types/chatbot.types';

const VISITOR_KEY = 'sb_chat_visitor';
const CONVERSATION_KEY = 'sb_chat_conversation';

function makeId(): string {
  return typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getOrCreateVisitorId(): string {
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) return existing;
  const id = makeId();
  localStorage.setItem(VISITOR_KEY, id);
  return id;
}

function getLanguage(): string {
  return typeof navigator !== 'undefined'
    ? navigator.language?.slice(0, 2) || 'en'
    : 'en';
}

const CHAT_SOURCES: ChatbotSource[] = ['faq', 'pricing', 'knowledge', 'ai'];

interface UseChatbotResult {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  settings: ChatbotSettings | null;
  faqs: ChatbotFaq[];
  messages: ChatMessage[];
  sending: boolean;
  sendMessage: (text: string) => Promise<void>;
  resetConversation: () => void;
}

export function useChatbot(): UseChatbotResult {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorId, setVisitorId] = useState<string>('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [settings, setSettings] = useState<ChatbotSettings | null>(null);
  const [faqs, setFaqs] = useState<ChatbotFaq[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);
  const historyLoaded = useRef(false);

  // Identity + persisted conversation (browser-only, so run post-hydration).
  useEffect(() => {
    setVisitorId(getOrCreateVisitorId());
    const existing = localStorage.getItem(CONVERSATION_KEY);
    if (existing) setConversationId(existing);
  }, []);

  useEffect(() => {
    if (conversationId) localStorage.setItem(CONVERSATION_KEY, conversationId);
    else localStorage.removeItem(CONVERSATION_KEY);
  }, [conversationId]);

  // Settings + suggestion FAQs once we know who the visitor is.
  useEffect(() => {
    if (!visitorId) return;
    let cancelled = false;

    fetchChatbotSettings().then(({ data }) => {
      if (!cancelled && data) setSettings(data);
    });
    fetchChatbotFaqs().then(({ data }) => {
      if (!cancelled && data) setFaqs(data);
    });

    return () => {
      cancelled = true;
    };
  }, [visitorId]);

  // Hydrate the last conversation the first time the panel opens.
  useEffect(() => {
    if (!isOpen || !visitorId || historyLoaded.current) return;
    historyLoaded.current = true;

    let cancelled = false;
    fetchChatbotHistory(visitorId).then(({ data }) => {
      if (cancelled || !data || data.length === 0) return;

      const hydrated: ChatMessage[] = [];
      for (const entry of [...data].reverse()) {
        hydrated.push({
          id: makeId(),
          role: 'user',
          content: entry.userMessage,
          timestamp: new Date(entry.createdAt).getTime() || Date.now(),
        });
        hydrated.push({
          id: makeId(),
          role: 'bot',
          content: entry.botMessage,
          source: CHAT_SOURCES.includes(entry.source as ChatbotSource)
            ? (entry.source as ChatbotSource)
            : undefined,
          timestamp: new Date(entry.createdAt).getTime() || Date.now(),
        });
      }
      setMessages(hydrated);
    });

    return () => {
      cancelled = true;
    };
  }, [isOpen, visitorId]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || sending) return;

      setSending(true);
      setMessages((prev) => [
        ...prev,
        { id: makeId(), role: 'user', content: trimmed, timestamp: Date.now() },
      ]);

      const { data, error } = await sendChatbotMessage({
        visitorId,
        ...(conversationId ? { conversationId } : {}),
        message: trimmed,
        language: getLanguage(),
      });

      setSending(false);

      if (error || !data) {
        setMessages((prev) => [
          ...prev,
          {
            id: makeId(),
            role: 'bot',
            content: error ?? 'Something went wrong. Please try again.',
            timestamp: Date.now(),
          },
        ]);
        return;
      }

      setConversationId(data.conversationId);
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: 'bot',
          content: data.matched && data.answer ? data.answer : data.message ?? '',
          source: data.source,
          timestamp: Date.now(),
        },
      ]);
    },
    [visitorId, conversationId, sending],
  );

  const resetConversation = useCallback(() => {
    setConversationId(null);
    setMessages([]);
  }, []);

  return {
    isOpen,
    open,
    close,
    settings,
    faqs,
    messages,
    sending,
    sendMessage,
    resetConversation,
  };
}
