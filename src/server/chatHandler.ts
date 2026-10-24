/**
 * Basan Tech AI Chatbot Backend Handler
 * Multi-Key (10 Keys) x Multi-Model (5 Models) Failover Engine for Gemini API
 */

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ChatRequestBody {
  message: string;
  history?: ChatMessage[];
}

export interface ChatResponseBody {
  success: boolean;
  reply: string;
  fallback?: boolean;
  whatsappUrl?: string;
  contactUrl?: string;
  timestamp: string;
}

// 5 Gemini models to try in priority order (fastest/cheapest to most capable fallback)
export const DEFAULT_GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-2.5-pro',
  'gemini-1.5-pro'
];

export const SYSTEM_PROMPT = `You are the Basan Tech Assistant, an AI representative for Basan Tech (https://basantech.online) — a premier software, web development, and AI engineering studio based in Palanpur, Gujarat, India.

Your primary mission is to provide helpful, accurate, concise, and professional information to prospective clients, business owners, and founders interested in working with Basan Tech.

### ABOUT BASAN TECH:
- Engineering studio founded in Palanpur, Gujarat, specializing in high-performance digital platforms.
- Contact Information:
  - Phone / WhatsApp: +91 84888 88461 (Active on WhatsApp for quick inquiries & consultations)
  - Email: info@basantech.online
  - Direct Contact Form: https://basantech.online/contact
- Working Model & Commitments:
  - 100% Client-Owned Source Code: All GitHub repos, databases, and assets belong entirely to the client upon delivery (no vendor lock-in).
  - Direct Technical Collaboration: Clients work directly with the senior engineers building their software.
  - Predictable Sprint Delivery: Regular staging previews, milestone reviews, and transparent communication.
  - 30-Day Post-Launch Warranty: Every project includes post-deployment monitoring, bug fixes, and performance tuning at no extra charge.

### OUR 6 CORE ENGINEERING SERVICES:
1. Website Development:
   - High-performance responsive websites, corporate portals, and landing pages.
   - Built with modern React, Next.js, Vite, TypeScript, Tailwind CSS, or WordPress.
   - Sub-second load times, 95+ Core Web Vitals, semantic SEO, Schema.org structured data.
2. App Development (Android & iOS):
   - Native & cross-platform mobile apps using React Native and Flutter.
   - Intuitive UI/UX, offline-first architectures, biometric authentication, push notifications, and App Store / Play Store deployment.
3. Custom Software Development:
   - Bespoke business tools, administrative portals, ERPs, clinical CRMs, and SaaS platforms.
   - Multi-tenant architecture, role-based access control, relational database design (PostgreSQL/MySQL), and high-throughput REST/GraphQL APIs.
4. Desktop Software Development:
   - Cross-platform desktop apps for Windows, macOS, and Linux using Electron and modern desktop technologies.
   - Hardware integration, local file systems, offline data sync, and high computational performance.
5. E-commerce Development:
   - Multi-vendor marketplaces, B2B wholesale portals, and direct-to-consumer online stores.
   - Seamless payment integrations (Razorpay, UPI, Stripe, cards), real-time inventory management, sub-15-second mobile checkouts.
6. AI Solutions:
   - Practical AI automation, autonomous multi-agent workflows, Retrieval-Augmented Generation (RAG) pipelines over company data, and intelligent chatbot widgets.
   - Production deployments with Google Gemini, OpenAI, Claude, or local open-source models with failover mechanisms.

### VERIFIED CASE STUDIES & DELIVERED PLATFORMS:
- City Care Clinic: Healthcare CRM & Practice Management Dashboard with multi-doctor scheduling, live revenue tracking, and automated payment reconciliation.
- Lurnixe: Multi-Vendor E-Commerce Marketplace & Mobile App engineered for high checkout velocity and inventory sync.
- Iqra Society: Online Learning & Academic Research Portal serving 1,200+ global students with sub-second multilingual literature search.
- Lurnixe Health: Digital Family Health Card & Emergency QR Verification Portal (< 2 second emergency scan access).
- KECF India: Non-Profit Social Impact & Community Platform with transparent donation tracking and bilingual support.
- AIC-IIIM: Bio-Innovation & Deep-Tech Incubation Portal under CSIR-IIIM and Atal Innovation Mission (NITI Aayog).

### CONVERSATIONAL RULES & GUIDELINES:
1. Tone: Professional, warm, articulate, and concise (like a knowledgeable senior team member, not a generic scripted bot).
2. Format: Use clean markdown with bold highlights and bullet points when listing items for scannability. Keep responses compact (2-3 concise paragraphs or bullet points).
3. Pricing & Timelines:
   - Do NOT quote exact fixed prices (e.g. do not say "a website is $500 or ₹20,000").
   - Explain that project investment and timeline depend on scope, features, and custom requirements.
   - Mention that initial scoping consultations and custom proposals are completely free.
   - Invite the user to share a brief summary of what they want to build or reach out via WhatsApp (+91 84888 88461) or the contact form (https://basantech.online/contact) for an accurate estimate.
4. Call to Action: Direct interested clients towards WhatsApp or our Contact page whenever appropriate.
5. If asked about technologies: We work across React, Next.js, Node.js, TypeScript, Python, React Native, Flutter, Laravel, PHP, PostgreSQL, MySQL, Tailwind CSS, AWS, Cloudflare, and AI APIs.`;

