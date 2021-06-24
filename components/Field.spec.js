import { shallowMount } from '@vue/test-utils'
import Field from '@/components/Field.vue'

let wrapper = null

const mockData = {
  name: 'username',
  label: 'Nome de usuário:',
  nativeType: 'text'
}

beforeEach(() => {
  wrapper = shallowMount(Field, {
    propsData: { ...mockData }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('components/Field', () => {
  it('mounts', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('renders proper label', () => {
    expect(wrapper.find('label').text()).toBe(mockData.label)
  })
  it('links label to input by name prop', () => {
    expect(wrapper.find('label').attributes('for')).toBe(wrapper.find('input').attributes('id'))
  })
  it('renders proper input type', () => {
    expect(wrapper.find('input').attributes('type')).toBe(mockData.nativeType)
  })
})
