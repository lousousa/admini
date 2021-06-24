<template>
  <div class="login__container">
    <div class="login__panel">
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

<style scoped>
.login__container {
  @apply flex max-w-screen-lg justify-center items-center mx-auto min-h-screen;
}
.login__panel {
  @apply bg-white p-2 w-2/5;
}
</style>