const GRACEFUL_FALLBACK_TEXT =
  "I'm having trouble connecting to our live AI servers right now. Please reach out directly to our team via WhatsApp at +91 84888 88461 or via our contact form at https://basantech.online/contact — we're active and ready to discuss your project!";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface ApiKeyEntry {
  id: string;
  key: string;
}

/**
 * Discovers up to 10 Gemini API keys from environment variables.
 * Checks GEMINI_API_KEY_1 through GEMINI_API_KEY_10, with fallback to GEMINI_API_KEY.
 */
export function getGeminiApiKeys(): ApiKeyEntry[] {
  const keys: ApiKeyEntry[] = [];
  const env = typeof process !== 'undefined' ? process.env : {};

  for (let i = 1; i <= 10; i++) {
    const val = env[`GEMINI_API_KEY_${i}`];
    if (val && typeof val === 'string' && val.trim() && !val.includes('MY_GEMINI_API_KEY')) {
      keys.push({ id: `GEMINI_API_KEY_${i}`, key: val.trim() });
    }
  }

  // Fallback to GEMINI_API_KEY or VITE_GEMINI_API_KEY if not already included
  const generalKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY;
  if (generalKey && typeof generalKey === 'string' && generalKey.trim() && !generalKey.includes('MY_GEMINI_API_KEY')) {
    if (!keys.some((k) => k.key === generalKey.trim())) {
      keys.unshift({ id: 'GEMINI_API_KEY (default)', key: generalKey.trim() });
    }
  }

  return keys;
}

/**
 * Returns configured Gemini models array (default 5 models, or custom override).
 */
export function getGeminiModels(): string[] {
  const env = typeof process !== 'undefined' ? process.env : {};
  if (env.GEMINI_MODELS && typeof env.GEMINI_MODELS === 'string') {
    const custom = env.GEMINI_MODELS.split(',').map((m) => m.trim()).filter(Boolean);
    if (custom.length > 0) return custom;
  }
  return DEFAULT_GEMINI_MODELS;
}

/**
 * Executes a single Gemini generateContent call via direct HTTPS REST API.
 */
