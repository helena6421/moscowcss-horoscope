/**
 * SET 1 — «Архитектор раскладки»
 * Тема: Flexbox, Grid, позиционирование и выравнивание.
 *
 * Достижимость персонажей (проверена через scoring.test.ts):
 *   display-flex       ✓ (Q1-B + Q2-A + ...)
 *   display-grid       ✓ (Q1-A + Q2-B + Q5-A + ...)
 *   position-sticky    ✓ (Q4-A + Q3-A + ...)
 *   var-you            ✓ (Q5-C + Q2-D + ...)
 *   overflow-hidden    ✓ (Q3-D + Q4-B + ...)
 *   position-absolute  ✓ (Q1-C + Q2-C + Q4-C + ...)
 *   important          ✓ (Q5-D + Q3-C + Q4-D + ...)
 *   keyframes          ✓ (Q4-C + Q5-B + Q3-B + Q1-D + Q2-D)
 */
import type { QuestionSet } from '@/types'

const set1: QuestionSet = {
  id: 1,
  title: 'Архитектор раскладки',
  questions: [
    {
      id: 's1q1',
      text: 'Как строишь основной layout страницы?',
      answers: [
        {
          id: 's1q1a',
          text: 'Grid с именованными областями — всё по плану',
          weights: { 'display-grid': 3 },
          weightReason: 'Grid-based layout → архитектор порядка',
        },
        {
          id: 's1q1b',
          text: 'Flexbox — привычно, гибко, работает',
          weights: { 'display-flex': 3 },
          weightReason: 'Flex как universal tool → мастер договориться',
        },
        {
          id: 's1q1c',
          text: 'position: absolute для каждого блока — точность прежде всего',
          weights: { 'position-absolute': 3 },
          weightReason: 'Абсолютное позиционирование как первый выбор',
        },
        {
          id: 's1q1d',
          text: 'Вкладываю Flex в Grid в Flex, пока не ляжет',
          weights: { 'display-flex': 2, 'keyframes': 1 },
          weightReason: 'Эклектичный подход с анимационной энергией и гибкостью',
        },
      ],
    },
    {
      id: 's1q2',
      text: 'Как центрируешь элемент на экране?',
      answers: [
        {
          id: 's1q2a',
          text: 'display: flex; justify-content: center; align-items: center',
          weights: { 'display-flex': 3 },
          weightReason: 'Классическое flex-центрирование',
        },
        {
          id: 's1q2b',
          text: 'display: grid; place-items: center',
          weights: { 'display-grid': 3 },
          weightReason: 'Grid-центрирование одной строкой',
        },
        {
          id: 's1q2c',
          text: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)',
          weights: { 'position-absolute': 3 },
          weightReason: 'Абсолютное позиционирование с трансформацией',
        },
        {
          id: 's1q2d',
          text: 'margin: auto с фиксированной шириной и height: 100vh на родителе',
          weights: { 'var-you': 2, 'overflow-hidden': 1 },
          weightReason: 'Структурный подход с явными размерами → осознанная система',
        },
      ],
    },
    {
      id: 's1q3',
      text: 'Что делаешь с блоком на float, который ломает раскладку?',
      answers: [
        {
          id: 's1q3a',
          text: 'clearfix — классика не умирает',
          weights: { 'overflow-hidden': 1, 'important': 1 },
          weightReason: 'clearfix как принудительный хак → overflow-hidden + important',
        },
        {
          id: 's1q3b',
          text: 'Переписываю на Flex или Grid — float должен уйти на покой',
          weights: { 'display-flex': 2, 'display-grid': 2 },
          weightReason: 'Переход на современный layout → оба layout-персонажа',
        },
        {
          id: 's1q3c',
          text: 'position: absolute — пусть живёт в своём пространстве',
          weights: { 'position-absolute': 3 },
          weightReason: 'Выход из потока как решение проблемы потока',
        },
        {
          id: 's1q3d',
          text: 'overflow: hidden на родителе — быстро и эффективно',
          weights: { 'overflow-hidden': 3 },
          weightReason: 'overflow:hidden как BFC-трюк',
        },
      ],
    },
    {
      id: 's1q4',
      text: 'Sticky header — как ты его делаешь?',
      answers: [
        {
          id: 's1q4a',
          text: 'position: sticky; top: 0 — элегантно и без костылей',
          weights: { 'position-sticky': 3 },
          weightReason: 'Прямое использование sticky',
        },
        {
          id: 's1q4b',
          text: 'position: fixed + padding-top на body — надёжно',
          weights: { 'position-absolute': 2, 'overflow-hidden': 1 },
          weightReason: 'fixed + компенсация → абсолютная уверенность, контроль',
        },
        {
          id: 's1q4c',
          text: 'JavaScript-обработчик скролла — хочу точно контролировать момент',
          weights: { 'keyframes': 3 },
          weightReason: 'JS-анимация скролла → любовь к динамике и контролю над движением',
        },
        {
          id: 's1q4d',
          text: 'Скроллится вместе с контентом — всё по дизайну',
          weights: { 'display-flex': 1, 'display-grid': 2 },
          weightReason: 'Следование макету → структурный подход',
        },
      ],
    },
    {
      id: 's1q5',
      text: 'Как задаёшь отступы между элементами раскладки?',
      answers: [
        {
          id: 's1q5a',
          text: 'gap в Grid или Flex — один раз и для всех',
          weights: { 'display-grid': 2, 'display-flex': 1 },
          weightReason: 'gap = системный подход к пространству',
        },
        {
          id: 's1q5b',
          text: 'margin на каждом элементе — точечный контроль',
          weights: { 'position-absolute': 1, 'position-sticky': 1, 'keyframes': 1 },
          weightReason: 'Ручное управление каждым элементом',
        },
        {
          id: 's1q5c',
          text: 'CSS-переменная --spacing и только через неё',
          weights: { 'var-you': 3 },
          weightReason: 'Единая переменная как источник истины',
        },
        {
          id: 's1q5d',
          text: 'margin: -2px пока не совпадёт с макетом',
          weights: { 'important': 3 },
          weightReason: 'Отрицательные маргины с напором → последний аргумент в споре с пикселями',
        },
      ],
    },
  ],
}

export default set1
