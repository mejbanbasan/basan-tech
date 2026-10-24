import 'dotenv/config';
import { processChatRequest } from '../src/server/chatHandler';

/**
 * Vercel Serverless Function entry point for /api/chat
 */
export default async function handler(req: any, res: any) {
  // Set CORS headers for security and consistency
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST is accepted.' });
  }

  try {
    const rawBody = req.body;
    const parsedBody = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody || {};

    const result = await processChatRequest(parsedBody);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('[API /api/chat error]:', error);
    return res.status(500).json({
      success: false,
      fallback: true,
      reply: "I'm having trouble connecting to our live AI servers right now. Please reach out via WhatsApp at +91 9624895641 or via our contact form at https://basantech.online/contact — we're active and ready to discuss your project!",
      whatsappUrl: 'https://wa.me/919624895641',
      contactUrl: 'https://basantech.online/contact',
      timestamp: new Date().toISOString()
    });
  }
}
