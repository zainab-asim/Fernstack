"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  actionLink?: {
    text: string;
    href: string;
  };
}

export default function FloatingChatAssistant() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "G'day! I'm the FernStack AI Concierge. Ask me anything about our web development, mobile apps, 24/7 AI voice receptionists, pricing, timelines, or our Adelaide studio.",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages]);

  const quickQuestions = [
    "How much does a website cost?",
    "How does the $0 deposit work?",
    "What is your turnaround timeline?",
    "Do you build mobile apps?",
    "Book a project / Get in touch",
  ];

  // Comprehensive Knowledge Engine with Strict Company Guardrails
  const processQuery = (rawQuery: string): { reply: string; actionLink?: { text: string; href: string } } => {
    const q = rawQuery.toLowerCase().trim();

    // 1. STRICT GUARDRAILS: Health, medical, cooking, random non-company topics
    const healthMedicalPatterns = [
      "health", "medical", "doctor", "symptom", "disease", "pill", "medicine", "headache",
      "pain", "covid", "cancer", "diabetes", "blood pressure", "fever", "cough", "treatment",
      "hospital", "prescription", "diet", "fitness", "workout", "weight loss"
    ];
    const offTopicPatterns = [
      "recipe", "cook", "restaurant", "weather in", "history of", "president", "crypto trading",
      "bitcoin price", "politics", "astrology", "horoscope", "football score", "joke", "movie",
      "who won", "capital of"
    ];

    const isHealthQuery = healthMedicalPatterns.some((pattern) =>
      new RegExp(`\\b${pattern}\\b`, "i").test(q)
    );
    const isOffTopicQuery = offTopicPatterns.some((pattern) =>
      new RegExp(`\\b${pattern}\\b`, "i").test(q)
    );

    if (isHealthQuery || isOffTopicQuery) {
      return {
        reply:
          "I apologize, but I am trained exclusively as the FernStack studio concierge. I cannot provide answers regarding health, medical topics, or subjects outside our web development, mobile apps, and digital services.\n\nI would be delighted to answer anything regarding our website packages, pricing, timelines, or booking a project!",
      };
    }

    // 2. BOOKING / CONTACT / GETTING STARTED / HIRING / QUOTES
    if (
      q.includes("book") ||
      q.includes("contact") ||
      q.includes("hire") ||
      q.includes("start") ||
      q.includes("get in touch") ||
      q.includes("talk to") ||
      q.includes("call you") ||
      q.includes("phone number") ||
      q.includes("proposal") ||
      q.includes("appointment") ||
      q.includes("schedule") ||
      q.includes("consult")
    ) {
      return {
        reply:
          "We'd love to partner with you! We build every project with a standard $0 upfront deposit, you pay only when you love the live prototype.\n\nYou can submit your project requirements directly through our interactive contact hub, or call our Adelaide studio on 0451 072 412.",
        actionLink: {
          text: "👉 Go to Contact & Project Builder",
          href: "/contact",
        },
      };
    }

    // 3. PRICING & PACKAGES
    if (
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("how much") ||
      q.includes("package") ||
      q.includes("rate") ||
      q.includes("tier")
    ) {
      return {
        reply:
          "Our transparent, fixed-price website packages include:\n\n• 1 Page Starter ($549): High-converting single page, mobile responsive, contact form & analytics.\n• Up to 4 Pages ($999 - Most Popular): Home, Services, About, Contact & custom forms.\n• Up to 8 Pages ($1,549): Advanced multi-page site, news/blog, photo gallery & custom scope.\n• Monthly Hosting & Care ($30/mo): Vercel edge CDN, security, backups & unlimited content changes by FernStack. No contracts, cancel anytime.",
        actionLink: {
          text: "View Full Pricing & Plans",
          href: "/#pricing",
        },
      };
    }

    // 4. DEPOSIT POLICY / GUARANTEE
    if (q.includes("deposit") || q.includes("upfront") || q.includes("guarantee") || q.includes("risk")) {
      return {
        reply:
          "Our standard policy is $0 upfront deposit! We design and develop your live working prototype in 5 to 10 days first. You only pay the project balance once you are 100% satisfied with the finished build. No risk, no hidden variation fees.",
        actionLink: {
          text: "Start With $0 Deposit",
          href: "/contact",
        },
      };
    }

    // 5. TIMELINE / TURNAROUND
    if (
      q.includes("how long") ||
      q.includes("turnaround") ||
      q.includes("time") ||
      q.includes("timeline") ||
      q.includes("fast") ||
      q.includes("delivery") ||
      q.includes("days")
    ) {
      return {
        reply:
          "We engineer and deliver your live working prototype in just 5 to 10 business days. Once approved, domain connection and final launch take 24 to 48 hours.",
        actionLink: {
          text: "Lock In Your Launch Date",
          href: "/contact",
        },
      };
    }

    // 6. SERVICES / MOBILE APPS / AI RECEPTIONIST / WEB DEV
    if (q.includes("app") || q.includes("mobile") || q.includes("ios") || q.includes("android")) {
      return {
        reply:
          "Yes! We build high-performance mobile applications for iOS and Android using React Native. We specialize in field service apps, offline quoting, mobile payments, and van fleet tracking for Australian trade businesses.",
        actionLink: {
          text: "Explore Mobile App Services",
          href: "/services/mobile-apps",
        },
      };
    }

    if (q.includes("ai") || q.includes("voice") || q.includes("receptionist") || q.includes("phone agent") || q.includes("bot")) {
      return {
        reply:
          "Our autonomous 24/7 AI Voice Receptionists answer incoming calls in a natural Australian accent, answer customer pricing questions, qualify leads, and book jobs directly into your CRM or calendar so you never miss revenue.",
        actionLink: {
          text: "Explore 24/7 AI Receptionist",
          href: "/services/ai-receptionist",
        },
      };
    }

    if (q.includes("web") || q.includes("site") || q.includes("service") || q.includes("what do you do") || q.includes("capabilities")) {
      return {
        reply:
          "FernStack is a bespoke digital engineering studio based in Adelaide. We build:\n\n1. Bespoke Next.js Web Applications\n2. iOS & Android Mobile Apps\n3. 24/7 Autonomous AI Voice Receptionists\n4. Managed High-Speed Cloud Hosting ($30/mo)\n5. Google Local SEO & Performance Optimization",
        actionLink: {
          text: "View All Services",
          href: "/services",
        },
      };
    }

    // 7. LOCATION / OFFICE / PHONE / EMAIL
    if (
      q.includes("location") ||
      q.includes("address") ||
      q.includes("where") ||
      q.includes("office") ||
      q.includes("adelaide") ||
      q.includes("email")
    ) {
      return {
        reply:
          "Our head studio is located at:\n📍 Ste 3/110 Hutt St, Adelaide SA 5000\n\n• Phone: 0451 072 412\n• Email: info@fernstack.com.au\n• Hours: Mon to Fri 7:00am to 8:00pm ACST\n\nWe service businesses across Adelaide, Sydney, Melbourne, Brisbane, and Australia-wide.",
        actionLink: {
          text: "Visit Dedicated Contact Page",
          href: "/contact",
        },
      };
    }

    // 8. REPUTATION / REVIEWS / EXAMPLES
    if (q.includes("review") || q.includes("rating") || q.includes("work") || q.includes("sample") || q.includes("portfolio")) {
      return {
        reply:
          "FernStack holds a flawless 5.0 Google Rating from 33+ Australian businesses. You can explore our interactive live sample sites and audited sales growth proof on our Recent Work and Case Studies pages.",
        actionLink: {
          text: "View Real Client Case Studies",
          href: "/case-studies",
        },
      };
    }

    // 9. DEFAULT HELPFUL FALLBACK (EXCLUSIVELY STUDIO RELEVANT)
    return {
      reply:
        "Thanks for asking! FernStack builds bespoke Next.js websites, mobile apps, and 24/7 AI voice receptionists for Australian businesses with $0 upfront deposit and 5 to 10 day delivery.\n\nWould you like information about our website packages, mobile app builds, or how to get a free prototype?",
      actionLink: {
        text: "Contact Our Studio",
        href: "/contact",
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const { reply, actionLink } = processQuery(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionLink,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Chat Trigger Button in Bottom-Right Corner */}
      <div className="fern-floating-chat-anchor">
        <button
          type="button"
          className={`fern-chat-trigger-btn ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Concierge Chat" : "Open FernStack AI Concierge"}
          title={isOpen ? "Close Chat" : "Ask FernStack AI Concierge"}
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="fern-chat-pulse-dot" />
            </>
          )}
          <span className="fern-chat-trigger-text">{isOpen ? "Close" : "Chat"}</span>
        </button>
      </div>

      {/* Floating Interactive Chat Window */}
      {isOpen && (
        <div className="fern-chat-widget-window">
          {/* Header */}
          <div className="fern-chat-header">
            <div className="fern-chat-header-brand">
              <div className="fern-chat-avatar">
                <span>FS</span>
                <span className="fern-avatar-dot" />
              </div>
              <div>
                <strong className="fern-chat-title">FernStack Concierge</strong>
                <span className="fern-chat-status">● Adelaide Studio AI Assistant</span>
              </div>
            </div>
            <button
              type="button"
              className="fern-chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Stream */}
          <div className="fern-chat-messages-container">
            {messages.map((m) => (
              <div key={m.id} className={`fern-chat-message-row ${m.sender}`}>
                <div className={`fern-chat-bubble ${m.sender}`}>
                  <p className="fern-bubble-text">{m.text}</p>
                  {m.actionLink && (
                    <div className="fern-bubble-action">
                      <Link
                        href={m.actionLink.href}
                        className="fern-chat-action-btn"
                        onClick={() => setIsOpen(false)}
                      >
                        {m.actionLink.text} →
                      </Link>
                    </div>
                  )}
                  <span className="fern-bubble-time">{m.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="fern-chat-message-row bot">
                <div className="fern-chat-bubble bot typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="fern-chat-quick-chips">
            {quickQuestions.map((qq, i) => (
              <button
                key={i}
                type="button"
                className="fern-quick-chip"
                onClick={() => handleSendMessage(qq)}
              >
                {qq}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            className="fern-chat-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about pricing, packages, booking..."
              aria-label="Type your message"
            />
            <button
              type="submit"
              className="fern-chat-send-btn"
              disabled={!inputVal.trim()}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
