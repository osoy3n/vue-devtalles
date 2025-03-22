<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ChatMessage } from '@/interfaces/chat-message-interface'
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

const chatRef = ref<HTMLDivElement | null>(null)
const props = defineProps<Props>()

watch(props.messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    })
  }, 100)
})
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      /> forma larga a la opción de arriba -->
    </div>
  </div>
</template>
