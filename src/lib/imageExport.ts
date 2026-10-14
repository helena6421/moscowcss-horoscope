/**
 * PNG card export — 1080 × 1350 px.
 *
 * Draws the card entirely on a Canvas using the 2D API so the output is
 * independent of DOM rendering, fonts, scroll position and browser zoom.
 *
 * The character SVG is rendered by converting it to an HTMLImageElement via
 * a Blob URL. The same SVG string is used by the CharacterIllustration
 * components, so the card and the on-screen view stay in sync.
 *
 * No external libs required — pure Canvas API.
 */
import type { Personality } from '@/types'
import { getSvgString } from '@/assets/characters'

const W = 1080
const H = 1350

/** Wrap text into lines not exceeding maxWidth, returning an array of strings */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current)
      current = word
    } else {
      current = test
    }
  }
  if (current) lines.push(current)
  return lines
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

async function loadSvgAsImage(svgString: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = reject
    img.src = url
  })
}

/** Draw halftone dots pattern for comic feel */
function drawHalftone(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string,
) {
  ctx.save()
  ctx.globalAlpha = 0.07
  ctx.fillStyle = color
  const step = 28
  const r = 5
  for (let cx = x; cx < x + w; cx += step) {
    for (let cy = y; cy < y + h; cy += step) {
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  ctx.restore()
}

export async function exportPersonalityCard(personality: Personality): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // ── Background gradient ──────────────────────────────────────────────────
  const grad = ctx.createLinearGradient(0, 0, W, H)
  grad.addColorStop(0, personality.color)
  grad.addColorStop(1, personality.accentColor)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  // ── Halftone texture ─────────────────────────────────────────────────────
  drawHalftone(ctx, 0, 0, W, H, '#000000')

  // ── Comic border ─────────────────────────────────────────────────────────
  const borderPad = 24
  ctx.strokeStyle = '#1F1F1F'
  ctx.lineWidth = 10
  drawRoundedRect(ctx, borderPad, borderPad, W - borderPad * 2, H - borderPad * 2, 32)
  ctx.stroke()

  // ── Character illustration ───────────────────────────────────────────────
  const svgStr = getSvgString(personality.id)
  const charImg = await loadSvgAsImage(svgStr)
  const charSize = 620
  const charX = (W - charSize) / 2
  const charY = 60
  ctx.drawImage(charImg, charX, charY, charSize, charSize)

  // ── CSS property tag ─────────────────────────────────────────────────────
  const tagY = charY + charSize + 20
  ctx.save()
  ctx.fillStyle = '#1F1F1F'
  drawRoundedRect(ctx, 60, tagY, W - 120, 80, 16)
  ctx.fill()
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 44px monospace'
  ctx.textAlign = 'center'
  ctx.fillText(personality.cssProperty, W / 2, tagY + 54)
  ctx.restore()

  // ── Name ─────────────────────────────────────────────────────────────────
  const nameY = tagY + 110
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 62px sans-serif'
  ctx.textAlign = 'center'
  ctx.strokeStyle = '#1F1F1F'
  ctx.lineWidth = 6
  ctx.strokeText(personality.name, W / 2, nameY)
  ctx.fillText(personality.name, W / 2, nameY)

  // ── Description ──────────────────────────────────────────────────────────
  const descY = nameY + 50
  ctx.font = '32px sans-serif'
  ctx.fillStyle = '#FFFFFF'
  ctx.lineWidth = 3
  const descLines = wrapText(ctx, personality.description, W - 140)
  let lineOffset = 0
  for (const line of descLines.slice(0, 5)) {
    ctx.strokeStyle = '#1F1F1F'
    ctx.strokeText(line, W / 2, descY + lineOffset)
    ctx.fillText(line, W / 2, descY + lineOffset)
    lineOffset += 42
  }

  // ── Superpower badge ──────────────────────────────────────────────────────
  const spY = descY + lineOffset + 24
  ctx.save()
  ctx.fillStyle = 'rgba(255,255,255,0.25)'
  ctx.strokeStyle = '#FFFFFF'
  ctx.lineWidth = 4
  drawRoundedRect(ctx, 60, spY, W - 120, 120, 20)
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 26px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('⚡ СУПЕРСИЛА', W / 2, spY + 38)

  ctx.font = '28px sans-serif'
  const spLines = wrapText(ctx, personality.superpower, W - 180)
  for (let i = 0; i < Math.min(spLines.length, 2); i++) {
    ctx.fillText(spLines[i], W / 2, spY + 76 + i * 36)
  }
  ctx.restore()

  // ── Footer ────────────────────────────────────────────────────────────────
  const footerY = H - 80
  ctx.fillStyle = 'rgba(0,0,0,0.35)'
  ctx.fillRect(0, footerY - 20, W, 100)

  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 34px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('MoscowCSS  ·  #MoscowCSS', W / 2, footerY + 34)

  // ── Export ────────────────────────────────────────────────────────────────
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob)
        else reject(new Error('canvas.toBlob returned null'))
      },
      'image/png',
    )
  })
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
