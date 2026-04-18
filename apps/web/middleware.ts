import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};
