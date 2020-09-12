export const DiceRoll = {
  Begin: 'Begin',
  Roll: 'Roll',
  Finished: 'Finished'
} as const
export type DiceRoll = typeof DiceRoll[keyof typeof DiceRoll]
