import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowUpRight,
  RotateCcw,
  Globe,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PageView } from '../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isFallback?: boolean;
  contactUrl?: string;
  whatsappUrl?: string;
}

interface ChatWidgetProps {
  onNavigate?: (page: PageView) => void;
}

const STORAGE_KEY = 'basantech_chat_history_v3';

const INITIAL_WELCOME: Message = {
  id: 'welcome-0',
  role: 'assistant',
  text: "Hello! 👋 I'm the **Basan Tech Assistant**.\n\nWe engineer high-performance web platforms, Android & iOS mobile apps, custom software, and practical AI solutions. How can I help you today?",
  timestamp: 'Just now'
};

const SUGGESTED_PROMPTS = [
  'What services does Basan Tech offer?',
  'How much does a custom project cost?',
  'Tell me about City Care Clinic CRM',
  'Do you build mobile apps for iOS & Android?',
  'How do we start a project with you?'
];

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      // Clear any stale cached errors from prior broken sessions
      sessionStorage.removeItem('basantech_chat_history_v1');
      sessionStorage.removeItem('basantech_chat_history_v2');

      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const validOnly = parsed.filter((m: Message) => !m.isFallback);
          if (validOnly.length > 0) return validOnly;
        }
      }
    } catch {
      // Ignore storage parse errors
    }
    return [INITIAL_WELCOME];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Check mobile viewport width (<640px)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Save conversation to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage quota or private mode fallback
    }
  }, [messages]);

  // Auto-scroll messages to bottom
  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'end'
    });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(false);
      // Auto-focus input on desktop
      if (!isMobile) {
        setTimeout(() => inputRef.current?.focus(), 200);
      }
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(true);
    }
  }, [messages, isLoading]);

  // Mobile virtual keyboard handling using visualViewport API
  useEffect(() => {
    if (!isOpen || !isMobile) return;

    // Prevent background page body from scrolling while full-screen mobile chat is open
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    document.body.style.overflow = 'hidden';

    const handleVisualViewport = () => {
      if (!window.visualViewport || !mobileContainerRef.current) return;
      const vv = window.visualViewport;
      // Pin height and position exactly to the visible screen above virtual keyboard
      mobileContainerRef.current.style.height = `${vv.height}px`;
      mobileContainerRef.current.style.top = `${vv.offsetTop}px`;
      scrollToBottom(true);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewport);
      window.visualViewport.addEventListener('scroll', handleVisualViewport);
      handleVisualViewport();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleVisualViewport);
        window.visualViewport.removeEventListener('scroll', handleVisualViewport);
      }
    };
  }, [isOpen, isMobile]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowNotificationBadge(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleClearHistory = () => {
    if (window.confirm('Clear your chat history and start a fresh session?')) {
      const reset = [
        {
          ...INITIAL_WELCOME,
          id: `welcome-${Date.now()}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
      setMessages(reset);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  const sendMessage = async (textToSend?: string) => {
    const rawText = textToSend !== undefined ? textToSend : input;
    const cleanText = rawText.trim();
    if (!cleanText || isLoading) return;

    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: cleanText,
      timestamp: userTimestamp
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history formatted for API (excluding any error fallbacks and not duplicating latest message)
      const historyPayload = messages
        .filter((m) => !m.isFallback)
        .slice(-8)
        .map((m) => ({
          role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
          text: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: cleanText,
          history: historyPayload
        })
      });

      const data = await res.json();
      const assistantTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (data && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            text: data.reply,
            timestamp: assistantTimestamp,
            isFallback: Boolean(data.fallback),
            contactUrl: data.contactUrl,
            whatsappUrl: data.whatsappUrl
          }
        ]);
      } else {
        throw new Error(data?.error || 'No reply received');
      }
    } catch {
      // Graceful local fallback if network or server error occurs
      const assistantTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          text: "I'm having trouble connecting right now — please reach out via WhatsApp (+91 9624895641) or our contact form, and our engineering team will get back to you promptly!",
          timestamp: assistantTimestamp,
          isFallback: true,
          contactUrl: 'https://basantech.online/contact',
          whatsappUrl: 'https://wa.me/919624895641'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /**
   * Simple, safe Markdown formatter for bot responses:
   * - **bold**
   * - Bullet points
   * - Links [label](url)
   */
  const formatMarkdown = (content: string) => {
    const lines = content.split('\n');

    return lines.map((line, lIdx) => {
      // Bullet list item
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('• ') || line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().replace(/^[-•*]\s*/, '') : line;

      // Parse bold **text** and markdown links [text](url)
      const parts = cleanLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-semibold text-[#022A4E]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          const isInternalContact = url.includes('/contact');
          return (
            <a
              key={pIdx}
              href={url}
              onClick={(e) => {
                if (isInternalContact && onNavigate) {
                  e.preventDefault();
                  onNavigate('contact');
                  setIsOpen(false);
                }
              }}
              target={isInternalContact ? undefined : '_blank'}
              rel={isInternalContact ? undefined : 'noopener noreferrer'}
              className="text-[#00976C] font-semibold underline underline-offset-2 hover:text-emerald-700 inline-flex items-center gap-0.5"
            >
              <span>{label}</span>
              {!isInternalContact && <ArrowUpRight className="w-3 h-3 inline" />}
            </a>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={lIdx} className="flex items-start gap-2 my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00976C] shrink-0 mt-2" />
            <span className="flex-1 leading-relaxed">{formattedLine}</span>
          </div>
        );
      }

      if (cleanLine.trim() === '') {
        return <div key={lIdx} className="h-2" />;
      }

      return (
        <p key={lIdx} className="leading-relaxed my-1">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* 1. FLOATING CHAT TRIGGER BUTTON (DESKTOP & MOBILE) */}
      <div
        className={`fixed z-40 transition-all duration-300 ease-out ${
          isOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
        } bottom-5 right-5 sm:bottom-6 sm:right-6`}
      >
        <div className="relative group">
          {/* Subtle initial greeting pill / notification */}
          {showNotificationBadge && (
            <div
              onClick={handleOpenChat}
              className="absolute right-0 bottom-full mb-3 cursor-pointer bg-white border border-slate-200/90 shadow-xl rounded-2xl px-3.5 py-2 whitespace-nowrap flex items-center gap-2.5 animate-bounce [animation-duration:3s] hover:border-[#00976C] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-xs font-semibold text-[#022A4E]">
                Need help? <span className="text-[#00976C]">Chat with us</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotificationBadge(false);
                }}
                className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
                aria-label="Dismiss badge"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Main Floating Trigger Button */}
          <button
            onClick={handleOpenChat}
            aria-label="Open Basan Tech AI Assistant"
            className="w-14 h-14 rounded-full bg-white shadow-xl shadow-[#022A4E]/30 hover:shadow-2xl hover:shadow-[#00976C]/40 border-2 border-[#00976C] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden p-1.5"
          >
            <img
              src="/favicon-512x512.png"
              alt="Basan Tech Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain rounded-full"
            />

            {/* Online Green Pulsing Indicator */}
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
            </span>
          </button>
        </div>
      </div>

      {/* 2. CHAT WINDOW (DESKTOP SLIDE-UP CARD OR MOBILE FULL-SCREEN) */}
      <div
        ref={mobileContainerRef}
        role="dialog"
        aria-label="Basan Tech AI Assistant"
        className={`fixed z-50 transition-all duration-300 ease-out flex flex-col bg-slate-50 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        } ${
          isMobile
            ? 'inset-0 w-full h-full shadow-none'
            : 'bottom-6 right-6 w-[390px] sm:w-[410px] h-[590px] max-h-[calc(100vh-100px)] rounded-3xl border border-slate-200 shadow-2xl overflow-hidden'
        }`}
      >
        {/* Clean Chat Header: Logo + Title + Online Status + Close Button */}
        <div className="bg-[#022A4E] text-white px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between shadow-md relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/favicon-512x512.png"
                alt="Basan Tech Logo"
                width={36}
                height={36}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain shadow-xs bg-white border border-slate-100 p-0.5"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#022A4E]" />
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                Basan Tech Assistant
              </h3>
              <p className="text-[11px] text-emerald-300 font-medium flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online now</span>
              </p>
            </div>
          </div>

          <div className="flex items-center">
            {/* Close button */}
            <button
              onClick={handleCloseChat}
              aria-label="Close chat"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isMobile ? <ChevronDown className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50 overscroll-contain">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`flex gap-2.5 max-w-[85%] sm:max-w-[82%] ${
                  msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar Icon */}
                {msg.role === 'user' ? (
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold bg-[#022A4E] text-white">
                    <User className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <img
                    src="/favicon-512x512.png"
                    alt="Basan Tech"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-contain shrink-0 mt-0.5 shadow-2xs bg-white border border-slate-200 p-0.5"
                  />
                )}

                {/* Message Bubble */}
                <div
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#022A4E] text-white rounded-tr-xs shadow-xs'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs shadow-xs'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    <div>{formatMarkdown(msg.text)}</div>
                  )}

                  {/* Fallback Action Buttons (if live AI connection failed) */}
                  {msg.isFallback && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                      <a
                        href={msg.whatsappUrl || 'https://wa.me/919624895641'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          if (onNavigate) {
                            onNavigate('contact');
                            setIsOpen(false);
                          } else {
                            window.location.href = '/contact';
                          }
                        }}
                        className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#022A4E] font-semibold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Open Contact Form</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Timestamp */}
              <span
                className={`text-[10px] text-slate-400 mt-1 px-1 font-mono ${
                  msg.role === 'user' ? 'mr-9' : 'ml-9'
                }`}
              >
                {msg.timestamp}
              </span>
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2.5 max-w-[80%]">
              <img
                src="/favicon-512x512.png"
                alt="Basan Tech"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-contain shrink-0 mt-0.5 shadow-2xs bg-white border border-slate-200 p-0.5"
              />
              <div className="px-4 py-3 rounded-2xl rounded-tl-xs bg-white border border-slate-200/90 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                <span className="text-xs text-slate-400 font-mono ml-2">Thinking...</span>
              </div>
            </div>
          )}

          {/* Quick Suggestion Chips (Shown on initial or fresh conversation) */}
          {messages.length <= 2 && !isLoading && (
            <div className="pt-2 space-y-2">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
                Suggested Questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(prompt)}
                    className="text-left text-xs bg-white hover:bg-emerald-50 hover:text-[#00976C] text-slate-700 border border-slate-200 hover:border-emerald-300 rounded-xl px-3 py-1.5 transition-all shadow-2xs active:scale-98 cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200/90 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about web, apps, custom software, or pricing..."
                disabled={isLoading}
                maxLength={500}
                className="w-full pl-3.5 pr-3 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#00976C] focus:ring-2 focus:ring-[#00976C]/10 text-slate-800 placeholder:text-slate-400 transition-all disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="w-10 h-10 rounded-xl bg-[#00976C] hover:bg-emerald-700 disabled:bg-slate-200 text-white disabled:text-slate-400 flex items-center justify-center transition-all duration-200 shrink-0 shadow-xs active:scale-95 cursor-pointer disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
