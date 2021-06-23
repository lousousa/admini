import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

let wrapper = null

describe('components/Button', () => {
  it('mounts', () => {
    wrapper = shallowMount(Button)
    expect(wrapper.vm).toBeTruthy()
  })
})
