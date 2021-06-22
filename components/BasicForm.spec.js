import { shallowMount } from '@vue/test-utils'
import BasicForm from '@/components/BasicForm.vue'

let wrapper = null

describe('components/BasicForm', () => {
  it('mounts', () => {
    wrapper = shallowMount(BasicForm)
    expect(wrapper.vm).toBeTruthy()
  })
})
