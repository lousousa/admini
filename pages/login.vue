<template>
  <div>
    <div class="max-w-sm">
      <basic-form :fields="formFields" />
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
          inputType: 'text'
        },
        {
          name: 'password',
          label: 'Senha:',
          inputType: 'password'
        }
      ]
    }
  }
}
</script>
