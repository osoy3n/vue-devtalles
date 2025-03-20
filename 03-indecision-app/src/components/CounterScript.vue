<script lang="ts">
import { defineComponent } from 'vue'
// import { computed, defineComponent, ref } from 'vue'

import { useCounter } from '@/composables/useCounter'

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value)
    // const counter = ref(props.value)
    // const squareCounter = computed(() => counter.value * counter.value)

    return {
      counter,
      squareCounter,
    }
  },
})
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
