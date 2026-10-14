/**
 * Tests for the set queue (round-robin cycling).
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { SETS } from '../src/data/sets'
import { getSetAtIndex } from '../src/domain/quiz/setQueue'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value },
    removeItem: (key: string) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

beforeEach(() => {
  localStorageMock.clear()
})

describe('getSetAtIndex', () => {
  it('returns set 1 at index 0', () => {
    expect(getSetAtIndex(0).id).toBe(1)
  })

  it('returns set 5 at index 4', () => {
    expect(getSetAtIndex(4).id).toBe(5)
  })

  it('wraps around: index 5 → set 1', () => {
    expect(getSetAtIndex(5).id).toBe(1)
  })

  it('wraps around: index 10 → set 1', () => {
    expect(getSetAtIndex(10).id).toBe(1)
  })

  it('wraps around: index 7 → set 3 (7 % 5 = 2)', () => {
    expect(getSetAtIndex(7).id).toBe(3)
  })
})

describe('SETS data integrity', () => {
  it('has exactly 5 sets', () => {
    expect(SETS.length).toBe(5)
  })

  it('each set has exactly 5 questions', () => {
    for (const set of SETS) {
      expect(set.questions.length).toBe(5)
    }
  })

  it('each question has 2–4 answers', () => {
    for (const set of SETS) {
      for (const q of set.questions) {
        expect(q.answers.length).toBeGreaterThanOrEqual(2)
        expect(q.answers.length).toBeLessThanOrEqual(4)
      }
    }
  })

  it('all answer IDs are unique within a set', () => {
    for (const set of SETS) {
      const ids = set.questions.flatMap((q) => q.answers.map((a) => a.id))
      const unique = new Set(ids)
      expect(unique.size).toBe(ids.length)
    }
  })

  it('all question IDs are unique across all sets', () => {
    const ids = SETS.flatMap((s) => s.questions.map((q) => q.id))
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })

  it('each answer has at least one weight entry', () => {
    for (const set of SETS) {
      for (const q of set.questions) {
        for (const a of q.answers) {
          expect(Object.keys(a.weights).length).toBeGreaterThanOrEqual(1)
        }
      }
    }
  })

  it('all weight values are positive numbers', () => {
    for (const set of SETS) {
      for (const q of set.questions) {
        for (const a of q.answers) {
          for (const w of Object.values(a.weights)) {
            expect(w).toBeGreaterThan(0)
          }
        }
      }
    }
  })

  it('sets cycle correctly: 1→2→3→4→5→1', () => {
    const cycle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => getSetAtIndex(i).id)
    expect(cycle).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
  })
})
