/**
 * SET 4 — «Укротитель адаптива»
 * Тема: px/rem, размеры, переполнение и брейкпоинты.
 *
 * Достижимость персонажей:
 *   display-flex       ✓ (Q2-B + Q4-C + ...)
 *   display-grid       ✓ (Q2-A + Q1-D + ...)
 *   position-sticky    ✓ (Q1-B + Q2-B + Q3-C + ...)
 *   var-you            ✓ (Q1-A + Q4-A + Q2-C + ...)
 *   overflow-hidden    ✓ (Q3-A + Q5-A + ...)
 *   position-absolute  ✓ (Q2-D + Q4-B + Q5-D + ...)
 *   important          ✓ (Q1-C + Q2-D + Q3-D + ...)
 *   keyframes          ✓ (Q1-D + Q3-B + Q4-C + Q5-C + Q2-C)
 */
import type { QuestionSet } from '@/types'

const set4: QuestionSet = {
  id: 4,
  title: 'Укротитель адаптива',
  questions: [
    {
      id: 's4q1',
      text: 'px или rem — что используешь для размеров?',
      answers: [
        {
          id: 's4q1a',
          text: 'rem везде — уважаю системные настройки пользователя',
          weights: { 'var-you': 2, 'display-flex': 1 },
          weightReason: 'rem как переменная, зависящая от корневого источника',
        },
        {
          id: 's4q1b',
          text: 'px для деталей и теней, rem для текста и отступов',
          weights: { 'position-sticky': 2, 'overflow-hidden': 1 },
          weightReason: 'Прагматичная граница между точностью и гибкостью',
        },
        {
          id: 's4q1c',
          text: 'px — точность важнее условной «доступности»',
          weights: { 'important': 2, 'position-absolute': 1 },
          weightReason: 'Абсолютные единицы = жёсткий контроль без компромиссов',
        },
        {
          id: 's4q1d',
          text: 'clamp() с rem и vw — максимум адаптивности',
          weights: { 'display-grid': 2, 'keyframes': 1 },
          weightReason: 'Сложные расчёты = архитектурная смелость + динамика',
        },
      ],
    },
    {
      id: 's4q2',
      text: 'Как добавляешь брейкпоинты в проект?',
      answers: [
        {
          id: 's4q2a',
          text: 'Фиксированный набор из дизайн-системы — и не отступаю',
          weights: { 'display-grid': 3 },
          weightReason: 'Жёсткая система брейкпоинтов = архитектурный порядок',
        },
        {
          id: 's4q2b',
          text: 'Там, где вёрстка начинает «плыть» — органично',
          weights: { 'display-flex': 2, 'position-sticky': 1 },
          weightReason: 'Гибкий и адаптивный отклик на контент',
        },
        {
          id: 's4q2c',
          text: 'Mobile-first, потом min-width — как учили',
          weights: { 'var-you': 2, 'keyframes': 1 },
          weightReason: 'Структурированный прогрессивный подход',
        },
        {
          id: 's4q2d',
          text: 'Один брейкпоинт посередине — обычно хватает',
          weights: { 'important': 2, 'position-absolute': 1 },
          weightReason: 'Минималистичный принудительный подход',
        },
      ],
    },
    {
      id: 's4q3',
      text: 'overflow: hidden в твоих руках — это...',
      answers: [
        {
          id: 's4q3a',
          text: 'Надёжный инструмент для обрезки лишнего контента',
          weights: { 'overflow-hidden': 3 },
          weightReason: 'Прямое воплощение персонажа',
        },
        {
          id: 's4q3b',
          text: 'Ловушка для выпадающих меню — осторожно применяю',
          weights: { 'position-absolute': 1, 'keyframes': 2 },
          weightReason: 'Страх перед обрезкой = уважение к динамическому контенту',
        },
        {
          id: 's4q3c',
          text: 'Зависит от контейнера — иногда помогает, иногда мешает',
          weights: { 'position-sticky': 2, 'display-flex': 1 },
          weightReason: 'Прагматичная оценка контекста',
        },
        {
          id: 's4q3d',
          text: 'Боюсь с тех пор, как он скрыл мой dropdown на проде',
          weights: { 'important': 2, 'overflow-hidden': 1 },
          weightReason: 'Травматичный опыт → теперь принуждение через страх',
        },
      ],
    },
    {
      id: 's4q4',
      text: 'Как проверяешь адаптивность вёрстки?',
      answers: [
        {
          id: 's4q4a',
          text: 'Responsive mode в DevTools — быстро и достаточно',
          weights: { 'var-you': 2, 'display-grid': 1 },
          weightReason: 'Инструментальный контроль из единой точки',
        },
        {
          id: 's4q4b',
          text: 'Только на реальных устройствах — DevTools иногда врёт',
          weights: { 'position-absolute': 2, 'position-sticky': 1 },
          weightReason: 'Доверие только к реальному контексту',
        },
        {
          id: 's4q4c',
          text: 'Ресайжу окно браузера руками — быстро и наглядно',
          weights: { 'display-flex': 2, 'keyframes': 1 },
          weightReason: 'Динамичная ручная проверка в реальном времени',
        },
        {
          id: 's4q4d',
          text: 'Дизайнер одобрил макет — значит, работает',
          weights: { 'important': 3 },
          weightReason: 'Авторитарная уверенность в правоте без проверки',
        },
      ],
    },
    {
      id: 's4q5',
      text: 'Текст вылезает из блока. Что делаешь первым делом?',
      answers: [
        {
          id: 's4q5a',
          text: 'overflow: hidden + text-overflow: ellipsis',
          weights: { 'overflow-hidden': 3 },
          weightReason: 'Классическое решение через скрытие',
        },
        {
          id: 's4q5b',
          text: 'Разбираюсь в причине: padding, ширина или контент?',
          weights: { 'display-grid': 2, 'var-you': 1 },
          weightReason: 'Поиск корневой причины = системный подход',
        },
        {
          id: 's4q5c',
          text: 'word-break: break-all — пусть само разбирается',
          weights: { 'keyframes': 2, 'display-flex': 1 },
          weightReason: 'Быстрое делегирование браузеру + прагматизм',
        },
        {
          id: 's4q5d',
          text: 'Уменьшаю font-size пока не влезет',
          weights: { 'position-absolute': 2, 'important': 1 },
          weightReason: 'Брутальное принудительное решение',
        },
      ],
    },
  ],
}

export default set4
