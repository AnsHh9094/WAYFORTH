import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, validateQuoteInput } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check (Zero-cost, in-memory sliding window)
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous-client';

    const { allowed, remaining } = checkRateLimit(clientIp);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few moments before trying again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '600',
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    // 2. Server-Side Validation & Input Sanitization
    const body = await request.json().catch(() => null);
    const validation = validateQuoteInput(body);

    if (!validation.valid || !validation.data) {
      // 3. Generic error response (never leak internal trace)
      return NextResponse.json(
        {
          success: false,
          error: validation.error || 'Invalid request format.',
        },
        { status: 400 }
      );
    }

    // Process validated lead / return confirmation
    return NextResponse.json(
      {
        success: true,
        message: 'Quotation parameters validated successfully.',
        data: validation.data,
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
        },
      }
    );
  } catch {
    // Generic non-leaking 500 error
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected processing error occurred.',
      },
      { status: 500 }
    );
  }
}
