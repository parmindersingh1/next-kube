import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    API_URL: process.env.API_URL,
    // Add other environment variables you want to expose here
  });
}