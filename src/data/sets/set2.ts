/**
 * SET 2 — «Повелитель каскада»
 * Тема: специфичность, !important, переопределения, наследование.
 *
 * Достижимость персонажей:
 *   display-flex       ✓ (Q4-B + Q2-B + ...)
 *   display-grid       ✓ (Q1-B + Q2-A + ...)
 *   position-sticky    ✓ (Q1-C + Q4-B + Q5-C + ...)
 *   var-you            ✓ (Q1-D + Q3-A + Q5-A + ...)
 *   overflow-hidden    ✓ (Q4-C + Q5-D + Q3-C + ...)
 *   position-absolute  ✓ (Q3-D + Q2-C + Q4-C + ...)
 *   important          ✓ (Q1-A + Q2-C + Q3-D + ...)
 *   keyframes          ✓ (Q2-D + Q5-B + Q3-B + Q4-D + Q1-A)
 */
import type { QuestionSet } from '@/types'

const set2: QuestionSet = {
  id: 2,
  title: 'Повелитель каскада',
  questions: [
    {
      id: 's2q1',
      text: 'Стиль не применяется из-за специфичности. Первое действие?',
      answers: [
        {
          id: 's2q1a',
          text: '!important — задача решена, еду дальше',
          weights: { 'important': 3 },
          weightReason: 'Прямое использование !important как инструмента',
        },
        {
          id: 's2q1b',
          text: 'Рефакторю селектор — снижаю специфичность правильно',
          weights: { 'display-grid': 2, 'var-you': 1 },
          weightReason: 'Архитектурное решение → порядок и система',
        },
        {
          id: 's2q1c',
          text: 'Добавляю родительский класс для увеличения специфичности',
          weights: { 'position-sticky': 2, 'overflow-hidden': 1 },
          weightReason: 'Обёртка = цепкость + ограничение контекста',
        },
        {
          id: 's2q1d',
          text: 'DevTools → нахожу виновный стиль и разбираюсь в причине',
          weights: { 'var-you': 3 },
          weightReason: 'Поиск источника истины в каскаде',
        },
      ],
    },
    {
      id: 's2q2',
      text: '!important в продакшн-коде — это...',
      answers: [
        {
          id: 's2q2a',
          text: 'Архитектурный просчёт и технический долг',
          weights: { 'display-grid': 2, 'var-you': 2 },
          weightReason: 'Системный взгляд на code quality',
        },
        {
          id: 's2q2b',
          text: 'Легитимный инструмент для переопределения внешних стилей',
          weights: { 'important': 3, 'display-flex': 1 },
          weightReason: '!important как специализированный инструмент',
        },
        {
          id: 's2q2c',
          text: 'Последний аргумент, когда дедлайн горит',
          weights: { 'important': 2, 'position-absolute': 2 },
          weightReason: 'Экстренный выход из потока правил → как position:absolute выходит из потока',
        },
        {
          id: 's2q2d',
          text: 'Моя пятничная традиция перед деплоем',
          weights: { 'keyframes': 3 },
          weightReason: 'Ритуальный драматизм в конце недели',
        },
      ],
    },
    {
      id: 's2q3',
      text: 'Что реально наследуется в CSS без явного указания?',
      answers: [
        {
          id: 's2q3a',
          text: 'font, color, line-height — и я этим активно пользуюсь',
          weights: { 'var-you': 3 },
          weightReason: 'Использование наследования как системы → источник истины',
        },
        {
          id: 's2q3b',
          text: 'Только то, что задано в браузерных стилях',
          weights: { 'display-flex': 1, 'keyframes': 2 },
          weightReason: 'Минималистичный взгляд с любопытством к браузерным дефолтам',
        },
        {
          id: 's2q3c',
          text: 'Всё, что не сбросил reset.css',
          weights: { 'overflow-hidden': 2, 'position-sticky': 1 },
          weightReason: 'Граница определяется тем, что сброшено',
        },
        {
          id: 's2q3d',
          text: 'Я всё прописываю явно — наследованию не доверяю',
          weights: { 'important': 1, 'position-absolute': 2 },
          weightReason: 'Явный контроль без опоры на каскад → выход из потока наследования',
        },
      ],
    },
    {
      id: 's2q4',
      text: 'Как работаешь с чужими стилями в унаследованном проекте?',
      answers: [
        {
          id: 's2q4a',
          text: 'Создаю отдельный слой переопределений с комментариями',
          weights: { 'var-you': 3 },
          weightReason: 'Единый источник изменений → архитектура переменных',
        },
        {
          id: 's2q4b',
          text: 'Точечно правлю нужные правила, стараясь не трогать остальное',
          weights: { 'position-sticky': 2, 'display-flex': 1 },
          weightReason: 'Аккуратное точечное воздействие → цепкость и гибкость',
        },
        {
          id: 's2q4c',
          text: 'overflow: hidden на подозрительные блоки и молюсь',
          weights: { 'overflow-hidden': 3 },
          weightReason: 'Контроль хаоса через обрезку',
        },
        {
          id: 's2q4d',
          text: 'Предлагаю переписать с нуля — с модулями и порядком',
          weights: { 'display-grid': 2, 'position-absolute': 1 },
          weightReason: 'Радикальный порядок и выход за рамки чужого кода',
        },
      ],
    },
    {
      id: 's2q5',
      text: 'CSS custom properties для тем оформления — твоё отношение?',
      answers: [
        {
          id: 's2q5a',
          text: 'Лучшее, что случилось с CSS — одна точка изменений для всего',
          weights: { 'var-you': 3 },
          weightReason: 'Прямое воплощение идеи var(--you)',
        },
        {
          id: 's2q5b',
          text: 'Полезно, если команда договорилась о структуре',
          weights: { 'display-grid': 2, 'position-sticky': 1 },
          weightReason: 'Системный подход с необходимостью договорённости',
        },
        {
          id: 's2q5c',
          text: 'Работаю, но предпочитаю Sass-переменные — привычнее',
          weights: { 'display-flex': 2, 'keyframes': 1 },
          weightReason: 'Инструментальный прагматизм + привычка к движению',
        },
        {
          id: 's2q5d',
          text: 'Пространство имён хаотичное — боюсь конфликтов',
          weights: { 'overflow-hidden': 1, 'position-absolute': 2 },
          weightReason: 'Избегание системы → работа снаружи потока переменных',
        },
      ],
    },
  ],
}

export default set2
