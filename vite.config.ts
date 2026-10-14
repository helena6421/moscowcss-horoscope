import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// Repository name — used as base path on GitHub Pages.
// Locally (dev:host) we use '/' so asset paths work without a sub-path.
const REPO = 'moscowcss-horoscope'
const base = process.env.GITHUB_PAGES === 'true' ? `/${REPO}/` : '/'

export default defineConfig({
  plugins: [vue()],
  base,
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
})
