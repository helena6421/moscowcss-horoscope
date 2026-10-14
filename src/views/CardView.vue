<script setup lang="ts">
/**
 * CardView — public shareable page opened from QR code.
 *
 * URL: /#/card/:personalityId
 *
 * Rules:
 * - Opens a specific personality card by ID from the URL param.
 * - Never reads or writes booth/session localStorage.
 * - Offers a "Download card" button (PNG).
 * - Shows a clear 404 state for unknown personality IDs.
 */
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findPersonality } from '@/data/personalities'
import PersonalityCard from '@/components/personality/PersonalityCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { exportPersonalityCard, downloadBlob } from '@/lib/imageExport'

const route = useRoute()
const router = useRouter()

const personality = computed(() => {
  const id = route.params.personalityId as string
  return findPersonality(id) ?? null
})

const exporting = ref(false)

async function handleExport() {
  if (!personality.value || exporting.value) return
  exporting.value = true
  try {
    const blob = await exportPersonalityCard(personality.value)
    downloadBlob(blob, `css-horoscope-${personality.value.id}.png`)
  } catch (err) {
    console.error('Export failed:', err)
    // On mobile, toBlob may not trigger download; open as object URL instead
    if (personality.value) {
      const blob = await exportPersonalityCard(personality.value)
      const url = URL.createObjectURL(blob)
      window.open(url, '_blank')
    }
  } finally {
    exporting.value = false
  }
}
</script>

<template>
  <main class="card-view" role="main">
    <!-- Valid personality card -->
    <template v-if="personality">
      <div
        class="card-view__wrapper"
        :style="{ '--cv-color': personality.color, '--cv-accent': personality.accentColor }"
      >
        <div class="card-view__bg" aria-hidden="true" />

        <div class="card-view__content result-pop">
          <PersonalityCard :personality="personality" :compact="true" />

          <div class="card-view__actions">
            <AppButton
              size="lg"
              variant="secondary"
              :loading="exporting"
              @click="handleExport"
            >
              📥 Скачать карточку
            </AppButton>

            <p class="card-view__hint">
              Если скачивание не запустилось — нажми ещё раз, откроется в новой вкладке
            </p>
          </div>

          <footer class="card-view__footer">
            <span>MoscowCSS &nbsp;·&nbsp; #MoscowCSS</span>
          </footer>
        </div>
      </div>
    </template>

    <!-- Unknown personality ID -->
    <template v-else>
      <div class="card-view__error">
        <h1 class="card-view__error-title">404</h1>
        <p class="card-view__error-text">CSS-личность не найдена.</p>
        <p class="card-view__error-sub">Проверь правильность ссылки или пройди тест заново.</p>
        <AppButton variant="primary" size="md" @click="router.push('/')">
          На главную
        </AppButton>
      </div>
    </template>
  </main>
</template>

<style scoped>
.card-view {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-view__wrapper {
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg) var(--space-md);
  position: relative;
  background: linear-gradient(
    135deg,
    var(--cv-color, #1F1F1F) 0%,
    var(--cv-accent, #F97316) 100%
  );
}

.card-view__bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.08) 2px, transparent 2px);
  background-size: 22px 22px;
  pointer-events: none;
}

.card-view__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  width: 100%;
  max-width: 460px;
}

.card-view__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
}

.card-view__actions .app-btn {
  width: 100%;
}

.card-view__hint {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.65);
  text-align: center;
  max-width: 300px;
}

.card-view__footer {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Error state */
.card-view__error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-xl);
  text-align: center;
}

.card-view__error-title {
  font-family: var(--font-display);
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  color: var(--color-ink);
  opacity: 0.15;
}

.card-view__error-text {
  font-size: 1.5rem;
  font-weight: 800;
}

.card-view__error-sub {
  color: #6B7280;
  max-width: 280px;
}
</style>
