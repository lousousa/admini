import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

let wrapper = null

const mockData = {
  label: 'Acessar'
}

beforeEach(() => {
  wrapper = shallowMount(Button, {
    propsData: { ...mockData }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('components/Button', () => {
  it('mounts', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('renders proper label', () => {
    expect(wrapper.find('button').text()).toBe(mockData.label)
  })
  it('emits click when triggered', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeDefined()
  })
})
