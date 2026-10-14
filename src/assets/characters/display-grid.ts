/**
 * display: grid — «Архитектор порядка»
 * Precise architect holding a blueprint with a CSS Grid overlay.
 * Colors: Deep blue #3B82F6 + cyan #06B6D4
 */
export const displayGridSvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#EFF6FF" stroke="#1F1F1F" stroke-width="6"/>

  <!-- Blueprint paper held by character -->
  <rect x="100" y="160" width="190" height="145" rx="6" fill="#DBEAFE" stroke="#1F1F1F" stroke-width="4" transform="rotate(-8 195 232)"/>
  <!-- Grid lines on blueprint -->
  <g stroke="#3B82F6" stroke-width="1.5" opacity="0.8" transform="rotate(-8 195 232)">
    <line x1="100" y1="185" x2="290" y2="185"/>
    <line x1="100" y1="210" x2="290" y2="210"/>
    <line x1="100" y1="235" x2="290" y2="235"/>
    <line x1="100" y1="260" x2="290" y2="260"/>
    <line x1="100" y1="285" x2="290" y2="285"/>
    <line x1="130" y1="160" x2="130" y2="305"/>
    <line x1="163" y1="160" x2="163" y2="305"/>
    <line x1="196" y1="160" x2="196" y2="305"/>
    <line x1="229" y1="160" x2="229" y2="305"/>
    <line x1="262" y1="160" x2="262" y2="305"/>
  </g>
  <!-- Highlighted grid cells on blueprint -->
  <rect x="103" y="163" width="59" height="45" rx="2" fill="#3B82F6" opacity="0.35" transform="rotate(-8 195 232)"/>
  <rect x="165" y="210" width="93" height="47" rx="2" fill="#06B6D4" opacity="0.35" transform="rotate(-8 195 232)"/>
  <rect x="103" y="258" width="60" height="45" rx="2" fill="#3B82F6" opacity="0.25" transform="rotate(-8 195 232)"/>

  <!-- Ruler accent -->
  <rect x="295" y="145" width="22" height="155" rx="4" fill="#FEF08A" stroke="#1F1F1F" stroke-width="3"/>
  <line x1="295" y1="165" x2="317" y2="165" stroke="#1F1F1F" stroke-width="1.5"/>
  <line x1="295" y1="185" x2="317" y2="185" stroke="#1F1F1F" stroke-width="1.5"/>
  <line x1="295" y1="205" x2="317" y2="205" stroke="#1F1F1F" stroke-width="1.5"/>
  <line x1="295" y1="225" x2="317" y2="225" stroke="#1F1F1F" stroke-width="1.5"/>
  <line x1="295" y1="245" x2="317" y2="245" stroke="#1F1F1F" stroke-width="1.5"/>
  <line x1="295" y1="265" x2="317" y2="265" stroke="#1F1F1F" stroke-width="1.5"/>
  <line x1="295" y1="285" x2="317" y2="285" stroke="#1F1F1F" stroke-width="1.5"/>

  <!-- Body (torso, square-ish for order) -->
  <rect x="152" y="240" width="100" height="100" rx="14" fill="#3B82F6" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Legs -->
  <path d="M 168 338 L 162 375" stroke="#3B82F6" stroke-width="14" stroke-linecap="round"/>
  <path d="M 235 338 L 240 375" stroke="#3B82F6" stroke-width="14" stroke-linecap="round"/>
  <ellipse cx="160" cy="378" rx="18" ry="9" fill="#1F1F1F"/>
  <ellipse cx="242" cy="378" rx="18" ry="9" fill="#1F1F1F"/>

  <!-- Right arm holding blueprint -->
  <path d="M 250 265 Q 280 255 295 245" stroke="#3B82F6" stroke-width="12" stroke-linecap="round" fill="none"/>

  <!-- Left arm (pointing at blueprint) -->
  <path d="M 154 268 Q 125 248 105 235" stroke="#3B82F6" stroke-width="12" stroke-linecap="round" fill="none"/>
  <!-- Pointing finger -->
  <circle cx="101" cy="233" r="9" fill="#1F1F1F"/>

  <!-- Head -->
  <circle cx="202" cy="195" r="50" fill="#06B6D4" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Glasses -->
  <rect x="176" y="183" width="22" height="17" rx="5" fill="none" stroke="#1F1F1F" stroke-width="3.5"/>
  <rect x="204" y="183" width="22" height="17" rx="5" fill="none" stroke="#1F1F1F" stroke-width="3.5"/>
  <line x1="198" y1="191" x2="204" y2="191" stroke="#1F1F1F" stroke-width="3"/>
  <line x1="175" y1="191" x2="168" y2="188" stroke="#1F1F1F" stroke-width="3"/>
  <line x1="226" y1="191" x2="234" y2="188" stroke="#1F1F1F" stroke-width="3"/>

  <!-- Eyes behind glasses -->
  <circle cx="187" cy="191" r="4" fill="#1F1F1F"/>
  <circle cx="215" cy="191" r="4" fill="#1F1F1F"/>
  <circle cx="188" cy="189" r="1.5" fill="white"/>
  <circle cx="216" cy="189" r="1.5" fill="white"/>

  <!-- Eyebrows (raised / focused) -->
  <path d="M 175 179 Q 187 173 199 177" stroke="#1F1F1F" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 204 177 Q 215 173 228 179" stroke="#1F1F1F" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Determined mouth -->
  <path d="M 190 213 L 215 213" stroke="#1F1F1F" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Hard hat accent -->
  <path d="M 155 180 Q 202 148 250 180" stroke="#1F1F1F" stroke-width="4" fill="#FDE68A"/>
  <rect x="148" y="178" width="108" height="12" rx="6" fill="#FDE68A" stroke="#1F1F1F" stroke-width="3"/>

  <!-- Floating grid squares accent -->
  <rect x="50" y="65" width="32" height="32" rx="5" fill="#3B82F6" stroke="#1F1F1F" stroke-width="3" transform="rotate(12 66 81)"/>
  <rect x="315" y="80" width="24" height="24" rx="4" fill="#06B6D4" stroke="#1F1F1F" stroke-width="2.5" transform="rotate(-15 327 92)"/>
  <rect x="55" y="300" width="20" height="20" rx="3" fill="#3B82F6" stroke="#1F1F1F" stroke-width="2" transform="rotate(20 65 310)"/>
</svg>`
