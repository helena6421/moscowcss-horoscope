import type { QuestionSet } from '@/types'
import set1 from './set1'
import set2 from './set2'
import set3 from './set3'
import set4 from './set4'
import set5 from './set5'

/** All 5 sets in order. Index 0 = Set 1. */
export const SETS: QuestionSet[] = [set1, set2, set3, set4, set5]

export function getSet(index: number): QuestionSet {
  return SETS[index % SETS.length]
}
