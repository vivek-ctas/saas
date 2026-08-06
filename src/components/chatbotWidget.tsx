'use client';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import {
  MessageCircle,
  X,
  Send,
  RotateCcw,
  BookOpen,
  Tag,
  FileText,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { useChatbot } from '@/hooks/use-chatbot';
import type { ChatbotSource } from '@/types/chatbot.types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SOURCE_BADGES: Record<
  ChatbotSource,
  { label: string; className: string; Icon: LucideIcon }
> = {
  faq: { label: 'FAQ', className: 'bg-blue-100 text-blue-700', Icon: BookOpen },
  pricing: { label: 'Pricing', className: 'bg-emerald-100 text-emerald-700', Icon: Tag },
  knowledge: { label: 'Docs', className: 'bg-purple-100 text-purple-700', Icon: FileText },
  ai: { label: 'AI', className: 'bg-fuchsia-100 text-fuchsia-700', Icon: Sparkles },
};

function SourceBadge({ source }: { source: ChatbotSource }) {
  const { label, className, Icon } = SOURCE_BADGES[source];
  return (
    <span
      className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${className}`}
    >
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  );
}

export function ChatbotWidget() {
  const {
    isOpen,
    open,
    close,
    settings,
    faqs,
    messages,
    sending,
    sendMessage,
    resetConversation,
  } = useChatbot();

  const [draft, setDraft] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, sending]);

  if (settings?.enabled === false) return null;

  const botName = settings?.botName || 'SellerBuz Assistant';
  const welcomeMessage =
    settings?.welcomeMessage || 'Hi! How can I help you with SellerBuz today?';
  const suggestions = faqs.slice(0, 3);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || sending) return;
    setDraft('');
    void sendMessage(text);
  };

  return (
    <>
      {/* ── Chat panel ── */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 sm:right-6 z-50 flex w-[380px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#13355A] to-[#0D2440] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#13355A]" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">{botName}</p>
                <p className="text-[11px] text-white/70">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetConversation}
                aria-label="Start a new chat"
                title="Start a new chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                title="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[420px] max-h-[calc(100dvh-15rem)]">
            <div className="flex flex-col gap-3 p-4">
              {messages.length === 0 ? (
                <>
                  <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                    {welcomeMessage}
                  </div>
                  {suggestions.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Try asking
                      </p>
                      {suggestions.map((faq) => (
                        <button
                          key={faq._id}
                          type="button"
                          onClick={() => {
                            void sendMessage(faq.question);
                          }}
                          className="self-start max-w-[90%] rounded-full border border-border bg-background px-3.5 py-1.5 text-left text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          {faq.question}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                messages.map((msg) =>
                  msg.role === 'user' ? (
                    <div
                      key={msg.id}
                      className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-gradient-to-r from-[#13355A] to-[#0D2440] px-4 py-3 text-sm text-white whitespace-pre-wrap"
                    >
                      {msg.content}
                    </div>
                  ) : (
                    <div key={msg.id} className="max-w-[85%] self-start">
                      <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                        {msg.content}
                      </div>
                      {msg.source && <SourceBadge source={msg.source} />}
                    </div>
                  ),
                )
              )}

              {sending && (
                <div className="self-start">
                  <TypingIndicator />
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          {/* Footer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message…"
              aria-label="Type your message"
              className="h-11 rounded-xl text-sm"
              maxLength={500}
              disabled={sending}
            />
            <Button
              type="submit"
              size="icon"
              className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-r from-[#13355A] to-[#0D2440] hover:opacity-95"
              aria-label="Send message"
              disabled={sending || !draft.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      {/* ── Launcher ── */}
      <button
        type="button"
        onClick={() => (isOpen ? close() : open())}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
        className="group fixed bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#13355A] to-[#0D2440] text-white shadow-[0_10px_30px_rgba(19,53,90,0.45)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_16px_40px_rgba(19,53,90,0.55)] active:scale-95"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[#13355A] opacity-30 animate-ping"
            />
            <MessageCircle className="relative h-6 w-6 drop-shadow-sm" />
          </>
        )}
      </button>
    </>
  );
}
