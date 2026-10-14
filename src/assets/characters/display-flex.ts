/**
 * display: flex — «Мастер договориться»
 * Stretchy character juggling flex items of different sizes.
 * Colors: Vibrant green #22C55E + yellow #FACC15
 */
export const displayFlexSvg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="200" cy="200" r="192" fill="#F0FDF4" stroke="#1F1F1F" stroke-width="6"/>

  <!-- Flex container row -->
  <rect x="40" y="300" width="320" height="72" rx="12" fill="#DCFCE7" stroke="#22C55E" stroke-width="4"/>
  <!-- Flex items inside container -->
  <rect x="52" y="312" width="60" height="48" rx="8" fill="#22C55E" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="126" y="316" width="90" height="40" rx="8" fill="#FACC15" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="230" y="318" width="45" height="36" rx="8" fill="#22C55E" stroke="#1F1F1F" stroke-width="3"/>
  <rect x="288" y="312" width="62" height="48" rx="8" fill="#86EFAC" stroke="#1F1F1F" stroke-width="3"/>
  <!-- gap arrows -->
  <text x="118" y="344" font-size="11" font-family="sans-serif" fill="#166534" text-anchor="middle">gap</text>
  <text x="222" y="344" font-size="11" font-family="sans-serif" fill="#166534" text-anchor="middle">gap</text>
  <text x="280" y="344" font-size="11" font-family="sans-serif" fill="#166534" text-anchor="middle">gap</text>

  <!-- Body — bendy/stretchy torso -->
  <path d="M 160 255 Q 175 285 200 290 Q 225 285 240 255" stroke="#22C55E" stroke-width="14" fill="#22C55E" stroke-linejoin="round"/>
  <ellipse cx="200" cy="250" rx="50" ry="60" fill="#22C55E" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Stretched left arm holding small item -->
  <path d="M 152 235 Q 105 215 70 205" stroke="#22C55E" stroke-width="13" stroke-linecap="round" fill="none"/>
  <rect x="42" y="190" width="36" height="36" rx="7" fill="#FACC15" stroke="#1F1F1F" stroke-width="3.5"/>
  <text x="60" y="213" font-size="18" text-anchor="middle" font-weight="bold" fill="#1F1F1F">S</text>

  <!-- Stretched right arm holding large item -->
  <path d="M 248 235 Q 295 210 340 198" stroke="#22C55E" stroke-width="13" stroke-linecap="round" fill="none"/>
  <rect x="330" y="178" width="52" height="52" rx="7" fill="#86EFAC" stroke="#1F1F1F" stroke-width="3.5"/>
  <text x="356" y="210" font-size="18" text-anchor="middle" font-weight="bold" fill="#1F1F1F">XL</text>

  <!-- Legs (wide apart, balancing) -->
  <path d="M 172 305 Q 155 332 140 360" stroke="#22C55E" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 228 305 Q 248 332 262 360" stroke="#22C55E" stroke-width="13" stroke-linecap="round" fill="none"/>
  <ellipse cx="137" cy="364" rx="18" ry="9" fill="#1F1F1F"/>
  <ellipse cx="265" cy="364" rx="18" ry="9" fill="#1F1F1F"/>

  <!-- Head -->
  <circle cx="200" cy="170" r="52" fill="#FACC15" stroke="#1F1F1F" stroke-width="5"/>

  <!-- Eyes (friendly, wide open) -->
  <circle cx="182" cy="163" r="12" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="218" cy="163" r="12" fill="white" stroke="#1F1F1F" stroke-width="3"/>
  <circle cx="185" cy="165" r="6" fill="#1F1F1F"/>
  <circle cx="221" cy="165" r="6" fill="#1F1F1F"/>
  <circle cx="187" cy="162" r="2.5" fill="white"/>
  <circle cx="223" cy="162" r="2.5" fill="white"/>

  <!-- Friendly smile -->
  <path d="M 182 185 Q 200 200 218 185" stroke="#1F1F1F" stroke-width="4" fill="none" stroke-linecap="round"/>

  <!-- Eyebrows (raised, cheerful) -->
  <path d="M 172 148 Q 183 142 194 147" stroke="#1F1F1F" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M 207 147 Q 217 142 228 148" stroke="#1F1F1F" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- justify-content label -->
  <text x="200" y="290" font-size="12" font-family="monospace" fill="#166534" text-anchor="middle" font-weight="bold">justify-content</text>

  <!-- Flex arrows left-right -->
  <line x1="65" y1="375" x2="340" y2="375" stroke="#22C55E" stroke-width="3" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#22C55E"/>
    </marker>
  </defs>

  <!-- Spring coil left arm accent -->
  <path d="M 75 218 Q 80 212 85 218 Q 90 224 95 218 Q 100 212 105 218" stroke="#22C55E" stroke-width="2.5" fill="none"/>
</svg>`
