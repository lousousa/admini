import { shallowMount } from '@vue/test-utils'
import login from '@/pages/login.vue'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(login)
})

afterEach(() => {
  wrapper.destroy()
})

describe('pages/login', () => {
  it('mounts', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('includes a basic form', () => {
    expect(wrapper.findComponent({ name: 'BasicForm' }).exists()).toBeTruthy()
  })
  it('includes proper welcome text', () => {
    expect(wrapper.find('.login__text-welcome h1').text()).toBe('Acesse')
    expect(wrapper.find('.login__text-welcome p').text()).toBe('Digite seu nome de usuário e senha.')
  })
})
