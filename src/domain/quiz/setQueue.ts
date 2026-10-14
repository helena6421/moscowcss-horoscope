/**
 * Set queue management.
 *
 * The booth cycles through sets 1→2→3→4→5→1→… deterministically.
 * The current nextSetIndex (0-based, 0–4) is persisted in localStorage so
 * page refreshes don't restart from Set 1.
 *
 * Important: the queue state lives in the **booth** localStorage only.
 * The public card URL (/card/:id) never reads or writes the queue.
 */
import { SETS } from '@/data/sets'
import { loadBoothState, saveBoothState } from '@/lib/storage'

/** Returns the set index (0-based) that should be used for the next quiz session. */
export function peekNextSetIndex(): number {
  const state = loadBoothState()
  return state.nextSetIndex % SETS.length
}

/**
 * Advance the queue by exactly one step and persist.
 * Must be called once when a participant finishes (clicks "Следующий участник").
 * Double-click protection: the storage layer stores the already-advanced value,
 * so a second call just advances again — callers must guard against this at
 * the UI level (disable button after first click).
 */
export function advanceQueue(): void {
  const state = loadBoothState()
  const next = (state.nextSetIndex + 1) % SETS.length
  saveBoothState({ nextSetIndex: next })
}

/** Peek without side effects; used in tests. */
export function getSetAtIndex(index: number) {
  return SETS[index % SETS.length]
}
