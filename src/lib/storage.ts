/**
 * localStorage abstraction.
 *
 * Two separate keys:
 *  - BOOTH_KEY  : persists the set queue (nextSetIndex). Used only on the booth.
 *  - SESSION_KEY: persists the in-progress quiz (current answers & question).
 *                 Cleared when the participant finishes and the next one starts.
 *
 * The public card page (/card/:id) never reads these keys.
 */
import type { BoothState, QuizState } from '@/types'

const BOOTH_KEY = 'moscowcss__booth'
const SESSION_KEY = 'moscowcss__session'

// ─── Booth state ──────────────────────────────────────────────────────────────

export function loadBoothState(): BoothState {
  try {
    const raw = localStorage.getItem(BOOTH_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<BoothState>
      if (typeof parsed.nextSetIndex === 'number') {
        return { nextSetIndex: parsed.nextSetIndex }
      }
    }
  } catch {
    /* ignore parse errors */
  }
  return { nextSetIndex: 0 }
}

export function saveBoothState(state: BoothState): void {
  localStorage.setItem(BOOTH_KEY, JSON.stringify(state))
}

// ─── Session state ────────────────────────────────────────────────────────────

export function loadSessionState(): QuizState | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (raw) return JSON.parse(raw) as QuizState
  } catch {
    /* ignore */
  }
  return null
}

export function saveSessionState(state: QuizState): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(state))
}

export function clearSessionState(): void {
  localStorage.removeItem(SESSION_KEY)
}
