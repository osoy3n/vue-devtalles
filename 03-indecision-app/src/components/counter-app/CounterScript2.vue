<script lang="ts" src="./CounterScript2"></script>

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
