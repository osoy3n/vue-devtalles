<script lang="ts" setup>
import CounterApp from './components/CounterApp.vue'
import CounterScript from './components/CounterScript.vue'
import CounterScript2 from './components/counter-app/CounterScript2.vue'
</script>

<template>
  <h1 class="text-3xl font-bold p-2">My First App</h1>
  <hr />

  <CounterApp :value="5" />
  <CounterScript :value="10" />
  <CounterScript2 :value="15" />
</template>
