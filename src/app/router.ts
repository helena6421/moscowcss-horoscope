/**
 * Vue Router configuration.
 *
 * Hash routing is used so the app works on static hosting without server-side
 * fallback configuration. The hash fragment is never sent to the server,
 * so all routes are resolved client-side.
 *
 * Routes:
 *   /         → StartView
 *   /quiz     → QuizView
 *   /result   → ResultView
 *   /card/:id → CardView (public, shareable, works independently)
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultView from '@/views/ResultView.vue'
import CardView from '@/views/CardView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView,
    },
    {
      path: '/card/:personalityId',
      name: 'card',
      component: CardView,
      props: true,
    },
    {
      // Catch-all: redirect to start
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
