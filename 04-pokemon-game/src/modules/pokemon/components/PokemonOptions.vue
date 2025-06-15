<script setup lang="ts">
import type { Pokemon } from '../interfaces'

interface Props {
  options: Pokemon[]
  blockSelection: boolean
  correctAnswer: number
}

defineProps<Props>()

defineEmits<{
  selectedOption: [id: number]
}>()
</script>

<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ name, id } in options"
      :key="id"
      :disabled="blockSelection"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-100',
        {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection,
        },
      ]"
      @click="$emit('selectedOption', id)"
    >
      {{ name }}
    </button>
  </section>
</template>

<style scoped>
@reference "tailwindcss";
button {
  @apply bg-white shadow-md p-3 m-2 rounded-sm cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-green-500 text-white;
}

.incorrect {
  @apply bg-red-500 text-white opacity-70;
}
</style>
