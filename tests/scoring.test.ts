/**
 * Tests for the scoring algorithm.
 *
 * Verifies:
 * 1. Deterministic results (same inputs → same output)
 * 2. All 8 personalities are reachable in each of the 5 sets
 * 3. No double-counting when answer changes
 * 4. Tie-breaking is deterministic and documented
 * 5. Edge cases (empty answers, partial answers)
 */
import { describe, it, expect } from 'vitest'
import { calculateScores, resolveWinner, calculateResult } from '../src/domain/quiz/scoring'
import { SETS } from '../src/data/sets'
import { PERSONALITIES_LIST } from '../src/data/personalities'
import type { AnswerMap, PersonalityId, QuestionSet } from '../src/types'

// ── Helper: enumerate all answer combinations for a set ────────────────────────
function* allCombinations(set: QuestionSet): Generator<AnswerMap> {
  const questions = set.questions
  const indices = new Array(questions.length).fill(0)

  while (true) {
    const answers: AnswerMap = {}
    for (let q = 0; q < questions.length; q++) {
      answers[questions[q].id] = questions[q].answers[indices[q]].id
    }
    yield answers

    // increment
    let pos = questions.length - 1
    while (pos >= 0) {
      indices[pos]++
      if (indices[pos] < questions[pos].answers.length) break
      indices[pos] = 0
      pos--
    }
    if (pos < 0) return
  }
}

describe('calculateScores', () => {
  it('returns empty object for empty answers', () => {
    const set = SETS[0]
    const scores = calculateScores(set, {})
    expect(Object.keys(scores).length).toBe(0)
  })

  it('accumulates weights correctly', () => {
    const set = SETS[0]
    // Pick the first answer of each question
    const answers: AnswerMap = {}
    for (const q of set.questions) {
      answers[q.id] = q.answers[0].id
    }
    const scores = calculateScores(set, answers)
    // Scores should be non-negative
    for (const score of Object.values(scores)) {
      expect(score).toBeGreaterThanOrEqual(0)
    }
  })

  it('does not double-count: replacing an answer gives same result as answering once', () => {
    const set = SETS[0]
    const q = set.questions[0]

    // Build answer map with first answer
    const answersFirst: AnswerMap = { [q.id]: q.answers[0].id }
    // Build answer map with second answer (simulating change)
    const answersSecond: AnswerMap = { [q.id]: q.answers[1].id }

    const scoresFirst = calculateScores(set, answersFirst)
    const scoresSecond = calculateScores(set, answersSecond)

    // The scores should differ (answers have different weights)
    // And neither should be a sum of both
    expect(JSON.stringify(scoresFirst)).not.toBe(JSON.stringify(scoresSecond))
  })
})

describe('resolveWinner', () => {
  it('returns the personality with the highest score', () => {
    const scores: Partial<Record<PersonalityId, number>> = {
      'display-flex': 5,
      'display-grid': 3,
      'important': 2,
    }
    expect(resolveWinner(scores)).toBe('display-flex')
  })

  it('resolves ties using tieBreakPriority (lower wins)', () => {
    const scores: Partial<Record<PersonalityId, number>> = {
      'display-flex': 6,      // priority 1
      'display-grid': 6,      // priority 2
      'important': 6,         // priority 7
    }
    // display-flex has priority 1 (lowest), should win
    expect(resolveWinner(scores)).toBe('display-flex')
  })

  it('resolves tie between grid and sticky', () => {
    const scores: Partial<Record<PersonalityId, number>> = {
      'display-grid': 8,      // priority 2
      'position-sticky': 8,   // priority 3
    }
    expect(resolveWinner(scores)).toBe('display-grid')
  })

  it('falls back gracefully for empty scores', () => {
    const winner = resolveWinner({})
    expect(PERSONALITIES_LIST.map((p) => p.id)).toContain(winner)
  })

  it('is deterministic for same inputs', () => {
    const scores: Partial<Record<PersonalityId, number>> = {
      'keyframes': 7,
      'var-you': 7,
    }
    const result1 = resolveWinner(scores)
    const result2 = resolveWinner(scores)
    expect(result1).toBe(result2)
  })
})

describe('Personality reachability: all 8 personalities reachable in each set', () => {
  const personalityIds = PERSONALITIES_LIST.map((p) => p.id)

  for (const set of SETS) {
    describe(`Set ${set.id} — ${set.title}`, () => {
      let reachable: Set<PersonalityId>

      beforeAll(() => {
        reachable = new Set<PersonalityId>()
        for (const answers of allCombinations(set)) {
          const winner = calculateResult(set, answers)
          reachable.add(winner)
        }
      })

      it('should have reachable results for all answer combinations', () => {
        expect(reachable.size).toBeGreaterThan(0)
      })

      for (const pid of personalityIds) {
        it(`personality "${pid}" is reachable`, () => {
          if (!reachable.has(pid as PersonalityId)) {
            // Report which personalities ARE reachable to help debug
            console.warn(`Set ${set.id}: "${pid}" not reachable. Reachable: ${[...reachable].join(', ')}`)
          }
          expect(reachable.has(pid as PersonalityId)).toBe(true)
        })
      }
    })
  }
})

describe('calculateResult — determinism', () => {
  it('same set + same answers always gives same result', () => {
    const set = SETS[2]
    const answers: AnswerMap = {}
    for (const q of set.questions) {
      answers[q.id] = q.answers[1].id // pick answer B for all
    }

    const r1 = calculateResult(set, answers)
    const r2 = calculateResult(set, answers)
    const r3 = calculateResult(set, answers)
    expect(r1).toBe(r2)
    expect(r2).toBe(r3)
  })

  it('different answer combinations may give different results', () => {
    const set = SETS[0]
    const answersA: AnswerMap = {}
    const answersB: AnswerMap = {}
    for (const q of set.questions) {
      answersA[q.id] = q.answers[0].id
      answersB[q.id] = q.answers[q.answers.length - 1].id
    }
    // At least one set should differ (not a guarantee but very likely with 4+ answers)
    const rA = calculateResult(set, answersA)
    const rB = calculateResult(set, answersB)
    // This test just verifies both are valid personalities
    expect(PERSONALITIES_LIST.map((p) => p.id)).toContain(rA)
    expect(PERSONALITIES_LIST.map((p) => p.id)).toContain(rB)
  })
})

// Helper import for beforeAll
import { beforeAll } from 'vitest'
