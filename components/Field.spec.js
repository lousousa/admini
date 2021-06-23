import { shallowMount } from '@vue/test-utils'
import Field from '@/components/Field.vue'

let wrapper = null

describe('components/Field', () => {
  it('mounts', () => {
    wrapper = shallowMount(Field)
    expect(wrapper.vm).toBeTruthy()
  })
})