<script setup lang="ts">
interface Props {
  current: number  // 1-based
  total: number
  setTitle: string
}

defineProps<Props>()
</script>

<template>
  <div class="progress" role="status" :aria-label="`Вопрос ${current} из ${total}`">
    <div class="progress__meta">
      <span class="progress__set-title">{{ setTitle }}</span>
      <span class="progress__counter">{{ current }} / {{ total }}</span>
    </div>
    <div class="progress__track" :aria-valuenow="current" :aria-valuemax="total" role="progressbar">
      <div
        v-for="i in total"
        :key="i"
        class="progress__pip"
        :class="{ 'progress__pip--done': i < current, 'progress__pip--active': i === current }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress {
  width: 100%;
}

.progress__meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.progress__set-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6B7280;
}

.progress__counter {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-ink);
}

.progress__track {
  display: flex;
  gap: 6px;
}

.progress__pip {
  flex: 1;
  height: 8px;
  border-radius: 4px;
  border: 2px solid var(--color-ink);
  background: transparent;
  transition: background var(--duration-normal) var(--easing-smooth);
}

.progress__pip--done {
  background: var(--color-ink);
}

.progress__pip--active {
  background: var(--color-brand-accent);
  border-color: var(--color-brand-accent);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.3);
}
</style>
