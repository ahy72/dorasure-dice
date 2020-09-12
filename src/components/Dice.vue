<template>
  <b-icon class="h1 m-2" :icon="icon" :variant="variant"></b-icon>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  SetupContext,
  computed,
  watch
} from '@vue/composition-api'
import { DiceNumber } from '@/models/diceNumber'
import { DiceColor } from '@/models/diceColor'
import { DiceRoll } from '@/models/diceRoll'

type Props = {
  number: DiceNumber
  color: DiceColor
  roll: DiceRoll
}

export default defineComponent({
  name: 'Dice',
  props: {
    number: {
      type: Number as PropType<DiceNumber>,
      required: true
    },
    color: {
      type: String as PropType<DiceColor>,
      required: true
    },
    roll: {
      type: String as PropType<DiceRoll>,
      required: true
    }
  },
  setup(props: Props, context: SetupContext) {
    const icon = computed(() => {
      const fill = props.color === DiceColor.White ? '' : '-fill'
      return `dice${props.number}${fill}`
    })

    const variant = computed(() => {
      if (props.color === DiceColor.Red) {
        return 'danger'
      } else if (props.color === DiceColor.Blue) {
        return 'primary'
      } else {
        return 'dark'
      }
    })

    const emitNumber = (number: DiceNumber) => {
      context.emit('rolled', number)
    }

    watch(
      () => props.roll,
      newVal => {
        if (newVal !== DiceRoll.Roll) {
          return
        }

        // TODO as をやめたい
        //emitNumber(6 as DiceNumber)
        emitNumber(Math.floor(Math.random() * 6 + 1) as DiceNumber)
      }
    )

    return {
      icon,
      variant,
      emitNumber
    }
  }
})
</script>
