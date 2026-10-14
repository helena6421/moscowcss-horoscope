// ─── Personality IDs ──────────────────────────────────────────────────────────

export type PersonalityId =
  | 'position-absolute'
  | 'display-grid'
  | 'display-flex'
  | 'important'
  | 'position-sticky'
  | 'var-you'
  | 'overflow-hidden'
  | 'keyframes'

// ─── Weight maps ──────────────────────────────────────────────────────────────

/** Map of personality ID → score contribution for a single answer */
export type WeightMap = Partial<Record<PersonalityId, number>>

// ─── Quiz data ────────────────────────────────────────────────────────────────

export interface Answer {
  id: string
  text: string
  /** Score contribution to each personality. Entries not listed = 0 */
  weights: WeightMap
  /** Human-readable rationale stored with the data (not shown in UI) */
  weightReason: string
}

export interface Question {
  id: string
  text: string
  answers: Answer[]
}

export interface QuestionSet {
  id: number          // 1..5
  title: string       // Displayed name of the set / theme
  questions: Question[]
}

// ─── Personality ──────────────────────────────────────────────────────────────

export interface Personality {
  id: PersonalityId
  /** e.g. "position: absolute" */
  cssProperty: string
  /** Short name shown on card, e.g. "«Вне потока»" */
  name: string
  description: string
  superpower: string
  /** Primary color (used for card background gradient start) */
  color: string
  /** Accent / secondary color */
  accentColor: string
  /** Text color that reads well on the background */
  textColor: string
  /**
   * Lower number = higher priority in tie-breaking.
   * Used when two or more personalities share the top score.
   * Each personality has a unique value 1..8.
   */
  tieBreakPriority: number
}

// ─── Quiz state ───────────────────────────────────────────────────────────────

/** answers[questionId] = answerId */
export type AnswerMap = Record<string, string>

export interface QuizState {
  setIndex: number       // 0-based index into SETS array (0..4)
  answers: AnswerMap
  currentQuestion: number  // 0-based question index
  finished: boolean
}

// ─── Persisted booth state ────────────────────────────────────────────────────

export interface BoothState {
  /** The index (0–4) of the NEXT set to serve */
  nextSetIndex: number
}
