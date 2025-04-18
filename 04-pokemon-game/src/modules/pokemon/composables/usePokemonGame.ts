import { computed, onMounted, ref } from 'vue'
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces'
import { pokemonApi } from '../api/pokemonApi'
import confetti from 'canvas-confetti'

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
    return pokemonOptions.value[randomIndex]
  })

  const isLoading = computed(() => pokemons.value.length === 0)

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151')

    const pokemonArray = response.data.results.map((pokemon) => {
      const urlPaths = pokemon.url.split('/')
      const id = urlPaths[urlPaths.length - 2]
      return {
        name: pokemon.name,
        id: +id,
      }
    })

    return pokemonArray.sort(() => Math.random() - 0.5)
  }

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
  }

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id

    if (hasWon) {
      gameStatus.value = GameStatus.Won

      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      })

      return
    }

    gameStatus.value = GameStatus.Lost
  }

  onMounted(async () => {
    pokemons.value = await getPokemons()
    getNextRound()
  })

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,

    checkAnswer,
    getNextRound,
  }
}
