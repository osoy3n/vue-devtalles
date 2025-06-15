import type { Pokemon } from '@pokemon/interfaces'

describe('Pokemon Interface', () => {
  const pokemon: Pokemon = { id: 1, name: 'Pikachu' }

  test('should have an id property of type number', () => {
    expect(pokemon.id).toEqual(expect.any(Number))
  })

  test('should have a name property of type number', () => {
    expect(pokemon.name).toEqual(expect.any(String))
  })
})
