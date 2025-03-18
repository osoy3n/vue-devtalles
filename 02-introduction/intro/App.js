const { createApp, ref } = Vue

const app = createApp({
  // template: `
  // <h1>{{ message }}</h1>
  // <p>{{ autor }}</p>
  // `,

  setup() {
    const message = ref('Hola, Soy Goku')
    const autor = ref('Goku')

    const changeQuote = () => {
      message.value = 'Hola, soy Vegeta'
      autor.value = 'Vegeta'
    }

    // setTimeout(() => {
    //   message.value = 'I am Vegeta'
    //   autor.value = 'Vegeta'
    // }, 2000)

    return {
      autor,
      message,
      changeQuote,
    }
  }
})

app.mount('#myApp')
