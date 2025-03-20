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
