import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This is placeholder middleware, to be implemented with authentication later
  // For now, it just passes through all requests
  return NextResponse.next();
}
