import confetti from 'canvas-confetti'
import MockAdapter from 'axios-mock-adapter'
import { flushPromises } from '@vue/test-utils'

import { GameStatus } from '@pokemon/interfaces'
import { pokemonApi } from '@pokemon/api/pokemonApi'
import { usePokemonGame } from '@pokemon/composables/usePokemonGame'

import { pokemonsMockList } from '../../../mock/mock-pokemons'
import { withSetup } from '../../../utils/with-setup'

const mockPokemonApi = new MockAdapter(pokemonApi)

mockPokemonApi.onGet('/?limit=151').reply(200, {
  results: pokemonsMockList,
})

vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}))

describe('usePokemonGame', () => {
  test('should initialize with the correct default values', async () => {
    const [, results] = withSetup(usePokemonGame)

    expect(results.gameStatus.value).toBe(GameStatus.Playing)
    expect(results.isLoading.value).toBe(true)
    expect(results.pokemonOptions.value).toEqual([])
    expect(results.randomPokemon.value).toBe(undefined)

    await flushPromises()

    expect(results.isLoading.value).toBe(false)
    expect(results.pokemonOptions.value.length).toBe(4)
    expect(results.randomPokemon.value).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    })
  })

  test('should correctly handle getNextRound', async () => {
    const [, results] = withSetup(usePokemonGame)
    const options = 5

    await flushPromises()

    results.getNextRound(options)

    expect(results.gameStatus.value).toBe(GameStatus.Playing)
    expect(results.pokemonOptions.value.length).toBe(options)
  })

  test('should correctly handle getNextRound and return different pokemons', async () => {
    const [, results] = withSetup(usePokemonGame)

    await flushPromises()

    const firstOptions = [...results.pokemonOptions.value].map((pokemon) => pokemon.id)

    results.getNextRound()

    const secondOptions = [...results.pokemonOptions.value]

    secondOptions.forEach((pokemon) => {
      expect(firstOptions).not.toContain(pokemon.id)
    })
  })

  test('should correctly handle a incorrect answer', async () => {
    const [, results] = withSetup(usePokemonGame)

    await flushPromises()

    const { checkAnswer, gameStatus } = results

    expect(gameStatus.value).toBe(GameStatus.Playing)

    checkAnswer(100000000)

    expect(gameStatus.value).toBe(GameStatus.Lost)
  })

  test('should correctly handle a correct answer', async () => {
    const [, results] = withSetup(usePokemonGame)

    await flushPromises()

    const { checkAnswer, gameStatus, randomPokemon } = results

    expect(gameStatus.value).toBe(GameStatus.Playing)

    checkAnswer(randomPokemon.value.id)

    expect(confetti).toHaveBeenCalled()
    expect(confetti).toHaveBeenCalledWith({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.6 },
    })
    expect(gameStatus.value).toBe(GameStatus.Won)
  })
})
