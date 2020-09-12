<template>
  <div>
    <b-container>
      <b-row class="mt-0 dice-button">
        <b-col>
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="addDice('White', 1)"
          >
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="addDice('White', 2)"
          >
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1" variant="dark"></b-icon>
            <b-icon icon="dice2" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="addDice('White', 3)"
          >
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1" variant="dark"></b-icon>
            <b-icon icon="dice2" variant="dark"></b-icon>
            <b-icon icon="dice3" variant="dark"></b-icon>
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-2 dice-button">
        <b-col>
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="addDice('Black', 1)"
          >
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1-fill" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="addDice('Black', 2)"
          >
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1-fill" variant="dark"></b-icon>
            <b-icon icon="dice2-fill" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="addDice('Black', 3)"
          >
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1-fill" variant="dark"></b-icon>
            <b-icon icon="dice2-fill" variant="dark"></b-icon>
            <b-icon icon="dice3-fill" variant="dark"></b-icon>
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-2 dice-button">
        <b-col cols="4">
          <b-button
            :disabled="canAddDice === false"
            variant="outline-primary"
            @click="setDragonDice"
          >
            <b-icon icon="dice1-fill" variant="danger"></b-icon>
          </b-button>
        </b-col>
        <b-col cols="8">
          <b-button variant="primary" @click="clearDice"> Clear </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12">
          <h2 class="text-primary">Dice</h2>
        </b-col>
        <b-col>
          <h4 v-if="state.diceStates.length === 0" class="text-secondary">
            nothing
          </h4>
          <Dice
            v-for="(diceState, index) in state.diceStates"
            v-else
            :key="index"
            :number="diceState.number"
            :color="diceState.color"
            :roll="diceState.roll"
            @rolled="rolled(index, $event)"
          ></Dice>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12">
          <h2 class="text-primary">Additional Dice</h2>
        </b-col>
        <b-col>
          <h4
            v-if="state.additionalDiceStates.length === 0"
            class="text-secondary"
          >
            nothing
          </h4>
          <div
            v-for="(additionalDiceState,
            additionalIndex) in state.additionalDiceStates"
            v-else
            :key="additionalIndex"
          >
            <Dice
              v-for="(diceState, index) in additionalDiceState.diceStates"
              :key="index"
              :number="diceState.number"
              :color="diceState.color"
              :roll="diceState.roll"
              @rolled="rolledAdditional(additionalIndex, index, $event)"
            ></Dice>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col>
          <b-button
            :disabled="canRoll === false"
            variant="primary"
            @click="roll"
          >
            Peak Roll
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :disabled="canRollAdditional === false"
            variant="primary"
            @click="rollAdditional"
          >
            Additional
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col>
          <h2 class="text-success">Success : {{ success }}</h2>
          <h3 v-if="success === 2" class="text-primary">
            Chance for Combination Attack !
          </h3>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col>
          <div class="mt-5">
            Icons made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
              >Freepik</a
            >
            from
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'
import Dice from '@/components/Dice.vue'
import { DiceNumber } from '@/models/diceNumber'
import { DiceColor } from '@/models/diceColor'
import { DiceRoll } from '@/models/diceRoll'
import { DiceState } from '@/models/diceState'
import { AdditionalDiceState } from '@/models/additionalDiceState'

export default defineComponent({
  name: 'Main',
  components: { Dice },
  setup() {
    const state = reactive({
      diceStates: [
        {
          number: 1 as DiceNumber,
          color: DiceColor.White,
          roll: DiceRoll.Begin
        },
        {
          number: 2 as DiceNumber,
          color: DiceColor.Black,
          roll: DiceRoll.Begin
        }
      ] as DiceState[],
      additionalDiceStates: [] as AdditionalDiceState[]
    })

    const clearDice = () => {
      state.diceStates.splice(0)
      state.additionalDiceStates.splice(0)
    }

    const addDice = (color: DiceColor, number: number) => {
      for (let index = 0; index < number; index++) {
        state.diceStates.push({
          number: 1 as DiceNumber,
          color: color,
          roll: DiceRoll.Begin
        })
      }
    }

    const setDragonDice = () => {
      clearDice()
      state.diceStates.push({
        number: 1 as DiceNumber,
        color: DiceColor.Red,
        roll: DiceRoll.Begin
      })
    }

    const canAddDice = computed(() => {
      if (
        state.diceStates.filter(s => s.roll !== DiceRoll.Begin).length === 0
      ) {
        return true
      } else {
        return false
      }
    })

    const canRoll = computed(() => {
      return state.diceStates.length > 0
    })

    const canRollAdditionalFunc = () => {
      if (state.additionalDiceStates.length === 0) {
        return false
      }

      const additionalDiceState =
        state.additionalDiceStates[state.additionalDiceStates.length - 1]
      if (
        additionalDiceState.diceStates.filter(s => s.roll === DiceRoll.Begin)
          .length === 0
      ) {
        return false
      }

      return true
    }

    const canRollAdditional = computed(canRollAdditionalFunc)

    const roll = () => {
      state.additionalDiceStates.splice(0)
      state.diceStates.forEach(diceState => {
        diceState.roll = DiceRoll.Roll
      })
    }

    const addAdditionalDice = () => {
      if (canRollAdditionalFunc() === false) {
        state.additionalDiceStates.push({ diceStates: [] as DiceState[] })
      }

      state.additionalDiceStates[
        state.additionalDiceStates.length - 1
      ].diceStates.push({
        number: 1 as DiceNumber,
        color: DiceColor.Blue,
        roll: DiceRoll.Begin
      })
    }

    const rolled = (index: number, number: DiceNumber) => {
      state.diceStates[index].roll = DiceRoll.Finished
      state.diceStates[index].number = number

      if (state.diceStates[index].number === 6) {
        addAdditionalDice()
      }
    }

    const rollAdditional = () => {
      const additionalDiceState =
        state.additionalDiceStates[state.additionalDiceStates.length - 1]
      additionalDiceState.diceStates.forEach(diceState => {
        diceState.roll = DiceRoll.Roll
      })
    }

    const rolledAdditional = (
      additionalIndex: number,
      index: number,
      number: DiceNumber
    ) => {
      const additionalDiceState = state.additionalDiceStates[additionalIndex]

      additionalDiceState.diceStates[index].roll = DiceRoll.Finished
      additionalDiceState.diceStates[index].number = number

      if (additionalDiceState.diceStates[index].number === 6) {
        addAdditionalDice()
      }
    }

    const success = computed(() => {
      let count = 0

      state.diceStates
        .filter(s => s.roll === DiceRoll.Finished)
        .map<number>(s => {
          if (s.number === 1) {
            return -1
          } else if (s.number >= 4) {
            return 1
          } else {
            return 0
          }
        })
        .forEach(value => (count += value))

      state.additionalDiceStates
        .flatMap(s => s.diceStates)
        .filter(s => s.roll === DiceRoll.Finished)
        .map<number>(s => {
          if (s.number === 1) {
            return -1
          } else {
            return 1
          }
        })
        .forEach(value => (count += value))

      return count
    })

    return {
      state,
      addDice,
      setDragonDice,
      canAddDice,
      clearDice,
      canRoll,
      roll,
      rolled,
      canRollAdditional,
      rollAdditional,
      rolledAdditional,
      success
    }
  }
})
</script>

<style scoped>
.dice-button button {
  min-width: 75px;
}
</style>
