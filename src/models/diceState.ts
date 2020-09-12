import { DiceNumber } from '@/models/diceNumber'
import { DiceColor } from '@/models/diceColor'
import { DiceRoll } from '@/models/diceRoll'

export interface DiceState {
  number: DiceNumber
  color: DiceColor
  roll: DiceRoll
}
