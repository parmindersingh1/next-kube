import { NextResponse } from 'next/server'

import { registerEnvironmentCookies } from '@/lib/config';

export function middleware(_request) {
  const response = NextResponse.next();

  return registerEnvironmentCookies(response);
}