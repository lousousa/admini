import { shallowMount } from '@vue/test-utils'
import Field from '@/components/field.vue'

let wrapper = null

describe('components/field', () => {
  it('mounts', () => {
    wrapper = shallowMount(Field)
    expect(wrapper.vm).toBeTruthy()
  })
})
