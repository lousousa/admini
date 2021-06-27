import { shallowMount, createLocalVue } from '@vue/test-utils'
import BasicForm from '@/components/BasicForm.vue'
import { required } from 'vuelidate/lib/validators'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

let wrapper = null

const mockFields = [
  {
    name: 'username',
    label: 'Nome:',
    nativeType: 'text',
    validation: {
      required
    },
    warnings: {
      required: 'Digite o nome'
    }
  },
  {
    name: 'password',
    label: 'Senha:',
    nativeType: 'password'
  }
]

beforeEach(() => {
  wrapper = shallowMount(BasicForm, {
    localVue,
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
  it('must to render a properly length of fields', () => {
    expect(wrapper.findAllComponents({ name: 'Field' }).length).toBe(mockFields.length)
  })
  it('throws form invalid if invalid rule', async () => {
    await wrapper.setProps({ action: () => {} })
    await wrapper.vm.onSubmit()
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
    expect(wrapper.find('.basicform__text-warning').exists()).toBeTruthy()
    await wrapper.vm.onInput('username', 'user')
    await wrapper.vm.onSubmit()
    expect(wrapper.vm.$v.$invalid).toBeFalsy()
    expect(wrapper.find('.basicform__text-warning').exists()).toBeFalsy()
  })
})
