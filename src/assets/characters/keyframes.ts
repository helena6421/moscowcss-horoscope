/**
 * @keyframes — «Двигатель драмы»
 * Character shown in multiple overlapping ghosted poses with motion lines.
 * Colors: Bright coral #F97316 + electric blue #3B82F6
 */
export const keyframesSvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#FFF7ED" stroke="#1F1F1F" stroke-width="6"/>

  <!-- Timeline bar at bottom -->
  <rect x="40" y="348" width="320" height="20" rx="10" fill="#F97316" stroke="#1F1F1F" stroke-width="3"/>
  <!-- Timeline keyframe markers -->
  <circle cx="40" cy="358" r="10" fill="#1F1F1F" stroke="#F97316" stroke-width="3"/>
  <circle cx="120" cy="358" r="10" fill="#1F1F1F" stroke="#F97316" stroke-width="3"/>
  <circle cx="200" cy="358" r="10" fill="#1F1F1F" stroke="#F97316" stroke-width="3"/>
  <circle cx="280" cy="358" r="10" fill="#1F1F1F" stroke="#F97316" stroke-width="3"/>
  <circle cx="360" cy="358" r="10" fill="#1F1F1F" stroke="#F97316" stroke-width="3"/>
  <!-- 0%, 25%, 50%, 75%, 100% -->
  <text x="40" y="345" font-size="10" font-family="monospace" fill="#9A3412" text-anchor="middle">0%</text>
  <text x="120" y="345" font-size="10" font-family="monospace" fill="#9A3412" text-anchor="middle">25%</text>
  <text x="200" y="345" font-size="10" font-family="monospace" fill="#9A3412" text-anchor="middle">50%</text>
  <text x="280" y="345" font-size="10" font-family="monospace" fill="#9A3412" text-anchor="middle">75%</text>
  <text x="360" y="345" font-size="10" font-family="monospace" fill="#9A3412" text-anchor="middle">100%</text>

  <!-- Ghost pose 1 — leftmost, small/faint (0%) -->
  <g opacity="0.2" transform="translate(62,80) scale(0.55)">
    <circle cx="100" cy="80" r="42" fill="#F97316" stroke="#1F1F1F" stroke-width="5"/>
    <ellipse cx="100" cy="200" rx="42" ry="55" fill="#F97316" stroke="#1F1F1F" stroke-width="5"/>
    <path d="M 65 175 Q 30 155 15 140" stroke="#F97316" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 135 175 Q 170 155 185 140" stroke="#F97316" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 75 250 Q 60 280 55 310" stroke="#F97316" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 125 250 Q 140 280 145 310" stroke="#F97316" stroke-width="12" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Ghost pose 2 — medium left, more opaque (25%) -->
  <g opacity="0.35" transform="translate(100,55) scale(0.7)">
    <circle cx="100" cy="80" r="42" fill="#FB923C" stroke="#1F1F1F" stroke-width="4"/>
    <ellipse cx="100" cy="195" rx="42" ry="55" fill="#FB923C" stroke="#1F1F1F" stroke-width="4"/>
    <path d="M 65 170 Q 25 130 10 100" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M 135 170 Q 175 190 185 210" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M 75 245 Q 55 275 45 305" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M 125 245 Q 150 278 155 312" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Main pose — full color, center (50%) -->
  <!-- Motion lines -->
  <line x1="80" y1="165" x2="52" y2="145" stroke="#F97316" stroke-width="3" opacity="0.7"/>
  <line x1="85" y1="180" x2="52" y2="168" stroke="#F97316" stroke-width="2.5" opacity="0.6"/>
  <line x1="82" y1="195" x2="50" y2="190" stroke="#F97316" stroke-width="2" opacity="0.5"/>
  <line x1="320" y1="165" x2="348" y2="145" stroke="#3B82F6" stroke-width="3" opacity="0.7"/>
  <line x1="315" y1="180" x2="348" y2="168" stroke="#3B82F6" stroke-width="2.5" opacity="0.6"/>
  <line x1="318" y1="195" x2="350" y2="190" stroke="#3B82F6" stroke-width="2" opacity="0.5"/>

  <!-- Body -->
  <ellipse cx="200" cy="250" rx="52" ry="68" fill="#F97316" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Left arm raised dramatically up-left -->
  <path d="M 150 228 Q 105 185 78 155" stroke="#F97316" stroke-width="13" stroke-linecap="round" fill="none"/>
  <circle cx="74" cy="151" r="12" fill="#1F1F1F"/>

  <!-- Right arm sweeping down-right -->
  <path d="M 250 232 Q 295 268 322 290" stroke="#F97316" stroke-width="13" stroke-linecap="round" fill="none"/>
  <circle cx="326" cy="293" r="12" fill="#1F1F1F"/>

  <!-- Legs (dynamic, mid-jump) -->
  <path d="M 172 312 Q 148 338 132 368" stroke="#F97316" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 228 312 Q 265 335 280 368" stroke="#F97316" stroke-width="13" stroke-linecap="round" fill="none"/>
  <ellipse cx="129" cy="371" rx="17" ry="9" fill="#1F1F1F"/>
  <ellipse cx="283" cy="371" rx="17" ry="9" fill="#1F1F1F"/>

  <!-- Head -->
  <circle cx="200" cy="178" r="52" fill="#3B82F6" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Eyes (excited, wide) -->
  <circle cx="182" cy="170" r="13" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="218" cy="170" r="13" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="186" cy="173" r="7" fill="#1F1F1F"/>
  <circle cx="222" cy="173" r="7" fill="#1F1F1F"/>
  <circle cx="188" cy="169" r="2.5" fill="white"/>
  <circle cx="224" cy="169" r="2.5" fill="white"/>

  <!-- Excited eyebrows -->
  <path d="M 170 153 Q 182 144 194 151" stroke="#1F1F1F" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M 207 151 Q 218 144 230 153" stroke="#1F1F1F" stroke-width="4.5" fill="none" stroke-linecap="round"/>

  <!-- Big excited grin -->
  <path d="M 178 192 Q 200 212 222 192" stroke="#1F1F1F" stroke-width="4" fill="white" stroke-linecap="round"/>

  <!-- Ghost pose 4 — right side (75%) -->
  <g opacity="0.35" transform="translate(220,55) scale(0.7)">
    <circle cx="100" cy="80" r="42" fill="#FB923C" stroke="#1F1F1F" stroke-width="4"/>
    <ellipse cx="100" cy="195" rx="42" ry="55" fill="#FB923C" stroke="#1F1F1F" stroke-width="4"/>
    <path d="M 65 170 Q 25 195 10 215" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M 135 170 Q 175 130 190 100" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M 75 245 Q 55 275 45 305" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M 125 245 Q 155 278 160 310" stroke="#FB923C" stroke-width="11" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Stars/sparkles -->
  <text x="55" y="95" font-size="22" fill="#F97316">✦</text>
  <text x="328" y="128" font-size="18" fill="#3B82F6">✦</text>
  <text x="72" y="300" font-size="14" fill="#FB923C">✦</text>
  <text x="345" y="310" font-size="14" fill="#F97316">✦</text>
</svg>`
