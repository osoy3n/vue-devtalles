<script setup lang="ts">
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { usePokemonGame } from '../composables/usePokemonGame'
import { GameStatus } from '../interfaces'

const { gameStatus, isLoading, pokemonOptions, randomPokemon, getNextRound, checkAnswer } =
  usePokemonGame()
</script>

<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col items-center justify-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center w-screen h-screen">
    <h1 class="text-2xl m-5">¿Quién es este Pokemon</h1>
    <div class="h-12">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        @click="getNextRound()"
        class="capitalize cursor-pointer bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors duration-300"
      >
        Nuevo Pokemon
      </button>
    </div>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOption
      :options="pokemonOptions"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>
