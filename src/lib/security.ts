/**
 * Zero-Cost Security Utilities
 * Implements the 5 Core Security Principles:
 * 1. Server-Side Validation & Input Sanitization
 * 2. Sliding Window Rate Limiting (In-Memory, Zero-Cost)
 * 3. Generic, Non-Leaking Error Responses
 * 4. Protection Against Bot Enumeration & Abuse
 */

// ── In-Memory Rate Limiter (Sliding Window) ──
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically to avoid memory leaks
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes window
const MAX_REQUESTS_PER_WINDOW = 15; // 15 quote requests per 10 mins

if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitStore.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);
      if (record.timestamps.length === 0) {
        rateLimitStore.delete(ip);
      }
    }
  }, 5 * 60 * 1000); // Clean every 5 mins
}

export function checkRateLimit(clientIp: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(clientIp) || { timestamps: [] };

  // Filter out timestamps outside current window
  const validTimestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitStore.set(clientIp, { timestamps: validTimestamps });
    return { allowed: false, remaining: 0 };
  }

  validTimestamps.push(now);
  rateLimitStore.set(clientIp, { timestamps: validTimestamps });
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - validTimestamps.length };
}

// ── Server-Side Input Sanitization (Anti-XSS & Payload Hardening) ──
export function sanitizeString(input: unknown, maxLength = 1000): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // Strip dangerous HTML brackets
}

export interface ValidatedQuotePayload {
  level: string;
  pages: number;
  urgencyId: string;
  selectedAddons: string[];
  name?: string;
  institution?: string;
  discipline?: string;
  brief?: string;
}

const ALLOWED_LEVELS = [
  'Undergraduate',
  'Postgraduate & MBA',
  'Data Analysis & Excel',
  'Research Thesis',
];

const ALLOWED_URGENCIES = ['flexible', 'standard', 'express', 'urgent', 'emergency'];

export function validateQuoteInput(data: any): { valid: boolean; error?: string; data?: ValidatedQuotePayload } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request payload.' };
  }

  const level = sanitizeString(data.level, 60);
  if (!ALLOWED_LEVELS.includes(level)) {
    return { valid: false, error: 'Invalid academic level specified.' };
  }

  const pages = Number(data.pages);
  if (!Number.isInteger(pages) || pages < 1 || pages > 500) {
    return { valid: false, error: 'Page count must be an integer between 1 and 500.' };
  }

  const urgencyId = sanitizeString(data.urgencyId, 30);
  if (!ALLOWED_URGENCIES.includes(urgencyId)) {
    return { valid: false, error: 'Invalid delivery timeline specified.' };
  }

  const selectedAddons = Array.isArray(data.selectedAddons)
    ? data.selectedAddons.map((a: unknown) => sanitizeString(a, 50)).slice(0, 10)
    : [];

  return {
    valid: true,
    data: {
      level,
      pages,
      urgencyId,
      selectedAddons,
      name: sanitizeString(data.name, 100),
      institution: sanitizeString(data.institution, 150),
      discipline: sanitizeString(data.discipline, 120),
      brief: sanitizeString(data.brief, 2500),
    },
  };
}
