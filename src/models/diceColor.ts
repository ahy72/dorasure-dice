export const DiceColor = {
  White: 'White',
  Black: 'Black',
  Red: 'Red',
  Blue: 'Blue'
} as const
export type DiceColor = typeof DiceColor[keyof typeof DiceColor]
