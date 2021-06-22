import { shallowMount } from '@vue/test-utils'
import login from '@/pages/login'

let wrapper = null

describe('pages/login', () => {
  it('mounts', () => {
    wrapper = shallowMount(login)
    expect(wrapper.vm).toBeTruthy()
  })
})
