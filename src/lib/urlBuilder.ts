/**
 * Builds the public shareable URL for a personality card.
 *
 * Priority:
 *   1. VITE_PUBLIC_URL env var (set before `npm run build` for production).
 *   2. Current browser origin — works automatically when the dev server is
 *      started with `--host` (npm run dev:host) and the booth machine is
 *      accessed via its LAN IP, e.g. http://192.168.1.42:5173
 *
 * QR code is shown whenever the resulting URL is NOT pointing at localhost
 * (because localhost URLs cannot be opened by a phone on the same network).
 *
 * When the URL IS localhost a clear warning is shown with the instruction
 * to use `npm run dev:host` instead.
 */
import type { PersonalityId } from '@/types'

const RAW_BASE = import.meta.env.VITE_PUBLIC_URL as string | undefined

/**
 * True if the browser hostname is localhost / loopback.
 * Always false on SSR (no window).
 */
function isLocalhostOrigin(): boolean {
  if (typeof window === 'undefined') return false
  const h = window.location.hostname
  return h === 'localhost' || h === '127.0.0.1' || h === '::1' || h === ''
}

/**
 * Effective base URL used in all card links and QR codes.
 *
 *  - If VITE_PUBLIC_URL is set → use it (trim trailing slash).
 *  - Otherwise → use current window.location.origin.
 *    When the dev server runs with `--host` and the booth computer is
 *    accessed via its IP (http://192.168.x.x:5173), origin already
 *    contains that IP, so the QR code will work on phones on the same WiFi.
 */
function getBase(): string {
  if (RAW_BASE && RAW_BASE.trim() && RAW_BASE !== 'undefined') {
    return RAW_BASE.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return ''
}

export function buildCardUrl(id: PersonalityId): string {
  return `${getBase()}/#/card/${id}`
}

/**
 * Returns true when the QR code is expected to work from another device.
 *
 * Logic:
 *  - VITE_PUBLIC_URL set to a non-localhost value → usable.
 *  - VITE_PUBLIC_URL not set, browser origin is a real IP / domain → usable.
 *  - Browser origin is localhost/127.0.0.1 → NOT usable (show dev warning).
 */
export function isQRUsable(): boolean {
  // Explicit config
  if (RAW_BASE && RAW_BASE.trim() && RAW_BASE !== 'undefined') {
    return (
      !RAW_BASE.includes('localhost') &&
      !RAW_BASE.includes('127.0.0.1')
    )
  }
  // No config: check current origin
  return !isLocalhostOrigin()
}

/** @deprecated renamed to isQRUsable */
export const isPublicUrlConfigured = isQRUsable
