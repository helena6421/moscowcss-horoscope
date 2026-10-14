/**
 * Character SVG registry.
 *
 * Each character is a unique comic-style SVG illustration.
 * The registry maps PersonalityId → SVG string so components can both
 * render inline SVG and pass it to the canvas exporter.
 */
import type { PersonalityId } from '@/types'
import { positionAbsoluteSvg } from './position-absolute'
import { displayGridSvg } from './display-grid'
import { displayFlexSvg } from './display-flex'
import { importantSvg } from './important'
import { positionStickySvg } from './position-sticky'
import { varYouSvg } from './var-you'
import { overflowHiddenSvg } from './overflow-hidden'
import { keyframesSvg } from './keyframes'

export const CHARACTER_SVGS: Record<PersonalityId, string> = {
  'position-absolute': positionAbsoluteSvg,
  'display-grid': displayGridSvg,
  'display-flex': displayFlexSvg,
  'important': importantSvg,
  'position-sticky': positionStickySvg,
  'var-you': varYouSvg,
  'overflow-hidden': overflowHiddenSvg,
  'keyframes': keyframesSvg,
}

export function getSvgString(id: PersonalityId): string {
  return CHARACTER_SVGS[id]
}
