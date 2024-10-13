"use client";

import { env } from "@/env";
import { getEnvironmentVariable } from "@/lib/config";
import { useEffect } from "react";

export default function TestPage() {
    const supaUrl = getEnvironmentVariable('NEXT_PUBLIC_API_URL');
    console.log("URDU", supaUrl, env.API_URL);
    useEffect(() => {
        async function refreshConfig() {
            try {
              const response = await fetch('/api/env');
              const data = await response.json();
              console.log("APPPPP", data)
            } catch (error) {
              console.error('Failed to refresh config:', error);
            }
          }
          refreshConfig()
    }, [])
  return <div>TThe API URL is: {process.env.API_URL || process.env.NEXT_PUBLIC_API_URL} --- {supaUrl}</div>;
}
