/**
 * useQuiz — composable that manages a single quiz session.
 *
 * Responsibilities:
 * - Tracks current set, current question index, and answer map.
 * - Persists in-progress state to sessionStorage so a page refresh
 *   restores the participant's progress.
 * - Exposes clean actions: selectAnswer, goBack, goNext, finish, reset.
 * - Provides a computed result personality once the quiz is finished.
 * - Never touches the booth queue (setQueue.ts handles that).
 */
import { ref, computed } from 'vue'
import type { QuestionSet, AnswerMap, PersonalityId } from '@/types'
import { SETS } from '@/data/sets'
import { calculateResult } from '@/domain/quiz/scoring'
import { peekNextSetIndex } from '@/domain/quiz/setQueue'
import { loadSessionState, saveSessionState, clearSessionState } from '@/lib/storage'

export function useQuiz() {
  // ── State ─────────────────────────────────────────────────────────────────

  const setIndex = ref<number>(0)
  const currentQuestion = ref<number>(0)
  const answers = ref<AnswerMap>({})
  const finished = ref<boolean>(false)
  const resultPersonalityId = ref<PersonalityId | null>(null)

  // ── Derived ───────────────────────────────────────────────────────────────

  const set = computed<QuestionSet>(() => SETS[setIndex.value])
  const question = computed(() => set.value.questions[currentQuestion.value])
  const totalQuestions = computed(() => set.value.questions.length)
  const selectedAnswer = computed(() => answers.value[question.value?.id] ?? null)
  const canGoBack = computed(() => currentQuestion.value > 0)
  const canGoNext = computed(() => selectedAnswer.value !== null)
  const isLastQuestion = computed(() => currentQuestion.value === totalQuestions.value - 1)

  // ── Persistence ───────────────────────────────────────────────────────────

  function persist() {
    saveSessionState({
      setIndex: setIndex.value,
      answers: answers.value,
      currentQuestion: currentQuestion.value,
      finished: finished.value,
    })
  }

  function restore(): boolean {
    const saved = loadSessionState()
    if (!saved) return false
    // Validate that the saved set index is still valid
    if (saved.setIndex < 0 || saved.setIndex >= SETS.length) return false
    setIndex.value = saved.setIndex
    answers.value = saved.answers
    currentQuestion.value = saved.currentQuestion
    finished.value = saved.finished
    if (saved.finished) {
      resultPersonalityId.value = calculateResult(SETS[saved.setIndex], saved.answers)
    }
    return true
  }

  // ── Actions ───────────────────────────────────────────────────────────────

  function startNewSession() {
    const idx = peekNextSetIndex()
    setIndex.value = idx
    currentQuestion.value = 0
    answers.value = {}
    finished.value = false
    resultPersonalityId.value = null
    persist()
  }

  function init() {
    if (!restore()) {
      startNewSession()
    }
  }

  function selectAnswer(answerId: string) {
    if (finished.value) return
    answers.value = { ...answers.value, [question.value.id]: answerId }
    persist()
  }

  function goBack() {
    if (!canGoBack.value) return
    currentQuestion.value--
    persist()
  }

  function goNext() {
    if (!canGoNext.value) return
    if (isLastQuestion.value) {
      _finish()
    } else {
      currentQuestion.value++
      persist()
    }
  }

  function _finish() {
    finished.value = true
    resultPersonalityId.value = calculateResult(set.value, answers.value)
    persist()
  }

  /**
   * Called when "Следующий участник" is clicked.
   * Clears session state. Queue advancement is handled separately in the view.
   */
  function resetForNextParticipant() {
    clearSessionState()
    setIndex.value = peekNextSetIndex()
    currentQuestion.value = 0
    answers.value = {}
    finished.value = false
    resultPersonalityId.value = null
  }

  return {
    // state
    setIndex,
    currentQuestion,
    answers,
    finished,
    resultPersonalityId,
    // derived
    set,
    question,
    totalQuestions,
    selectedAnswer,
    canGoBack,
    canGoNext,
    isLastQuestion,
    // actions
    init,
    selectAnswer,
    goBack,
    goNext,
    resetForNextParticipant,
  }
}
