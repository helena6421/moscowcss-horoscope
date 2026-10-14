/**
 * overflow: hidden — «Хранитель границ»
 * Bouncer/guard at the clipped edge of a rectangle.
 * Colors: Dark slate #0F172A + bright coral #F97316
 */
export const overflowHiddenSvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#F8FAFC" stroke="#1F1F1F" stroke-width="6"/>

  <!-- The clipped container -->
  <defs>
    <clipPath id="box-clip">
      <rect x="55" y="95" width="290" height="240" rx="16"/>
    </clipPath>
  </defs>
  <rect x="55" y="95" width="290" height="240" rx="16" fill="#F1F5F9" stroke="#0F172A" stroke-width="5"/>

  <!-- Content trying to escape (clipped) -->
  <g clip-path="url(#box-clip)">
    <!-- Dropdown menu trying to overflow -->
    <rect x="180" y="240" width="140" height="180" rx="8" fill="white" stroke="#94A3B8" stroke-width="2"/>
    <rect x="188" y="250" width="120" height="28" rx="4" fill="#E2E8F0"/>
    <rect x="188" y="285" width="120" height="28" rx="4" fill="#E2E8F0"/>
    <rect x="188" y="320" width="120" height="28" rx="4" fill="#CBD5E1"/>
    <text x="248" y="269" font-size="12" font-family="sans-serif" fill="#475569" text-anchor="middle">Меню 1</text>
    <text x="248" y="304" font-size="12" font-family="sans-serif" fill="#475569" text-anchor="middle">Меню 2</text>
    <text x="248" y="339" font-size="12" font-family="sans-serif" fill="#94A3B8" text-anchor="middle">☠ скрыто</text>
  </g>

  <!-- Overflow indicator (cut line) -->
  <line x1="55" y1="335" x2="345" y2="335" stroke="#F97316" stroke-width="3.5" stroke-dasharray="10,6"/>
  <text x="362" y="340" font-size="13" font-family="monospace" fill="#F97316" font-weight="bold">✂</text>

  <!-- Guard body (standing at right edge, blocking) -->
  <rect x="270" y="180" width="82" height="110" rx="16" fill="#0F172A" stroke="#1F1F1F" stroke-width="5"/>
  <!-- Badge on chest -->
  <rect x="292" y="210" width="38" height="28" rx="5" fill="#F97316" stroke="#1F1F1F" stroke-width="2"/>
  <text x="311" y="229" font-size="11" font-family="monospace" font-weight="bold" fill="white" text-anchor="middle">NO</text>

  <!-- Guard left arm (blocking gesture) -->
  <path d="M 272 215 Q 240 205 218 200" stroke="#0F172A" stroke-width="14" stroke-linecap="round" fill="none"/>
  <!-- Stop-hand palm -->
  <circle cx="212" cy="198" r="18" fill="#0F172A" stroke="#1F1F1F" stroke-width="4"/>
  <!-- Palm lines -->
  <line x1="200" y1="188" x2="200" y2="208" stroke="#F97316" stroke-width="2.5"/>
  <line x1="208" y1="184" x2="208" y2="210" stroke="#F97316" stroke-width="2.5"/>
  <line x1="216" y1="185" x2="216" y2="210" stroke="#F97316" stroke-width="2.5"/>
  <line x1="224" y1="188" x2="224" y2="208" stroke="#F97316" stroke-width="2.5"/>

  <!-- Guard right arm (on hip) -->
  <path d="M 350 220 Q 368 230 372 248" stroke="#0F172A" stroke-width="14" stroke-linecap="round" fill="none"/>
  <circle cx="373" cy="252" r="12" fill="#0F172A" stroke="#1F1F1F" stroke-width="3"/>

  <!-- Guard legs -->
  <path d="M 288 288 Q 280 315 275 345" stroke="#0F172A" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 328 288 Q 338 315 345 345" stroke="#0F172A" stroke-width="13" stroke-linecap="round" fill="none"/>
  <ellipse cx="272" cy="348" rx="18" ry="9" fill="#1F1F1F"/>
  <ellipse cx="348" cy="348" rx="18" ry="9" fill="#1F1F1F"/>

  <!-- Guard head -->
  <circle cx="311" cy="162" r="46" fill="#334155" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Sunglasses -->
  <rect x="285" y="152" width="22" height="16" rx="5" fill="#0F172A" stroke="#F97316" stroke-width="2.5"/>
  <rect x="312" y="152" width="22" height="16" rx="5" fill="#0F172A" stroke="#F97316" stroke-width="2.5"/>
  <line x1="307" y1="160" x2="312" y2="160" stroke="#F97316" stroke-width="2.5"/>
  <line x1="284" y1="160" x2="278" y2="157" stroke="#F97316" stroke-width="2.5"/>
  <line x1="334" y1="160" x2="340" y2="157" stroke="#F97316" stroke-width="2.5"/>

  <!-- Stern mouth line -->
  <path d="M 296 182 L 326 182" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Guard hat -->
  <rect x="278" y="128" width="66" height="24" rx="8" fill="#0F172A" stroke="#1F1F1F" stroke-width="3.5"/>
  <rect x="270" y="148" width="82" height="12" rx="6" fill="#0F172A" stroke="#1F1F1F" stroke-width="3"/>
  <!-- Hat badge -->
  <rect x="300" y="130" width="22" height="16" rx="3" fill="#F97316" stroke="#1F1F1F" stroke-width="1.5"/>
  <text x="311" y="142" font-size="8" font-family="monospace" fill="white" text-anchor="middle" font-weight="bold">OH</text>

  <!-- Small "overflow: hidden" label -->
  <rect x="58" y="348" width="182" height="26" rx="6" fill="#0F172A"/>
  <text x="64" y="366" font-size="13" font-family="monospace" fill="#F97316" font-weight="bold">overflow: hidden</text>
</svg>`
