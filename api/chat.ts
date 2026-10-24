/**
 * Self-Contained Vercel Serverless Function for /api/chat
 * Zero external relative imports to eliminate ESM bundling / invocation crashes.
 * Multi-Key (10 Keys) x Multi-Model (5 Models) Failover Engine for Gemini API.
 */

// 5 default Gemini models in priority order (verified active on Google Gemini API v1beta)
export const DEFAULT_GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-flash-latest',
  'gemini-2.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-2.5-pro'
];

export const SYSTEM_PROMPT = `You are the Basan Tech Assistant, an AI representative for Basan Tech (https://basantech.online) — a premier software, web development, and AI engineering studio based in Palanpur, Gujarat, India.

Your primary mission is to provide helpful, accurate, concise, and professional information to prospective clients, business owners, and founders interested in working with Basan Tech.

### ABOUT BASAN TECH:
- Engineering studio founded in Palanpur, Gujarat, specializing in high-performance digital platforms.
- Contact Information:
  - Phone / WhatsApp: +91 9624895641 (Active on WhatsApp for quick inquiries & consultations)
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
   - Invite the user to share a brief summary of what they want to build or reach out via WhatsApp (+91 9624895641) or the contact form (https://basantech.online/contact) for an accurate estimate.
4. Call to Action: Direct interested clients towards WhatsApp or our Contact page whenever appropriate.
5. If asked about technologies: We work across React, Next.js, Node.js, TypeScript, Python, React Native, Flutter, Laravel, PHP, PostgreSQL, MySQL, Tailwind CSS, AWS, Cloudflare, and AI APIs.`;

const GRACEFUL_FALLBACK_TEXT =
  "I'm having trouble connecting right now — please reach out via WhatsApp (+91 9624895641) or our contact form at https://basantech.online/contact — we're active and ready to discuss your project!";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface ApiKeyEntry {
  id: string;
  key: string;
}

/**
 * Resilient multi-key discovery.
 * Checks GEMINI_API_KEY_1 through GEMINI_API_KEY_10, variations like 01..10,
 * and fallbacks to GEMINI_API_KEY. Strips quotes and extra spaces.
 */
