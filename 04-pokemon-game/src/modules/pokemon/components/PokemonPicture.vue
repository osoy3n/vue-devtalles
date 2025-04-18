<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  pokemonId: number
  showPokemon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
})

const pokemonImageUrl = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
)
</script>

<template>
  <section>
    <img v-if="!showPokemon" :src="pokemonImageUrl" class="brightness-0 h-[200px]" />
    <img v-else :src="pokemonImageUrl" class="fade-in h-[200px]" />
  </section>
</template>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
