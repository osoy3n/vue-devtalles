<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter'

// interface Props {
//   value: number
// }

// const props = defineProps<Props>()

const { counter, squareCounter } = useCounter()

// import { computed, ref } from 'vue'

// Option with JS
// const props = defineProps({
//   value: { type: Number, required: true },
// })

// const counter = ref(props.value)
// const squareCounter = computed(() => counter.value * counter.value)
</script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";
.btn {
  @apply p-2 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>