export function getGeminiApiKeys(): ApiKeyEntry[] {
  const keys: ApiKeyEntry[] = [];
  const env = typeof process !== 'undefined' ? process.env : {};

  // 1. Check GEMINI_API_KEY_1 through GEMINI_API_KEY_10 in priority order
  for (let i = 1; i <= 10; i++) {
    const rawVal =
      env[`GEMINI_API_KEY_${i}`] ||
      env[`GEMINI_API_KEY_${String(i).padStart(2, '0')}`] ||
      env[`GEMINI_API_KEY${i}`] ||
      env[`GEMINI_KEY_${i}`];

    if (rawVal && typeof rawVal === 'string') {
      const cleaned = rawVal.trim().replace(/^["']|["']$/g, '');
      if (cleaned && !cleaned.includes('MY_GEMINI_API_KEY') && cleaned.length > 5) {
        keys.push({ id: `GEMINI_API_KEY_${i}`, key: cleaned });
      }
    }
  }

  // 2. Check general fallback keys (GEMINI_API_KEY, VITE_GEMINI_API_KEY)
  for (const generalName of ['GEMINI_API_KEY', 'VITE_GEMINI_API_KEY', 'GEMINI_KEY', 'GOOGLE_GEMINI_API_KEY']) {
    const rawVal = env[generalName];
    if (rawVal && typeof rawVal === 'string') {
      const cleaned = rawVal.trim().replace(/^["']|["']$/g, '');
      if (cleaned && !cleaned.includes('MY_GEMINI_API_KEY') && cleaned.length > 5) {
        if (!keys.some((k) => k.key === cleaned)) {
          keys.unshift({ id: generalName, key: cleaned });
        }
      }
    }
  }

  // 3. Check any remaining environment variable that matches gemini.*key
  for (const [keyName, rawVal] of Object.entries(env)) {
    if (/^gemini.*key/i.test(keyName) && typeof rawVal === 'string') {
      const cleaned = rawVal.trim().replace(/^["']|["']$/g, '');
      if (cleaned && !cleaned.includes('MY_GEMINI_API_KEY') && cleaned.length > 5) {
        if (!keys.some((k) => k.key === cleaned)) {
          keys.push({ id: keyName, key: cleaned });
        }
      }
    }
  }

  return keys;
}

export function getGeminiModels(): string[] {
  const env = typeof process !== 'undefined' ? process.env : {};
  if (env.GEMINI_MODELS && typeof env.GEMINI_MODELS === 'string') {
    const custom = env.GEMINI_MODELS.split(',').map((m) => m.trim()).filter(Boolean);
    if (custom.length > 0) return custom;
  }
  return DEFAULT_GEMINI_MODELS;
}

/**
 * Call Gemini generateContent API via standard HTTPS POST
 * Conforms strictly to Gemini API rules:
 * 1. First turn in contents MUST have role: 'user' (strips leading assistant/model greetings).
 * 2. Turns must strictly alternate (merges adjacent identical roles).
 * 3. Supports system_instruction with auto-fallback to prompt injection if model rejects it.
 */
async function callGeminiApi(
  apiKey: string,
  model: string,
  systemPrompt: string,
  history: Array<{ role: string; text: string }>,
  latestMessage: string
): Promise<{ success: boolean; text?: string; status?: number; error?: string }> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

  const rawTurns: Array<{ role: 'user' | 'model'; text: string }> = [];

  // 1. Process recent history (last 8 turns)
  const recentHistory = Array.isArray(history) ? history.slice(-8) : [];
  for (const item of recentHistory) {
    const text = (item.text || '').trim();
    if (!text) continue;
    const role: 'user' | 'model' = item.role === 'model' || item.role === 'assistant' ? 'model' : 'user';
    rawTurns.push({ role, text });
  }

  // 2. Append latestMessage if not already the last turn
  const cleanLatest = (latestMessage || '').trim();
  if (cleanLatest) {
    const lastTurn = rawTurns[rawTurns.length - 1];
    if (!lastTurn || lastTurn.role !== 'user' || lastTurn.text !== cleanLatest) {
      rawTurns.push({ role: 'user', text: cleanLatest });
    }
  }

  // 3. Strip any leading 'model' turns — Gemini throws HTTP 400 if contents[0].role is 'model'
  while (rawTurns.length > 0 && rawTurns[0].role === 'model') {
    rawTurns.shift();
  }

  // If empty after stripping, guarantee at least one user turn
  if (rawTurns.length === 0 && cleanLatest) {
    rawTurns.push({ role: 'user', text: cleanLatest });
  }

  // 4. Merge consecutive turns of the same role (Gemini requires alternating roles)
  const mergedTurns: Array<{ role: 'user' | 'model'; text: string }> = [];
  for (const turn of rawTurns) {
    if (mergedTurns.length > 0 && mergedTurns[mergedTurns.length - 1].role === turn.role) {
      mergedTurns[mergedTurns.length - 1].text += '\n\n' + turn.text;
    } else {
      mergedTurns.push({ role: turn.role, text: turn.text });
    }
  }

  const contents = mergedTurns.map((t) => ({
    role: t.role,
    parts: [{ text: t.text }]
  }));

  const payload: any = {
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800,
      topP: 0.95
    }
  };

  if (systemPrompt && systemPrompt.trim()) {
    payload.system_instruction = {
      parts: [{ text: systemPrompt.trim() }]
    };
  }

  const sendRequest = async (bodyPayload: any) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyPayload),
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
        return { ok: false, status: response.status, errorDetail };
      }

      const data = await response.json();
      const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      return { ok: true, status: response.status, text: candidateText };
    } catch (err: any) {
      clearTimeout(timeoutId);
      return {
        ok: false,
        status: 0,
        errorDetail: err.name === 'AbortError' ? 'Request timed out after 12s' : err.message || 'Network error'
      };
    }
  };

  let res = await sendRequest(payload);

  // If rejected with 400 mentioning system_instruction, retry by prepending system instructions to first user turn
  if (!res.ok && res.status === 400 && payload.system_instruction && res.errorDetail.toLowerCase().includes('system_instruction')) {
    const fallbackContents = JSON.parse(JSON.stringify(contents));
    if (fallbackContents.length > 0 && fallbackContents[0].role === 'user') {
      fallbackContents[0].parts[0].text = `[Instructions: ${systemPrompt}]\n\n${fallbackContents[0].parts[0].text}`;
    }
    res = await sendRequest({
      contents: fallbackContents,
      generationConfig: payload.generationConfig
    });
  }

  if (!res.ok) {
    return { success: false, status: res.status, error: `HTTP ${res.status}: ${res.errorDetail}` };
  }

  if (!res.text || !res.text.trim()) {
    return { success: false, error: 'Empty text returned in model candidate' };
  }

  return { success: true, text: res.text.trim() };
}

