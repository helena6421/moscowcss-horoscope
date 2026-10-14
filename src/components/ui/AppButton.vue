<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const {
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
} = defineProps<Props>()
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--loading': loading }]"
    :aria-busy="loading"
  >
    <span v-if="loading" class="app-btn__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 800;
  border: var(--comic-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    transform var(--duration-fast) var(--easing-smooth),
    box-shadow var(--duration-fast) var(--easing-smooth);
  text-decoration: none;
  white-space: normal;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-align: center;
  position: relative;
  user-select: none;
}

.app-btn:not(:disabled):hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 var(--color-ink);
}

.app-btn:not(:disabled):active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--color-ink);
}

.app-btn:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

/* Sizes */
.app-btn--sm {
  padding: 0.4rem 1rem;
  font-size: 0.875rem;
  border-radius: var(--radius-sm);
}

.app-btn--md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  box-shadow: var(--comic-shadow-sm);
}

.app-btn--lg {
  padding: 1.1rem 2.2rem;
  font-size: 1.25rem;
  box-shadow: var(--comic-shadow);
  border-width: 4px;
}

/* Variants */
.app-btn--primary {
  background: var(--color-ink);
  color: #fff;
}

.app-btn--secondary {
  background: #fff;
  color: var(--color-ink);
}

.app-btn--ghost {
  background: transparent;
  color: var(--color-ink);
  box-shadow: none;
  border-color: transparent;
}

.app-btn--ghost:not(:disabled):hover {
  background: rgba(0, 0, 0, 0.06);
  box-shadow: none;
  transform: none;
}

.app-btn--danger {
  background: #EF4444;
  color: white;
}

/* Spinner */
.app-btn__spinner {
  display: block;
  width: 1em;
  height: 1em;
  border: 2.5px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
