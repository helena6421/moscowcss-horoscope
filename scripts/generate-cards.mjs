/**
 * generate-cards.mjs
 *
 * Generates 8 static SVG card images → public/cards/{id}.svg
 *
 * Design goals:
 *  - viewBox 1080×1620 (ratio ≈ 1:1.5) so on a 390px-wide iPhone
 *    the card renders at 390×585px — 69% of screen height, spacious.
 *  - Generous padding and gaps between every section.
 *  - Visually matches the PersonalityCard.vue used on the TV screen:
 *    gradient bg, halftone dots, comic border, character with shadow,
 *    dark property pill, bold name, description, superpower badge, footer.
 *  - Valid XML (verified with xmllint).
 *
 * Run: node scripts/generate-cards.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT    = resolve(__dirname, '..')
const OUT_DIR = resolve(ROOT, 'public', 'cards')

// ── Personality catalogue ─────────────────────────────────────────────────────

const PERSONALITIES = [
  {
    id: 'display-flex',
    cssProperty: 'display: flex',
    name: '«Мастер договориться»',
    description: 'Ты умеешь всех подвинуть, выровнять и оставить немного воздуха. Но когда места не хватает, кто-нибудь всё-таки сожмётся. Желательно не ты.',
    superpower: 'Распределять пространство и примирять непохожие элементы.',
    color: '#22C55E', accent: '#FACC15',
  },
  {
    id: 'display-grid',
    cssProperty: 'display: grid',
    name: '«Архитектор порядка»',
    description: 'У тебя даже творческий хаос разложен по именованным областям. Коллеги видят страницу — ты видишь двенадцать колонок и чьи-то сомнительные жизненные решения.',
    superpower: 'Превращать сложный макет в стройную систему.',
    color: '#3B82F6', accent: '#06B6D4',
  },
  {
    id: 'position-sticky',
    cssProperty: 'position: sticky',
    name: '«Цепкий напарник»',
    description: 'Сначала ты спокойно движешься со всеми. Потом находишь свою позицию и держишь её, пока позволяет контейнер. На тебя можно положиться — если никто не намудрил с overflow.',
    superpower: 'Оставаться на виду в нужный момент.',
    color: '#F59E0B', accent: '#FDE68A',
  },
  {
    id: 'var-you',
    cssProperty: 'var(--you)',
    name: '«Источник истины»',
    description: 'Ты один раз выбираешь цвет — и весь проект переодевается. Любишь, когда всё связано. Особенно когда никто не притащил в эту гармонию #ff0000 прямо в компонент.',
    superpower: 'Менять настроение целой системы из одной точки.',
    color: '#8B5CF6', accent: '#C4B5FD',
  },
  {
    id: 'overflow-hidden',
    cssProperty: 'overflow: hidden',
    name: '«Хранитель границ»',
    description: 'Всё лишнее остаётся за кадром. Карточка аккуратная, углы ровные, вопросов нет. Куда пропала половина выпадающего меню — обсудим после демо.',
    superpower: 'Удерживать визуальный хаос в заданных границах.',
    color: '#0F172A', accent: '#F97316',
  },
  {
    id: 'position-absolute',
    cssProperty: 'position: absolute',
    name: '«Вне потока»',
    description: 'Общий поток? У тебя свой маршрут. Пока остальные договариваются об отступах, ты уже стоишь где надо. Правда, после ресайза тебя снова ищут.',
    superpower: 'Находить своё место относительно правильного предка.',
    color: '#EC4899', accent: '#A855F7',
  },
  {
    id: 'important',
    cssProperty: '!important',
    name: '«Последний аргумент»',
    description: 'Когда спор затягивается, ты достаёшь аргумент с восклицательным знаком. Задача закрыта. Кто будет переопределять это завтра — вопрос завтрашнего тебя.',
    superpower: 'Менять расклад сил в каскаде одним заявлением.',
    color: '#EF4444', accent: '#FB923C',
  },
  {
    id: 'keyframes',
    cssProperty: '@keyframes',
    name: '«Двигатель драмы»',
    description: 'Если кнопка просто появилась, значит, она появилась недостаточно эффектно. У тебя даже загрузка проживает полноценную сюжетную арку.',
    superpower: 'Превращать смену состояний в маленькое представление.',
    color: '#F97316', accent: '#FB923C',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function extractSvg(id) {
  const src = readFileSync(resolve(ROOT, 'src', 'assets', 'characters', `${id}.ts`), 'utf-8')
  const m   = src.match(/=\s*`(<svg[\s\S]+?<\/svg>)`/)
  if (!m) throw new Error(`SVG not found in ${id}.ts`)
  return m[1].trim()
}

/** Escape XML special chars in text content / attribute values */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Word-wrap text into lines ≤ maxChars.
 * Cyrillic characters are approx 0.9× the width of Latin,
 * so we use a slight fudge in the caller.
 */
