<template>
  <div>
    <b-container max-width="200px">
      <b-row class="dice-button">
        <b-col>
          <b-button variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1" variant="dark"></b-icon>
            <b-icon icon="dice2" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1" variant="dark"></b-icon>
            <b-icon icon="dice2" variant="dark"></b-icon>
            <b-icon icon="dice3" variant="dark"></b-icon>
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-2 dice-button">
        <b-col>
          <b-button variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1-fill" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1-fill" variant="dark"></b-icon>
            <b-icon icon="dice2-fill" variant="dark"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            <b-icon icon="dice1-fill" variant="dark"></b-icon>
            <b-icon icon="dice2-fill" variant="dark"></b-icon>
            <b-icon icon="dice3-fill" variant="dark"></b-icon>
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-2 dice-button">
        <b-col cols="4">
          <b-button variant="outline-primary">
            <b-icon icon="dice1-fill" variant="danger"></b-icon>
          </b-button>
        </b-col>
        <b-col cols="8">
          <b-button variant="primary"> Clear </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12">
          <h2>Dice</h2>
        </b-col>
        <b-col>
          <b-icon class="h1 m-2" icon="dice1"></b-icon>
          <b-icon class="h1 m-2" icon="dice2"></b-icon>
          <b-icon class="h1 m-2" icon="dice3-fill"></b-icon>
          <b-icon class="h1 m-2" icon="dice4-fill"></b-icon>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12">
          <h2>Additional Dice</h2>
        </b-col>
        <b-col>
          <b-icon class="h1 m-2" icon="dice5" variant="primary"></b-icon>
          <b-icon class="h1 m-2" icon="dice6" variant="primary"></b-icon>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col>
          <b-button variant="primary"> Peak Roll </b-button>
        </b-col>
        <b-col>
          <b-button variant="primary"> Additional </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col>
          <h2>Success : 2</h2>
          <h3>Chance for Combination Attack !</h3>
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
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Main',
  props: {
    msg: {
      type: String,
      default: 'default Value'
    }
  }
})
</script>

<style scoped>
.dice-button button {
  width: 120px;
}
</style>
