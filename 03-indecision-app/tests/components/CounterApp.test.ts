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
})
