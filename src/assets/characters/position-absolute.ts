/**
 * position: absolute — «Вне потока»
 * A figure boldly stepping out of a dashed-border box.
 * Colors: Deep purple #8B5CF6 + hot pink #EC4899
 */
export const positionAbsoluteSvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#F3E8FF" stroke="#1F1F1F" stroke-width="6"/>

  <!-- Halftone dots -->
  <circle cx="60" cy="60" r="4" fill="#8B5CF6" opacity="0.25"/>
  <circle cx="90" cy="40" r="3" fill="#8B5CF6" opacity="0.2"/>
  <circle cx="340" cy="60" r="4" fill="#EC4899" opacity="0.25"/>
  <circle cx="360" cy="100" r="3" fill="#EC4899" opacity="0.2"/>
  <circle cx="50" cy="340" r="4" fill="#8B5CF6" opacity="0.2"/>
  <circle cx="350" cy="340" r="4" fill="#EC4899" opacity="0.2"/>

  <!-- Dashed "normal flow" box (left, inside) -->
  <rect x="40" y="100" width="180" height="220" rx="10" fill="#E9D5FF" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="14,7"/>
  <!-- Flow lines inside box -->
  <line x1="60" y1="130" x2="200" y2="130" stroke="#C4B5FD" stroke-width="2.5" stroke-dasharray="6,4"/>
  <line x1="60" y1="160" x2="180" y2="160" stroke="#C4B5FD" stroke-width="2.5" stroke-dasharray="6,4"/>
  <line x1="60" y1="190" x2="200" y2="190" stroke="#C4B5FD" stroke-width="2.5" stroke-dasharray="6,4"/>

  <!-- Character body (stepping out right) -->
  <!-- Torso -->
  <ellipse cx="240" cy="230" rx="52" ry="68" fill="#8B5CF6" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Left leg (still inside box area) -->
  <path d="M 215 295 Q 205 330 195 355" stroke="#8B5CF6" stroke-width="14" stroke-linecap="round" fill="none"/>
  <!-- Left foot -->
  <ellipse cx="192" cy="360" rx="18" ry="10" fill="#1F1F1F"/>

  <!-- Right leg (outside box, stepping away) -->
  <path d="M 265 295 Q 295 330 320 350" stroke="#EC4899" stroke-width="14" stroke-linecap="round" fill="none"/>
  <!-- Right foot -->
  <ellipse cx="323" cy="356" rx="18" ry="10" fill="#1F1F1F"/>

  <!-- Left arm (gesturing back) -->
  <path d="M 192 220 Q 155 195 120 185" stroke="#8B5CF6" stroke-width="12" stroke-linecap="round" fill="none"/>
  <circle cx="116" cy="184" r="10" fill="#1F1F1F"/>

  <!-- Right arm (raised triumphantly) -->
  <path d="M 288 215 Q 320 185 345 165" stroke="#8B5CF6" stroke-width="12" stroke-linecap="round" fill="none"/>
  <circle cx="348" cy="162" r="10" fill="#1F1F1F"/>

  <!-- Head -->
  <circle cx="240" cy="155" r="52" fill="#EC4899" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Eyes -->
  <circle cx="222" cy="148" r="11" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="258" cy="148" r="11" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="225" cy="150" r="5.5" fill="#1F1F1F"/>
  <circle cx="261" cy="150" r="5.5" fill="#1F1F1F"/>
  <!-- Eye shine -->
  <circle cx="227" cy="147" r="2" fill="white"/>
  <circle cx="263" cy="147" r="2" fill="white"/>

  <!-- Smug eyebrow (right raised) -->
  <path d="M 248 132 Q 258 126 270 130" stroke="#1F1F1F" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- Left eyebrow flat -->
  <path d="M 212 133 Q 222 130 232 133" stroke="#1F1F1F" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- Smug smile -->
  <path d="M 225 168 Q 240 180 256 168" stroke="#1F1F1F" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- Decorative "!" outside the box -->
  <text x="358" y="235" font-size="52" font-family="monospace" font-weight="900" fill="#EC4899" stroke="#1F1F1F" stroke-width="2">!</text>

  <!-- Speech bubble -->
  <ellipse cx="135" cy="85" rx="55" ry="32" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <path d="M 155 110 L 165 130 L 145 112" fill="white" stroke="#1F1F1F" stroke-width="2.5"/>
  <text x="106" y="92" font-size="18" font-family="monospace" font-weight="bold" fill="#8B5CF6">top: 0;</text>
  <text x="100" y="108" font-size="18" font-family="monospace" font-weight="bold" fill="#8B5CF6">left: 0;</text>
</svg>`
