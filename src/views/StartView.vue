<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()

function startQuiz() {
  router.push('/quiz')
}
</script>

<template>
  <main class="start" role="main">
    <!-- Comic panel decoration -->
    <div class="start__bg halftone-bg" aria-hidden="true" />

    <!-- Left decorative panel -->
    <div class="start__decorations" aria-hidden="true">
      <div class="start__bubble start__bubble--1">
        <code>display: ?</code>
      </div>
      <div class="start__bubble start__bubble--2">
        <code>!important</code>
      </div>
      <div class="start__deco start__deco--grid" />
      <div class="start__deco start__deco--flex" />
    </div>

    <!-- Main content -->
    <div class="start__content">
      <header class="start__header">
        <span class="start__pretitle">MoscowCSS</span>
        <h1 class="start__title">
          CSS<br />
          <span class="start__title-accent">Гороскоп</span>
        </h1>
        <p class="start__subtitle">
          Пять ответов — и каскад раскроет твой характер
        </p>
      </header>

      <div class="start__meta">
        <div class="start__badge">
          <span>5 вопросов</span>
          <span class="start__badge-sep">·</span>
          <span>8 CSS-личностей</span>
          <span class="start__badge-sep">·</span>
          <span>без правильных и неправильных</span>
        </div>
      </div>

      <AppButton
        size="lg"
        variant="primary"
        class="start__cta"
        @click="startQuiz"
      >
        Узнать свою CSS-личность →
      </AppButton>

      <p class="start__disclaimer">
        Это развлекательный тест, а не экзамен. Здесь нет таймера и оценки уровня.
      </p>
    </div>

    <!-- Right decorative panel -->
    <div class="start__right-deco" aria-hidden="true">
      <div class="start__property-stack">
        <div class="start__prop">position: sticky</div>
        <div class="start__prop start__prop--accent">@keyframes</div>
        <div class="start__prop">overflow: hidden</div>
        <div class="start__prop start__prop--highlight">var(--you)</div>
        <div class="start__prop">display: grid</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.start {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-xl) var(--space-lg);
  position: relative;
  overflow: hidden;
}

.start__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* Main content column */
.start__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.start__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.start__pretitle {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.35rem 1.1rem;
  border: 3px solid var(--color-ink);
  border-radius: var(--radius-full);
  background: var(--color-ink);
  color: white;
}

.start__title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 9vw, 7rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  text-shadow: 5px 5px 0 rgba(0,0,0,0.12);
}

.start__title-accent {
  color: var(--color-brand-accent);
  -webkit-text-stroke: 2px var(--color-ink);
}

.start__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: #4B5563;
  max-width: 380px;
  margin: 0 auto;
  line-height: 1.5;
}

.start__meta {
  width: 100%;
}

.start__badge {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #6B7280;
}

.start__badge-sep {
  color: var(--color-brand-accent);
}

.start__cta {
  width: 100%;
  max-width: 360px;
  font-size: 1.15rem;
}

.start__disclaimer {
  font-size: 0.8rem;
  color: #9CA3AF;
  max-width: 340px;
}

/* Left decorations */
.start__decorations {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.start__bubble {
  background: white;
  border: 3.5px solid var(--color-ink);
  border-radius: 18px;
  padding: 0.5rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 4px 4px 0 var(--color-ink);
  position: relative;
  transform-origin: center;
}

.start__bubble--1 {
  transform: rotate(-8deg);
  background: #FEF3C7;
}

.start__bubble--2 {
  transform: rotate(5deg);
  background: #FEE2E2;
}

.start__deco {
  width: 60px;
  height: 60px;
  border: 3.5px solid var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-ink);
}

.start__deco--grid {
  background: linear-gradient(90deg, transparent 49%, var(--color-ink) 49%, var(--color-ink) 51%, transparent 51%),
              linear-gradient(0deg, transparent 49%, var(--color-ink) 49%, var(--color-ink) 51%, transparent 51%);
  background-size: 20px 20px;
  border-radius: 8px;
  transform: rotate(12deg);
}

.start__deco--flex {
  background: #DCFCE7;
  border-radius: var(--radius-full);
  transform: rotate(-6deg) scaleX(1.5);
}

/* Right decoration (CSS property list) */
.start__right-deco {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start__property-stack {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.start__prop {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.4rem 0.85rem;
  background: white;
  border: 3px solid var(--color-ink);
  border-radius: var(--radius-sm);
  box-shadow: 3px 3px 0 var(--color-ink);
  transform: rotate(-2deg);
  white-space: nowrap;
}

.start__prop:nth-child(2n) {
  transform: rotate(1.5deg);
}

.start__prop--accent {
  background: #FFF1F2;
  color: #EF4444;
}

.start__prop--highlight {
  background: #F5F3FF;
  color: #8B5CF6;
}

/* Responsive */
@media (max-width: 900px) {
  .start {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: var(--space-xl) var(--space-md);
  }

  .start__decorations,
  .start__right-deco {
    display: none;
  }
}
</style>
