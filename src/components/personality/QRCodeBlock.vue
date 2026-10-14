<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { generateQRDataUrl } from '@/lib/qrCode'
import { isQRUsable } from '@/lib/urlBuilder'

interface Props {
  url: string
}

const props = defineProps<Props>()

const qrDataUrl = ref<string>('')
// Evaluate at runtime (not build-time) so it reacts to actual window.location
const qrUsable = isQRUsable()

async function generateQR() {
  if (!qrUsable) return
  qrDataUrl.value = await generateQRDataUrl(props.url)
}

onMounted(generateQR)
watch(() => props.url, generateQR)
</script>

<template>
  <div class="qr-block">
    <!-- QR code shown when URL is reachable from another device -->
    <template v-if="qrUsable">
      <div class="qr-block__frame">
        <img
          v-if="qrDataUrl"
          :src="qrDataUrl"
          alt="QR-код для открытия карточки на телефоне"
          class="qr-block__image"
          width="160"
          height="160"
        />
        <div v-else class="qr-block__placeholder" aria-label="Генерация QR-кода..." />
      </div>
      <p class="qr-block__caption">Забери свою карточку</p>
    </template>

    <!-- Dev warning: localhost can't be reached from phone -->
    <template v-else>
      <div class="qr-block__dev-warning">
        <p class="qr-block__warn-title">⚠ QR недоступен</p>
        <p>Сервер запущен на <code>localhost</code> — телефон его не найдёт.</p>
        <p class="qr-block__warn-fix">
          Запусти:<br />
          <code>npm run dev:host</code><br />
          и открой по LAN-адресу.
        </p>
        <a :href="url" class="qr-block__dev-link" target="_blank" rel="noopener">
          Открыть на этом устройстве →
        </a>
      </div>
    </template>
  </div>
</template>

<style scoped>
.qr-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

/* ── QR code frame ──────────────────────────────────────────────────────────── */
.qr-block__frame {
  padding: 8px;
  background: white;
  border: 4px solid var(--color-ink);
  border-radius: var(--radius-sm);
  box-shadow: var(--comic-shadow-sm);
}

.qr-block__image {
  display: block;
  width: 160px;
  height: 160px;
}

.qr-block__placeholder {
  width: 160px;
  height: 160px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.qr-block__caption {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
}

/* ── Dev warning ────────────────────────────────────────────────────────────── */
.qr-block__dev-warning {
  background: rgba(0, 0, 0, 0.35);
  border: 2px dashed rgba(255, 255, 255, 0.45);
  border-radius: var(--radius-sm);
  padding: 0.9rem 1rem;
  text-align: center;
  font-size: 0.78rem;
  line-height: 1.55;
  max-width: 200px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.qr-block__warn-title {
  font-weight: 800;
  font-size: 0.85rem;
  color: #FCD34D;
}

.qr-block__warn-fix {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 0.4rem 0.5rem;
}

.qr-block__dev-warning code {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.1em 0.3em;
  border-radius: 3px;
}

.qr-block__dev-link {
  display: block;
  margin-top: 0.25rem;
  color: #FDE68A;
  font-weight: 700;
  text-decoration: underline;
  font-size: 0.8rem;
}
</style>
