import { mount } from '@vue/test-utils'
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue'

describe('<PokemonPicture />', () => {
  const pokemonId = 25
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`

  test('should render the hidden image when showPokemon prop is false', async () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId, showPokemon: false },
    })

    const image = wrapper.find('img')
    const attributes = image.attributes()
    // expect(image.attributes('src')).toBe(imageSource)

    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0 h-[200px]',
        src: imageSource,
      }),
    )
  })

  test('should render the image when showPokemon prop is true', async () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId, showPokemon: true },
    })

    const image = wrapper.find('img')
    const attributes = image.attributes()

    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'fade-in h-[200px]',
        src: imageSource,
      }),
    )
  })
})
