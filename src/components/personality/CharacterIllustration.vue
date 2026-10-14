<script setup lang="ts">
import type { PersonalityId } from '@/types'
import { CHARACTER_SVGS } from '@/assets/characters'

interface Props {
  personalityId: PersonalityId
  size?: number
}

const { personalityId, size = 320 } = defineProps<Props>()
</script>

<template>
  <div
    class="character"
    :style="{ width: `${size}px`, height: `${size}px` }"
    aria-hidden="true"
    v-html="CHARACTER_SVGS[personalityId]"
  />
</template>

<style scoped>
.character {
  display: block;
  flex-shrink: 0;
  filter: drop-shadow(4px 4px 0 rgba(0, 0, 0, 0.25));
}

.character :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
