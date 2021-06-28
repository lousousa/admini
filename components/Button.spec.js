import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

let wrapper = null

const mockData = {
  label: 'Acessar'
}

beforeEach(() => {
  wrapper = shallowMount(Button, {
    stubs: {
      'client-only': true,
      'ring-loader': true
    },
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
  it('renders loader if waiting', async () => {
    expect(wrapper.find('ring-loader-stub').exists()).toBeFalsy()
    await wrapper.setProps({ isWaiting: true })
    expect(wrapper.find('ring-loader-stub').exists()).toBeTruthy()
  })
})