function wrap(text, maxChars) {
  const words = text.split(' ')
  const lines = []
  let cur = ''
  for (const w of words) {
    const candidate = cur ? `${cur} ${w}` : w
    if (candidate.length <= maxChars) {
      cur = candidate
    } else {
      if (cur) lines.push(cur)
      cur = w
    }
  }
  if (cur) lines.push(cur)
  return lines
}

/** Build SVG <tspan> elements for multi-line centred text */
function tspans(lines, cx, lineHeight) {
  return lines
    .map((l, i) => `<tspan x="${cx}" dy="${i === 0 ? 0 : lineHeight}">${esc(l)}</tspan>`)
    .join('\n      ')
}

/** Prefix all id/href/url(#) references to avoid collisions between embedded SVGs */
function scope(svg, id) {
  const p = id.replace(/[^a-z0-9]/gi, '_')
  return svg
    .replace(/\bid="([^"]+)"/g,              (_, v) => `id="${p}_${v}"`)
    .replace(/url\(#([^)]+)\)/g,             (_, v) => `url(#${p}_${v})`)
    .replace(/\bhref="#([^"]+)"/g,           (_, v) => `href="#${p}_${v}"`)
    .replace(/\bxlink:href="#([^"]+)"/g,     (_, v) => `xlink:href="#${p}_${v}"`)
    .replace(/\bclip-path="url\(#([^)]+)\)"/g, (_, v) => `clip-path="url(#${p}_${v})"`)
}

// ── Card template ─────────────────────────────────────────────────────────────
//
// Canvas: 1080 × 1680  (ratio ~1:1.56 — fits iPhone screen beautifully)
// At 390px device width → rendered as 390 × 606 px (72% of 844px screen height)
//
// Layout (all y values are top edges, except text baselines marked †):
//
//  y=52          ┌──────────────────────────┐
//                │   character illustration  │ 560 × 560
//  y=612         └──────────────────────────┘
//  gap = 32
//  y=644         ┌──────────────────────────┐
//                │   CSS property pill       │ h=100
//  y=744         └──────────────────────────┘
//  gap = 48  (visual space above name)
//  y=840 †        name text baseline           fs=72
//  gap = 52  (visual space below name)
//  y=892         description text start †     fs=44 lh=64
//  ~4 lines → y≈1148
//  gap = 56
//  y=1204        ┌──────────────────────────┐
//                │   superpower badge        │ h=196
//  y=1400        └──────────────────────────┘
//  gap = 56
//  y=1456        ─────── footer bar ─────────  h=164
//  y=1536 †       MoscowCSS · #MoscowCSS
//  y=1620        └──────────────────────────┘
//
// ─────────────────────────────────────────────────────────────────────────────

