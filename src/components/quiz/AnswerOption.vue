<script setup lang="ts">
import type { Answer } from '@/types'

interface Props {
  answer: Answer
  selected: boolean
  index: number
}

const props = defineProps<Props>()
const emit = defineEmits<{ select: [answerId: string] }>()

const LETTERS = ['А', 'Б', 'В', 'Г']

function handleSelect() {
  emit('select', props.answer.id)
}
</script>

<template>
  <button
    class="answer-option"
    :class="{ 'answer-option--selected': selected }"
    :aria-pressed="selected"
    @click="handleSelect"
    @keydown.enter.prevent="handleSelect"
    @keydown.space.prevent="handleSelect"
  >
    <span class="answer-option__letter" aria-hidden="true">{{ LETTERS[index] ?? index + 1 }}</span>
    <span class="answer-option__text">{{ answer.text }}</span>
    <span v-if="selected" class="answer-option__check" aria-hidden="true">✓</span>
  </button>
</template>

<style scoped>
.answer-option {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.25rem;
  background: white;
  border: var(--comic-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-ink);
  transition:
    transform var(--duration-fast) var(--easing-bounce),
    box-shadow var(--duration-fast) var(--easing-smooth),
    background var(--duration-fast);
  box-shadow: var(--comic-shadow-sm);
  position: relative;
}

.answer-option:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-ink);
  background: #FFF9F0;
}

.answer-option:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--color-ink);
}

.answer-option--selected {
  background: var(--color-ink);
  color: white;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-brand-accent);
}

.answer-option--selected:hover {
  background: #2D2D2D;
  box-shadow: 7px 7px 0 var(--color-brand-accent);
}

.answer-option__letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  border-radius: 50%;
  font-family: var(--font-mono);
  font-weight: 900;
  font-size: 0.9rem;
  border: 2.5px solid currentColor;
  transition: border-color var(--duration-fast);
}

.answer-option__text {
  flex: 1;
  line-height: 1.5;
}

.answer-option__check {
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--color-brand-accent);
  line-height: 1;
}
</style>
