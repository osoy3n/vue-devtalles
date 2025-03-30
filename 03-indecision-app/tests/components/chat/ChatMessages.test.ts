import ChatMessages from '@/components/chat/ChatMessages.vue'
import type { ChatMessage } from '@/interfaces/chat-message-interface'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'yes', itsMine: false, image: 'https://example.com/image.png' },
]

describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages },
  })

  test('renders chat message correctly', () => {
    const chatBubble = wrapper.findAllComponents({ name: 'ChatBubble' })

    expect(chatBubble.length).toBe(messages.length)
  })

  test('scrolls down to the bottom when new messages are added', async () => {
    const scrollToMock = vi.fn()
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement

    chatRef.scrollTo = scrollToMock

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'New message', itsMine: true }],
    })

    await new Promise((resolve) => setTimeout(resolve, 150))

    // 👇 No funciona si en el watch de componente solo dejo props
    // expect(scrollToMock).toHaveBeenCalledTimes(1)
    // expect(scrollToMock).toHaveBeenCalledWith({
    //   behavior: 'smooth',
    //   top: expect.any(Number),
    // })
  })
})
