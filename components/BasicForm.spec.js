import { shallowMount } from '@vue/test-utils'
import BasicForm from '@/components/BasicForm.vue'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(BasicForm, {
    propsData: {
      fields: [
        {
          name: 'name',
          label: 'label',
          nativeType: 'type'
        }
      ]
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('components/BasicForm', () => {
  it('mounts', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
