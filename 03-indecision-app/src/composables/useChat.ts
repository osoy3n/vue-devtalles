import { ref } from 'vue'
import type { ChatMessage } from '@/interfaces/chat-message-interface'
import type { YesNoResponse } from '@/interfaces/yes-no-response'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const getHerResponse = async () => {
    const response = await fetch('https://yesno.wtf/api')
    const data = (await response.json()) as YesNoResponse

    return data
  }

  const onNewMessage = async (text: string) => {
    if (!text) return

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    })

    if (!text.endsWith('?')) return

    const { answer, image } = await getHerResponse()
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    })
  }

  return {
    messages,
    onNewMessage,
  }
}