/**
 * Core chat request processing function with multi-key x multi-model failover
 */
export async function processChatRequest(body: any): Promise<any> {
  const timestamp = new Date().toISOString();
  const message = body?.message?.trim();
  const history = Array.isArray(body?.history) ? body.history : [];

  if (!message) {
    return {
      success: false,
      reply: 'Please provide a message so I can assist you.',
      timestamp
    };
  }

  const apiKeys = getGeminiApiKeys();
  const models = getGeminiModels();

  let successfulReply: string | null = null;
  let successfulKeyId = '';
  let successfulModel = '';
  let lastRecordedError = '';

  if (apiKeys.length === 0) {
    console.warn('[Chat API] No Gemini API keys found in environment variables (GEMINI_API_KEY_1 ... GEMINI_API_KEY_10).');
    lastRecordedError = 'No API keys configured in environment (GEMINI_API_KEY_1 ... GEMINI_API_KEY_10)';
  } else {
    // Outer loop: Keys (Key 1 -> Key 2 -> ... -> Key 10)
    for (let k = 0; k < apiKeys.length; k++) {
      const currentKey = apiKeys[k];

      // Inner loop: 5 Models (Model 1 -> Model 2 -> ... -> Model 5)
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

          console.log(`[Chat API Success] Responded via ${successfulKeyId} on model "${successfulModel}".`);
          break;
        } else {
          lastRecordedError = `${currentKey.id} + ${currentModel}: ${result.error}`;
          console.warn(`[Chat API Failover] ${lastRecordedError}. Retrying next model in ~200ms...`);
          await sleep(200);
        }
      }

      if (successfulReply) break;

      console.warn(`[Chat API Failover] All models exhausted for ${currentKey.id}. Switching to next key...`);
    }
  }

  if (successfulReply) {
    return {
      success: true,
      reply: successfulReply,
      timestamp
    };
  }

  // Graceful fallback with diagnostic info for debugging
  return {
    success: false,
    fallback: true,
    reply: GRACEFUL_FALLBACK_TEXT,
    whatsappUrl: 'https://wa.me/919624895641',
    contactUrl: 'https://basantech.online/contact',
    debug: {
      keysFound: apiKeys.length,
      keyNames: apiKeys.map((k) => k.id),
      modelsChecked: models,
      lastError: lastRecordedError
    },
    timestamp
  };
}

/**
 * Standard Vercel Serverless Function Handler
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Diagnostic GET endpoint to check serverless health, keys status, and active models
  if (req.method === 'GET') {
    const keys = getGeminiApiKeys();
    let availableGoogleModels: string[] = [];
    let listModelsError = '';
    if (keys.length > 0) {
      try {
        const modelsRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models?key=${keys[0].key}`
        );
        if (modelsRes.ok) {
          const modelsData = await modelsRes.json();
          availableGoogleModels = (modelsData.models || [])
            .filter((m: any) => m.supportedGenerationMethods?.includes('generateContent'))
            .map((m: any) => m.name.replace('models/', ''));
        } else {
          listModelsError = `HTTP ${modelsRes.status}: ${await modelsRes.text()}`;
        }
      } catch (err: any) {
        listModelsError = err.message;
      }
    }

    return res.status(200).json({
      status: 'online',
      service: 'Basan Tech AI Chatbot API',
      keysConfigured: keys.length,
      keyLabels: keys.map((k) => k.id),
      availableGoogleModels,
      listModelsError: listModelsError || undefined,
      currentConfiguredModels: getGeminiModels(),
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST is accepted.' });
  }

  try {
    let parsedBody = req.body;
    if (typeof parsedBody === 'string') {
      try {
        parsedBody = JSON.parse(parsedBody);
      } catch {
        parsedBody = {};
      }
    } else if (!parsedBody) {
      // Stream fallback if req.body is undefined
      const chunks: any[] = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const raw = Buffer.concat(chunks).toString('utf-8');
      parsedBody = raw ? JSON.parse(raw) : {};
    }

    const result = await processChatRequest(parsedBody);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('[API /api/chat error]:', error);
    return res.status(500).json({
      success: false,
      fallback: true,
      reply: GRACEFUL_FALLBACK_TEXT,
      whatsappUrl: 'https://wa.me/919624895641',
      contactUrl: 'https://basantech.online/contact',
      error: error.message || 'Internal Server Error',
      timestamp: new Date().toISOString()
    });
  }
}
