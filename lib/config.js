
import { NextResponse } from "next/server"

const isServer = typeof window === 'undefined';
const isClient = !isServer;

export const ENVIROMENT_VARIABLES_COOKIE = 'environment-variables';

export function registerEnvironmentCookies(response) {
  if (isClient) {
    console.log('This function can only be called from server side');
    return response;
  }

  const environmentVariables = {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }

  response.cookies.set({
    name: ENVIROMENT_VARIABLES_COOKIE,
    value: JSON.stringify(environmentVariables),
    path: '/',
  });

  return response;
}

export function getEnvironmentVariable(name) {
  if (isServer) {
    console.log('This function can only be called from client side');
    return;
  }

  const variablesStr = window.document.cookie
    .split(';')
    .find((cookie) => cookie.startsWith(`${ENVIROMENT_VARIABLES_COOKIE}=`))
    ?.split('=')
    .at(1);

  if (!variablesStr) {
    return console.log('No environment variables found, did you called `registerEnvironmentCookies()`?');
  }

  const variables = JSON.parse(decodeURIComponent(variablesStr));

  return variables[name];
}