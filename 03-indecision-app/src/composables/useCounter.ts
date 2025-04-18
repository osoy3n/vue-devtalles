import { computed, ref } from 'vue'

// const counter = ref(10) <-- Se convierte en un estado global

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue)
  const squareCounter = computed(() => counter.value * counter.value)

  return {
    counter,
    squareCounter,
  }
}
