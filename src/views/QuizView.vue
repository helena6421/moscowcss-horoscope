<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuiz } from '@/composables/useQuiz'
import ProgressBar from '@/components/quiz/ProgressBar.vue'
import QuestionCard from '@/components/quiz/QuestionCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()
const quiz = useQuiz()

onMounted(() => {
  quiz.init()
})

function handleSelect(answerId: string) {
  quiz.selectAnswer(answerId)
}

function handleBack() {
  if (quiz.canGoBack.value) {
    quiz.goBack()
  } else {
    router.push('/')
  }
}

function handleNext() {
  if (!quiz.canGoNext.value) return
  quiz.goNext()
  if (quiz.finished.value) {
    router.push('/result')
  }
}
</script>

<template>
  <main class="quiz" role="main">
    <div class="quiz__container">
      <!-- Header -->
      <header class="quiz__header">
        <ProgressBar
          :current="quiz.currentQuestion.value + 1"
          :total="quiz.totalQuestions.value"
          :set-title="quiz.set.value.title"
        />
      </header>

      <!-- Question -->
      <section class="quiz__body" aria-live="polite" aria-atomic="true">
        <Transition name="q" mode="out-in">
          <QuestionCard
            :key="quiz.question.value?.id"
            :question="quiz.question.value"
            :selected-answer-id="quiz.selectedAnswer.value"
            @select="handleSelect"
          />
        </Transition>
      </section>

      <!-- Navigation -->
      <nav class="quiz__nav" aria-label="Навигация по вопросам">
        <AppButton variant="ghost" size="md" @click="handleBack">
          ← Назад
        </AppButton>

        <div class="quiz__nav-info" aria-hidden="true">
          <span v-if="!quiz.selectedAnswer.value" class="quiz__hint">
            Выбери ответ
          </span>
        </div>

        <AppButton
          variant="primary"
          size="md"
          :disabled="!quiz.canGoNext.value"
          @click="handleNext"
        >
          {{ quiz.isLastQuestion.value ? 'Показать результат ✨' : 'Далее →' }}
        </AppButton>
      </nav>
    </div>

    <!-- Comic decorations -->
    <div class="quiz__deco quiz__deco--tl" aria-hidden="true" />
    <div class="quiz__deco quiz__deco--br" aria-hidden="true" />
  </main>
</template>

<style scoped>
.quiz {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg) var(--space-md);
  background: var(--color-surface);
  position: relative;
  overflow: hidden;
}

.quiz__container {
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  position: relative;
  z-index: 1;
}

.quiz__header {
  background: white;
  border: var(--comic-border);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  box-shadow: var(--comic-shadow-sm);
}

.quiz__body {
  background: white;
  border: var(--comic-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl) var(--space-xl);
  box-shadow: var(--comic-shadow);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quiz__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
}

.quiz__nav-info {
  flex: 1;
  text-align: center;
}

.quiz__hint {
  font-size: 0.85rem;
  color: #9CA3AF;
  font-weight: 600;
}

/* Question transitions */
.q-enter-active,
.q-leave-active {
  transition:
    opacity var(--duration-fast) var(--easing-smooth),
    transform var(--duration-fast) var(--easing-smooth);
}
.q-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.q-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

/* Decorations */
.quiz__deco {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 5px solid var(--color-ink);
  opacity: 0.07;
}

.quiz__deco--tl {
  top: -30px;
  left: -30px;
  transform: rotate(20deg);
  background: linear-gradient(90deg, transparent 49%, currentColor 49%, currentColor 51%, transparent 51%),
              linear-gradient(0deg, transparent 49%, currentColor 49%, currentColor 51%, transparent 51%);
  background-size: 30px 30px;
}

.quiz__deco--br {
  bottom: -30px;
  right: -30px;
  transform: rotate(-15deg);
  border-radius: 50%;
  background: var(--color-ink);
}

@media (max-width: 600px) {
  .quiz__body {
    padding: var(--space-lg) var(--space-md);
  }
}
</style>
