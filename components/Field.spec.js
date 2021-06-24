import { shallowMount } from '@vue/test-utils'
import Field from '@/components/Field.vue'

let wrapper = null

describe('components/Field', () => {
  it('mounts', () => {
    wrapper = shallowMount(Field, {
      propsData: {
        name: 'username',
        label: 'Nome de usuário:',
        nativeType: 'text'
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
