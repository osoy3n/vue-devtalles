import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import IndecisionView from '@/views/IndecisionView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('<IndecisionView />', () => {
  const wrapper = mount(IndecisionView)

  test('renders chat messages and message box correctly', () => {
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true)
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true)
  })
})