function makeCard(p) {
  const W = 1080
  const H = 1680
  const PAD = 56        // horizontal padding for pill/badge
  const CX  = W / 2    // horizontal centre

  // ── Character
  const CHAR_SIZE = 560
  const CHAR_X    = (W - CHAR_SIZE) / 2
  const CHAR_Y    = 52

  // ── Property pill
  const PROP_Y    = CHAR_Y + CHAR_SIZE + 32   // 644
  const PROP_H    = 100
  const PROP_FS   = 52

  // ── Name
  const NAME_Y    = PROP_Y + PROP_H + 48 + 72 // 864  (baseline)
  const NAME_FS   = 72

  // ── Description
  const DESC_Y    = NAME_Y + 56               // 920
  const DESC_FS   = 44
  const DESC_LH   = 66
  // max chars ≈ (W - PAD*2) / (DESC_FS * 0.52)
  const DESC_MAX  = Math.floor((W - PAD * 2 - 20) / (DESC_FS * 0.52))
  const descLines = wrap(p.description, DESC_MAX)
  const DESC_H    = descLines.length * DESC_LH

  // ── Superpower badge
  const SP_Y      = DESC_Y + DESC_H + 56      // dynamic, based on desc length
  const SP_H      = 196
  const SP_MAX    = Math.floor((W - PAD * 2 - 80) / (34 * 0.52))
  const spLines   = wrap(p.superpower, SP_MAX)

  // ── Footer bar
  const FOOT_BAR_Y  = SP_Y + SP_H + 56
  const FOOT_BAR_H  = H - FOOT_BAR_Y          // fills to bottom
  const FOOT_TEXT_Y = FOOT_BAR_Y + FOOT_BAR_H / 2 + 16

  // ── Character SVG (inner content of the source SVG)
  const rawSvg    = extractSvg(p.id)
  const innerM    = rawSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>\s*$/)
  const charInner = scope(innerM ? innerM[1] : '', p.id)

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 ${W} ${H}">

  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg_${p.id}" x1="0" y1="0" x2="${W}" y2="${H}"
                    gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="${p.color}"/>
      <stop offset="100%" stop-color="${p.accent}"/>
    </linearGradient>

    <!-- Halftone dots pattern -->
    <pattern id="dots_${p.id}" x="0" y="0" width="26" height="26"
             patternUnits="userSpaceOnUse">
      <circle cx="13" cy="13" r="2" fill="rgba(255,255,255,0.07)"/>
    </pattern>

    <!-- Character drop-shadow filter -->
    <filter id="char_shadow_${p.id}" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="5" dy="8" stdDeviation="12"
                    flood-color="rgba(0,0,0,0.40)"/>
    </filter>
  </defs>

  <!-- ① Background -->
  <rect width="${W}" height="${H}" fill="url(#bg_${p.id})"/>
  <rect width="${W}" height="${H}" fill="url(#dots_${p.id})"/>

  <!-- ② Outer comic border -->
  <rect x="16" y="16" width="${W-32}" height="${H-32}" rx="36"
        fill="none" stroke="#1F1F1F" stroke-width="10"/>
  <!-- Inner highlight ring -->
  <rect x="28" y="28" width="${W-56}" height="${H-56}" rx="28"
        fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2.5"/>

  <!-- ③ Character illustration -->
  <g filter="url(#char_shadow_${p.id})">
    <svg x="${CHAR_X}" y="${CHAR_Y}"
         width="${CHAR_SIZE}" height="${CHAR_SIZE}"
         viewBox="0 0 400 400" overflow="visible">
      ${charInner}
    </svg>
  </g>

  <!-- ④ CSS property pill -->
  <rect x="${PAD}" y="${PROP_Y}" width="${W - PAD*2}" height="${PROP_H}" rx="22"
        fill="#1F1F1F"/>
  <rect x="${PAD+3}" y="${PROP_Y+3}" width="${W - PAD*2 - 6}" height="${PROP_H-6}" rx="19"
        fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
  <text x="${CX}" y="${PROP_Y + PROP_H/2 + PROP_FS*0.37}"
        text-anchor="middle"
        font-family="'Courier New',Courier,monospace"
        font-size="${PROP_FS}" font-weight="bold"
        fill="#FFFFFF" letter-spacing="1">${esc(p.cssProperty)}</text>

  <!-- ⑤ Name -->
  <text x="${CX}" y="${NAME_Y}"
        text-anchor="middle"
        font-family="'Arial Black','Arial Bold',Arial,sans-serif"
        font-size="${NAME_FS}" font-weight="900"
        stroke="#1F1F1F" stroke-width="6" stroke-linejoin="round"
        paint-order="stroke fill"
        fill="#FFFFFF">${esc(p.name)}</text>

  <!-- ⑥ Description -->
  <text x="${CX}" y="${DESC_Y}"
        text-anchor="middle"
        font-family="Arial,Helvetica,sans-serif"
        font-size="${DESC_FS}" line-height="${DESC_LH}"
        fill="rgba(255,255,255,0.95)">
    ${tspans(descLines, CX, DESC_LH)}
  </text>

  <!-- ⑦ Superpower badge -->
  <rect x="${PAD}" y="${SP_Y}" width="${W - PAD*2}" height="${SP_H}" rx="24"
        fill="rgba(255,255,255,0.17)"
        stroke="rgba(255,255,255,0.38)" stroke-width="2.5"/>
  <!-- label -->
  <text x="${CX}" y="${SP_Y + 52}"
        text-anchor="middle"
        font-family="Arial,Helvetica,sans-serif"
        font-size="26" font-weight="900" letter-spacing="5"
        fill="rgba(255,255,255,0.68)">СУПЕРСИЛА</text>
  <!-- superpower text -->
  <text x="${CX}" y="${SP_Y + 96}"
        text-anchor="middle"
        font-family="Arial,Helvetica,sans-serif"
        font-size="34" font-weight="700"
        fill="#FFFFFF">
    ${tspans(spLines, CX, 48)}
  </text>

  <!-- ⑧ Footer bar -->
  <rect x="0" y="${FOOT_BAR_Y}" width="${W}" height="${FOOT_BAR_H}"
        fill="rgba(0,0,0,0.30)"/>
  <!-- Divider line -->
  <line x1="${PAD*2}" y1="${FOOT_BAR_Y + 2}" x2="${W - PAD*2}" y2="${FOOT_BAR_Y + 2}"
        stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
  <text x="${CX}" y="${FOOT_TEXT_Y}"
        text-anchor="middle"
        font-family="Arial,Helvetica,sans-serif"
        font-size="32" font-weight="700" letter-spacing="5"
        fill="rgba(255,255,255,0.80)">MoscowCSS  ·  #MoscowCSS</text>
</svg>`
}

// ── Run ───────────────────────────────────────────────────────────────────────

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

let ok = 0
for (const p of PERSONALITIES) {
  try {
    writeFileSync(resolve(OUT_DIR, `${p.id}.svg`), makeCard(p), 'utf-8')
    console.log(`  ✓  ${p.id}.svg`)
    ok++
  } catch (e) {
    console.error(`  ✗  ${p.id}: ${e.message}`)
  }
}
console.log(`\nGenerated ${ok}/${PERSONALITIES.length} cards → public/cards/\n`)
