/**
 * SET 3 — «Хранитель порядка»
 * Тема: БЭМ, CSS Modules, reset.css, организация стилей.
 *
 * Достижимость персонажей:
 *   display-flex       ✓ (Q2-C + Q4-B + Q5-C + ...)
 *   display-grid       ✓ (Q1-A + Q2-A + Q3-B + ...)
 *   position-sticky    ✓ (Q1-B + Q4-B + Q5-B + ...)
 *   var-you            ✓ (Q1-B + Q3-A + Q5-B + ...)
 *   overflow-hidden    ✓ (Q4-A + Q5-A + Q2-A + ...)
 *   position-absolute  ✓ (Q1-D + Q3-C + Q4-C + ...)
 *   important          ✓ (Q1-D + Q2-D + Q3-C + ...)
 *   keyframes          ✓ (Q1-C + Q2-D + Q3-D + Q4-D + Q5-C)
 */
import type { QuestionSet } from '@/types'

const set3: QuestionSet = {
  id: 3,
  title: 'Хранитель порядка',
  questions: [
    {
      id: 's3q1',
      text: 'БЭМ или CSS Modules — что выбираешь?',
      answers: [
        {
          id: 's3q1a',
          text: 'БЭМ — соглашение важнее инструментов, читаемость в HTML',
          weights: { 'display-grid': 2, 'overflow-hidden': 1 },
          weightReason: 'Явная конвенция = архитектурный порядок + чёткие границы',
        },
        {
          id: 's3q1b',
          text: 'CSS Modules — скоуп встроен в сборщик, не надо договариваться',
          weights: { 'var-you': 2, 'position-sticky': 1 },
          weightReason: 'Инструментальная изоляция = источник истины + надёжность',
        },
        {
          id: 's3q1c',
          text: 'Tailwind — зачем вообще придумывать имена классов',
          weights: { 'keyframes': 2, 'display-flex': 1 },
          weightReason: 'Утилитарный подход + быстрое движение без церемоний',
        },
        {
          id: 's3q1d',
          text: 'Один globals.css — у нас маленький проект, всё и так понятно',
          weights: { 'important': 2, 'position-absolute': 1 },
          weightReason: 'Глобальный стиль без структуры → принудительность и произвольность',
        },
      ],
    },
    {
      id: 's3q2',
      text: 'Пишешь ли reset.css с нуля?',
      answers: [
        {
          id: 's3q2a',
          text: 'Да, и знаю каждую строку — это основа',
          weights: { 'display-grid': 3, 'overflow-hidden': 1 },
          weightReason: 'Тщательная архитектурная основа + контроль всего',
        },
        {
          id: 's3q2b',
          text: 'Нет, беру normalize.css или modern-reset — зачем изобретать',
          weights: { 'var-you': 2, 'position-sticky': 1 },
          weightReason: 'Использование проверенного источника истины',
        },
        {
          id: 's3q2c',
          text: '* { box-sizing: border-box; margin: 0 } — хватает для старта',
          weights: { 'display-flex': 2, 'keyframes': 1 },
          weightReason: 'Минимальный сброс и движение вперёд',
        },
        {
          id: 's3q2d',
          text: 'Вообще не сбрасываю — браузерные стили не трогаю',
          weights: { 'important': 2, 'position-absolute': 1 },
          weightReason: 'Игнорирование базы → работа поверх всего',
        },
      ],
    },
    {
      id: 's3q3',
      text: 'Как организован CSS в твоём проекте?',
      answers: [
        {
          id: 's3q3a',
          text: 'По компонентам — каждый файл знает своё место и своё',
          weights: { 'var-you': 3 },
          weightReason: 'Компонентная изоляция = единый источник стилей для компонента',
        },
        {
          id: 's3q3b',
          text: 'По слоям: base, layout, components, utilities',
          weights: { 'display-grid': 3 },
          weightReason: 'Классическая CSS-архитектура = идеальный порядок',
        },
        {
          id: 's3q3c',
          text: 'Один большой файл с секциями и комментариями',
          weights: { 'important': 2, 'position-absolute': 1 },
          weightReason: 'Монолит с пометками → всё вместе, но хаотично',
        },
        {
          id: 's3q3d',
          text: 'Как исторически сложилось — главное работает',
          weights: { 'keyframes': 2, 'display-flex': 1 },
          weightReason: 'Органичный рост без плана → динамика важнее структуры',
        },
      ],
    },
    {
      id: 's3q4',
      text: 'Что делаешь с устаревшими стилями в проекте?',
      answers: [
        {
          id: 's3q4a',
          text: 'Удаляю сразу — мёртвый код мешает думать',
          weights: { 'overflow-hidden': 3 },
          weightReason: 'Обрезка лишнего = хранитель границ',
        },
        {
          id: 's3q4b',
          text: 'Оставляю с комментарием /* TODO: remove */ — вернусь',
          weights: { 'position-sticky': 2, 'display-flex': 1 },
          weightReason: 'Прилипшие комментарии и прагматичная гибкость',
        },
        {
          id: 's3q4c',
          text: 'Комментирую /* just in case */ — на вечность',
          weights: { 'position-absolute': 2, 'important': 1 },
          weightReason: 'Код вне потока использования, но лежит где-то',
        },
        {
          id: 's3q4d',
          text: 'Пишу поверх — зачем рисковать удалять чужое',
          weights: { 'keyframes': 3 },
          weightReason: 'Добавление слоёв анимации/переопределений поверх существующего',
        },
      ],
    },
    {
      id: 's3q5',
      text: 'Твоё отношение к CSS linting (Stylelint)?',
      answers: [
        {
          id: 's3q5a',
          text: 'Stylelint с кастомным конфигом — порядок или смерть',
          weights: { 'overflow-hidden': 3 },
          weightReason: 'Строгий контроль границ стилей',
        },
        {
          id: 's3q5b',
          text: 'Базовый командный конфиг — договорённость важнее личных правил',
          weights: { 'var-you': 2, 'position-sticky': 1 },
          weightReason: 'Общая система + надёжность договорённости',
        },
        {
          id: 's3q5c',
          text: 'Запускаю перед коммитом, когда вспоминаю',
          weights: { 'display-flex': 2, 'keyframes': 1 },
          weightReason: 'Гибкость + ситуативная активность',
        },
        {
          id: 's3q5d',
          text: 'Пишем аккуратно — линтер лишний шум',
          weights: { 'display-grid': 1, 'important': 2 },
          weightReason: 'Самоуверенность в обходе инструментов контроля',
        },
      ],
    },
  ],
}

export default set3
