<script setup lang="ts">
import type { Question } from '@/types'
import AnswerOption from './AnswerOption.vue'

interface Props {
  question: Question
  selectedAnswerId: string | null
}

defineProps<Props>()
const emit = defineEmits<{ select: [answerId: string] }>()
</script>

<template>
  <div class="question-card">
    <h2 class="question-card__text">{{ question.text }}</h2>

    <div class="question-card__answers stagger" role="group" :aria-label="`Варианты ответа на вопрос: ${question.text}`">
      <AnswerOption
        v-for="(answer, index) in question.answers"
        :key="answer.id"
        :answer="answer"
        :index="index"
        :selected="selectedAnswerId === answer.id"
        class="bounce-in"
        @select="emit('select', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.question-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.question-card__text {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw + 0.5rem, 2rem);
  font-weight: 900;
  line-height: 1.3;
  color: var(--color-ink);
}

.question-card__answers {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
