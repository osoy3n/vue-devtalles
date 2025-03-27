import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterApp from '@/components/CounterApp.vue'

describe('<CounterApp />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(CounterApp, {
      props: {
        value: 5,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('render the counter value correctly', () => {
    const value = 10
    const wrapper = mount(CounterApp, {
      props: {
        value: value,
      },
    })

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`)
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    )
  })

  test('increment the counter when +1 button is clicked', async () => {
    const value = 10
    const wrapper = mount(CounterApp, {
      props: {
        value: value,
      },
    })

    const [counterLabel, squareLabel] = wrapper.findAll('h3')

    const btnIncrement = wrapper.find('button')
    await btnIncrement.trigger('click')

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`)
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`)
  })

  test('decrement the counter when -1 button is clicked twice', async () => {
    const value = 10
    const wrapper = mount(CounterApp, {
      props: {
        value: value,
      },
    })

    const [counterLabel, squareLabel] = wrapper.findAll('h3')
    const btnDecrement = wrapper.findAll('button')[1]

    await btnDecrement.trigger('click')
    await btnDecrement.trigger('click')

    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`)
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`)
  })
})
