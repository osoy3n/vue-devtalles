import { useChat } from '@/composables/useChat'
import { json } from 'stream/consumers'
import { describe, expect, test, vi } from 'vitest'

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hi'
    const { messages, onNewMessage } = useChat()

    await onNewMessage(text)
    expect(messages.value.length).toBe(1)
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    })
  })

  test('do nothing if text is empty', async () => {
    const text = ''
    const { messages, onNewMessage } = useChat()

    await onNewMessage(text)
    expect(messages.value.length).toBe(0)
  })

  test('gets her response correctly when message ends with "?"', async () => {
    const text = 'Quieres ir?'
    const { messages, onNewMessage } = useChat()

    await onNewMessage(text)

    const [myMessage, herMessage] = messages.value

    expect(messages.value.length).toBe(2)
    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    })
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      itsMine: false,
      message: expect.any(String),
    })
  })

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.com/image.jpg' }

    window.fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }))

    const text = 'Quieres ir?'
    const { messages, onNewMessage } = useChat()

    await onNewMessage(text)

    const [, herMessage] = messages.value

    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      itsMine: false,
      message: mockResponse.answer,
    })
  })
})
