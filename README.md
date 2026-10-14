# CSS Гороскоп — MoscowCSS

Развлекательный тест о привычках фронтенд-разработчиков для мероприятия MoscowCSS.
Участник отвечает на 5 вопросов и получает свою CSS-личность.

## Стек

- **Vue 3** + Composition API + `<script setup>`
- **TypeScript** (строгий режим)
- **Vite** (сборка + dev-сервер)
- **Vue Router 4** (hash-routing для статического хостинга)
- **qrcode** (генерация QR-кода в браузере)
- **Vitest** (тесты алгоритма)

---

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

---

## Команды

| Команда              | Описание                              |
|----------------------|---------------------------------------|
| `npm run dev`        | Dev-сервер с HMR                      |
| `npm run build`      | TypeScript-проверка + production-сборка |
| `npm run preview`    | Предпросмотр production-сборки        |
| `npm run typecheck`  | Только TypeScript-проверка            |
| `npm test`           | Запуск тестов (один раз)              |
| `npm run test:watch` | Тесты в watch-режиме                  |

---

## Настройка публичного адреса для QR-кодов

QR-код на экране результата ведёт на страницу `/card/:id`, доступную по сканированию.

1. Скопируй `.env.example` в `.env.local`
2. Задай переменную:

```env
VITE_PUBLIC_URL=https://css-horoscope.moscowcss.ru
```

3. Пересобери: `npm run build`

Без этой переменной в **dev-режиме** QR-код будет указывать на localhost — карточку можно открыть на том же устройстве. На стенде QR должен вести на публичный адрес.

---

## Структура проекта

```
src/
├── app/
│   └── router.ts           # Vue Router (hash-routing)
├── views/
│   ├── StartView.vue        # Стартовый экран
│   ├── QuizView.vue         # Экран вопросов
│   ├── ResultView.vue       # Экран результата (стенд)
│   └── CardView.vue         # Публичная карточка (телефон, по QR)
├── components/
│   ├── quiz/
│   │   ├── QuestionCard.vue
│   │   ├── AnswerOption.vue
│   │   └── ProgressBar.vue
│   ├── personality/
│   │   ├── PersonalityCard.vue
│   │   ├── CharacterIllustration.vue
│   │   └── QRCodeBlock.vue
│   └── ui/
│       └── AppButton.vue
├── composables/
│   └── useQuiz.ts           # Управление прохождением, персистенция
├── domain/
│   └── quiz/
│       ├── scoring.ts       # Подсчёт очков, разрешение равенства
│       └── setQueue.ts      # Очередь сетов (1→2→3→4→5→1)
├── data/
│   ├── sets/                # Пять сетов вопросов с весами
│   │   ├── set1.ts          # Архитектор раскладки
│   │   ├── set2.ts          # Повелитель каскада
│   │   ├── set3.ts          # Хранитель порядка
│   │   ├── set4.ts          # Укротитель адаптива
│   │   ├── set5.ts          # Пятничный релиз
│   │   └── index.ts
│   └── personalities/
│       └── index.ts         # 8 CSS-персонажей
├── lib/
│   ├── storage.ts           # localStorage (booth + session)
│   ├── urlBuilder.ts        # Построение публичных ссылок
│   ├── qrCode.ts            # Генерация QR-кода
│   └── imageExport.ts       # Экспорт PNG 1080×1350 через Canvas
├── assets/
│   └── characters/          # SVG-иллюстрации 8 персонажей
├── styles/
│   ├── tokens.css           # Дизайн-токены
│   └── global.css           # Глобальные стили
└── types/
    └── index.ts             # TypeScript-типы
tests/
├── scoring.test.ts          # Тесты алгоритма + достижимость всех персонажей
└── setQueue.test.ts         # Тесты очереди сетов и целостности данных
```

---

## Как работает система весов

Каждый ответ несёт **веса** (неотрицательные целые числа) для одного или нескольких персонажей.

```typescript
{
  id: 's1q1a',
  text: 'Grid с именованными областями — всё по плану',
  weights: { 'display-grid': 3 },
  weightReason: 'Grid-based layout → архитектор порядка',
}
```

После пяти ответов веса суммируются. Побеждает персонаж с максимальным итогом.

### Правило разрешения равенства

При равенстве побеждает персонаж с **меньшим** значением `tieBreakPriority`:

| Приоритет | Персонаж           |
|-----------|--------------------|
| 1         | display: flex      |
| 2         | display: grid      |
| 3         | position: sticky   |
| 4         | var(--you)         |
| 5         | overflow: hidden   |
| 6         | position: absolute |
| 7         | !important         |
| 8         | @keyframes         |

Правило полностью детерминированное: одинаковый сет + одинаковые ответы → всегда один результат.

### Проверка достижимости

Тест `tests/scoring.test.ts` перебирает **все комбинации ответов** в каждом из 5 сетов
(4⁵ = 1024 комбинации на сет) и проверяет, что все 8 персонажей достигаемы.

---

## Как добавить или изменить сет

1. Создай или отредактируй файл `src/data/sets/setN.ts`.
2. В `src/data/sets/index.ts` добавь импорт и включи сет в массив `SETS`.
3. Запусти `npm test` — тесты проверят достижимость всех персонажей.

Каждый ответ должен содержать:
- `id` — уникальный во всём проекте
- `text` — отображаемый текст
- `weights` — карта `PersonalityId → число`
- `weightReason` — пояснение (только в данных, не показывается)

---

## Как добавить персонажа

1. Добавь новый `PersonalityId` в `src/types/index.ts`.
2. Добавь объект `Personality` в `src/data/personalities/index.ts` с уникальным `tieBreakPriority`.
3. Создай SVG-файл в `src/assets/characters/` и зарегистрируй его в `index.ts`.
4. Добавь веса нового персонажа в нужные ответы всех 5 сетов.
5. Проверь достижимость: `npm test`.

---

## Размещение на статическом хостинге

Проект использует **hash-routing** (`/#/quiz`, `/#/card/display-grid`), поэтому работает
на любом статическом хостинге без серверной настройки fallback.

```bash
# Собрать
VITE_PUBLIC_URL=https://your-domain.com npm run build

# Содержимое папки dist/ разместить на хостинге
```

Поддерживаемые хостинги: GitHub Pages, Netlify, Vercel, любой nginx/Apache.

---

## Запуск тестов

```bash
npm test                 # один запуск
npm run test:watch       # watch-режим
npm run test:coverage    # с отчётом покрытия
```

---

## Известные ограничения

- **Иллюстрации персонажей** — авторские SVG, созданные программно. Для замены на ручные иллюстрации замени содержимое файлов в `src/assets/characters/`.
- **Шрифты** — загружаются через Google Fonts. При отсутствии интернета на стенде используются системные sans-serif шрифты.
- **Экспорт PNG на iOS** — Safari ограничивает прямую загрузку Blob. При нажатии «Скачать» изображение открывается в новой вкладке, откуда можно сохранить долгим нажатием.
