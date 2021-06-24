import { shallowMount } from '@vue/test-utils'
import BasicForm from '@/components/BasicForm.vue'

let wrapper = null

const mockFields = [
  {
    name: 'username',
    label: 'Nome:',
    nativeType: 'text'
  },
  {
    name: 'password',
    label: 'Senha:',
    nativeType: 'password'
  }
]

beforeEach(() => {
  wrapper = shallowMount(BasicForm, {
    propsData: {
      fields: mockFields
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
  it('must to render a properly list of fields', () => {
    expect(wrapper.findAllComponents({ name: 'Field' }).length).toBe(mockFields.length)
  })
})
