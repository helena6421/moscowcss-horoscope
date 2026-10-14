import type { QuestionSet, AnswerMap, PersonalityId } from '@/types'
import { PERSONALITIES } from '@/data/personalities'

/**
 * Accumulate personality scores from a completed answer map.
 *
 * Rules:
 * 1. For each answered question, find the chosen Answer object.
 * 2. Add its weights to the running totals.
 * 3. A previous answer for the same question is fully replaced —
 *    no double-counting (the AnswerMap only stores the latest choice).
 *
 * @returns Record<PersonalityId, number> — scores for every personality that
 *          received at least one point. Personalities with 0 total are omitted.
 */
export function calculateScores(
  set: QuestionSet,
  answers: AnswerMap,
): Partial<Record<PersonalityId, number>> {
  const scores: Partial<Record<PersonalityId, number>> = {}

  for (const question of set.questions) {
    const chosenId = answers[question.id]
    if (!chosenId) continue

    const answer = question.answers.find((a) => a.id === chosenId)
    if (!answer) continue

    for (const [pid, weight] of Object.entries(answer.weights) as [PersonalityId, number][]) {
      scores[pid] = (scores[pid] ?? 0) + weight
    }
  }

  return scores
}

/**
 * Determine the winning personality from a score map.
 *
 * Tie-breaking rule (deterministic, documented):
 *   When two or more personalities share the top score, the one with the
 *   **lowest tieBreakPriority** value wins. Each personality has a unique
 *   integer 1–8 for this purpose (see data/personalities/index.ts).
 *
 * Edge case: if no answers were recorded (empty scores), falls back to the
 * personality with tieBreakPriority = 1 (display-flex).
 */
export function resolveWinner(
  scores: Partial<Record<PersonalityId, number>>,
): PersonalityId {
  const entries = Object.entries(scores) as [PersonalityId, number][]

  if (entries.length === 0) {
    // Fallback: return the personality with highest priority (lowest number)
    return Object.values(PERSONALITIES).sort(
      (a, b) => a.tieBreakPriority - b.tieBreakPriority,
    )[0].id
  }

  const maxScore = Math.max(...entries.map(([, s]) => s))
  const winners = entries
    .filter(([, s]) => s === maxScore)
    .map(([id]) => id)

  if (winners.length === 1) return winners[0]

  // Tie-break: lowest tieBreakPriority wins
  return winners.sort(
    (a, b) => PERSONALITIES[a].tieBreakPriority - PERSONALITIES[b].tieBreakPriority,
  )[0]
}

/**
 * One-shot helper: score + resolve.
 */
export function calculateResult(set: QuestionSet, answers: AnswerMap): PersonalityId {
  const scores = calculateScores(set, answers)
  return resolveWinner(scores)
}
