/**
 * position: sticky — «Цепкий напарник»
 * Character gripping the top edge of a panel, hanging on.
 * Colors: Golden yellow #F59E0B + amber #FDE68A
 */
export const positionStickySvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#FFFBEB" stroke="#1F1F1F" stroke-width="6"/>

  <!-- Page scroll lines (showing content flowing) -->
  <rect x="45" y="60" width="310" height="280" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="3"/>
  <!-- Content lines -->
  <line x1="68" y1="120" x2="330" y2="120" stroke="#D97706" stroke-width="2" stroke-dasharray="8,5" opacity="0.5"/>
  <line x1="68" y1="145" x2="290" y2="145" stroke="#D97706" stroke-width="2" stroke-dasharray="8,5" opacity="0.4"/>
  <line x1="68" y1="170" x2="310" y2="170" stroke="#D97706" stroke-width="2" stroke-dasharray="8,5" opacity="0.45"/>
  <line x1="68" y1="270" x2="320" y2="270" stroke="#D97706" stroke-width="2" stroke-dasharray="8,5" opacity="0.3"/>
  <line x1="68" y1="295" x2="275" y2="295" stroke="#D97706" stroke-width="2" stroke-dasharray="8,5" opacity="0.3"/>
  <line x1="68" y1="320" x2="305" y2="320" stroke="#D97706" stroke-width="2" stroke-dasharray="8,5" opacity="0.3"/>

  <!-- Sticky bar (top: 0) -->
  <rect x="45" y="60" width="310" height="58" rx="10" fill="#F59E0B" stroke="#1F1F1F" stroke-width="4"/>
  <!-- sticky label -->
  <text x="80" y="97" font-size="16" font-family="monospace" font-weight="bold" fill="#1F1F1F">position: sticky; top: 0</text>
  <!-- Sticky indicator dot -->
  <circle cx="345" cy="89" r="8" fill="#FDE68A" stroke="#1F1F1F" stroke-width="2.5"/>

  <!-- Character gripping the sticky bar edge -->
  <!-- Hands gripping top of bar -->
  <!-- Left hand -->
  <rect x="118" y="52" width="36" height="28" rx="9" fill="#F59E0B" stroke="#1F1F1F" stroke-width="4"/>
  <!-- Fingers left -->
  <rect x="120" y="44" width="9" height="20" rx="4" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="132" y="42" width="9" height="22" rx="4" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="144" y="44" width="9" height="20" rx="4" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>

  <!-- Right hand -->
  <rect x="246" y="52" width="36" height="28" rx="9" fill="#F59E0B" stroke="#1F1F1F" stroke-width="4"/>
  <!-- Fingers right -->
  <rect x="248" y="44" width="9" height="20" rx="4" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="260" y="42" width="9" height="22" rx="4" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="272" y="44" width="9" height="20" rx="4" fill="#F59E0B" stroke="#1F1F1F" stroke-width="3"/>

  <!-- Arms going down from hands to body -->
  <path d="M 136 78 Q 145 120 155 155" stroke="#F59E0B" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 264 78 Q 258 120 248 155" stroke="#F59E0B" stroke-width="13" stroke-linecap="round" fill="none"/>

  <!-- Body (dangling) -->
  <ellipse cx="200" cy="235" rx="52" ry="68" fill="#F59E0B" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Legs (dangling/swinging) -->
  <path d="M 172 298 Q 155 330 148 365" stroke="#F59E0B" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 228 298 Q 245 328 260 358" stroke="#F59E0B" stroke-width="13" stroke-linecap="round" fill="none"/>
  <ellipse cx="145" cy="368" rx="17" ry="9" fill="#1F1F1F"/>
  <ellipse cx="262" cy="361" rx="17" ry="9" fill="#1F1F1F"/>

  <!-- Head (visible above bar, peeking) -->
  <circle cx="200" cy="162" r="50" fill="#FDE68A" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Eyes (determined, slightly strained) -->
  <circle cx="182" cy="155" r="11" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="218" cy="155" r="11" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="185" cy="157" r="5.5" fill="#1F1F1F"/>
  <circle cx="221" cy="157" r="5.5" fill="#1F1F1F"/>
  <circle cx="187" cy="154" r="2" fill="white"/>
  <circle cx="223" cy="154" r="2" fill="white"/>

  <!-- Strained eyebrows (gripping hard) -->
  <path d="M 172 141 Q 183 135 194 140" stroke="#1F1F1F" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 207 140 Q 217 135 228 141" stroke="#1F1F1F" stroke-width="4" fill="none" stroke-linecap="round"/>

  <!-- Determined smile -->
  <path d="M 185 174 Q 200 183 215 174" stroke="#1F1F1F" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- Sweat drops (effort) -->
  <path d="M 240 145 Q 242 138 246 145 Q 242 150 240 145" fill="#93C5FD" stroke="#1F1F1F" stroke-width="1.5"/>
  <path d="M 252 158 Q 254 151 258 158 Q 254 163 252 158" fill="#93C5FD" stroke="#1F1F1F" stroke-width="1.5"/>
</svg>`
