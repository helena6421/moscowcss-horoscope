/**
 * var(--you) — «Источник истины»
 * Elegant conductor surrounded by color swatches and CSS variables.
 * Colors: Deep violet #8B5CF6 + lavender #C4B5FD
 */
export const varYouSvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#F5F3FF" stroke="#1F1F1F" stroke-width="6"/>

  <!-- Orbiting color swatches -->
  <circle cx="88" cy="112" r="22" fill="#EF4444" stroke="#1F1F1F" stroke-width="3.5"/>
  <circle cx="312" cy="112" r="22" fill="#3B82F6" stroke="#1F1F1F" stroke-width="3.5"/>
  <circle cx="60" cy="218" r="18" fill="#22C55E" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="340" cy="218" r="18" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="100" cy="320" r="15" fill="#EC4899" stroke="#1F1F1F" stroke-width="2.5"/>
  <circle cx="300" cy="320" r="15" fill="#06B6D4" stroke="#1F1F1F" stroke-width="2.5"/>
  <circle cx="200" cy="50" r="14" fill="#8B5CF6" stroke="#1F1F1F" stroke-width="2.5"/>

  <!-- Connecting lines (conducting) -->
  <line x1="200" y1="200" x2="88" y2="112" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
  <line x1="200" y1="200" x2="312" y2="112" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
  <line x1="200" y1="200" x2="60" y2="218" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.4"/>
  <line x1="200" y1="200" x2="340" y2="218" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.4"/>
  <line x1="200" y1="200" x2="200" y2="50" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.4"/>

  <!-- Variable labels on swatches -->
  <text x="88" y="117" font-size="10" font-family="monospace" fill="white" text-anchor="middle" font-weight="bold">--red</text>
  <text x="312" y="117" font-size="10" font-family="monospace" fill="white" text-anchor="middle" font-weight="bold">--blue</text>
  <text x="60" y="223" font-size="9" font-family="monospace" fill="white" text-anchor="middle" font-weight="bold">--grn</text>
  <text x="340" y="223" font-size="9" font-family="monospace" fill="white" text-anchor="middle" font-weight="bold">--ylw</text>

  <!-- Body (elegant, conductor stance) -->
  <ellipse cx="200" cy="268" rx="48" ry="62" fill="#8B5CF6" stroke="#1F1F1F" stroke-width="5"/>
  <!-- Conductor jacket detail -->
  <path d="M 175 248 Q 200 268 225 248" fill="#6D28D9" stroke="#1F1F1F" stroke-width="2"/>
  <path d="M 193 248 L 207 248 L 205 295 L 195 295 Z" fill="#C4B5FD" stroke="#1F1F1F" stroke-width="1.5"/>

  <!-- Baton in right hand -->
  <path d="M 246 250 Q 295 215 325 185" stroke="#FDE68A" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="327" cy="183" r="10" fill="#FDE68A" stroke="#1F1F1F" stroke-width="3"/>

  <!-- Right arm -->
  <path d="M 245 255 Q 270 238 295 220" stroke="#8B5CF6" stroke-width="13" stroke-linecap="round" fill="none"/>

  <!-- Left arm (gesturing) -->
  <path d="M 155 258 Q 118 242 88 235" stroke="#8B5CF6" stroke-width="13" stroke-linecap="round" fill="none"/>
  <circle cx="84" cy="233" r="10" fill="#1F1F1F"/>

  <!-- Legs -->
  <path d="M 172 326 Q 160 352 150 378" stroke="#8B5CF6" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 228 326 Q 242 352 252 378" stroke="#8B5CF6" stroke-width="13" stroke-linecap="round" fill="none"/>
  <ellipse cx="147" cy="381" rx="18" ry="9" fill="#1F1F1F"/>
  <ellipse cx="255" cy="381" rx="18" ry="9" fill="#1F1F1F"/>

  <!-- Head -->
  <circle cx="200" cy="200" r="50" fill="#C4B5FD" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Eyes (wise, serene) -->
  <circle cx="183" cy="194" r="11" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="217" cy="194" r="11" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="186" cy="196" r="5.5" fill="#4C1D95"/>
  <circle cx="220" cy="196" r="5.5" fill="#4C1D95"/>
  <circle cx="188" cy="193" r="2" fill="white"/>
  <circle cx="222" cy="193" r="2" fill="white"/>

  <!-- Elegant eyebrows (arched) -->
  <path d="M 173 180 Q 183 174 194 179" stroke="#4C1D95" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 207 179 Q 217 174 228 180" stroke="#4C1D95" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Knowing smile -->
  <path d="M 186 213 Q 200 223 214 213" stroke="#4C1D95" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- Crown/conductor hat -->
  <path d="M 155 185 Q 200 158 245 185" fill="#6D28D9" stroke="#1F1F1F" stroke-width="3.5"/>
  <rect x="148" y="183" width="104" height="14" rx="7" fill="#6D28D9" stroke="#1F1F1F" stroke-width="3"/>
  <!-- Crown points -->
  <path d="M 155 185 L 148 162 L 168 178 L 200 158 L 232 178 L 252 162 L 245 185 Z" fill="#8B5CF6" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="200" cy="158" r="5" fill="#FDE68A" stroke="#1F1F1F" stroke-width="2"/>
  <circle cx="168" cy="178" r="4" fill="#FDE68A" stroke="#1F1F1F" stroke-width="1.5"/>
  <circle cx="232" cy="178" r="4" fill="#FDE68A" stroke="#1F1F1F" stroke-width="1.5"/>
</svg>`
