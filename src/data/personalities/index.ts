import type { Personality, PersonalityId } from '@/types'

/**
 * Tie-break priority:
 * When multiple personalities share the top score, the one with the lowest
 * tieBreakPriority wins. Values are unique integers 1–8.
 *
 * Ordering rationale: more "universal" / beginner-adjacent personalities
 * appear first so they don't crowd out specialists in ties.
 */
export const PERSONALITIES: Record<PersonalityId, Personality> = {
  'display-flex': {
    id: 'display-flex',
    cssProperty: 'display: flex',
    name: '«Мастер договориться»',
    description:
      'Ты умеешь всех подвинуть, выровнять и оставить немного воздуха. Но когда места не хватает, кто-нибудь всё-таки сожмётся. Желательно не ты.',
    superpower: 'Распределять пространство и примирять непохожие элементы.',
    color: '#22C55E',
    accentColor: '#FACC15',
    textColor: '#14532D',
    tieBreakPriority: 1,
  },

  'display-grid': {
    id: 'display-grid',
    cssProperty: 'display: grid',
    name: '«Архитектор порядка»',
    description:
      'У тебя даже творческий хаос разложен по именованным областям. Коллеги видят страницу — ты видишь двенадцать колонок и чьи-то сомнительные жизненные решения.',
    superpower: 'Превращать сложный макет в стройную систему.',
    color: '#3B82F6',
    accentColor: '#06B6D4',
    textColor: '#1E3A5F',
    tieBreakPriority: 2,
  },

  'position-sticky': {
    id: 'position-sticky',
    cssProperty: 'position: sticky',
    name: '«Цепкий напарник»',
    description:
      'Сначала ты спокойно движешься со всеми. Потом находишь свою позицию и держишь её, пока позволяет контейнер. На тебя можно положиться — если никто не намудрил с overflow.',
    superpower: 'Оставаться на виду в нужный момент.',
    color: '#F59E0B',
    accentColor: '#FDE68A',
    textColor: '#78350F',
    tieBreakPriority: 3,
  },

  'var-you': {
    id: 'var-you',
    cssProperty: 'var(--you)',
    name: '«Источник истины»',
    description:
      'Ты один раз выбираешь цвет — и весь проект переодевается. Любишь, когда всё связано. Особенно когда никто не притащил в эту гармонию #ff0000 прямо в компонент.',
    superpower: 'Менять настроение целой системы из одной точки.',
    color: '#8B5CF6',
    accentColor: '#C4B5FD',
    textColor: '#2E1065',
    tieBreakPriority: 4,
  },

  'overflow-hidden': {
    id: 'overflow-hidden',
    cssProperty: 'overflow: hidden',
    name: '«Хранитель границ»',
    description:
      'Всё лишнее остаётся за кадром. Карточка аккуратная, углы ровные, вопросов нет. Куда пропала половина выпадающего меню — обсудим после демо.',
    superpower: 'Удерживать визуальный хаос в заданных границах.',
    color: '#0F172A',
    accentColor: '#F97316',
    textColor: '#F8FAFC',
    tieBreakPriority: 5,
  },

  'position-absolute': {
    id: 'position-absolute',
    cssProperty: 'position: absolute',
    name: '«Вне потока»',
    description:
      'Общий поток? У тебя свой маршрут. Пока остальные договариваются об отступах, ты уже стоишь где надо. Правда, после ресайза тебя снова ищут.',
    superpower: 'Находить своё место относительно правильного предка.',
    color: '#EC4899',
    accentColor: '#A855F7',
    textColor: '#4A044E',
    tieBreakPriority: 6,
  },

  'important': {
    id: 'important',
    cssProperty: '!important',
    name: '«Последний аргумент»',
    description:
      'Когда спор затягивается, ты достаёшь аргумент с восклицательным знаком. Задача закрыта. Кто будет переопределять это завтра — вопрос завтрашнего тебя.',
    superpower: 'Менять расклад сил в каскаде одним заявлением.',
    color: '#EF4444',
    accentColor: '#FB923C',
    textColor: '#450A0A',
    tieBreakPriority: 7,
  },

  'keyframes': {
    id: 'keyframes',
    cssProperty: '@keyframes',
    name: '«Двигатель драмы»',
    description:
      'Если кнопка просто появилась, значит, она появилась недостаточно эффектно. У тебя даже загрузка проживает полноценную сюжетную арку.',
    superpower: 'Превращать смену состояний в маленькое представление.',
    color: '#F97316',
    accentColor: '#FB923C',
    textColor: '#431407',
    tieBreakPriority: 8,
  },
}

/** Ordered list for iteration */
export const PERSONALITIES_LIST: Personality[] = Object.values(PERSONALITIES)

export function getPersonality(id: PersonalityId): Personality {
  return PERSONALITIES[id]
}

export function findPersonality(id: string): Personality | undefined {
  if (id in PERSONALITIES) return PERSONALITIES[id as PersonalityId]
  return undefined
}