async function callGeminiApi(
  apiKey: string,
  model: string,
  systemPrompt: string,
  history: ChatMessage[],
  latestMessage: string
): Promise<{ success: boolean; text?: string; status?: number; error?: string }> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

  const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

  // Sanitize and append previous conversation history (limit to last 10 messages for speed & context)
  const recentHistory = history.slice(-10);
  for (const item of recentHistory) {
    if (item.text && item.text.trim()) {
      contents.push({
        role: item.role === 'model' ? 'model' : 'user',
        parts: [{ text: item.text.trim() }]
      });
    }
  }

  // Append current user query
  contents.push({
    role: 'user',
    parts: [{ text: latestMessage.trim() }]
  });

  const payload = {
    system_instruction: {
      parts: [{ text: systemPrompt }]
    },
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800,
      topP: 0.95
    }
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second timeout per attempt

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorDetail = '';
      try {
        const errJson = await response.json();
        errorDetail = errJson.error?.message || response.statusText;
      } catch {
        errorDetail = response.statusText;
      }
      return { success: false, status: response.status, error: `HTTP ${response.status}: ${errorDetail}` };
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidateText || !candidateText.trim()) {
      return { success: false, error: 'Empty text in model response' };
    }

    return { success: true, text: candidateText.trim() };
  } catch (err: any) {
    clearTimeout(timeoutId);
    return {
      success: false,
      error: err.name === 'AbortError' ? 'Request timed out after 12s' : err.message || 'Network error'
    };
  }
}

/**
 * Main chat request processor implementing the multi-key (up to 10 keys)
 * x multi-model (5 models) failover cascade with ~200ms retry delays.
 */
export async function processChatRequest(body: ChatRequestBody): Promise<ChatResponseBody> {
  const timestamp = new Date().toISOString();
  const message = body?.message?.trim();
  const history = Array.isArray(body?.history) ? body.history : [];

  if (!message) {
    return {
      success: false,
      reply: "Please provide a message so I can assist you.",
      timestamp
    };
  }

  const apiKeys = getGeminiApiKeys();
  const models = getGeminiModels();

  let successfulReply: string | null = null;
  let successfulKeyId = '';
  let successfulModel = '';

  if (apiKeys.length === 0) {
    console.warn('[Chat API] No Gemini API keys found in environment variables (GEMINI_API_KEY_1 ... GEMINI_API_KEY_10).');
  } else {
    // Outer loop: Iterate through all available API Keys (Key 1 -> Key 2 -> ... -> Key 10)
    for (let k = 0; k < apiKeys.length; k++) {
      const currentKey = apiKeys[k];

      // Inner loop: Iterate through all 5 models under this API Key (Model 1 -> Model 2 -> ... -> Model 5)
      for (let m = 0; m < models.length; m++) {
        const currentModel = models[m];

        const result = await callGeminiApi(
          currentKey.key,
          currentModel,
          SYSTEM_PROMPT,
          history,
          message
        );

        if (result.success && result.text) {
          successfulReply = result.text;
          successfulKeyId = currentKey.id;
          successfulModel = currentModel;

          // Server-side logging only for monitoring (never exposed to client)
          console.log(
            `[Chat API Success] Responded via ${successfulKeyId} using model "${successfulModel}".`
          );
          break; // Succeeded! Break model loop
        } else {
          // Log failover warning server-side and wait ~200ms before retrying next model
          console.warn(
            `[Chat API Failover] Key "${currentKey.id}" + Model "${currentModel}" failed: ${result.error}. Retrying next model in ~200ms...`
          );
          await sleep(200);
        }
      }

      if (successfulReply) {
        break; // Succeeded! Break key loop
      }

      console.warn(
        `[Chat API Failover] All ${models.length} models exhausted for key "${currentKey.id}". Switching to next API key...`
      );
    }
  }

  // If a live AI response was generated, return it
  if (successfulReply) {
    return {
      success: true,
      reply: successfulReply,
      timestamp
    };
  }

  // Graceful fallback if all 10 keys x 5 models failed or no keys were configured
  return {
    success: false,
    fallback: true,
    reply: GRACEFUL_FALLBACK_TEXT,
    whatsappUrl: 'https://wa.me/918488888461',
    contactUrl: 'https://basantech.online/contact',
    timestamp
  };
}
