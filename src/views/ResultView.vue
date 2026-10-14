<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuiz } from '@/composables/useQuiz'
import { getPersonality } from '@/data/personalities'
import { buildCardUrl } from '@/lib/urlBuilder'
import { advanceQueue } from '@/domain/quiz/setQueue'
import PersonalityCard from '@/components/personality/PersonalityCard.vue'
import QRCodeBlock from '@/components/personality/QRCodeBlock.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { exportPersonalityCard, downloadBlob } from '@/lib/imageExport'

const router = useRouter()
const quiz = useQuiz()

// If result is not set (direct navigation), restore from storage
onMounted(() => {
  if (!quiz.resultPersonalityId.value) {
    quiz.init()
    if (!quiz.resultPersonalityId.value) {
      // No result in storage either — redirect to start
      router.replace('/')
    }
  }
})

const personality = computed(() => {
  if (!quiz.resultPersonalityId.value) return null
  return getPersonality(quiz.resultPersonalityId.value)
})

const cardUrl = computed(() => {
  if (!personality.value) return ''
  return buildCardUrl(personality.value.id)
})

const advanceDone = ref(false)
const exporting = ref(false)

function handleNextParticipant() {
  if (advanceDone.value) return
  advanceDone.value = true
  advanceQueue()
  quiz.resetForNextParticipant()
  router.push('/')
}

async function handleExport() {
  if (!personality.value || exporting.value) return
  exporting.value = true
  try {
    const blob = await exportPersonalityCard(personality.value)
    downloadBlob(blob, `css-horoscope-${personality.value.id}.png`)
  } catch (e) {
    console.error('Export failed:', e)
  } finally {
    exporting.value = false
  }
}
</script>

<template>
  <main class="result" role="main" :style="personality ? { '--result-color': personality.color, '--result-accent': personality.accentColor } : {}">
    <div class="result__bg" aria-hidden="true" />

    <div class="result__layout" v-if="personality">
      <!-- Left: QR code column -->
      <aside class="result__side result__side--left">
        <div class="result__qr-container">
          <QRCodeBlock :url="cardUrl" />
        </div>
      </aside>

      <!-- Center: Card -->
      <section class="result__center result-pop" aria-live="polite">
        <PersonalityCard :personality="personality" />
      </section>

      <!-- Right: Actions column -->
      <aside class="result__side result__side--right">
        <div class="result__actions">
          <AppButton
            variant="secondary"
            size="md"
            :loading="exporting"
            @click="handleExport"
          >
            📥 Скачать карточку
          </AppButton>

          <AppButton
            variant="primary"
            size="lg"
            :disabled="advanceDone"
            @click="handleNextParticipant"
          >
            Следующий участник →
          </AppButton>

          <p class="result__next-hint">
            Нажми после того как сфотографировал карточку или отсканировал QR
          </p>
        </div>
      </aside>
    </div>

    <!-- Loading state -->
    <div v-else class="result__loading" aria-live="polite">
      <p>Загрузка результата…</p>
    </div>
  </main>
</template>

<style scoped>
.result {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--result-color, #1F1F1F) 0%, var(--result-accent, #F97316) 100%);
}

.result__bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.08) 2px, transparent 2px);
  background-size: 24px 24px;
  pointer-events: none;
}

.result__layout {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr minmax(220px, 280px);
  align-items: center;
  gap: var(--space-xl);
  width: 100%;
  max-width: 1160px;
  position: relative;
  z-index: 1;
}

.result__center {
  display: flex;
  justify-content: center;
}

.result__side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.result__qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result__actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: stretch;
  width: 100%;
}

.result__next-hint {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.7);
  text-align: center;
  line-height: 1.4;
}

.result__loading {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
}

/* Responsive: stack on smaller screens */
@media (max-width: 900px) {
  .result__layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
  }

  .result__side--left {
    order: 2;
  }

  .result__center {
    order: 1;
  }

  .result__side--right {
    order: 3;
    width: 100%;
    max-width: 440px;
  }
}
</style>
