<template>
  <div>
    <div class="max-w-sm">
      <basic-form
        :fields="formFields"
        :action="logar"
        action-label="Acessar"
      />
    </div>
  </div>
</template>

<script>
import BasicForm from '@/components/BasicForm.vue'
export default {
  components: {
    BasicForm
  },
  data () {
    return {
      formFields: [
        {
          name: 'username',
          label: 'Nome de usuário:',
          nativeType: 'text'
        },
        {
          name: 'password',
          label: 'Senha:',
          nativeType: 'password'
        }
      ]
    }
  },
  methods: {
    logar () {}
  }
}
</script>
