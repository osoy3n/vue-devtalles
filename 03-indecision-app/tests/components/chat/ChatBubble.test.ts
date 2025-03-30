import ChatBubble from '@/components/chat/ChatBubble.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('<ChatBubble />', () => {
  test('render own message correctly', () => {
    const message = 'Hola!'
    const itsMine = true
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine },
    })

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true)
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy()
    expect(wrapper.find('.bg-blue-200').text()).toBe(message)
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy()
  })

  test('render received message correctly', () => {
    const message = 'yes'
    const itsMine = false
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine },
    })

    expect(wrapper.find('.capitalize').exists()).toBeTruthy()
    expect(wrapper.find('.capitalize').text()).toBe(message)
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy()
    expect(wrapper.find('img').exists()).toBeFalsy()
  })

  test('render received message correctly with image', () => {
    const message = 'yes'
    const itsMine = false
    const image = 'https://example.com/image.jpg'
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine, image },
    })

    expect(wrapper.find('.capitalize').exists()).toBeTruthy()
    expect(wrapper.find('.capitalize').text()).toBe(message)
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy()
    expect(wrapper.find('img').exists()).toBeTruthy()
    expect(wrapper.find('img').attributes('src')).toBe(image)
  })
})
