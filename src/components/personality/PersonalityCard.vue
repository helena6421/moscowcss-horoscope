<script setup lang="ts">
import type { Personality } from '@/types'
import CharacterIllustration from './CharacterIllustration.vue'

interface Props {
  personality: Personality
  /** Show in compact mode (for phone card view) */
  compact?: boolean
}

const { personality, compact = false } = defineProps<Props>()
</script>

<template>
  <article
    class="personality-card"
    :class="{ 'personality-card--compact': compact }"
    :style="{
      '--card-color': personality.color,
      '--card-accent': personality.accentColor,
      '--card-text': personality.textColor,
    }"
  >
    <!-- Comic dot pattern -->
    <div class="personality-card__dots" aria-hidden="true" />

    <!-- Character illustration -->
    <div class="personality-card__character">
      <CharacterIllustration
        :personality-id="personality.id"
        :size="compact ? 200 : 280"
      />
    </div>

    <!-- CSS property tag -->
    <div class="personality-card__property-tag">
      <code class="personality-card__css-property">{{ personality.cssProperty }}</code>
    </div>

    <!-- Name -->
    <h2 class="personality-card__name">{{ personality.name }}</h2>

    <!-- Description -->
    <p class="personality-card__description">{{ personality.description }}</p>

    <!-- Superpower -->
    <div class="personality-card__superpower">
      <span class="personality-card__superpower-label">⚡ Суперсила</span>
      <p class="personality-card__superpower-text">{{ personality.superpower }}</p>
    </div>

    <!-- Footer -->
    <footer class="personality-card__footer">
      <span class="personality-card__branding">MoscowCSS &nbsp;·&nbsp; #MoscowCSS</span>
    </footer>
  </article>
</template>

<style scoped>
.personality-card {
  --card-color: #1F1F1F;
  --card-accent: #F97316;
  --card-text: #FFFFFF;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-xl) var(--space-lg);
  border: 5px solid var(--color-ink);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--card-color) 0%, var(--card-accent) 100%);
  color: var(--card-text);
  overflow: hidden;
  box-shadow: var(--comic-shadow);
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
}

/* Halftone dots overlay */
.personality-card__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1.5px, transparent 1.5px);
  background-size: 18px 18px;
  pointer-events: none;
  z-index: 0;
}

.personality-card__character {
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.35));
}

.personality-card__property-tag {
  position: relative;
  z-index: 1;
  background: var(--color-ink);
  border-radius: var(--radius-sm);
  padding: 0.4rem 1rem;
  border: 3px solid rgba(255,255,255,0.3);
  width: 100%;
  text-align: center;
}

.personality-card__css-property {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 0.02em;
}

.personality-card__name {
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.2;
  text-shadow: 3px 3px 0 rgba(0,0,0,0.3);
}

.personality-card__description {
  position: relative;
  z-index: 1;
  font-size: clamp(0.9rem, 2.2vw, 1.05rem);
  line-height: 1.65;
  text-align: center;
  opacity: 0.95;
}

.personality-card__superpower {
  position: relative;
  z-index: 1;
  width: 100%;
  background: rgba(255, 255, 255, 0.18);
  border: 2.5px solid rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  text-align: center;
}

.personality-card__superpower-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.8;
  margin-bottom: 0.35rem;
}

.personality-card__superpower-text {
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.5;
}

.personality-card__footer {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding-top: var(--space-sm);
  border-top: 2px solid rgba(255,255,255,0.25);
}

.personality-card__branding {
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Compact variant for phone view */
.personality-card--compact {
  gap: var(--space-sm);
  padding: var(--space-lg) var(--space-md);
}

.personality-card--compact .personality-card__description {
  font-size: 0.9rem;
}

.personality-card--compact .personality-card__name {
  font-size: 1.3rem;
}
</style>
