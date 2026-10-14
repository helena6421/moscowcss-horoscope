/**
 * SET 5 — «Пятничный релиз»
 * Тема: CSS-привычки, исправления в последний момент, чужая вёрстка.
 *
 * Достижимость персонажей:
 *   display-flex       ✓ (Q2-A + Q4-B + ...)
 *   display-grid       ✓ (Q2-B + Q3-D + Q5-A + ...)
 *   position-sticky    ✓ (Q1-D + Q3-B + Q4-B + ...)
 *   var-you            ✓ (Q3-A + Q5-A + Q1-B + ...)
 *   overflow-hidden    ✓ (Q1-D + Q3-B + Q4-D + Q5-D + ...)
 *   position-absolute  ✓ (Q1-C + Q2-D + Q4-C + ...)
 *   important          ✓ (Q1-A + Q3-C + Q5-B + ...)
 *   keyframes          ✓ (Q4-A + Q2-C + Q3-D + Q5-C + Q1-A)
 */
import type { QuestionSet } from '@/types'

const set5: QuestionSet = {
  id: 5,
  title: 'Пятничный релиз',
  questions: [
    {
      id: 's5q1',
      text: 'Пятница, 17:58, релиз через два часа. Кнопка сдвинулась на 2px. Твои действия?',
      answers: [
        {
          id: 's5q1a',
          text: 'margin: -2px и в прод — на таком расстоянии никто не заметит',
          weights: { 'important': 3, 'keyframes': 1 },
          weightReason: 'Быстрый принудительный фикс без разбора причины',
        },
        {
          id: 's5q1b',
          text: 'Нахожу причину и фикшу правильно — даже в пятницу',
          weights: { 'var-you': 2, 'display-grid': 1 },
          weightReason: 'Поиск источника истины даже под давлением',
        },
        {
          id: 's5q1c',
          text: 'position: absolute — поставлю пиксель в пиксель',
          weights: { 'position-absolute': 3 },
          weightReason: 'Абсолютная точность вне потока',
        },
        {
          id: 's5q1d',
          text: 'Откладываю на понедельник — 2px подождут',
          weights: { 'position-sticky': 1, 'overflow-hidden': 2 },
          weightReason: 'Контролируемое игнорирование мелочей',
        },
      ],
    },
    {
      id: 's5q2',
      text: 'Flexbox или Grid для этого конкретного компонента?',
      answers: [
        {
          id: 's5q2a',
          text: 'Flex — мне нужна одна ось, этого хватает',
          weights: { 'display-flex': 3 },
          weightReason: 'Осознанный выбор Flex для одномерных задач',
        },
        {
          id: 's5q2b',
          text: 'Grid — здесь нужна двумерная структура',
          weights: { 'display-grid': 3 },
          weightReason: 'Осознанный выбор Grid для двумерных задач',
        },
        {
          id: 's5q2c',
          text: 'Всегда Flex — зачем думать, если работает',
          weights: { 'display-flex': 2, 'keyframes': 1 },
          weightReason: 'Привычка без рефлексии + динамизм',
        },
        {
          id: 's5q2d',
          text: 'position: absolute — зачем компромиссы',
          weights: { 'position-absolute': 3 },
          weightReason: 'Радикальный отказ от потока в пользу абсолютного контроля',
        },
      ],
    },
    {
      id: 's5q3',
      text: 'Видишь чужой CSS без документации и тестов. Реакция?',
      answers: [
        {
          id: 's5q3a',
          text: 'Читаю, понимаю архитектуру, потом правлю аккуратно',
          weights: { 'var-you': 3 },
          weightReason: 'Поиск логики и источника истины в чужом коде',
        },
        {
          id: 's5q3b',
          text: 'Добавляю слой поверх — не ломаю то, что работает',
          weights: { 'position-sticky': 2, 'overflow-hidden': 1 },
          weightReason: 'Цепкость + контролируемое добавление',
        },
        {
          id: 's5q3c',
          text: '!important везде — разберусь потом, когда всё заработает',
          weights: { 'important': 3 },
          weightReason: 'Принудительное переопределение как первый шаг',
        },
        {
          id: 's5q3d',
          text: 'Предлагаю переписать на современном стеке',
          weights: { 'display-grid': 2, 'keyframes': 1 },
          weightReason: 'Архитектурная амбиция + желание движения',
        },
      ],
    },
    {
      id: 's5q4',
      text: 'Твои CSS-анимации — это...',
      answers: [
        {
          id: 's5q4a',
          text: '@keyframes с несколькими фазами, easing и задержками',
          weights: { 'keyframes': 3 },
          weightReason: 'Прямой путь к персонажу',
        },
        {
          id: 's5q4b',
          text: 'transition: all 0.3s ease — быстро, читаемо, хватает',
          weights: { 'display-flex': 2, 'position-sticky': 1 },
          weightReason: 'Гибкость и простота',
        },
        {
          id: 's5q4c',
          text: 'Web Animations API — точность и программный контроль',
          weights: { 'position-absolute': 2, 'var-you': 1 },
          weightReason: 'Абсолютный программный контроль + системность',
        },
        {
          id: 's5q4d',
          text: 'Анимации? Главное чтобы работало без них',
          weights: { 'overflow-hidden': 2, 'display-grid': 1 },
          weightReason: 'Функциональность важнее театра',
        },
      ],
    },
    {
      id: 's5q5',
      text: '!important — инструмент или технический долг?',
      answers: [
        {
          id: 's5q5a',
          text: 'Почти всегда долг — лучше разобраться со специфичностью',
          weights: { 'var-you': 2, 'display-grid': 2 },
          weightReason: 'Системный взгляд на корневую причину',
        },
        {
          id: 's5q5b',
          text: 'Инструмент в умелых руках — если знаешь, зачем ставишь',
          weights: { 'important': 3 },
          weightReason: 'Осознанное использование',
        },
        {
          id: 's5q5c',
          text: 'Иногда единственный выход в чужом или сгенерированном коде',
          weights: { 'keyframes': 2, 'position-sticky': 1 },
          weightReason: 'Прагматизм в экстремальных ситуациях',
        },
        {
          id: 's5q5d',
          text: 'Пишу специфичность через data-атрибуты — мне вообще не нужен',
          weights: { 'overflow-hidden': 2, 'position-absolute': 1 },
          weightReason: 'Обход инструмента через альтернативную власть',
        },
      ],
    },
  ],
}

export default set5
